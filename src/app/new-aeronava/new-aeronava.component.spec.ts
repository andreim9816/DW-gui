import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAeronavaComponent } from './new-aeronava.component';

describe('NewAeronavaComponent', () => {
  let component: NewAeronavaComponent;
  let fixture: ComponentFixture<NewAeronavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAeronavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAeronavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
