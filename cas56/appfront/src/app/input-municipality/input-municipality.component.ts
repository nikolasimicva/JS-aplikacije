import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-municipality',
  templateUrl: './input-municipality.component.html',
  styleUrls: ['./input-municipality.component.css']
})
export class InputMunicipalityComponent implements OnInit {

  municipalityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.municipalityForm = this.formBuilder.group({
      city: [''],
      zip: ['']
    });
  }

}
