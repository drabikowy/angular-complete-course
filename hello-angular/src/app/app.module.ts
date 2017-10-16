
// Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Services
import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';

// Pipe
import { TitlePipe } from './title.pipe';

// Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { TitleComponent } from './title/title.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [ // All the components that are part of this module
    AppComponent, 
    CoursesComponent, 
    AuthorsComponent, 
    TitleComponent,
    TitlePipe,
    FavouriteComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [  // DEPENDENCIES SERVICES
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
