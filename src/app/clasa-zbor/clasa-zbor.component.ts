import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {ClasaZborDto} from "../model/ClasaZborDto";
import {ClasaZborService} from "../services/clasa-zbor.service";
import {MatDialog} from "@angular/material/dialog";
import {NewClasaZborComponent} from "../new-clasa-zbor/new-clasa-zbor.component";

@Component({
  selector: 'app-clasa-zbor',
  templateUrl: './clasa-zbor.component.html',
  styleUrls: ['./clasa-zbor.component.css']
})
export class ClasaZborComponent implements OnInit {

  dataSource: MatTableDataSource<ClasaZborDto> = new MatTableDataSource<ClasaZborDto>();
  readonly displayedColumns = ['id', 'denumire'];

  constructor(
    private clasaZborService: ClasaZborService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clasaZborService.getAll().subscribe(data => {
        this.dataSource.data = data;
      }, err => {
        this.router.navigate(['/']);
      });
    })
  }

  openDialogNewClasaZbor(): void {
    this.dialog.open(NewClasaZborComponent);
  }
}
