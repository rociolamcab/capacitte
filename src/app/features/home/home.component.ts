import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Opcional si usas @for
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';
import { Course } from '../../core/models/course.model';
import { Job } from '../../core/models/job.model';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, CourseCardComponent, JobCardComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredCourses: Course[] = [
  {
    id: 1,
    title: 'UI/UX Design Masterclass',
    instructor: 'Alex Smith',
    price: 49.99,
    rating: 4.8,
    category: 'Diseño',
    level: 'Intermedio',
    image: 'https://picsum.photos/id/1/400/250' // Imagen de prueba estable
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
];
featuredJobs: Job[] = [
  {
    id: 1,
    role: 'Frontend Developer (Angular)',
    company: 'TechFlow Solutions',
    location: 'Madrid, ES',
    salaryRange: '35k - 45k',
    type: 'Remoto',
    logo: 'https://picsum.photos/id/100/100/100',
    tags: ['Angular', 'TypeScript', 'SCSS']
  },
  {
    id: 2,
    role: 'UX/UI Designer Jr.',
    company: 'Creative Studio',
    location: 'Barcelona, ES',
    salaryRange: '28k - 32k',
    type: 'Híbrido',
    logo: 'https://picsum.photos/id/200/100/100',
    tags: ['Figma', 'Prototyping']
  }
];
}