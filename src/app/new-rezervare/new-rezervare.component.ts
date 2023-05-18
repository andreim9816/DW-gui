import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RezervareService} from "../services/rezervare.service";
import {Type} from "../app.routes";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-rezervare',
  templateUrl: './new-rezervare.component.html',
  styleUrls: ['./new-rezervare.component.scss']
})
export class NewRezervareComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: RezervareService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewRezervareComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.createForm();
    this.type = data;
    console.log(this.type);
  }

  createForm(): void {
    this.form = this.fb.group({
      nrPasageriFemei: [null, Validators.required],
      nrPasageriBarbati: [null, Validators.required],
      clientId: [null, Validators.required],
      zborId: [null, Validators.required],
      clasaZborId: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        nrPasageri: parseInt(this.form.value.nrPasageriFemei) + parseInt(this.form.value.nrPasageriBarbati),
        nrPasageriFemei: this.form.value.nrPasageriFemei,
        nrPasageriBarbati: this.form.value.nrPasageriBarbati,
        dataRezervare: new Date(),
        clientId: this.form.value.clientId,
        zborId: this.form.value.zborId,
        clasaZborId: this.form.value.clasaZborId,
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
}
