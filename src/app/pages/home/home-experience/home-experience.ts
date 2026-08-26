import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lune-home-experience',
  standalone: true,
  templateUrl: './home-experience.html',
  styleUrl: './home-experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeExperience implements AfterViewInit, OnDestroy {
  // Section 06 — Experience
  @ViewChild('experienceSection')
  private readonly experienceSectionRef?: ElementRef<HTMLElement>;

  isExperienceVisible = true;
  private experienceObserver?: IntersectionObserver;

  // Section 07 — Details
  @ViewChild('detailsSection')
  private readonly detailsSectionRef?: ElementRef<HTMLElement>;

  isDetailsVisible = false;
  private detailsObserver?: IntersectionObserver;

  // Section 08 — Journal
  @ViewChild('journalSection')
  private readonly journalSectionRef?: ElementRef<HTMLElement>;

  isJournalVisible = false;
  private journalObserver?: IntersectionObserver;

  // Section 09 — Testimonials
  @ViewChild('testimonialSection')
  private readonly testimonialSectionRef?: ElementRef<HTMLElement>;

  isTestimonialVisible = false;
  private testimonialObserver?: IntersectionObserver;

  readonly testimonials = [
    {
      quote: 'There are places you visit. And there are places that stay with you.',
      author: 'Ananya S.',
    },
    {
      quote: 'Every window felt like a painting, every evening like a memory in the making.',
      author: 'Rohan K.',
    },
    {
      quote: "LUNÉ doesn't just host you. It teaches you how to slow down.",
      author: 'Meera D.',
    },
  ];

  activeTestimonialIndex = 0;
  isTestimonialFading = false;
  private testimonialFadeTimeout?: ReturnType<typeof setTimeout>;

  get activeTestimonial() {
    return this.testimonials[this.activeTestimonialIndex];
  }

  constructor(
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.initExperienceObserver();
    this.initDetailsObserver();
    this.initJournalObserver();
    this.initTestimonialObserver();
  }

  private initExperienceObserver(): void {
    const section = this.experienceSectionRef?.nativeElement;
    if (!section) return;

    this.experienceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isExperienceVisible = true;
          this.cdr.detectChanges();
          this.experienceObserver?.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 15% 0px',
      }
    );

    this.experienceObserver.observe(section);
  }

  private initDetailsObserver(): void {
    const section = this.detailsSectionRef?.nativeElement;
    if (!section) return;

    this.detailsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isDetailsVisible = true;
          this.cdr.detectChanges();
          this.detailsObserver?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    this.detailsObserver.observe(section);
  }

  private initJournalObserver(): void {
    const section = this.journalSectionRef?.nativeElement;
    if (!section) return;

    this.journalObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isJournalVisible = true;
          this.cdr.detectChanges();
          this.journalObserver?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    this.journalObserver.observe(section);
  }

  private initTestimonialObserver(): void {
    const section = this.testimonialSectionRef?.nativeElement;
    if (!section) return;

    this.testimonialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isTestimonialVisible = true;
          this.cdr.detectChanges();
          this.testimonialObserver?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    this.testimonialObserver.observe(section);
  }

  openGallery(): void {
    this.router.navigate(['/gallery']);
  }

  openJournal(): void {
    this.router.navigate(['/journal']);
  }

  openArticle(slug: string): void {
    this.router.navigate(['/journal', slug]);
  }

  nextTestimonial(): void {
    const next =
      (this.activeTestimonialIndex + 1) % this.testimonials.length;

    this.goToTestimonial(next);
  }

  prevTestimonial(): void {
    const previous =
      (this.activeTestimonialIndex - 1 + this.testimonials.length) %
      this.testimonials.length;

    this.goToTestimonial(previous);
  }

  private goToTestimonial(index: number): void {
    if (index === this.activeTestimonialIndex) return;

    this.isTestimonialFading = true;
    this.cdr.detectChanges();

    clearTimeout(this.testimonialFadeTimeout);

    this.testimonialFadeTimeout = setTimeout(() => {
      this.activeTestimonialIndex = index;
      this.isTestimonialFading = false;
      this.cdr.detectChanges();
    }, 260);
  }

  ngOnDestroy(): void {
    this.experienceObserver?.disconnect();
    this.detailsObserver?.disconnect();
    this.journalObserver?.disconnect();
    this.testimonialObserver?.disconnect();
    clearTimeout(this.testimonialFadeTimeout);
  }
}