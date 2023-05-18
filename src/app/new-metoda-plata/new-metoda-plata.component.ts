import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MetodaPlataService} from "../services/metoda-plata.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Type} from "../app.routes";

@Component({
  selector: 'app-new-metoda-plata',
  templateUrl: './new-metoda-plata.component.html',
  styleUrls: ['./new-metoda-plata.component.scss']
})
export class NewMetodaPlataComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: MetodaPlataService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewMetodaPlataComponent>,
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
