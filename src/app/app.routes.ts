import {Routes} from "@angular/router";
import {OperatorComponent} from "./operator/operator.component";
import {MetodaPlataComponent} from "./metoda-plata/metoda-plata.component";
import {ClasaZborComponent} from "./clasa-zbor/clasa-zbor-component.component";
import {DestinatieComponent} from "./destinatie/destinatie.component";
import {ClientComponent} from "./client/client.component";
import {ZborComponent} from "./zbor/zbor.component";
import {RezervariComponent} from "./rezervari/rezervari.component";
import {AeronavaComponent} from "./aeronava/aeronava.component";
import {StatComponent} from "./stat/stat.component";
import {PlataComponent} from "./plata/plata.component";

export enum Type {
  GLOBAL,
  LOWCOST,
  NONLOWCOST
}

export const ROUTES: Routes = [
  {path: 'aeronava-global', component: AeronavaComponent, data: {type: Type.GLOBAL}},
  {path: 'stat-global', component: StatComponent, data: {type: Type.GLOBAL}},
  {path: 'operator-zbor-global', component: OperatorComponent, data: {type: Type.GLOBAL}},
  {path: 'metoda-plata-global', component: MetodaPlataComponent, data: {type: Type.GLOBAL}},
  {path: 'clasa-zbor-global', component: ClasaZborComponent, data: {type: Type.GLOBAL}},
  {path: 'destinatie-global', component: DestinatieComponent, data: {type: Type.GLOBAL}},
  {path: 'client-global', component: ClientComponent, data: {type: Type.GLOBAL}},
  {path: 'zbor-global', component: ZborComponent, data: {type: Type.GLOBAL}},
  {path: 'rezervare-global', component: RezervariComponent, data: {type: Type.GLOBAL}},
  {path: 'plata-global', component: PlataComponent, data: {type: Type.GLOBAL}},

  {path: 'aeronava-low', component: AeronavaComponent, data: {type: Type.LOWCOST}},
  {path: 'stat-low', component: StatComponent, data: {type: Type.LOWCOST}},
  {path: 'operator-zbor-low', component: OperatorComponent, data: {type: Type.LOWCOST}},
  {path: 'metoda-plata-low', component: MetodaPlataComponent, data: {type: Type.LOWCOST}},
  {path: 'clasa-zbor-low', component: ClasaZborComponent, data: {type: Type.LOWCOST}},
  {path: 'destinatie-low', component: DestinatieComponent, data: {type: Type.LOWCOST}},
  {path: 'zbor-low', component: ZborComponent, data: {type: Type.LOWCOST}},
  {path: 'rezervare-low', component: RezervariComponent, data: {type: Type.LOWCOST}},
  {path: 'plata-low', component: PlataComponent, data: {type: Type.LOWCOST}},

  {path: 'aeronava-non-low', component: AeronavaComponent, data: {type: Type.NONLOWCOST}},
  {path: 'stat-non-low', component: StatComponent, data: {type: Type.NONLOWCOST}},
  {path: 'operator-zbor-non-low', component: OperatorComponent, data: {type: Type.NONLOWCOST}},
  {path: 'metoda-plata-non-low', component: MetodaPlataComponent, data: {type: Type.NONLOWCOST}},
  {path: 'clasa-zbor-non-low', component: ClasaZborComponent, data: {type: Type.NONLOWCOST}},
  {path: 'destinatie-non-low', component: DestinatieComponent, data: {type: Type.NONLOWCOST}},
  {path: 'zbor-non-low', component: ZborComponent, data: {type: Type.NONLOWCOST}},
  {path: 'rezervare-non-low', component: RezervariComponent, data: {type: Type.NONLOWCOST}},
  {path: 'plata-non-low', component: PlataComponent, data: {type: Type.NONLOWCOST}},

  {path: '**', redirectTo: ''}
];
