import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlataComponent } from './new-plata.component';

describe('NewPlataComponent', () => {
  let component: NewPlataComponent;
  let fixture: ComponentFixture<NewPlataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
