import { Component } from '@angular/core';

@Component({
  selector: 'app-stay-hero',
  standalone: true,
  imports: [],
  templateUrl: './stay-hero.html',
  styleUrl: './stay-hero.css',
})
export class StayHero {
  scrollToResidence(): void {
    document.getElementById('stay-residence')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}