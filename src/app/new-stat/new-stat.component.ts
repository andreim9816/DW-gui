import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StatService} from "../services/stat.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Type} from "../app.routes";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-stat',
  templateUrl: './new-stat.component.html',
  styleUrls: ['./new-stat.component.css']
})
export class NewStatComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: StatService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewStatComponent>,
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
