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
  selector: 'app-experiences-details',
  standalone: true,
  imports: [],
  templateUrl: './experiences-details.html',
  styleUrl: './experiences-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesDetails implements AfterViewInit, OnDestroy {

  // ============================================================
  // SECTION 02 — PHILOSOPHY
  // ============================================================

  @ViewChild('philosophySection')
  private readonly philosophySectionRef?: ElementRef<HTMLElement>;

  isPhilosophyVisible = false;

  private philosophyObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 03 — THE JOURNEY
  // ============================================================

  @ViewChild('journeySection')
  private readonly journeySectionRef?: ElementRef<HTMLElement>;

  isJourneyVisible = false;

  private journeyObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 04 — MOMENTS THAT STAY
  // ============================================================

  @ViewChild('momentsSection')
  private readonly momentsSectionRef?: ElementRef<HTMLElement>;

  isMomentsVisible = false;

  private momentsObserver?: IntersectionObserver;


  // ============================================================
  // CONSTRUCTOR
  // ============================================================

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {}


  // ============================================================
  // INITIALIZATION
  // ============================================================

  ngAfterViewInit(): void {
    this.initPhilosophyObserver();
    this.initJourneyObserver();
    this.initMomentsObserver();
  }


  // ============================================================
  // SECTION 02 — PHILOSOPHY
  // ============================================================

  private initPhilosophyObserver(): void {

    const section =
      this.philosophySectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.philosophyObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isPhilosophyVisible = true;

            this.cdr.detectChanges();

            this.philosophyObserver?.disconnect();
          }

        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px',
        }
      );

    this.philosophyObserver.observe(section);
  }


  // ============================================================
  // SECTION 03 — THE JOURNEY
  // ============================================================

  private initJourneyObserver(): void {

    const section =
      this.journeySectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.journeyObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isJourneyVisible = true;

            this.cdr.detectChanges();

            this.journeyObserver?.disconnect();
          }

        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px',
        }
      );

    this.journeyObserver.observe(section);
  }


  // ============================================================
  // SECTION 04 — MOMENTS THAT STAY
  // ============================================================

  private initMomentsObserver(): void {

    const section =
      this.momentsSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.momentsObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isMomentsVisible = true;

            this.cdr.detectChanges();

            this.momentsObserver?.disconnect();
          }

        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px',
        }
      );

    this.momentsObserver.observe(section);
  }


  // ============================================================
  // CLEANUP
  // ============================================================

  ngOnDestroy(): void {

    this.philosophyObserver?.disconnect();

    this.journeyObserver?.disconnect();

    this.momentsObserver?.disconnect();
  }
}