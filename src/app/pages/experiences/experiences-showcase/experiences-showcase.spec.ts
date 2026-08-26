import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesShowcase } from './experiences-showcase';

describe('ExperiencesShowcase', () => {
  let component: ExperiencesShowcase;
  let fixture: ComponentFixture<ExperiencesShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencesShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
