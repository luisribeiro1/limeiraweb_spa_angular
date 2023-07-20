import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RespostaAPIHorario } from '../interfaces/horarioInterface';
import { RespostaAPIDiario } from '../interfaces/diarioInterface';
import { RespostaAPIMensal } from '../interfaces/mensalInterface';
import { RespostaAPIAnual } from '../interfaces/anualInterface';

@Injectable({
  providedIn: 'root'
})
export class LimeirawebService {

  private readonly apiHorario = 'https://limeiraweb.com.br/historico/porhora';
  private readonly apiDiario = 'https://limeiraweb.com.br/historico/pordia';
  private readonly apiMensal = 'https://limeiraweb.com.br/historico/pormes';
  private readonly apiAnual = 'https://limeiraweb.com.br/historico/porano';

  constructor( private http: HttpClient ) { }

  listarhistoricoRecente(): Observable<RespostaAPIHorario[]>{
    return this.http.get<RespostaAPIHorario[]>(this.apiHorario)
    // return this.http.get<RespostaAPIHoje>(this.apiHoje).pipe(
    //   tap((resposta: RespostaAPIHoje) => {
    //     console.log('Resposta da API:', resposta);
    //   })
    // );    
  }

  listarhistoricoDiario(): Observable<RespostaAPIDiario[]>{
    return this.http.get<RespostaAPIDiario[]>(this.apiDiario)
  } 

  listarhistoricoMensal(): Observable<RespostaAPIMensal[]>{
    return this.http.get<RespostaAPIMensal[]>(this.apiMensal)
  }    

  listarhistoricoAnual(): Observable<RespostaAPIAnual[]>{
    return this.http.get<RespostaAPIAnual[]>(this.apiAnual)
  }  

}
