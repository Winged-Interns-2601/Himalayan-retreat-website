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
  selector: 'app-stay-showcase',
  standalone: true,
  imports: [],
  templateUrl: './stay-showcase.html',
  styleUrl: './stay-showcase.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StayShowcase implements AfterViewInit, OnDestroy {

  // ============================================================
  // SECTION 06 — SLOW MORNINGS
  // ============================================================

  @ViewChild('morningSection')
  private readonly morningSectionRef?: ElementRef<HTMLElement>;

  isMorningVisible = false;

  private morningObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 07 — WHAT'S INCLUDED
  // ============================================================

  @ViewChild('includedSection')
  private readonly includedSectionRef?: ElementRef<HTMLElement>;

  isIncludedVisible = false;

  private includedObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 08 — EXPERIENCES
  // ============================================================

  @ViewChild('experiencesSection')
  private readonly experiencesSectionRef?: ElementRef<HTMLElement>;

  isExperiencesVisible = false;

  private experiencesObserver?: IntersectionObserver;


  // ============================================================
  // SECTION 09 — YOUR STAY
  // ============================================================

  @ViewChild('bookingSection')
  private readonly bookingSectionRef?: ElementRef<HTMLElement>;

  isBookingVisible = false;

  private bookingObserver?: IntersectionObserver;


  // ============================================================
  // BOOKING STATE
  // ============================================================

  today = '';

  arrivalDate = '';

  departureDate = '';

  guestCount = '2';

  departureMinDate = '';

  availabilityChecked = false;

  isAvailable = false;

  availabilityMessage = '';


  // ============================================================
  // CONSTRUCTOR
  // ============================================================

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {
    this.setInitialDates();
  }


  // ============================================================
  // INITIALIZATION
  // ============================================================

  ngAfterViewInit(): void {

    this.initMorningObserver();

    this.initIncludedObserver();

    this.initExperiencesObserver();

    this.initBookingObserver();
  }


  // ============================================================
  // SET INITIAL DATES
  // ============================================================

  private setInitialDates(): void {

    const today = new Date();

    this.today = this.formatDate(today);

    const arrival = new Date(today);

    arrival.setDate(arrival.getDate() + 1);

    this.arrivalDate = this.formatDate(arrival);

    const departure = new Date(arrival);

    departure.setDate(departure.getDate() + 3);

    this.departureDate = this.formatDate(departure);

    this.departureMinDate = this.arrivalDate;
  }


  // ============================================================
  // DATE FORMAT
  // ============================================================

  private formatDate(date: Date): string {

    const year = date.getFullYear();

    const month = String(
      date.getMonth() + 1
    ).padStart(2, '0');

    const day = String(
      date.getDate()
    ).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }


  // ============================================================
  // ARRIVAL DATE CHANGE
  // ============================================================

  onArrivalChange(event: Event): void {

    const input = event.target as HTMLInputElement;

    this.arrivalDate = input.value;

    this.departureMinDate = this.arrivalDate;

    /*
     * If the existing departure date is now
     * before the new arrival date,
     * automatically move departure forward.
     */

    if (
      !this.departureDate ||
      this.departureDate <= this.arrivalDate
    ) {

      const arrival = new Date(this.arrivalDate);

      arrival.setDate(arrival.getDate() + 1);

      this.departureDate = this.formatDate(arrival);
    }

    this.availabilityChecked = false;

    this.availabilityMessage = '';

    this.cdr.detectChanges();
  }


  // ============================================================
  // DEPARTURE DATE CHANGE
  // ============================================================

  onDepartureChange(event: Event): void {

    const input = event.target as HTMLInputElement;

    const selectedDate = input.value;

    if (
      this.arrivalDate &&
      selectedDate <= this.arrivalDate
    ) {

      this.availabilityChecked = true;

      this.isAvailable = false;

      this.availabilityMessage =
        'Departure must be after your arrival date.';

      this.cdr.detectChanges();

      return;
    }

    this.departureDate = selectedDate;

    this.availabilityChecked = false;

    this.availabilityMessage = '';

    this.cdr.detectChanges();
  }


  // ============================================================
  // GUEST CHANGE
  // ============================================================

  onGuestChange(event: Event): void {

    const select = event.target as HTMLSelectElement;

    this.guestCount = select.value;

    this.availabilityChecked = false;

    this.availabilityMessage = '';

    this.cdr.detectChanges();
  }


  // ============================================================
  // CHECK AVAILABILITY
  // ============================================================

  checkAvailability(): void {

    this.availabilityChecked = true;


    // ----------------------------------------------------------
    // VALIDATION
    // ----------------------------------------------------------

    if (!this.arrivalDate) {

      this.isAvailable = false;

      this.availabilityMessage =
        'Please select your arrival date.';

      this.cdr.detectChanges();

      return;
    }


    if (!this.departureDate) {

      this.isAvailable = false;

      this.availabilityMessage =
        'Please select your departure date.';

      this.cdr.detectChanges();

      return;
    }


    if (this.departureDate <= this.arrivalDate) {

      this.isAvailable = false;

      this.availabilityMessage =
        'Departure must be after your arrival date.';

      this.cdr.detectChanges();

      return;
    }


    // ----------------------------------------------------------
    // DEMO AVAILABILITY
    // ----------------------------------------------------------

    /*
     * For now this is frontend-only.
     *
     * Later we can connect this to:
     *
     * Backend API
     * Database
     * Real room availability
     * Booking system
     */

    this.isAvailable = true;

    this.availabilityMessage =
      `The residence is available for ${this.guestCount} ${
        this.guestCount === '1' ? 'guest' : 'guests'
      } from ${this.formatDisplayDate(this.arrivalDate)}
      to ${this.formatDisplayDate(this.departureDate)}.`;

    this.cdr.detectChanges();
  }


  // ============================================================
  // DISPLAY DATE
  // ============================================================

  private formatDisplayDate(dateString: string): string {

    if (!dateString) {
      return '';
    }

    const date = new Date(`${dateString}T00:00:00`);

    return date.toLocaleDateString(
      'en-IN',
      {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }
    );
  }


  // ============================================================
  // SECTION 06 — SLOW MORNINGS
  // ============================================================

  private initMorningObserver(): void {

    const section =
      this.morningSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.morningObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isMorningVisible = true;

            this.cdr.detectChanges();

            this.morningObserver?.disconnect();
          }
        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px',
        }
      );

    this.morningObserver.observe(section);
  }


  // ============================================================
  // SECTION 07 — WHAT'S INCLUDED
  // ============================================================

  private initIncludedObserver(): void {

    const section =
      this.includedSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.includedObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isIncludedVisible = true;

            this.cdr.detectChanges();

            this.includedObserver?.disconnect();
          }
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -8% 0px',
        }
      );

    this.includedObserver.observe(section);
  }


  // ============================================================
  // SECTION 08 — EXPERIENCES
  // ============================================================

  private initExperiencesObserver(): void {

    const section =
      this.experiencesSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.experiencesObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isExperiencesVisible = true;

            this.cdr.detectChanges();

            this.experiencesObserver?.disconnect();
          }
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -8% 0px',
        }
      );

    this.experiencesObserver.observe(section);
  }


  // ============================================================
  // SECTION 09 — YOUR STAY
  // ============================================================

  private initBookingObserver(): void {

    const section =
      this.bookingSectionRef?.nativeElement;

    if (!section) {
      return;
    }

    this.bookingObserver =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            this.isBookingVisible = true;

            this.cdr.detectChanges();

            this.bookingObserver?.disconnect();
          }
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -8% 0px',
        }
      );

    this.bookingObserver.observe(section);
  }


  // ============================================================
  // CLEANUP
  // ============================================================

  ngOnDestroy(): void {

    this.morningObserver?.disconnect();

    this.includedObserver?.disconnect();

    this.experiencesObserver?.disconnect();

    this.bookingObserver?.disconnect();
  }
}