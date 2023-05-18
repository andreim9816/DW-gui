import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientDto} from "../model/ClientDto";
import {MatDialog} from "@angular/material/dialog";
import {NewClientComponent} from "../new-client/new-client.component";
import {ClientService} from "../services/client.service";
import {take} from "rxjs";
import {Type} from "../app.routes";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  type: Type;
  dataSource: MatTableDataSource<ClientDto> = new MatTableDataSource<ClientDto>();
  readonly displayedColumns = ['id', 'nume', 'prenume', 'email', 'numarTelefon', 'dataInregistrare', 'premium'];

  constructor(
    private service: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(params => {
      this.type = params['type'];
      switch (this.type) {
        case Type.GLOBAL:
          this.service.getAllGlobal().subscribe(data => {
            this.dataSource.data = data;
          }, err => {
            this.router.navigate(['/']);
          });
          break;
        case Type.LOWCOST:
          this.service.getAllLow().subscribe(data => {
            this.dataSource.data = data;
          }, err => {
            this.router.navigate(['/']);
          });
          break;
        case Type.NONLOWCOST:
          this.service.getAllNonLow().subscribe(data => {
            this.dataSource.data = data;
          }, err => {
            this.router.navigate(['/']);
          });
          break;
      }
    })
  }

  openDialogNewClient(): void {
    this.dialog.open(NewClientComponent, {data: this.type});
  }
}
