import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titleComponent',
  template: `
    <h2> Boo </h2>
    <input type="text" [(ngModel)]="title" />
    
    {{ title }}
  `
})

export class TitleComponent {
  title: string;  
  
}
