import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxComponent } from './firefox.component';

describe('FirefoxComponent', () => {
  let component: FirefoxComponent;
  let fixture: ComponentFixture<FirefoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirefoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirefoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
