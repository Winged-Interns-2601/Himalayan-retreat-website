import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stay-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stay-details.html',
  styleUrl: './stay-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StayDetails implements AfterViewInit, OnDestroy {

  // ============================================================
  // SECTION 02 — PHILOSOPHY
  // ============================================================

  @ViewChild('philosophySection')
  private readonly philosophySectionRef?: ElementRef<HTMLElement>;

  isPhilosophyVisible = false;

  private philosophyObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 03 — THE RESIDENCE
  // ============================================================

  @ViewChild('residenceSection')
  private readonly residenceSectionRef?: ElementRef<HTMLElement>;

  isResidenceVisible = false;

  private residenceObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 04 — THE VIEW
  // ============================================================

  @ViewChild('viewSection')
  private readonly viewSectionRef?: ElementRef<HTMLElement>;

  isViewVisible = false;

  private viewObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 05 — THE SPACES
  // ============================================================

  @ViewChild('spacesSection')
  private readonly spacesSectionRef?: ElementRef<HTMLElement>;

  isSpacesVisible = false;

  private spacesObserver?: IntersectionObserver;


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
    this.initResidenceObserver();
    this.initViewObserver();
    this.initSpacesObserver();
  }


  // ============================================================
  // SECTION 02 — PHILOSOPHY
  // ============================================================

  private initPhilosophyObserver(): void {
    const section = this.philosophySectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.philosophyObserver = new IntersectionObserver(
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
  // SECTION 03 — THE RESIDENCE
  // ============================================================

  private initResidenceObserver(): void {
    const section = this.residenceSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.residenceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isResidenceVisible = true;

          this.cdr.detectChanges();

          this.residenceObserver?.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    this.residenceObserver.observe(section);
  }


  // ============================================================
  // SECTION 04 — THE VIEW
  // ============================================================

  private initViewObserver(): void {
    const section = this.viewSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.viewObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isViewVisible = true;

          this.cdr.detectChanges();

          this.viewObserver?.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    this.viewObserver.observe(section);
  }


  // ============================================================
  // SECTION 05 — THE SPACES
  // ============================================================

  private initSpacesObserver(): void {
    const section = this.spacesSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.spacesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isSpacesVisible = true;

          this.cdr.detectChanges();

          this.spacesObserver?.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    this.spacesObserver.observe(section);
  }


  // ============================================================
  // CLEANUP
  // ============================================================

  ngOnDestroy(): void {
    this.philosophyObserver?.disconnect();
    this.residenceObserver?.disconnect();
    this.viewObserver?.disconnect();
    this.spacesObserver?.disconnect();
  }
}