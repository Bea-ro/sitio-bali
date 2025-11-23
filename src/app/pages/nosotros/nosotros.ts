import { Component } from '@angular/core';
import { ImageAndText } from '../../shared/image-and-text/image-and-text';
import { diferencias, nuestroTrabajo, results, team } from '../../data/data';
import { Customer, Member, Paragraph, Result } from '../../models/models';
import { NumberCard } from '../../shared/number-card/number-card';
import { TeamCard } from './components/team-card/team-card';
import { IconCard } from '../../shared/icon-card/icon-card';

@Component({
  selector: 'app-nosotros',
  imports: [ImageAndText, NumberCard, TeamCard, IconCard],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  public nuestroTrabajo: Paragraph = nuestroTrabajo;
  public results: Result[] = results;
  public team: Member[] = team;
  public diferencias: Customer[] = diferencias;
}
