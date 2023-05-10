import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClasaZborService} from "../services/clasa-zbor.service";
import {DestinatieService} from "../services/destinatie.service";

@Component({
  selector: 'app-new-destinatie',
  templateUrl: './new-destinatie.component.html',
  styleUrls: ['./new-destinatie.component.scss']
})
export class NewDestinatieComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private service: DestinatieService) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null, Validators.required],
      oras: [null, Validators.required],
      stat: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        id: this.form.value.id,
        oras: this.form.value.oras,
        stat: this.form.value.stat
      };

      this.service.addGlobal(body).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
