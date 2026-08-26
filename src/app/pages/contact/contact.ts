import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ContactContent } from './contact-content/contact-content';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactContent, ContactForm, Navbar, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}