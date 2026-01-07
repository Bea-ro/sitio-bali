import { Component } from '@angular/core';
import { contactDetails } from '../../data/data';
import { ContactDetails } from '../../models/models';

@Component({
  selector: 'app-politica-privacidad',
  imports: [],
  templateUrl: './politica-privacidad.html',
  styleUrl: './politica-privacidad.css',
})
export class PoliticaPrivacidad {
  public contactDetails: ContactDetails = contactDetails;
}
