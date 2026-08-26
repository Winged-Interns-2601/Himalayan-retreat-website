import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface NavLink {
  label: string;
  route: string;
  homeSectionId?: string;
}

@Component({
  selector: 'lune-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {

  readonly navLinks: NavLink[] = [
    {
      label: 'Stays',
      route: '/stay',
      homeSectionId: 'architecture',
    },
    {
      label: 'Experiences',
      route: '/experiences',
      homeSectionId: 'day-at-lune',
    },
    {
      label: 'Journal',
      route: '/journal',
      homeSectionId: 'journal',
    },
    // {
    //   label: 'About',
    //   route: '/about',
    //   homeSectionId: 'reveal',
    // },
    {
      label: 'Contact',
      route: '/contact',
      homeSectionId: 'final-escape',
    },
  ];

  isScrolled = false;
  isMenuOpen = false;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router
  ) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 64;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.updateBodyScroll();
  }

  handleNavigation(link: NavLink): void {
    this.closeMenu();

    const isHomePage = this.router.url === '/' || this.router.url === '';

    if (isHomePage && link.homeSectionId) {
      setTimeout(() => {
        this.scrollToSection(link.homeSectionId!);
      });
      return;
    }

    this.router.navigate([link.route]);
  }

navigateToBooking(): void {
  this.closeMenu();

  this.router.navigate(['/book']);
}

  private scrollToSection(id: string): void {
    const element = this.document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  private updateBodyScroll(): void {
    this.document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
}