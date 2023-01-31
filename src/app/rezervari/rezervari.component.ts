import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {tap} from "rxjs";
import {RezervareService} from "../services/rezervare.service";
import {RezervariDataSource} from "./RezervariDataSource";
import {NewRezervareComponent} from "../new-rezervare/new-rezervare.component";

@Component({
  selector: 'app-rezervari',
  templateUrl: './rezervari.component.html',
  styleUrls: ['./rezervari.component.css']
})
export class RezervariComponent implements OnInit, AfterViewInit {

  dataSource: RezervariDataSource;
  readonly displayedColumns = ['id', 'pasageri', 'dataRezervare',
    'sumaTotala', 'clientId', 'zborId', 'clasaZborId', 'metodaPlataId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private rezervariService: RezervareService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new RezervariDataSource(this.rezervariService);
    this.dataSource.loadRezervari('', 'desc', 0, 50);
  }

  openDialogNewRezervare(): void {
    this.dialog.open(NewRezervareComponent);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadRezervari())
      )
      .subscribe();
  }

  loadRezervari() {
    this.dataSource.loadRezervari(
      '',
      'desc',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
}
