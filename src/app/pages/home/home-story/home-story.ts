import { CommonModule } from '@angular/common';

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';


// =====================================================
// SECTION 03 — SUITE MODEL
// =====================================================

interface Suite {
  name: string;
  category: string;
  size: string;
  bed: string;
  feature: string;
  view: string;
  mainImage: string;
  secondaryImage: string;
}


// =====================================================
// SECTION 04 — DAY MODEL
// =====================================================

interface DayMoment {
  time: string;
  name: string;
  caption: string;
  alt: string;
  image: string;
}


@Component({
  selector: 'lune-home-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-story.html',
  styleUrl: './home-story.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeStory implements AfterViewInit, OnDestroy {


  // =====================================================
  // SECTION 02 — THE REVEAL
  // =====================================================

  @ViewChild('revealSection')
  private readonly revealSectionRef?: ElementRef<HTMLElement>;

  isVisible = false;

  private revealObserver?: IntersectionObserver;


  // =====================================================
  // SECTION 03 — THE ARCHITECTURE
  // =====================================================

  @ViewChild('philosophySection')
  private readonly philosophySectionRef?: ElementRef<HTMLElement>;

  @ViewChild('philosophyHeading')
  private readonly philosophyHeadingRef?: ElementRef<HTMLElement>;

  @ViewChild('philosophyMedia')
  private readonly philosophyMediaRef?: ElementRef<HTMLElement>;

  isPhilosophyVisible = false;

  private philosophyObserver?: IntersectionObserver;


  // =====================================================
  // SECTION 03 — SUITE STATE
  // =====================================================

  activeSuite = 0;

  isSuiteChanging = false;


  readonly suites: Suite[] = [

    {
      name: 'The Moon Suite',
      category: '01 / Signature Stay',
      size: '42 M²',
      bed: 'KING BED',
      feature: 'PRIVATE TERRACE',
      view: 'MOUNTAIN VIEW',

      mainImage:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',

      secondaryImage:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop',
    },

    {
      name: 'Forest Room',
      category: '02 / Woodland Stay',
      size: '36 M²',
      bed: 'KING BED',
      feature: 'FOREST TERRACE',
      view: 'VALLEY VIEW',

      mainImage:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop',

      secondaryImage:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    },

    {
      name: 'Sky Villa',
      category: '03 / Private Villa',
      size: '68 M²',
      bed: 'KING BED',
      feature: 'PRIVATE LOUNGE',
      view: 'PANORAMIC VIEW',

      mainImage:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop',

      secondaryImage:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop',
    },

  ];


  // =====================================================
  // SECTION 04 — A DAY AT LUNÉ
  // =====================================================

  @ViewChild('daySection')
  private readonly daySectionRef?: ElementRef<HTMLElement>;

  isDayVisible = false;

  activeMoment = 0;

  dayProgress = 0;

  private dayObserver?: IntersectionObserver;


  readonly dayMoments: DayMoment[] = [

    {
      time: '06:30',
      name: 'WAKE',
      caption: 'First Light',
      alt: 'Morning light over the Himalayan mountains',

      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1400&auto=format&fit=crop',
    },

    {
      time: '10:00',
      name: 'EXPLORE',
      caption: 'Into The Mountains',
      alt: 'Person exploring a mountain landscape',

      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
    },

    {
      time: '14:30',
      name: 'DINE',
      caption: 'Long Lunch',
      alt: 'Elegant dining experience surrounded by nature',

      image:
        'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1400&auto=format&fit=crop',
    },

    {
      time: '19:00',
      name: 'UNWIND',
      caption: 'By The Fire',
      alt: 'Warm fire and evening retreat atmosphere',

      image:
        './images/home-warm-fire.png',
    },

    {
      time: '23:00',
      name: 'DREAM',
      caption: 'Under The Stars',
      alt: 'Mountain retreat under a starry night sky',

      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    },

  ];


  // =====================================================
  // SECTION 05 — THE LANDSCAPE
  // =====================================================

  @ViewChild('landscapeSection')
  private readonly landscapeSectionRef?: ElementRef<HTMLElement>;

  @ViewChild('landscapeImage')
  private readonly landscapeImageRef?: ElementRef<HTMLImageElement>;

  @ViewChild('landscapeMist')
  private readonly landscapeMistRef?: ElementRef<HTMLElement>;

  isLandscapeVisible = false;

  private landscapeObserver?: IntersectionObserver;


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) {}


  // =====================================================
  // INITIALIZATION
  // =====================================================

  ngAfterViewInit(): void {

    // -----------------------------------------------------
    // SECTION 02 — REVEAL
    // -----------------------------------------------------

    const reveal =
      this.revealSectionRef?.nativeElement;

    if (reveal) {

      this.revealObserver =
        new IntersectionObserver(
          ([entry]) => {

            if (entry.isIntersecting) {

              this.isVisible = true;

              this.cdr.markForCheck();

              this.revealObserver?.disconnect();
            }

          },
          {
            threshold: 0.05,
          },
        );

      this.revealObserver.observe(reveal);
    }


    // -----------------------------------------------------
    // SECTION 03 — ARCHITECTURE
    // -----------------------------------------------------

    const philosophy =
      this.philosophySectionRef?.nativeElement;

    if (philosophy) {

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
            threshold: 0.05,
            rootMargin: '0px 0px -5% 0px',
          },
        );

      this.philosophyObserver.observe(philosophy);
    }


    // -----------------------------------------------------
    // SECTION 04 — A DAY AT LUNÉ
    // -----------------------------------------------------

    this.initDayObserver();


    // -----------------------------------------------------
    // SECTION 05 — THE LANDSCAPE
    // -----------------------------------------------------

    this.initLandscapeObserver();
  }


  // =====================================================
  // SECTION 03 — SELECT SUITE
  // =====================================================

  selectSuite(index: number): void {

    if (index === this.activeSuite) {
      return;
    }

    if (
      index < 0 ||
      index >= this.suites.length
    ) {
      return;
    }


    this.isSuiteChanging = true;

    this.cdr.markForCheck();


    setTimeout(() => {

      this.activeSuite = index;

      this.cdr.detectChanges();

    }, 220);


    setTimeout(() => {

      this.isSuiteChanging = false;

      this.cdr.markForCheck();

    }, 520);
  }


  // =====================================================
  // SECTION 03 — EXPLORE SUITE
  // =====================================================

  exploreSuite(): void {

    const suite =
      this.suites[this.activeSuite];

    console.log(
      `Exploring ${suite.name}`,
    );


    const nextSection =
      document.querySelector('#day');

    if (nextSection) {

      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }


  // =====================================================
  // SECTION 03 — KEYBOARD NAVIGATION
  // =====================================================

  @HostListener(
    'window:keydown',
    ['$event'],
  )
  onKeyDown(event: KeyboardEvent): void {

    if (!this.isPhilosophyVisible) {
      return;
    }


    if (
      event.key === 'ArrowRight' ||
      event.key === 'ArrowDown'
    ) {

      event.preventDefault();

      const next =
        (this.activeSuite + 1) %
        this.suites.length;

      this.selectSuite(next);

      return;
    }


    if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowUp'
    ) {

      event.preventDefault();

      const previous =
        (
          this.activeSuite -
          1 +
          this.suites.length
        ) %
        this.suites.length;

      this.selectSuite(previous);
    }
  }


  // =====================================================
  // SECTION 04 — INITIALIZE OBSERVER
  // =====================================================

  private initDayObserver(): void {

    const el =
      this.daySectionRef?.nativeElement;

    if (!el) {
      return;
    }


    this.dayObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isDayVisible = true;

            this.cdr.detectChanges();

            this.dayObserver?.disconnect();
          }

        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -5% 0px',
        },
      );


    this.dayObserver.observe(el);
  }


  // =====================================================
  // SECTION 04 — MOMENT SELECTION
  // =====================================================

  setActiveMoment(index: number): void {

    if (
      index < 0 ||
      index >= this.dayMoments.length
    ) {
      return;
    }

    this.activeMoment = index;

    this.cdr.markForCheck();
  }


  // =====================================================
  // SECTION 04 — SCROLL PROGRESS
  // =====================================================

  private updateDayProgress(): void {

    const section =
      this.daySectionRef?.nativeElement;

    if (!section) {
      return;
    }


    const rect =
      section.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight;


    const rawProgress =
      (
        viewportHeight -
        rect.top
      ) /
      (
        viewportHeight +
        rect.height
      );


    const clampedProgress =
      Math.max(
        0,
        Math.min(
          1,
          rawProgress,
        ),
      );


    this.dayProgress =
      clampedProgress * 100;


    const momentIndex =
      Math.min(
        this.dayMoments.length - 1,

        Math.floor(
          clampedProgress *
          this.dayMoments.length,
        ),
      );


    if (
      momentIndex !==
      this.activeMoment
    ) {

      this.activeMoment =
        momentIndex;

      this.cdr.markForCheck();
    }
  }


  // =====================================================
  // SECTION 05 — INITIALIZE OBSERVER
  // =====================================================

  private initLandscapeObserver(): void {

    const section =
      this.landscapeSectionRef?.nativeElement;

    if (!section) {
      return;
    }


    this.landscapeObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isLandscapeVisible = true;

            this.cdr.detectChanges();

            this.landscapeObserver?.disconnect();
          }

        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -5% 0px',
        },
      );


    this.landscapeObserver.observe(section);
  }


  // =====================================================
  // SECTION 05 — PARALLAX
  // =====================================================

  private updateLandscapeParallax(): void {

    const section =
      this.landscapeSectionRef?.nativeElement;

    const image =
      this.landscapeImageRef?.nativeElement;

    const mist =
      this.landscapeMistRef?.nativeElement;

    if (
      !section ||
      !image ||
      !mist
    ) {
      return;
    }


    const rect =
      section.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight;


    const progress =
      (
        viewportHeight -
        rect.top
      ) /
      (
        viewportHeight +
        rect.height
      );


    const clamped =
      Math.max(
        0,
        Math.min(
          1,
          progress,
        ),
      );


    image.style.transform =
      `translate3d(0, ${(clamped - 0.5) * 70}px, 0) scale(1.08)`;


    mist.style.transform =
      `translate3d(0, ${(clamped - 0.5) * -30}px, 0)`;
  }


  // =====================================================
  // SCROLL / PARALLAX
  // =====================================================

  @HostListener('window:scroll')
  onWindowScroll(): void {

    requestAnimationFrame(() => {

      this.updatePhilosophyParallax();

      this.updateDayProgress();

      this.updateLandscapeParallax();

    });
  }


  // =====================================================
  // SECTION 03 — PARALLAX
  // =====================================================

  private updatePhilosophyParallax(): void {

    const sectionEl =
      this.philosophySectionRef?.nativeElement;

    const headingEl =
      this.philosophyHeadingRef?.nativeElement;

    const mediaEl =
      this.philosophyMediaRef?.nativeElement;


    if (
      !sectionEl ||
      !headingEl ||
      !mediaEl
    ) {
      return;
    }


    const rect =
      sectionEl.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight;


    const progress =
      (
        viewportHeight -
        rect.top
      ) /
      (
        viewportHeight +
        rect.height
      ) -
      0.5;


    const clamped =
      Math.max(
        -0.5,
        Math.min(
          0.5,
          progress,
        ),
      );


    headingEl.style.transform =
      `translate3d(0, ${clamped * -26}px, 0)`;


    mediaEl.style.transform =
      `translate3d(0, ${clamped * 40}px, 0)`;
  }


  // =====================================================
  // CLEANUP
  // =====================================================

  ngOnDestroy(): void {

    this.revealObserver?.disconnect();

    this.philosophyObserver?.disconnect();

    this.dayObserver?.disconnect();

    this.landscapeObserver?.disconnect();
  }

}