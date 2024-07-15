import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = true; // Sidebar should be open by default on larger screens
  isSidebarCollapsed = true; // Sidebar should be collapsed by default on smaller screens

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check screen size to determine initial state
    this.checkScreenWidth();
    // Listen to screen size changes
    window.addEventListener('resize', () => this.checkScreenWidth());
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  checkScreenWidth(): void {
    // Adjust sidebar state based on screen width
    if (window.innerWidth >= 768) { // Example breakpoint, adjust as needed
      this.isSidebarCollapsed = false;
      this.isSidebarOpen = true;
    } else {
      this.isSidebarOpen = false;
    }
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  logout(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
