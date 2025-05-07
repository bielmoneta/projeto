  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'pipes',
    standalone: false
  })
  export class PipesPipe implements PipeTransform {

    transform(location: string): unknown {
      if(location == null){
        return 'Local não informado';
      }
      return location;
    }

  }
