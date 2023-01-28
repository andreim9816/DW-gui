import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {DestinatieDto} from "../model/DestinatieDto";
import {DestinatieService} from "../services/destinatie.service";
import {NewDestinatieComponent} from "../new-destinatie/new-destinatie.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-destinatie',
  templateUrl: './destinatie.component.html',
  styleUrls: ['./destinatie.component.css']
})
export class DestinatieComponent implements OnInit {

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
      this.destinatieService.getAll().subscribe(data => {
        this.dataSource.data = data;
      }, err => {
        this.router.navigate(['/']);
      });
    })
  }

  openDialogNewDestinatie(): void {
    this.dialog.open(NewDestinatieComponent);
  }
}
