import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {take, tap} from "rxjs";
import {PlataService} from "../services/plata.service";
import {PlataDataSource} from "./PlataDataSource";
import {NewPlataComponent} from "../new-plata/new-plata.component";
import {Type} from "../app.routes";

@Component({
  selector: 'app-plata',
  templateUrl: './plata.component.html',
  styleUrls: ['./plata.component.css']
})
export class PlataComponent {
  dataSource: PlataDataSource;
  type: Type;

  readonly displayedColumns = ['id', 'sumaTotala', 'dataPlata', 'metodaPlataId', 'rezervareId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private plataService: PlataService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(params => {
      this.type = params['type'];
      this.dataSource = new PlataDataSource(this.plataService);
      this.dataSource.loadPlati('', 'desc', 0, 50, this.type);
    });
  }

  openDialogNewPlata(): void {
    this.dialog.open(NewPlataComponent, {data: this.type});
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(tap(() => this.loadPlata()))
      .subscribe();
  }

  loadPlata() {
    this.dataSource.loadPlati(
      '',
      'desc',
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.type);
  }
}
