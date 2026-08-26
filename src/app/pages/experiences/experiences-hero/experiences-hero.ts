import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-experiences-hero',
  standalone: true,
  imports: [],
  templateUrl: './experiences-hero.html',
  styleUrl: './experiences-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesHero implements AfterViewInit, OnDestroy {

  @ViewChild('heroSection')
  private readonly heroSectionRef?: ElementRef<HTMLElement>;

  isVisible = false;

  private observer?: IntersectionObserver;

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.initObserver();
  }

  private initObserver(): void {
    const section = this.heroSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          this.isVisible = true;

          this.cdr.detectChanges();

          this.observer?.disconnect();
        }

      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}