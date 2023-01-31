import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OperatorZborDto} from "../../model/OperatorZborDto";
import {OperatorZborService} from "../../services/operator-zbor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {NewOperatorComponent} from "../../new-operator/new-operator.component";

@Component({
  selector: 'app-operator-wh',
  templateUrl: './operator-wh.component.html',
  styleUrls: ['./operator-wh.component.css']
})
export class OperatorWhComponent implements OnInit {

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
      this.operatorZborService.getAllWH().subscribe(data => {
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
