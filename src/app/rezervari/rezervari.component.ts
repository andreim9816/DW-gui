import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {take, tap} from "rxjs";
import {RezervareService} from "../services/rezervare.service";
import {RezervariDataSource} from "./RezervariDataSource";
import {NewRezervareComponent} from "../new-rezervare/new-rezervare.component";
import {Type} from "../app.routes";

@Component({
  selector: 'app-rezervari',
  templateUrl: './rezervari.component.html',
  styleUrls: ['./rezervari.component.css']
})
export class RezervariComponent implements OnInit, AfterViewInit {

  type: Type;
  dataSource: RezervariDataSource;
  readonly displayedColumns = ['id', 'pasageri', 'dataRezervare', 'clientId', 'zborId', 'clasaZborId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private rezervariService: RezervareService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(params => {
      this.type = params['type'];
      this.dataSource = new RezervariDataSource(this.rezervariService);
      this.dataSource.loadRezervari('', 'desc', 0, 50, this.type);
    });
  }

  openDialogNewRezervare(): void {
    this.dialog.open(NewRezervareComponent, {data: this.type});
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(tap(() => this.loadRezervari()))
      .subscribe();
  }

  loadRezervari() {
    this.dataSource.loadRezervari(
      '',
      'desc',
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.type);
  }
}
