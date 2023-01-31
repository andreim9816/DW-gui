import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasaZborWhComponent } from './clasa-zbor-wh.component';

describe('ClasaZborWhComponent', () => {
  let component: ClasaZborWhComponent;
  let fixture: ComponentFixture<ClasaZborWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasaZborWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasaZborWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
