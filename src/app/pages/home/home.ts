import { Component } from '@angular/core';
import { customers, homeParagraphs, services } from '../../data/data';

import { HomeBanner } from './components/home-banner/home-banner';
import { Customer, Noticia, Paragraph, Service } from '../../models/models';
import { Card } from '../../shared/card/card';
import { ImageAndText } from '../../shared/image-and-text/image-and-text';
import { NoticiaCard } from '../../shared/noticia-card/noticia-card';
import { noticias } from '../../data/noticias';
import { IconCard } from '../../shared/icon-card/icon-card';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, Card, ImageAndText, NoticiaCard, IconCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public services: Service[] = services;
  public noticias: Noticia[] = noticias;
  public customers: Customer[] = customers;
  public homeParagraphs: Paragraph[] = homeParagraphs;
}
