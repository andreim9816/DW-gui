import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OperatorZborService} from "../services/operator-zbor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OperatorZborDto} from "../model/OperatorZborDto";
import {NewClasaZborComponent} from "../new-clasa-zbor/new-clasa-zbor.component";
import {NewOperatorComponent} from "../new-operator/new-operator.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  dataSource: MatTableDataSource<OperatorZborDto> = new MatTableDataSource<OperatorZborDto>();
  readonly displayedColumns = ['id', 'denumire'];

  constructor(
    private operatorZborService: OperatorZborService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.operatorZborService.getAll().subscribe(data => {
        this.dataSource.data = data;
      }, err => {
        this.router.navigate(['/']);
      });
    })
  }

  openDialogNewOperatorZbor(): void {
    this.dialog.open(NewOperatorComponent);
  }
}
