import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {MetodaPlataService} from "../services/metoda-plata.service";
import {MetodaPlataDto} from "../model/MetodaPlataDto";
import {NewMetodaPlataComponent} from "../new-metoda-plata/new-metoda-plata.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-metoda-plata',
  templateUrl: './metoda-plata.component.html',
  styleUrls: ['./metoda-plata.component.css']
})
export class MetodaPlataComponent implements OnInit {

  dataSource: MatTableDataSource<MetodaPlataDto> = new MatTableDataSource<MetodaPlataDto>();
  readonly displayedColumns = ['id', 'denumire'];

  constructor(
    private metodaPlataService: MetodaPlataService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.metodaPlataService.getAll().subscribe(data => {
        this.dataSource.data = data;
      }, err => {
        this.router.navigate(['/']);
      });
    })
  }

  openDialogNewMetodaPlata(): void {
    this.dialog.open(NewMetodaPlataComponent);
  }
}
