import { Component, Input } from '@angular/core';
import { Member } from '../../../../models/models';
import { IMAGEPREURL } from '../../../../data/data';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  @Input() cardElement?: Member;
  public imagePrefix = IMAGEPREURL;
}
