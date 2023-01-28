import {Routes} from "@angular/router";
import {OperatorComponent} from "./operator/operator.component";
import {MetodaPlataComponent} from "./metoda-plata/metoda-plata.component";
import {ClasaZborComponent} from "./clasa-zbor/clasa-zbor.component";
import {DestinatieComponent} from "./destinatie/destinatie.component";
import {ClientComponent} from "./client/client.component";

export const ROUTES: Routes = [
  {path: 'operator-zbor', component: OperatorComponent},
  {path: 'metoda-plata', component: MetodaPlataComponent},
  {path: 'clasa-zbor', component: ClasaZborComponent},
  {path: 'destinatie', component: DestinatieComponent},
  {path: 'client', component: ClientComponent},
  {path: '**', redirectTo: ''}
];
