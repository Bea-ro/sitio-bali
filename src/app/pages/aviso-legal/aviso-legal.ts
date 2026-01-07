import { Component } from '@angular/core';
import { contactDetails } from '../../data/data';
import { ContactDetails } from '../../models/models';

@Component({
  selector: 'app-aviso-legal',
  imports: [],
  templateUrl: './aviso-legal.html',
  styleUrl: './aviso-legal.css',
})
export class AvisoLegal {
  public contactDetails: ContactDetails = contactDetails;
}
