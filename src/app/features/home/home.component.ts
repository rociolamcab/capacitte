import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component';
import { CourseService } from '../../core/services/course.service';
import { JobService } from '../../core/services/job.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, CourseCardComponent, JobCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private courseService = inject(CourseService);
  private jobService = inject(JobService); 

  featuredCourses = this.courseService.getFeaturedCourses();
  featuredJobs = this.jobService.getFeaturedJobs(); 
}