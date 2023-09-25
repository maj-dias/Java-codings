import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})

export class CategoryPipe implements PipeTransform {

  //No Angular o Pipe é uma pipeline de estrutura de dados chamados diretamente no HTML
  //Ex: <p>A data atual é: {{ currentDate | date }}</p>
  //Onde currentDate é a variável e date a pipe

  transform(value: string): string {
    switch(value){
      case 'front-end': return 'code';
      case 'back-end': return 'computer';

    }

    return 'code';
  }

}
