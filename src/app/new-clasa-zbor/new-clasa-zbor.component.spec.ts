import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClasaZborComponent } from './new-clasa-zbor.component';

describe('NewClasaZborComponent', () => {
  let component: NewClasaZborComponent;
  let fixture: ComponentFixture<NewClasaZborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClasaZborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClasaZborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
