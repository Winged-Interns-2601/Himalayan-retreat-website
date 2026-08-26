import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-journal-hero',
  standalone: true,
  imports: [],
  templateUrl: './journal-hero.html',
  styleUrl: './journal-hero.css',
})
export class JournalHero implements AfterViewInit, OnDestroy {

  @ViewChild('journalHero')
  journalHero!: ElementRef<HTMLElement>;

  isVisible = false;

  private observer?: IntersectionObserver;


  ngAfterViewInit(): void {

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          this.isVisible = true;

          this.observer?.disconnect();
        }

      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(
      this.journalHero.nativeElement
    );
  }


  scrollToStories(): void {

    const stories =
      document.querySelector('.journal-explorer');

    if (stories) {

      stories.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }
  }


  ngOnDestroy(): void {

    this.observer?.disconnect();

  }

}