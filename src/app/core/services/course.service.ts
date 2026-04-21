import { Injectable, signal } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses = signal<Course[]>([
    {
      id: 1,
      title: 'UI/UX Design Masterclass',
      instructor: 'Alex Smith',
      price: 49.99,
      rating: 4.8,
      category: 'Diseño',
      level: 'Intermedio',
      image: 'https://picsum.photos/id/1/400/250'
    },
    {
      id: 2,
      title: 'Angular Pro con Signals',
      instructor: 'Sara Connor',
      price: 0,
      rating: 4.9,
      category: 'Desarrollo',
      level: 'Avanzado',
      image: 'https://picsum.photos/id/2/400/250'
    }
  ]);

  getCourses() {
    return this.courses.asReadonly();
  }

  getFeaturedCourses() {
    return this.courses().slice(0, 3);
  }
}