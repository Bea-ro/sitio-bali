import { Component } from '@angular/core';
import { customers, services, trabajoHome } from '../../data/data';

import { HomeBanner } from './components/home-banner/home-banner';
import { Customer, Paragraph, Service } from '../../models/models';
import { Card } from '../../shared/card/card';
import { IconCard } from '../../shared/icon-card/icon-card';
import { NoticiasRecientes } from '../../shared/noticias-recientes/noticias-recientes';
import { Button } from '../../shared/button/button';
import { environment } from '../../../environments/environment';
import { arrowPath } from '../../data/icon-paths';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, Card, IconCard, NoticiasRecientes, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public services: Service[] = services;
  public customers: Customer[] = customers;
  public trabajoHome: Paragraph = trabajoHome;
  public imagePrefix: string = environment.imagePrefix;
  public arrowPath: string = arrowPath;
}
