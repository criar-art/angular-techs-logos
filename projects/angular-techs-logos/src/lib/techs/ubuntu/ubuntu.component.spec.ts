import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbuntuComponent } from './ubuntu.component';

describe('UbuntuComponent', () => {
  let component: UbuntuComponent;
  let fixture: ComponentFixture<UbuntuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbuntuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbuntuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
