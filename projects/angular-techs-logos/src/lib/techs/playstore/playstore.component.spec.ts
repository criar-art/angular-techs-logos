import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystoreComponent } from './playstore.component';

describe('PlaystoreComponent', () => {
  let component: PlaystoreComponent;
  let fixture: ComponentFixture<PlaystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaystoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
