import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';

@Component({
  selector: 'app-contact-content',
  standalone: true,
  imports: [ContactForm],
  templateUrl: './contact-content.html',
  styleUrl: './contact-content.css'
})
export class ContactContent {}