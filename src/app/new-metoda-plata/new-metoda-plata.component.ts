import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OperatorZborService} from "../services/operator-zbor.service";
import {MetodaPlataService} from "../services/metoda-plata.service";

@Component({
  selector: 'app-new-metoda-plata',
  templateUrl: './new-metoda-plata.component.html',
  styleUrls: ['./new-metoda-plata.component.css']
})
export class NewMetodaPlataComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private service: MetodaPlataService) {
    this.createForm();
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

      this.service.add(body).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
