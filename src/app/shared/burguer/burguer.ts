import { Component } from '@angular/core';
import { contactDetails } from '../../data/data';
import { ContactDetails } from '../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-burguer',
  imports: [RouterModule],
  templateUrl: './burguer.html',
  styleUrl: './burguer.css',
})
export class Burguer {
  public contactDetails: ContactDetails = contactDetails;
  public burguerIsOpen: boolean = false;

  public openBurguer() {
    this.burguerIsOpen = !this.burguerIsOpen;
  }
}
