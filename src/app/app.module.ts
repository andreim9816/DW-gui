import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ROUTES} from "./app.routes";

import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "@angular/cdk/layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatOptionModule, MatRippleModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {NavbarComponent} from "./navbar/navbar.component";
import {OperatorComponent} from './operator/operator.component';
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientModule} from "@angular/common/http";
import {MetodaPlataComponent} from './metoda-plata/metoda-plata.component';
import {ClasaZborComponent} from './clasa-zbor/clasa-zbor-component.component';
import {DestinatieComponent} from './destinatie/destinatie.component';
import {ClientComponent} from './client/client.component';
import {NewClasaZborComponent} from './new-clasa-zbor/new-clasa-zbor.component';
import {NewOperatorComponent} from './new-operator/new-operator.component';
import {NewMetodaPlataComponent} from './new-metoda-plata/new-metoda-plata.component';
import {NewDestinatieComponent} from './new-destinatie/new-destinatie.component';
import {NewClientComponent} from './new-client/new-client.component';
import {ZborComponent} from './zbor/zbor.component';
import {NewZborComponent} from './new-zbor/new-zbor.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RezervariComponent} from './rezervari/rezervari.component';
import {CdkListbox} from "@angular/cdk/listbox";
import {NewRezervareComponent} from "./new-rezervare/new-rezervare.component";
import { AeronavaComponent } from './aeronava/aeronava.component';
import { NewAeronavaComponent } from './new-aeronava/new-aeronava.component';
import { StatComponent } from './stat/stat.component';
import { NewStatComponent } from './new-stat/new-stat.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    OperatorComponent,
    MetodaPlataComponent,
    ClasaZborComponent,
    DestinatieComponent,
    ClientComponent,
    NewClasaZborComponent,
    NewOperatorComponent,
    NewMetodaPlataComponent,
    NewDestinatieComponent,
    NewClientComponent,
    ZborComponent,
    NewZborComponent,
    RezervariComponent,
    NewRezervareComponent,
    AeronavaComponent,
    NewAeronavaComponent,
    StatComponent,
    NewStatComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatOptionModule,
    MatDialogModule,
    MatInputModule,
    MatRippleModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    CdkListbox
  ],
})
export class AppModule {
}
