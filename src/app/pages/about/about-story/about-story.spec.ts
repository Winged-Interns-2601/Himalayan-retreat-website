import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStory } from './about-story';

describe('AboutStory', () => {
  let component: AboutStory;
  let fixture: ComponentFixture<AboutStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutStory],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
