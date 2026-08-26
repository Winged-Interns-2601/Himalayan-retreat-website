import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExperience } from './home-experience';

describe('HomeExperience', () => {
  let component: HomeExperience;
  let fixture: ComponentFixture<HomeExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
