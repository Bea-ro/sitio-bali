import { Component, Input } from '@angular/core';
import { Member } from '../../../../models/models';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-team-card',
  imports: [],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  @Input() cardElement?: Member;
  public imagePrefix = environment.imagePrefix;
}
