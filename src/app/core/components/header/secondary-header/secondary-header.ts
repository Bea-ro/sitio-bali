import { Component } from '@angular/core';
import { ContactDetails } from '../../../../models/models';
import { contactDetails } from '../../../../data/data';

@Component({
  selector: 'app-secondary-header',
  imports: [],
  templateUrl: './secondary-header.html',
  styleUrl: './secondary-header.css',
})
export class SecondaryHeader {
  public contactDetails: ContactDetails = contactDetails;
}
