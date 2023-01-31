import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodaPlataWhComponent } from './metoda-plata-wh.component';

describe('MetodaPlataWhComponent', () => {
  let component: MetodaPlataWhComponent;
  let fixture: ComponentFixture<MetodaPlataWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodaPlataWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodaPlataWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
