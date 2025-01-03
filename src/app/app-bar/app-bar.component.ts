import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBarComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    console.log("pulsantepremuto per appbar")
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
