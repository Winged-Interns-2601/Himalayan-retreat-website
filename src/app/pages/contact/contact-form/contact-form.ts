import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };


  sendEnquiry(): void {

    console.log('LUNÉ Enquiry:', this.formData);

    alert(
      'Thank you for reaching out to LUNÉ.\n\n' +
      'We will get back to you shortly.'
    );

    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

}