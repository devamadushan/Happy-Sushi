import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';
import { MentionLegalesComponent } from './component/mention-legales/mention-legales.component';
import { ValiderPanierComponent } from './component/valider-panier/valider-panier.component';
import { HistoriqueComponent } from './component/historique/historique.component';
const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'detail/:box',component : DetailComponent},
  {path: 'mention-legales',component : MentionLegalesComponent},
  {path: 'valider/:option',component: ValiderPanierComponent},
  {path:'historique',component:HistoriqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
