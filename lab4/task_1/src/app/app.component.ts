import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Tutorial App</h1>
  <nav>
    <a routerLink="/dashboard">Dashboard</a> |
    <a routerLink="/heroes">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: [`
    nav a { margin: 0 10px; text-decoration: none; }
    nav a.active { font-weight: bold; }
  `]
})
export class AppComponent { }
