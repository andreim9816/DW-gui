import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Type} from "../app.routes";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlataService} from "../services/plata.service";

@Component({
  selector: 'app-new-plata',
  templateUrl: './new-plata.component.html',
  styleUrls: ['./new-plata.component.css']
})
export class NewPlataComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: PlataService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewPlataComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.createForm();
    this.type = data;
  }

  createForm(): void {
    this.form = this.fb.group({
      sumaTotala: [null, Validators.required],
      metodaPlataId: [null, Validators.required],
      rezervareId: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        id: null,
        dataPlata: new Date(),
        sumaTotala: this.form.value.sumaTotala,
        metodaPlataId: this.form.value.metodaPlataId,
        rezervareId: this.form.value.rezervareId
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
