import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperatorZborService} from "../services/operator-zbor.service";
import {Type} from "../app.routes";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-operator',
  templateUrl: './new-operator.component.html',
  styleUrls: ['./new-operator.component.scss']
})
export class NewOperatorComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: OperatorZborService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewOperatorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.type = data;
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null, Validators.required],
      nume: [null, Validators.required],
      tip: [false]
    });

    if (this.isGlobal()) {
      this.form.controls['tip'].enable();
    } else {
      this.form.controls['tip'].disable();
    }
    this.form.controls['tip'].setValue(this.generateCbxValue());
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.get('tip')?.value === undefined) {
        console.log('EROARE');
      } else {
        const body = {
          id: this.form.value.id,
          nume: this.form.value.nume,
          tip: this.form.get('tip')?.value == true ? 'Low cost' : 'Non low cost'
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

  generateCbxValue(): boolean {
    return this.type == Type.LOWCOST;
  }

  isGlobal() {
    const res = this.type == Type.GLOBAL;
    console.log(res);
    return res;
  }
}
