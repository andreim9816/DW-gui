import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronavaComponent } from './aeronava.component';

describe('AeronavaComponent', () => {
  let component: AeronavaComponent;
  let fixture: ComponentFixture<AeronavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeronavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeronavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
