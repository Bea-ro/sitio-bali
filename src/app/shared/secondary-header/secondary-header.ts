import { Component } from '@angular/core';
import { contactDetails } from '../../data/data';
import { ContactDetails } from '../../models/models';

@Component({
  selector: 'app-secondary-header',
  imports: [],
  templateUrl: './secondary-header.html',
  styleUrl: './secondary-header.css',
})
export class SecondaryHeader {
  public contactDetails: ContactDetails = contactDetails;
}
