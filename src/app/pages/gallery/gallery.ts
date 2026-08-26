import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {

  readonly images = [
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop',
      alt: 'Luxury mountain retreat interior',
      className: 'gallery-page__item--large',
    },
    {
      src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
      alt: 'Misty Himalayan mountain landscape',
      className: 'gallery-page__item--medium',
    },
    {
      src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1400&auto=format&fit=crop',
      alt: 'Wooden mountain cabin surrounded by forest',
      className: 'gallery-page__item--small',
    },
    {
      src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1400&auto=format&fit=crop',
      alt: 'Mountain valley at golden hour',
      className: 'gallery-page__item--medium',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop',
      alt: 'Minimal luxury bedroom',
      className: 'gallery-page__item--large',
    },
    {
      src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
      alt: 'Mountain landscape beneath the stars',
      className: 'gallery-page__item--small',
    },
    {
      src: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1400&auto=format&fit=crop',
      alt: 'Mountain retreat architecture',
      className: 'gallery-page__item--medium',
    },
    {
      src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1400&auto=format&fit=crop',
      alt: 'Quiet alpine landscape',
      className: 'gallery-page__item--small',
    },
    {
      src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1800&auto=format&fit=crop',
      alt: 'Himalayan valley view',
      className: 'gallery-page__item--large',
    },
  ];

  constructor(
    private readonly router: Router,
  ) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}