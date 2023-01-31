import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {tap} from "rxjs";
import {TimpService} from "../../services/timp.service";
import {TimpWHDataSource} from "./TimpWHDataSource";

@Component({
  selector: 'app-timp-wh',
  templateUrl: './timp-wh.component.html',
  styleUrls: ['./timp-wh.component.css']
})
export class TimpWhComponent implements OnInit, AfterViewInit {

  dataSource: TimpWHDataSource;
  readonly displayedColumns = ['id', 'data', 'ziAn', 'ora', 'weekend'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private timpService: TimpService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new TimpWHDataSource(this.timpService);
    this.dataSource.loadTimpi('', 'desc', 0, 20);
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadTimpi())
      )
      .subscribe();
  }

  loadTimpi() {
    this.dataSource.loadTimpi(
      '',
      'desc',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
}
