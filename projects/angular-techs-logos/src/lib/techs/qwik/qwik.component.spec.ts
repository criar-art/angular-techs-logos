import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QwikComponent } from './qwik.component';

describe('QwikComponent', () => {
  let component: QwikComponent;
  let fixture: ComponentFixture<QwikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QwikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QwikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
