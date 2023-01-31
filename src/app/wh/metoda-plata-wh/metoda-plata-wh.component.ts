import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MetodaPlataDto} from "../../model/MetodaPlataDto";
import {MetodaPlataService} from "../../services/metoda-plata.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NewMetodaPlataComponent} from "../../new-metoda-plata/new-metoda-plata.component";

@Component({
  selector: 'app-metoda-plata-wh',
  templateUrl: './metoda-plata-wh.component.html',
  styleUrls: ['./metoda-plata-wh.component.css']
})
export class MetodaPlataWhComponent implements OnInit {

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
      this.metodaPlataService.getAllWH().subscribe(data => {
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
