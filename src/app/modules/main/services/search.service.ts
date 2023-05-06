import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search: EventEmitter<string> = new EventEmitter<string>();
  showSearch: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }
}
