import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayHero } from './stay-hero';

describe('StayHero', () => {
  let component: StayHero;
  let fixture: ComponentFixture<StayHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayHero],
    }).compileComponents();

    fixture = TestBed.createComponent(StayHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
