import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  getBlogService() {
    return [
      {
        id: 1,
        title: 'The Benefits of Urban Gardening',
        author: 'Hamim Howlader',
        content:
          'Urban gardening is an excellent way to make use of small spaces and bring greenery to cities. Learn how to start your own garden.',
        publishedDate: '2024-11-29',
        tags: ['Gardening', 'Urban', 'Sustainability'],
        likes: 120,
        comments: [
          {
            user: 'JohnDoe',
            comment: 'Great tips! I’ve been planning to start my own garden.',
            date: '2024-11-28',
          },
          {
            user: 'JaneSmith',
            comment: 'Loved this article, very inspiring!',
            date: '2024-11-29',
          },
        ],
      },
      {
        id: 2,
        title: '10 Tips for Effective Time Management',
        author: 'Asif Khan',
        content:
          'Time management is crucial for achieving your goals. These tips will help you become more productive and focused.',
        publishedDate: '2024-11-25',
        tags: ['Productivity', 'Self-Help', 'Time Management'],
        likes: 85,
        comments: [
          {
            user: 'Alice',
            comment:
              'I’ve been struggling with managing my time. This really helps!',
            date: '2024-11-26',
          },
        ],
      },
      {
        id: 3,
        title: 'Top 5 Destinations for Winter Travel',
        author: 'Traveller BD',
        content:
          'Explore the best destinations to visit this winter. From snowy mountains to cozy towns, find your perfect getaway.',
        publishedDate: '2024-11-20',
        tags: ['Travel', 'Winter', 'Destinations'],
        likes: 200,
        comments: [
          {
            user: 'TravelerGal',
            comment: 'Adding these places to my bucket list!',
            date: '2024-11-21',
          },
          {
            user: 'Nomad',
            comment:
              'Visited two of these places last year, and they were amazing!',
            date: '2024-11-22',
          },
        ],
      },
    ];
  }

  // constructor() { }
}
