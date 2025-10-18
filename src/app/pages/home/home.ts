import { Component } from '@angular/core';
import { HomeBanner } from './components/home-banner/home-banner';
import { services } from '../../data/data';
import { Service } from '../../models/models';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-home',
  imports: [HomeBanner, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public services: Service[] = services;
}
