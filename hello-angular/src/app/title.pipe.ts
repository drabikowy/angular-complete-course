import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'title'
})          
export class TitlePipe implements PipeTransform {
  transform(value: string) {
    if (!value)
      return null;
      
    let words = value.split(' ');
    let prepositions = [
      'of',
      'the'
    ]
    
    for (let index = 0; i<words.length; i++) {
      if (if prepositions.includes(words[i]))
        words[i].toLowerCase
    }
  }
}