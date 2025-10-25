import { Component } from '@angular/core';
import { services } from '../../data/data';

import { HomeBanner } from './components/home-banner/home-banner';
import { Service } from '../../models/models';
import { Card } from '../../shared/card/card';
import { ImageAndText } from '../../shared/image-and-text/image-and-text';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, Card, ImageAndText],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public services: Service[] = services;
}
