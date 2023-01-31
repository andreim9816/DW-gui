import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimpWhComponent } from './timp-wh.component';

describe('TimpWhComponent', () => {
  let component: TimpWhComponent;
  let fixture: ComponentFixture<TimpWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimpWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimpWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
