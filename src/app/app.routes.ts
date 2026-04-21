import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'cursos',
    loadComponent: () => import('./features/search-results/search-results.component').then(m => m.SearchResultsComponent)
  },
  {
    path: 'curso/:id',
    loadComponent: () => import('./features/course-detail/course-detail.component').then(m => m.CourseDetailComponent)
  },
  {
    path: 'empleo/:id',
    loadComponent: () => import('./features/job-detail/job-detail.component').then(m => m.JobDetailComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  { path: '**', redirectTo: '' }
];