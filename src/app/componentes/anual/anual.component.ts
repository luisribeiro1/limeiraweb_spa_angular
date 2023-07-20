import { Component, OnInit } from '@angular/core';
import { RespostaAPIAnual } from 'src/app/interfaces/anualInterface';
import { LimeirawebService } from '../limeiraweb.service';

@Component({
  selector: 'app-anual',
  templateUrl: './anual.component.html',
  styleUrls: ['./anual.component.scss']
})
export class AnualComponent implements OnInit {

  historicoAnual: RespostaAPIAnual[] = []

  constructor(private service: LimeirawebService) { }

  ngOnInit(): void {
    this.service.listarhistoricoAnual().subscribe((resposta: RespostaAPIAnual[]) =>{
      this.historicoAnual = resposta
    })
  }

}
