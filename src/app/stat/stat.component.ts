import {Component} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {take} from "rxjs";
import {Type} from "../app.routes";
import {NewStatComponent} from "../new-stat/new-stat.component";
import {StatDto} from "../model/StatDto";
import {StatService} from "../services/stat.service";

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent {
  dataSource: MatTableDataSource<StatDto> = new MatTableDataSource<StatDto>();
  readonly displayedColumns = ['id', 'nume'];
  type: Type;

  constructor(
    private service: StatService,
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

  openDialogNewStat(): void {
    this.dialog.open(NewStatComponent, {data: this.type});
  }
}
