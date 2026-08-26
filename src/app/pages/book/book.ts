import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {

  /* =========================================
     BOOKING DETAILS
  ========================================= */

  checkIn = '';
  checkOut = '';

  adults = 2;
  children = 0;

  selectedStay = '';

  guestName = '';
  guestEmail = '';
  guestPhone = '';

  isSubmitted = false;


  /* =========================================
     MINIMUM DATE
  ========================================= */

  minDate = new Date()
    .toISOString()
    .split('T')[0];


  /* =========================================
     STAYS
  ========================================= */

  stays = [

    {
      name: 'The Mountain Suite',

      description:
        'A private retreat overlooking the Himalayan valley.',

      price: '₹18,500',

      image:
        './images/mountain-suite.png'
    },

    {
      name: 'The Valley Cabin',

      description:
        'A quiet wooden cabin surrounded by cedar forests.',

      price: '₹14,500',

      image:
        './images/valley-cabin.png'
    },

    {
      name: 'The Forest Residence',

      description:
        'A secluded residence designed for slow mountain living.',

      price: '₹22,000',

      image:
        './images/forest-residence.png'
    }

  ];


  /* =========================================
     CONSTRUCTOR
  ========================================= */

  constructor(
    private readonly router: Router
  ) {}


  /* =========================================
     SELECT STAY
  ========================================= */

  selectStay(stayName: string): void {

    this.selectedStay = stayName;

  }


  /* =========================================
     ADULTS
  ========================================= */

  increaseAdults(): void {

    if (this.adults < 8) {
      this.adults++;
    }

  }


  decreaseAdults(): void {

    if (this.adults > 1) {
      this.adults--;
    }

  }


  /* =========================================
     CHILDREN
  ========================================= */

  increaseChildren(): void {

    if (this.children < 6) {
      this.children++;
    }

  }


  decreaseChildren(): void {

    if (this.children > 0) {
      this.children--;
    }

  }


  /* =========================================
     SUBMIT BOOKING
  ========================================= */

  submitBooking(): void {

    /*
     * Basic validation
     */

    if (
      !this.checkIn ||
      !this.checkOut ||
      !this.selectedStay ||
      !this.guestName.trim() ||
      !this.guestEmail.trim() ||
      !this.guestPhone.trim()
    ) {

      alert(
        'Please complete all booking details.'
      );

      return;
    }


    /*
     * Validate dates
     */

    const arrival =
      new Date(this.checkIn);

    const departure =
      new Date(this.checkOut);


    if (departure <= arrival) {

      alert(
        'Please select a valid check-out date.'
      );

      return;
    }


    /*
     * Booking successful
     */

    this.isSubmitted = true;


    /*
     * Keep booking data for now.
     * Later this can be replaced
     * with an API/backend request.
     */

    const bookingData = {

      checkIn:
        this.checkIn,

      checkOut:
        this.checkOut,

      adults:
        this.adults,

      children:
        this.children,

      stay:
        this.selectedStay,

      guestName:
        this.guestName,

      guestEmail:
        this.guestEmail,

      guestPhone:
        this.guestPhone

    };


    console.log(
      'LUNÉ Booking Request:',
      bookingData
    );

  }


  /* =========================================
     RETURN HOME
  ========================================= */

  backToHome(): void {

    this.router.navigate(['/']);

  }

}