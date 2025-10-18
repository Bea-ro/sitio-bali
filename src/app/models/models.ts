import { FormControl } from '@angular/forms';

export interface Service {
  name: string;
  image: string;
  description: string;
}

export interface ContactDetails {
  url: string;
  longName: string;
  shortName: string;
  address1: string;
  address2: string;
  phone: string;
  email: string;
  open: string;
  cif: string;
}

export interface UserRegister {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
}
