import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramComponent } from './telegram.component';

describe('TelegramComponent', () => {
  let component: TelegramComponent;
  let fixture: ComponentFixture<TelegramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelegramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
