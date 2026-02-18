import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroes: Hero[] = [
    { id: 1, name: 'Windstorm' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Magneta' },
    { id: 4, name: 'Tornado' }
  ];

  getHeroes(): Hero[] {
    return this.heroes;
  }
}
