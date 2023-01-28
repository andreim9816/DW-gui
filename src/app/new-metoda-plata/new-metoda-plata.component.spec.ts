import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMetodaPlataComponent } from './new-metoda-plata.component';

describe('NewMetodaPlataComponent', () => {
  let component: NewMetodaPlataComponent;
  let fixture: ComponentFixture<NewMetodaPlataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMetodaPlataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMetodaPlataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
