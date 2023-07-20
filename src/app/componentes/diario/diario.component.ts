import { Component, OnInit } from '@angular/core';
import { LimeirawebService } from '../limeiraweb.service';
import { RespostaAPIDiario } from 'src/app/interfaces/diarioInterface';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.scss']
})
export class DiarioComponent implements OnInit {

  historicoDiario: RespostaAPIDiario[] = []

  constructor(private service: LimeirawebService) { }

  ngOnInit(): void {
    this.service.listarhistoricoDiario().subscribe((resposta: RespostaAPIDiario[]) =>{
      this.historicoDiario = resposta
    })
  }

}
