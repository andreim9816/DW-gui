import {Component} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {take} from "rxjs";
import {Type} from "../app.routes";
import {AeronavaDto} from "../model/AeronavaDto";
import {AeronavaService} from "../services/aeronava.service";
import {NewAeronavaComponent} from "../new-aeronava/new-aeronava.component";

@Component({
  selector: 'app-aeronava',
  templateUrl: './aeronava.component.html',
  styleUrls: ['./aeronava.component.css']
})
export class AeronavaComponent {

  dataSource: MatTableDataSource<AeronavaDto> = new MatTableDataSource<AeronavaDto>();
  readonly displayedColumns = ['id', 'nume', 'producator'];

  constructor(
    private service: AeronavaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(params => {
      switch (params['type']) {
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

  openDialogNewAeronava(): void {
    this.dialog.open(NewAeronavaComponent);
  }
}
