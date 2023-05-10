import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientDto} from "../model/ClientDto";
import {NewClasaZborComponent} from "../new-clasa-zbor/new-clasa-zbor.component";
import {MatDialog} from "@angular/material/dialog";
import {NewClientComponent} from "../new-client/new-client.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  dataSource: MatTableDataSource<ClientDto> = new MatTableDataSource<ClientDto>();
  readonly displayedColumns = ['id', 'nume', 'prenume', 'email', 'numarTelefon'];

  constructor(
    // private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.clientService.getAll().subscribe(data => {
    //     this.dataSource.data = data;
    //   }, err => {
    //     this.router.navigate(['/']);
    //   });
    // })
  }

  openDialogNewClient(): void {
    this.dialog.open(NewClientComponent);
  }
}
