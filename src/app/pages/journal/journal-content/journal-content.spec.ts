import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalContent } from './journal-content';

describe('JournalContent', () => {
  let component: JournalContent;
  let fixture: ComponentFixture<JournalContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalContent],
    }).compileComponents();

    fixture = TestBed.createComponent(JournalContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
