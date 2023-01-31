import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatieWhComponent } from './destinatie-wh.component';

describe('DestinatieWhComponent', () => {
  let component: DestinatieWhComponent;
  let fixture: ComponentFixture<DestinatieWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinatieWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinatieWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
