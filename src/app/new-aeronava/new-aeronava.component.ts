import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AeronavaService} from "../services/aeronava.service";

@Component({
  selector: 'app-new-aeronava',
  templateUrl: './new-aeronava.component.html',
  styleUrls: ['./new-aeronava.component.css']
})
export class NewAeronavaComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private service: AeronavaService) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null, Validators.required],
      producator: [null, Validators.required],
      nume: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        id: this.form.value.id,
        nume: this.form.value.nume,
        producator: this.form.value.producator
      };

      this.service.addGlobal(body).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
