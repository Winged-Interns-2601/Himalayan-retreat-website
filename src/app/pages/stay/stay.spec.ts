import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stay } from './stay';

describe('Stay', () => {
  let component: Stay;
  let fixture: ComponentFixture<Stay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stay],
    }).compileComponents();

    fixture = TestBed.createComponent(Stay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
