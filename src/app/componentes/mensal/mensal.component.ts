import { Component, OnInit } from '@angular/core';
import { RespostaAPIMensal } from 'src/app/interfaces/mensalInterface';
import { LimeirawebService } from '../limeiraweb.service';

@Component({
  selector: 'app-mensal',
  templateUrl: './mensal.component.html',
  styleUrls: ['./mensal.component.scss']
})
export class MensalComponent implements OnInit {

  historicoMensal: RespostaAPIMensal[] = []

  constructor(private service: LimeirawebService) { }
  
  ngOnInit(): void {
    this.service.listarhistoricoMensal().subscribe((resposta: RespostaAPIMensal[]) =>{
      this.historicoMensal = resposta
    })
  }

  formataMes(mes: string): string {
    const partes = mes.split("/")
    const mesNumerico = parseInt(partes[0])
    const anoNumerico = parseInt(partes[1])
    const data = new Date(anoNumerico,mesNumerico - 1)
    const mesExtenso = data.toLocaleString("pt-BR",{month: "long" })
    return mesExtenso + " de " + anoNumerico;
  }

}
