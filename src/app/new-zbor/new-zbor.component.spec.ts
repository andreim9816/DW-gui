import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewZborComponent } from './new-zbor.component';

describe('NewZborComponent', () => {
  let component: NewZborComponent;
  let fixture: ComponentFixture<NewZborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewZborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewZborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
