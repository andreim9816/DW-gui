import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ZborService} from "../services/zbor.service";
import {NewZborComponent} from "../new-zbor/new-zbor.component";
import {MatPaginator} from "@angular/material/paginator";
import {tap} from "rxjs";
import {ZborDataSource} from "./ZborDataSource";

@Component({
  selector: 'app-zbor',
  templateUrl: './zbor.component.html',
  styleUrls: ['./zbor.component.css']
})
export class ZborComponent implements OnInit, AfterViewInit {

  dataSource: ZborDataSource;
  readonly displayedColumns = ['id', 'operatorId', 'aeronavaId', 'durata', 'distanta',
    'totalLocuri', 'anulat', 'dataPlecare', 'dataSosire', 'locatiePlecareId', 'locateSosireId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private zborService: ZborService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new ZborDataSource(this.zborService);
    this.dataSource.loadZboruri('', 'desc', 0, 20);
  }

  openDialogNewZbor(): void {
    this.dialog.open(NewZborComponent);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadZboruri())
      )
      .subscribe();
  }

  loadZboruri() {
    this.dataSource.loadZboruri(
      '',
      'desc',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
}
