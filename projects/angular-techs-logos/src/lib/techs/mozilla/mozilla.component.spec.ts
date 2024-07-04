import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MozillaComponent } from './mozilla.component';

describe('MozillaComponent', () => {
  let component: MozillaComponent;
  let fixture: ComponentFixture<MozillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MozillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MozillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
