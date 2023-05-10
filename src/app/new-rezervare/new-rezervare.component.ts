import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MetodaPlataService} from "../services/metoda-plata.service";
import {RezervareService} from "../services/rezervare.service";

@Component({
  selector: 'app-new-rezervare',
  templateUrl: './new-rezervare.component.html',
  styleUrls: ['./new-rezervare.component.scss']
})
export class NewRezervareComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private service: RezervareService) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      nrPasageriFemei: [null, Validators.required],
      nrPasageriBarbati: [null, Validators.required],
      sumaTotala: [null, Validators.required],
      clientId: [null, Validators.required],
      zborId: [null, Validators.required],
      clasaZborId: [null, Validators.required],
      metodaPlataId: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const body = {
        nrPasageri: parseInt(this.form.value.nrPasageriFemei) + parseInt(this.form.value.nrPasageriBarbati),
        nrPasageriFemei: this.form.value.nrPasageriFemei,
        nrPasageriBarbati: this.form.value.nrPasageriBarbati,
        dataRezervare: new Date(),
        sumaTotala: this.form.value.sumaTotala,
        clientId: this.form.value.clientId,
        zborId: this.form.value.zborId,
        clasaZborId: this.form.value.clasaZborId,
        metodaPlataId: this.form.value.metodaPlataId,
      };

      this.service.addGlobal(body).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
