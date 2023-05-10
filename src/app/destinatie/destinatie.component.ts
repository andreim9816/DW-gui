import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {DestinatieDto} from "../model/DestinatieDto";
import {DestinatieService} from "../services/destinatie.service";
import {NewDestinatieComponent} from "../new-destinatie/new-destinatie.component";
import {MatDialog} from "@angular/material/dialog";
import {take} from "rxjs";
import {Type} from "../app.routes";

@Component({
  selector: 'app-destinatie',
  templateUrl: './destinatie.component.html',
  styleUrls: ['./destinatie.component.css']
})
export class DestinatieComponent implements OnInit {

  dataSource: MatTableDataSource<DestinatieDto> = new MatTableDataSource<DestinatieDto>();
  readonly displayedColumns = ['id', 'oras', 'stat'];

  constructor(
    private service: DestinatieService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
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

  openDialogNewDestinatie(): void {
    this.dialog.open(NewDestinatieComponent);
  }
}
