import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiarioComponent } from './componentes/diario/diario.component';
import { MensalComponent } from './componentes/mensal/mensal.component';
import { AnualComponent } from './componentes/anual/anual.component';
import { HorarioComponent } from './componentes/horario/horario.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "horario",
    pathMatch: "full"
  },
  {
    path: "horario",
    component: HorarioComponent
  },  
  {
    path: "diario",
    component: DiarioComponent
  },
  {
    path: "mensal",
    component: MensalComponent
  },
  {
    path: "anual",
    component: AnualComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
