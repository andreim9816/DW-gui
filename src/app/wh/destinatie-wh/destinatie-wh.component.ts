import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DestinatieDto} from "../../model/DestinatieDto";
import {DestinatieService} from "../../services/destinatie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NewDestinatieComponent} from "../../new-destinatie/new-destinatie.component";

@Component({
  selector: 'app-destinatie-wh',
  templateUrl: './destinatie-wh.component.html',
  styleUrls: ['./destinatie-wh.component.css']
})
export class DestinatieWhComponent implements OnInit {

  dataSource: MatTableDataSource<DestinatieDto> = new MatTableDataSource<DestinatieDto>();
  readonly displayedColumns = ['id', 'oras', 'stat'];

  constructor(
    private destinatieService: DestinatieService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.destinatieService.getAllWH().subscribe(data => {
        this.dataSource.data = data;
      }, err => {
        this.router.navigate(['/']);
      });
    })
  }
}
