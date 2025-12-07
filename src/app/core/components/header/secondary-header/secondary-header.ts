import { Component } from '@angular/core';
import { ContactDetails } from '../../../../models/models';
import { contactDetails } from '../../../../data/data';
import { clockPath, mobilePath, phonePath } from '../../../../data/icon-paths';

@Component({
  selector: 'app-secondary-header',
  imports: [],
  templateUrl: './secondary-header.html',
  styleUrl: './secondary-header.css',
})
export class SecondaryHeader {
  public contactDetails: ContactDetails = contactDetails;
  public mobilePath: string = mobilePath;
  public clockPath: string = clockPath;
  public phonePath: string = phonePath;
}
