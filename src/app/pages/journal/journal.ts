import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { JournalHero } from './journal-hero/journal-hero';
import { JournalContent } from './journal-content/journal-content';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [Navbar,
    Footer,
    JournalHero,
    JournalContent
  ],
  templateUrl: './journal.html',
  styleUrl: './journal.css',
})
export class Journal {}