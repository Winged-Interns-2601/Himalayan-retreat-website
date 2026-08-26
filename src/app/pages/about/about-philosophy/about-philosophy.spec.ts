import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhilosophy } from './about-philosophy';

describe('AboutPhilosophy', () => {
  let component: AboutPhilosophy;
  let fixture: ComponentFixture<AboutPhilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPhilosophy],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPhilosophy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
