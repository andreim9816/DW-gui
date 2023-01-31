import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClasaZborService} from "../services/clasa-zbor.service";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private service: ClientService) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      nume: [null, Validators.required],
      prenume: [null, Validators.required],
      email: [null, Validators.required],
      numarTelefon: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        nume: this.form.value.nume,
        prenume: this.form.value.prenume,
        email: this.form.value.email,
        numarTelefon: this.form.value.numarTelefon,
      };

      this.service.add(body).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
