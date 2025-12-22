import { Component } from '@angular/core';
import { referenceLinks } from '../../data/data';
import { ReferenceLink } from '../../models/models';

@Component({
  selector: 'app-enlaces',
  imports: [],
  templateUrl: './enlaces.html',
  styleUrl: './enlaces.css',
})
export class Enlaces {
  public referenceLinks: ReferenceLink[] = referenceLinks;
}
