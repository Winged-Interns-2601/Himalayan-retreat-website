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
  selector: 'app-experiences-showcase',
  standalone: true,
  imports: [],
  templateUrl: './experiences-showcase.html',
  styleUrl: './experiences-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesShowcase
  implements AfterViewInit, OnDestroy {

  // ============================================================
  // SECTION 05 — CULTURE & WELLNESS
  // ============================================================

  @ViewChild('cultureWellnessSection')
  private readonly cultureWellnessSectionRef?: ElementRef<HTMLElement>;

  isCultureWellnessVisible = false;

  private cultureWellnessObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 06 — INTO THE WILD
  // ============================================================

  @ViewChild('wildSection')
  private readonly wildSectionRef?: ElementRef<HTMLElement>;

  isWildVisible = false;

  private wildObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 07 — FINAL CTA
  // ============================================================

  @ViewChild('experienceCta')
  private readonly experienceCtaRef?: ElementRef<HTMLElement>;

  isExperienceCtaVisible = false;

  private experienceCtaObserver?: IntersectionObserver;


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

    this.initCultureWellnessObserver();

    this.initWildObserver();

    this.initExperienceCtaObserver();
  }


  // ============================================================
  // SECTION 05 — CULTURE & WELLNESS
  // ============================================================

  private initCultureWellnessObserver(): void {

    const section =
      this.cultureWellnessSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.cultureWellnessObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isCultureWellnessVisible = true;

            this.cdr.detectChanges();

            this.cultureWellnessObserver?.disconnect();
          }

        },
        {
          threshold: 0.15,

          rootMargin:
            '0px 0px -8% 0px',
        }
      );

    this.cultureWellnessObserver.observe(section);
  }


  // ============================================================
  // SECTION 06 — INTO THE WILD
  // ============================================================

  private initWildObserver(): void {

    const section =
      this.wildSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.wildObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isWildVisible = true;

            this.cdr.detectChanges();

            this.wildObserver?.disconnect();
          }

        },
        {
          threshold: 0.2,

          rootMargin:
            '0px 0px -8% 0px',
        }
      );

    this.wildObserver.observe(section);
  }


  // ============================================================
  // SECTION 07 — FINAL CTA
  // ============================================================

  private initExperienceCtaObserver(): void {

    const section =
      this.experienceCtaRef?.nativeElement;

    if (!section) {
      return;
    }

    this.experienceCtaObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isExperienceCtaVisible = true;

            this.cdr.detectChanges();

            this.experienceCtaObserver?.disconnect();
          }

        },
        {
          threshold: 0.2,

          rootMargin:
            '0px 0px -8% 0px',
        }
      );

    this.experienceCtaObserver.observe(section);
  }


  // ============================================================
  // CLEANUP
  // ============================================================

  ngOnDestroy(): void {

    this.cultureWellnessObserver?.disconnect();

    this.wildObserver?.disconnect();

    this.experienceCtaObserver?.disconnect();
  }
}