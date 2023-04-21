import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id ===id)!;
    this.messageServise.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageServise : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageServise.add('HeroService: fetched heroes');
    return heroes;
  }
}
