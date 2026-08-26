import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ArrivalComponent } from './hero/hero';
import { HomeStory } from './home-story/home-story';
import { HomeExperience } from './home-experience/home-experience';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    ArrivalComponent,
    HomeStory,
    HomeExperience,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}