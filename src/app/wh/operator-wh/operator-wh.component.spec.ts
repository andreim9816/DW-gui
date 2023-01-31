import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorWhComponent } from './operator-wh.component';

describe('OperatorWhComponent', () => {
  let component: OperatorWhComponent;
  let fixture: ComponentFixture<OperatorWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
