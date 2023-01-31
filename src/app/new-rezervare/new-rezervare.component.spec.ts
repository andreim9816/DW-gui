import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRezervareComponent } from './new-rezervare.component';

describe('NewRezervareComponent', () => {
  let component: NewRezervareComponent;
  let fixture: ComponentFixture<NewRezervareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRezervareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRezervareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
