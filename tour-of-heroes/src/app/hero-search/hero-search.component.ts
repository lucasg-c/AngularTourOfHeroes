import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor
  (
    private heroService: HeroService
  ) 
  { }

  search(term: string): void
  {
    this.searchTerms.next(term);
  }

  ngOnInit(): void
  {
    this.heroes$ = this.searchTerms
      .pipe
      (
        // "debounceTime" only consider a term (that is, a string) after 300ms of the last keystroke
        debounceTime(300),
        // distincUntilChanged only considers a new term if its different from the last
        distinctUntilChanged(),
        // switchMap'll "switch to a new observable each time the term changes"
        switchMap((term: string) => this.heroService.searchHeroes(term)),
      )
  }

}
