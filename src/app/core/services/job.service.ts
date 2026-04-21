import { Injectable, signal } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = signal<Job[]>([
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
  ]);

  getFeaturedJobs() {
    return this.jobs();
  }
}