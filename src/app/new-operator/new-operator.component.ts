import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClasaZborService} from "../services/clasa-zbor.service";
import {OperatorZborService} from "../services/operator-zbor.service";

@Component({
  selector: 'app-new-operator',
  templateUrl: './new-operator.component.html',
  styleUrls: ['./new-operator.component.css']
})
export class NewOperatorComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private service: OperatorZborService) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null, Validators.required],
      denumire: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        id: this.form.value.id,
        denumire: this.form.value.denumire
      };

      this.service.add(body).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
