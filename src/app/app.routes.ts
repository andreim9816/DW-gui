import {Routes} from "@angular/router";
import {OperatorComponent} from "./operator/operator.component";
import {MetodaPlataComponent} from "./metoda-plata/metoda-plata.component";
import {ClasaZborComponent} from "./clasa-zbor/clasa-zbor.component";
import {DestinatieComponent} from "./destinatie/destinatie.component";
import {ClientComponent} from "./client/client.component";
import {ZborComponent} from "./zbor/zbor.component";
import {RezervariComponent} from "./rezervari/rezervari.component";
import {OperatorWhComponent} from "./wh/operator-wh/operator-wh.component";
import {MetodaPlataWhComponent} from "./wh/metoda-plata-wh/metoda-plata-wh.component";
import {ClasaZborWhComponent} from "./wh/clasa-zbor-wh/clasa-zbor-wh.component";
import {DestinatieWhComponent} from "./wh/destinatie-wh/destinatie-wh.component";
import {ZborWhComponent} from "./wh/zbor-wh/zbor-wh.component";
import {TimpWhComponent} from "./wh/timp-wh/timp-wh.component";
import {RezervareWhComponent} from "./wh/rezervare-wh/rezervare-wh.component";

export const ROUTES: Routes = [
  {path: 'operator-zbor', component: OperatorComponent},
  {path: 'metoda-plata', component: MetodaPlataComponent},
  {path: 'clasa-zbor', component: ClasaZborComponent},
  {path: 'destinatie', component: DestinatieComponent},
  {path: 'client', component: ClientComponent},
  {path: 'zbor', component: ZborComponent},
  {path: 'rezervare', component: RezervariComponent},

  {path: 'operator-zbor-wh', component: OperatorWhComponent},
  {path: 'metoda-plata-wh', component: MetodaPlataWhComponent},
  {path: 'clasa-zbor-wh', component: ClasaZborWhComponent},
  {path: 'destinatie-wh', component: DestinatieWhComponent},
  {path: 'zbor-wh', component: ZborWhComponent},
  {path: 'timp-wh', component: TimpWhComponent},
  {path: 'rezervare-wh', component: RezervareWhComponent},

  {path: '**', redirectTo: ''}
];
