import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardProfileComponent } from '../card-profile/card-profile.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule,CardProfileComponent, RouterLink],
})
export class HomeComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
