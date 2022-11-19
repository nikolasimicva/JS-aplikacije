import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMunicipalityComponent } from './input-municipality.component';

describe('InputMunicipalityComponent', () => {
  let component: InputMunicipalityComponent;
  let fixture: ComponentFixture<InputMunicipalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMunicipalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
