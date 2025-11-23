import { Component } from '@angular/core';
import { customers, nuestroTrabajo, services } from '../../data/data';

import { HomeBanner } from './components/home-banner/home-banner';
import { Customer, Service } from '../../models/models';
import { Card } from '../../shared/card/card';
import { ImageAndText } from '../../shared/image-and-text/image-and-text';
import { IconCard } from '../../shared/icon-card/icon-card';
import { NoticiasRecientes } from '../../shared/noticias-recientes/noticias-recientes';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, Card, IconCard, NoticiasRecientes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public services: Service[] = services;
  public customers: Customer[] = customers;
}
