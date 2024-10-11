import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="../assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </main>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'casas';
}
