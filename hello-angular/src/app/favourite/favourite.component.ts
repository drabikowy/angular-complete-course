import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'FavouriteComponent',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {
  
  @Output('like-button-click') change = new EventEmitter();// To notify other components that something changed
  
  @Input('is-favourite') isFavourite: boolean; // as an argument to Input you pass the alias for that Input property, you can use later

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({newValue: this.isFavourite}); // To notify other components that something changed (value will be availiable for all subscribers of that event (in thios case app component))
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean
}
