import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ZborService} from "../services/zbor.service";

@Component({
  selector: 'app-new-zbor',
  templateUrl: './new-zbor.component.html',
  styleUrls: ['./new-zbor.component.scss']
})
export class NewZborComponent {
  form: FormGroup;
  filterDateFrom: Date;
  filterDateTo: Date;

  constructor(private fb: FormBuilder,
              private service: ZborService) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({

      operatorId: [null, Validators.required],
      aeronavaId: [null, Validators.required],
      distanta: [null, Validators.required],
      totalLocuri: [null, Validators.required],

      dataPlecare: [null, Validators.required],
      // oraPlecare: [null, Validators.required],
      // minutPlecare: [null, Validators.required],

      dataSosire: [null, Validators.required],
      // oraSosire: [null, Validators.required],
      // minutSosire: [null, Validators.required],

      locatiePlecareId: [null, Validators.required],
      locatieSosireId: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      let dataPlecare = new Date(this.form.value.dataPlecare);
      // dataPlecare.setHours(this.form.value.oraPlecare)
      // dataPlecare.setMinutes(this.form.value.minutPlecare)

      let dataSosire = new Date(this.form.value.dataSosire);
      // dataPlecare.setHours(this.form.value.oraSosire)
      // dataPlecare.setMinutes(this.form.value.minutSosire)

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

      console.log(body);

      this.service.addGlobal(body).subscribe(() => {
        window.location.reload();
      });
    }
  }

  dateChanged(eventDate: string): Date | null {
    return !!eventDate ? new Date(eventDate) : null;
  }
}
