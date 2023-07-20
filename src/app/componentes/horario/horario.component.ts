import { Component, OnInit } from '@angular/core';
import { RespostaAPIHorario } from 'src/app/interfaces/horarioInterface';
import { LimeirawebService } from '../limeiraweb.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  historicoHorario: RespostaAPIHorario[] = []

  constructor(private service: LimeirawebService) { }

  ngOnInit(): void {
    this.service.listarhistoricoRecente().subscribe((resposta: RespostaAPIHorario[]) =>{
      // for (const item of resposta) {
      //   if (item.data != null ) {
      //     console.log(item.data)
      //   }
      // } 
      this.historicoHorario = resposta
    })
  }

}
