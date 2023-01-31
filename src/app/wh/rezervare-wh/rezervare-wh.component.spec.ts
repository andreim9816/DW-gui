import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervareWhComponent } from './rezervare-wh.component';

describe('RezervareWhComponent', () => {
  let component: RezervareWhComponent;
  let fixture: ComponentFixture<RezervareWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervareWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervareWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
