import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZborComponent } from './zbor.component';

describe('ZborComponent', () => {
  let component: ZborComponent;
  let fixture: ComponentFixture<ZborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
