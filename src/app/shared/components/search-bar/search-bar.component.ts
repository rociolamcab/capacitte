import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  private router = inject(Router);
  searchTerm: string = '';

  onSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/cursos'], { 
        queryParams: { query: this.searchTerm } 
      });
    }
  }
}