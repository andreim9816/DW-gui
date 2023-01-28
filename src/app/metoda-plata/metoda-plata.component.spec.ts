import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodaPlataComponent } from './metoda-plata.component';

describe('MetodaPlataComponent', () => {
  let component: MetodaPlataComponent;
  let fixture: ComponentFixture<MetodaPlataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodaPlataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodaPlataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
