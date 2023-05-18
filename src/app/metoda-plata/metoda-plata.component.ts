import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {MetodaPlataService} from "../services/metoda-plata.service";
import {MetodaPlataDto} from "../model/MetodaPlataDto";
import {NewMetodaPlataComponent} from "../new-metoda-plata/new-metoda-plata.component";
import {MatDialog} from "@angular/material/dialog";
import {take} from "rxjs";
import {Type} from "../app.routes";

@Component({
  selector: 'app-metoda-plata',
  templateUrl: './metoda-plata.component.html',
  styleUrls: ['./metoda-plata.component.css']
})
export class MetodaPlataComponent implements OnInit {

  type: Type;
  dataSource: MatTableDataSource<MetodaPlataDto> = new MatTableDataSource<MetodaPlataDto>();
  readonly displayedColumns = ['id', 'denumire'];

  constructor(
    private service: MetodaPlataService,
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

  openDialogNewMetodaPlata(): void {
    this.dialog.open(NewMetodaPlataComponent,{data: this.type});
  }
}
