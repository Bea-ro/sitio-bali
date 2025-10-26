import { Component } from '@angular/core';
import { contactMethods } from '../../data/data';
import { Customer } from '../../models/models';
import { IconCard } from '../../shared/icon-card/icon-card';

@Component({
  selector: 'app-contacto',
  imports: [IconCard],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  public contactMethods: Customer[] = contactMethods;
}
