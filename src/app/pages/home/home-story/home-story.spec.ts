import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStory } from './home-story';

describe('HomeStory', () => {
  let component: HomeStory;
  let fixture: ComponentFixture<HomeStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStory],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
