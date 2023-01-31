import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ClasaZborDto} from "../../model/ClasaZborDto";
import {ClasaZborService} from "../../services/clasa-zbor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NewClasaZborComponent} from "../../new-clasa-zbor/new-clasa-zbor.component";

@Component({
  selector: 'app-clasa-zbor-wh',
  templateUrl: './clasa-zbor-wh.component.html',
  styleUrls: ['./clasa-zbor-wh.component.css']
})
export class ClasaZborWhComponent implements OnInit {

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
      this.clasaZborService.getAllWH().subscribe(data => {
        this.dataSource.data = data;
      }, err => {
        this.router.navigate(['/']);
      });
    })
  }

}
