import { CommonModule, DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lune-arrival',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrivalComponent implements AfterViewInit, OnDestroy {

  @ViewChild('bg', { static: true })
  private readonly bgRef!: ElementRef<HTMLDivElement>;

  isRevealed = false;

  private ticking = false;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.isRevealed = true;
        this.cdr.markForCheck();
      }, 80);
    });
  }

  ngOnDestroy(): void {
    this.ticking = false;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.ticking) return;

    this.ticking = true;

    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      const offset = Math.min(y * 0.28, 220);

      this.bgRef.nativeElement.style.transform =
        `translate3d(0, ${offset}px, 0) scale(1.08)`;

      this.ticking = false;
    });
  }

  scrollToNext(): void {
    this.document
      .getElementById('reveal')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }
}