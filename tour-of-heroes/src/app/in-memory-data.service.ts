import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService
{
  
  createDb()
  {
    const heroes =
    [
      { id: 12, name: 'Daredevil' },
      { id: 13, name: 'Kamala Khan' },
      { id: 14, name: 'Kate Bishop' },
      { id: 15, name: 'Lockjaw' },
      { id: 16, name: 'Medusa' },
      { id: 17, name: 'Elektra' },
      { id: 18, name: 'Jessica Jones' },
      { id: 19, name: 'Crystal' },
      { id: 20, name: 'Karnak' }
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number
  {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
