import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ZborService} from "../../services/zbor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {tap} from "rxjs";
import {ZborWHDataSource} from "./ZborWHDataSource";

@Component({
  selector: 'app-zbor-wh',
  templateUrl: './zbor-wh.component.html',
  styleUrls: ['./zbor-wh.component.css']
})
export class ZborWhComponent implements OnInit, AfterViewInit {

  dataSource: ZborWHDataSource;
  readonly displayedColumns = ['id', 'aeronavaId', 'durata', 'distanta', 'totalLocuri', 'anulat'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private zborService: ZborService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new ZborWHDataSource(this.zborService);
    this.dataSource.loadZboruri('', 'desc', 0, 20);
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
