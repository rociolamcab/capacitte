import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseCardComponent } from '../../shared/components/course-card/course-card.component';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component'; 
import { CourseService } from '../../core/services/course.service';
import { JobService } from '../../core/services/job.service'; 
import { Course } from '../../core/models/course.model';
import { Job } from '../../core/models/job.model'; 

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, JobCardComponent], 
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  private jobService = inject(JobService);

  activeTab: 'jobs' | 'courses' = 'jobs';

  currentSearch: string = '';
  filteredCourses: Course[] = [];
  filteredJobs: Job[] = []; 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentSearch = params['query'] || '';
      this.applyFilter();
    });
  }

  applyFilter() {
    const term = this.currentSearch.toLowerCase();

    const allCourses = this.courseService.getCourses()();
    this.filteredCourses = allCourses.filter(c => 
      c.title.toLowerCase().includes(term) || c.category.toLowerCase().includes(term)
    );

    const allJobs = this.jobService.getFeaturedJobs();
    this.filteredJobs = allJobs.filter(j => 
      j.role.toLowerCase().includes(term) || j.company.toLowerCase().includes(term) ||
      j.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }
}