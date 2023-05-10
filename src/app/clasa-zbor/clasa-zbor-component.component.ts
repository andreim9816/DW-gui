import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {ClasaZborDto} from "../model/ClasaZborDto";
import {ClasaZborService} from "../services/clasa-zbor.service";
import {MatDialog} from "@angular/material/dialog";
import {NewClasaZborComponent} from "../new-clasa-zbor/new-clasa-zbor.component";
import {take} from "rxjs";
import {Type} from "../app.routes";

@Component({
  selector: 'app-clasa-zbor',
  templateUrl: './clasa-zbor-component.component.html',
  styleUrls: ['./clasa-zbor-component.component.scss']
})
export class ClasaZborComponent implements OnInit {

  dataSource: MatTableDataSource<ClasaZborDto> = new MatTableDataSource<ClasaZborDto>();
  readonly displayedColumns = ['id', 'denumire'];

  constructor(
    private service: ClasaZborService,
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

  openDialogNewClasaZbor(): void {
    this.dialog.open(NewClasaZborComponent);
  }
}
