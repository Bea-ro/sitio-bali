import { FormControl } from '@angular/forms';
export interface Service {
  name: string;
  image: string;
  intro: string;
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

export interface UserLogin {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface NoticiaNueva {
  title: string;
  date: string;
  text: string;
  category: string;
  slug: string;
}

export interface NoticiaExistente {
  type: 'internal';
  title: string;
  date: string;
  text: string;
  category: string;
  slug: string;
  _id: string;
  createdAt: string;
}

export interface NoticiaRss {
  type: 'rss';
  title: string;
  pubDate: string;
  link: string;
  text: string;
  _id: string;
  category: string;
  createdAt: string;
}

export type INoticia = NoticiaExistente | NoticiaRss;
export interface NoticiaEditada {
  title: string;
  text: string;
  category: string;
  slug: string;
}

export interface Category {
  category: string;
  _id?: string;
  createdAt?: string;
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
  name: string;
  description: string;
  image: string;
}
export interface Result {
  number: string;
  description: string;
}
export interface Member {
  name: string;
  position: string;
  image: string;
  icon: string;
}
export interface ReferenceLink {
  name: string;
  url: string;
  icon: string;
}

export interface Cliente {
  name: string;
  email: string;
  cif: string;
  createdAt?: string;
  _id?: string;
}

export interface Admin {
  rol: string;
  email: string;
  createdAt?: string;
  _id?: string;
}

export interface UserDataLogin {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    rol: string;
  };
}
export interface ClienteForm {
  name: FormControl<string>;
  email: FormControl<string>;
  cif: FormControl<string>;
}

export interface AdminForm {
  rol: FormControl<string>;
  email: FormControl<string>;
}

export interface PasswordForm {
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
}

export interface AccountData {
  token: string;
  password: string;
}

export interface File {
  name: string;
  path: string;
}
export interface Folder {
  name: string;
  files: File[];
}
