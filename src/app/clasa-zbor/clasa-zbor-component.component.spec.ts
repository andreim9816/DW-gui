import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasaZborComponent } from './clasa-zbor-component.component';

describe('ClasaZborComponent', () => {
  let component: ClasaZborComponent;
  let fixture: ComponentFixture<ClasaZborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasaZborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasaZborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
