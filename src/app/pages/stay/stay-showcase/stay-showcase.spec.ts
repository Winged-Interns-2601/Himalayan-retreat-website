import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayShowcase } from './stay-showcase';

describe('StayShowcase', () => {
  let component: StayShowcase;
  let fixture: ComponentFixture<StayShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayShowcase],
    }).compileComponents();

    fixture = TestBed.createComponent(StayShowcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
