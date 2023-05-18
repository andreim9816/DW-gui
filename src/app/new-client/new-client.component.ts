import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Type} from "../app.routes";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {
  form: FormGroup;
  type: Type;

  constructor(private fb: FormBuilder,
              private service: ClientService,
              private route: ActivatedRoute,
              private router: Router,
              private dialogRef: MatDialogRef<NewClientComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Type) {
    this.type = data;
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      nume: [null, Validators.required],
      prenume: [null, Validators.required],
      email: [null, Validators.required],
      numarTelefon: [null, Validators.required],
      premium: false
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.get('premium')?.value === undefined) {
        console.log('EROARE');
      } else {

        const body = {
          nume: this.form.value.nume,
          prenume: this.form.value.prenume,
          email: this.form.value.email,
          numarTelefon: this.form.value.numarTelefon,
          dataInregistrare: new Date(),
          premium: this.form.get('premium')?.value
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
}
