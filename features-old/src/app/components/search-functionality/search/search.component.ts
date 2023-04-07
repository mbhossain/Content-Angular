import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  public enterSearchValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enterSearchValue);
  }

}
