import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nifNieCifValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.toUpperCase();
    if (!value) return null;

    if (value.length !== 9) {
      return { nifNieCif: 'length' };
    }

    if (/^\d{8}[A-Z]$/.test(value)) {
      return validateNif(value) ? null : { nifNieCif: 'nif' };
    }

    if (/^[XYZ]\d{7}[A-Z]$/.test(value)) {
      return validateNie(value) ? null : { nifNieCif: 'nie' };
    }

    if (/^[ABCDEFGHJNPQRSUVW]\d{7}[0-9A-J]$/.test(value)) {
      return validateCif(value) ? null : { nifNieCif: 'cif' };
    }

    return { nifNieCif: 'format' };
  };
}

function validateNif(nif: string): boolean {
  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const number = parseInt(nif.substring(0, 8), 10);
  return letters[number % 23] === nif[8];
}

function validateNie(nie: string): boolean {
  const map: Record<string, string> = { X: '0', Y: '1', Z: '2' };
  const replaced = map[nie[0]] + nie.substring(1, 8);
  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
  return letters[parseInt(replaced, 10) % 23] === nie[8];
}

function validateCif(cif: string): boolean {
  const controlChar = cif[8];
  const digits = cif.substring(1, 8);

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < digits.length; i++) {
    const num = parseInt(digits[i], 10);
    if (i % 2 === 0) {
      let prod = num * 2;
      if (prod > 9) prod -= 9;
      sumOdd += prod;
    } else {
      sumEven += num;
    }
  }

  const total = sumEven + sumOdd;
  const controlNum = (10 - (total % 10)) % 10;
  const controlLetters = 'JABCDEFGHI';

  return /[0-9]/.test(controlChar)
    ? controlNum === parseInt(controlChar, 10)
    : controlLetters[controlNum] === controlChar;
}
