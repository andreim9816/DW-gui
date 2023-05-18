import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AeronavaService} from "../services/aeronava.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Type} from "../app.routes";

@Component({
  selector: 'app-new-aeronava',
  templateUrl: './new-aeronava.component.html',
  styleUrls: ['./new-aeronava.component.css']
})
export class NewAeronavaComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: AeronavaService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewAeronavaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.createForm();
    this.type = data;
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null, Validators.required],
      nume: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        id: this.form.value.id,
        nume: this.form.value.nume,
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
