import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchText: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchText !== '') {
      this.router.navigate(['/search'], { 
        queryParams: { q: this.searchText } 
      });
      this.searchText = '';
    }
  }
}