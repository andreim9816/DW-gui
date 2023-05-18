import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ZborService} from "../services/zbor.service";
import {Type} from "../app.routes";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-zbor',
  templateUrl: './new-zbor.component.html',
  styleUrls: ['./new-zbor.component.scss']
})
export class NewZborComponent {
  form: FormGroup;
  filterDateFrom: Date;
  filterDateTo: Date;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: ZborService, private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewZborComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.createForm();
    this.type = data;
  }

  createForm(): void {
    this.form = this.fb.group({
      operatorId: [null, Validators.required],
      aeronavaId: [null, Validators.required],
      distanta: [null, Validators.required],
      totalLocuri: [null, Validators.required],

      dataPlecare: [null, Validators.required],
      dataSosire: [null, Validators.required],

      locatiePlecareId: [null, Validators.required],
      locatieSosireId: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      let dataPlecare = new Date(this.form.value.dataPlecare);
      let dataSosire = new Date(this.form.value.dataSosire);

      let durata = Math.round(dataSosire.getTime() - dataPlecare.getTime()) / 60000;
      const body = {
        id: this.form.value.id,
        operatorId: this.form.value.operatorId,
        aeronavaId: this.form.value.aeronavaId,
        distanta: this.form.value.distanta,
        totalLocuri: this.form.value.totalLocuri,
        anulat: this.form.value.anulat || false,
        dataPlecare: dataPlecare,
        dataSosire: dataSosire,
        durata: durata,
        locatiePlecareId: this.form.value.locatiePlecareId,
        locatieSosireId: this.form.value.locatieSosireId,
      };

      switch (this.type) {
        case Type.GLOBAL:
          this.service.addGlobal(body).subscribe(data => {
            this.router.navigate(['/']);
          }, err => {
            window.location.reload();
          });
          break;
        case Type.LOWCOST:
          this.service.addLow(body).subscribe(data => {
            this.router.navigate(['/']);
          }, err => {
            window.location.reload();
          });
          break;
        case Type.NONLOWCOST:
          this.service.addNonLow(body).subscribe(data => {
            this.router.navigate(['/']);
          }, err => {
            window.location.reload();
          });
          break;
      }
      this.dialogRef.close();
    }
  }

  dateChanged(eventDate: string): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }
}
