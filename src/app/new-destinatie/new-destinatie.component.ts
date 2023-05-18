import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DestinatieService} from "../services/destinatie.service";
import {Type} from "../app.routes";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-destinatie',
  templateUrl: './new-destinatie.component.html',
  styleUrls: ['./new-destinatie.component.scss']
})
export class NewDestinatieComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: DestinatieService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewDestinatieComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.createForm();
    this.type = data;
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null, Validators.required],
      oras: [null, Validators.required],
      statId: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        id: this.form.value.id,
        oras: this.form.value.oras,
        statId: this.form.value.statId
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
