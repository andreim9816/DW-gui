import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZborWhComponent } from './zbor-wh.component';

describe('ZborWhComponent', () => {
  let component: ZborWhComponent;
  let fixture: ComponentFixture<ZborWhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZborWhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZborWhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
