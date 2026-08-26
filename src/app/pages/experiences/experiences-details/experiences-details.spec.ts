import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesDetails } from './experiences-details';

describe('ExperiencesDetails', () => {
  let component: ExperiencesDetails;
  let fixture: ComponentFixture<ExperiencesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencesDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
