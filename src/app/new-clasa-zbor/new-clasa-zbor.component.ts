import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClasaZborService} from "../services/clasa-zbor.service";
import {Type} from "../app.routes";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-clasa-zbor',
  templateUrl: './new-clasa-zbor.component.html',
  styleUrls: ['./new-clasa-zbor.component.scss']
})
export class NewClasaZborComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: ClasaZborService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewClasaZborComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.createForm();
    this.type = data;
  }

  createForm(): void {
    this.form = this.fb.group({
      denumire: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        denumire: this.form.value.denumire
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
