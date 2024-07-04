import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorComponent } from './tor.component';

describe('TorComponent', () => {
  let component: TorComponent;
  let fixture: ComponentFixture<TorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
