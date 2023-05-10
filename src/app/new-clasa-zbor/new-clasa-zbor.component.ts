import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClasaZborService} from "../services/clasa-zbor.service";

@Component({
  selector: 'app-new-clasa-zbor',
  templateUrl: './new-clasa-zbor.component.html',
  styleUrls: ['./new-clasa-zbor.component.scss']
})
export class NewClasaZborComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private service: ClasaZborService) {
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

      this.service.addGlobal(body).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
