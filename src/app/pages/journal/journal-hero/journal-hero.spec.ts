import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalHero } from './journal-hero';

describe('JournalHero', () => {
  let component: JournalHero;
  let fixture: ComponentFixture<JournalHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalHero],
    }).compileComponents();

    fixture = TestBed.createComponent(JournalHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
