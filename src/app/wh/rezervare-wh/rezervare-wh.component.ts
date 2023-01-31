import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {tap} from "rxjs";
import {RezervareService} from "../../services/rezervare.service";
import {RezervareWHDataSource} from "./RezervareWHDataSource";

@Component({
  selector: 'app-rezervare-wh',
  templateUrl: './rezervare-wh.component.html',
  styleUrls: ['./rezervare-wh.component.css']
})
export class RezervareWhComponent implements OnInit, AfterViewInit {

  dataSource: RezervareWHDataSource;
  readonly displayedColumns = ['pasageri', 'clientId', 'dataRezervare', 'dataPlecare',
    'dataSosire', 'destinatii', 'operatorZborId', 'zborId',
    'clasaZborId', 'metodaPlataId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private rezervareService: RezervareService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource = new RezervareWHDataSource(this.rezervareService);
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
