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

export interface INoticia {
  title: string;
  date: string;
  text: string;
  category: string;
  id?: string;
  slug: string;
}

export interface NoticiaForm {
  title: FormControl<string>;
  text: FormControl<string>;
  newCategory?: FormControl<string>;
  existingCategory?: FormControl<string>;
}

export interface Customer {
  name: string;
  path: string;
  description: string;
}
export interface Paragraph {
  title: string;
  text: string;
  image: string;
}
