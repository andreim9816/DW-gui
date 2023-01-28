import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatieComponent } from './destinatie.component';

describe('DestinatieComponent', () => {
  let component: DestinatieComponent;
  let fixture: ComponentFixture<DestinatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinatieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
