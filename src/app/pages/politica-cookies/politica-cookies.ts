import { Component } from '@angular/core';
import { contactDetails } from '../../data/data';
import { ContactDetails } from '../../models/models';

@Component({
  selector: 'app-politica-cookies',
  imports: [],
  templateUrl: './politica-cookies.html',
  styleUrl: './politica-cookies.css',
})
export class PoliticaCookies {
  public contactDetals: ContactDetails = contactDetails;
}
