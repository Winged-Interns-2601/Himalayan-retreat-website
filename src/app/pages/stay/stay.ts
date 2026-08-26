import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { StayHero } from './stay-hero/stay-hero';
import { StayShowcase } from './stay-showcase/stay-showcase';
import { StayDetails } from './stay-details/stay-details';

@Component({
  selector: 'app-stay',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    StayHero,
    StayShowcase,
    StayDetails,
  ],
  templateUrl: './stay.html',
  styleUrl: './stay.css',
})
export class Stay {}