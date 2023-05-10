import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OperatorZborService} from "../services/operator-zbor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OperatorZborDto} from "../model/OperatorZborDto";
import {NewOperatorComponent} from "../new-operator/new-operator.component";
import {MatDialog} from "@angular/material/dialog";
import {take} from "rxjs";
import {Type} from "../app.routes";

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  dataSource: MatTableDataSource<OperatorZborDto> = new MatTableDataSource<OperatorZborDto>();
  readonly displayedColumns = ['id', 'nume', 'tip'];
  type: Type;

  constructor(
    private service: OperatorZborService,
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

  openDialogNewOperatorZbor(): void {
    this.dialog.open(NewOperatorComponent, {data: this.type});
  }
}
