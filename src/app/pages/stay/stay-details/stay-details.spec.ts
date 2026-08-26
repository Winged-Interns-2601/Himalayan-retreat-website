import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayDetails } from './stay-details';

describe('StayDetails', () => {
  let component: StayDetails;
  let fixture: ComponentFixture<StayDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(StayDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
