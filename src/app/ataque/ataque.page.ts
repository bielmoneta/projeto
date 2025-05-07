import { Component, OnInit } from '@angular/core';
import { TubaapiService } from '../services/tubaapi.service';
import { PipesPipe } from '../pipes/pipes.pipe';

@Component({
  selector: 'app-ataque',
  templateUrl: './ataque.page.html',
  styleUrls: ['./ataque.page.scss'],  
  standalone: false
})
export class AtaquePage implements OnInit {

  constructor(private ataque: TubaapiService) { }

  tubaroes: any[] = []; // Array para armazenar os dados dos tubarões

  ngOnInit() {
    this.ataque.getAllAtaques().subscribe((dados: any) => {
      console.log(dados);
      this.tubaroes = dados.results;
    });
  }

}
