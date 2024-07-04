import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvernoteComponent } from './evernote.component';

describe('EvernoteComponent', () => {
  let component: EvernoteComponent;
  let fixture: ComponentFixture<EvernoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvernoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvernoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
