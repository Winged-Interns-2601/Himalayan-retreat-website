import { Component } from '@angular/core';

import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

import { ExperiencesHero } from './experiences-hero/experiences-hero';
import { ExperiencesDetails } from './experiences-details/experiences-details';
import { ExperiencesShowcase } from './experiences-showcase/experiences-showcase';

@Component({
  selector: 'app-experiences',
  standalone: true,

  imports: [
    Navbar,
    Footer,
    ExperiencesHero,
    ExperiencesDetails,
    ExperiencesShowcase,
  ],

  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class Experiences {}