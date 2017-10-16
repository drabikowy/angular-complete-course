import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  
  post = {
    title: "Some title",
    isFavourite: true
  }
  
  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) { // this defines how retrieved object should look like (interface is efined above)
    console.log("Favourite changed to", eventArgs)
  }
}