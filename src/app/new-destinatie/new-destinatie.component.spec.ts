import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDestinatieComponent } from './new-destinatie.component';

describe('NewDestinatieComponent', () => {
  let component: NewDestinatieComponent;
  let fixture: ComponentFixture<NewDestinatieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDestinatieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDestinatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
