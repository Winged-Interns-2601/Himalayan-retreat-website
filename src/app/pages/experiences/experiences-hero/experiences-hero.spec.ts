import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesHero } from './experiences-hero';

describe('ExperiencesHero', () => {
  let component: ExperiencesHero;
  let fixture: ComponentFixture<ExperiencesHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesHero],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencesHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
