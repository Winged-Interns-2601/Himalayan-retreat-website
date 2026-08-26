import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface JournalStory {
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
}

interface FeaturedStory {
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  location: string;
  coordinates: string;
}

@Component({
  selector: 'app-journal-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './journal-content.html',
  styleUrl: './journal-content.css',
})
export class JournalContent implements OnDestroy {

  /* ==========================================================
     CATEGORIES
     ========================================================== */

  categories: string[] = [
    'ALL',
    'DESTINATIONS',
    'CULTURE',
    'PEOPLE',
    'WELLNESS',
    'ADVENTURE'
  ];

  activeCategory = 'ALL';

  searchTerm = '';


  /* ==========================================================
     SELECTED STORY — JOURNAL READER
     ========================================================== */

  selectedStory: JournalStory | null = null;


  /* ==========================================================
     JOURNAL STORIES
     ========================================================== */

  stories: JournalStory[] = [

    {
      category: 'DESTINATIONS',

      title: 'The Hidden Valleys of Tirthan',

      description:
        'Quiet trails, forest paths and villages that reveal another side of the Himalayas.',

      image:
        './images/tirthan-valley.png',

      date:
        '12 MAY 2026',

      readTime:
        '6 MIN READ'
    },

    {
      category: 'CULTURE',

      title: 'Where the Mountains Remember',

      description:
        'Ancient traditions, local rituals and stories carried through generations.',

      image:
        './images/mountain-culture.png',

      date:
        '08 MAY 2026',

      readTime:
        '5 MIN READ'
    },

    {
      category: 'PEOPLE',

      title: 'Voices from the Hills',

      description:
        'Meet the people whose lives, craft and stories are woven into the landscape.',

      image:
        './images/journal-people.png',

      date:
        '03 MAY 2026',

      readTime:
        '7 MIN READ'
    },

    {
      category: 'WELLNESS',

      title: 'The Art of Slowing Down',

      description:
        'A different rhythm of living, shaped by mountain mornings and unhurried days.',

      image:
        './images/journal-slowing-down.png',

      date:
        '28 APR 2026',

      readTime:
        '5 MIN READ'
    }

  ];


  /* ==========================================================
     FEATURED STORY
     ========================================================== */

  featuredStory: FeaturedStory = {

    category:
      'DESTINATIONS',

    title:
      'The hidden valleys of Tirthan.',

    description:
      'Beyond the familiar mountain roads lies a quieter Himalaya — where cedar forests, clear rivers and small villages still move at their own pace.',

    image:
      './images/tirthan-valley2.png',

    readTime:
      '06 MIN READ',

    location:
      'HIMACHAL PRADESH',

    coordinates:
      '31°42′ N · 77°23′ E'

  };


  /* ==========================================================
     LATEST STORIES — SECTION 04
     ========================================================== */

  latestStories: JournalStory[] = [

    {
      category:
        'ADVENTURE',

      title:
        'The Last Light of the Himalayas',

      description:
        'Following the mountain trails when the last light begins to disappear.',

      image:
        './images/tirthan-valley.png',

      date:
        '22 APR 2026',

      readTime:
        '5 MIN READ'
    },


    {
      category:
        'WELLNESS',

      title:
        'Where Silence Becomes Home',

      description:
        'Finding stillness in the spaces between mountain mornings.',

      image:
        './images/journal-slowing-down.png',

      date:
        '18 APR 2026',

      readTime:
        '4 MIN READ'
    },


    {
      category:
        'CULTURE',

      title:
        'Crafted by the Mountains',

      description:
        'The hands, traditions and materials that give mountain life its character.',

      image:
        './images/mountain-culture.png',

      date:
        '14 APR 2026',

      readTime:
        '6 MIN READ'
    },


    {
      category:
        'PEOPLE',

      title:
        'People of the High Valleys',

      description:
        'Stories of the people who have made these mountains their home.',

      image:
        './images/journal-people.png',

      date:
        '09 APR 2026',

      readTime:
        '7 MIN READ'
    }

  ];


  /* ==========================================================
     CATEGORY FILTER
     ========================================================== */

  selectCategory(category: string): void {

    this.activeCategory = category;

  }


  /* ==========================================================
     SEARCH + CATEGORY FILTER
     ========================================================== */

  get filteredStories(): JournalStory[] {

    const search =
      this.searchTerm
        .trim()
        .toLowerCase();


    return this.stories.filter((story) => {

      const matchesCategory =
        this.activeCategory === 'ALL' ||
        story.category === this.activeCategory;


      const matchesSearch =
        !search ||
        story.title
          .toLowerCase()
          .includes(search) ||

        story.description
          .toLowerCase()
          .includes(search) ||

        story.category
          .toLowerCase()
          .includes(search);


      return (
        matchesCategory &&
        matchesSearch
      );

    });

  }


  /* ==========================================================
     OPEN JOURNAL STORY
     ========================================================== */

  openStory(story: JournalStory): void {

    this.selectedStory = story;

    document.body.style.overflow = 'hidden';

  }


  /* ==========================================================
     OPEN FEATURED STORY
     ========================================================== */

  openFeaturedStory(): void {

    const story: JournalStory = {

      category:
        this.featuredStory.category,

      title:
        this.featuredStory.title,

      description:
        this.featuredStory.description,

      image:
        this.featuredStory.image,

      date:
        '12 MAY 2026',

      readTime:
        this.featuredStory.readTime

    };

    this.openStory(story);

  }


  /* ==========================================================
     OPEN LATEST STORY
     ========================================================== */

  openLatestStory(story: JournalStory): void {

    this.openStory(story);

  }


  /* ==========================================================
     CLOSE JOURNAL READER
     ========================================================== */

  closeStory(): void {

    this.selectedStory = null;

    document.body.style.overflow = '';

  }


  /* ==========================================================
     CLEANUP
     ========================================================== */

  ngOnDestroy(): void {

    document.body.style.overflow = '';

  }

}