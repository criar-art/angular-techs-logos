import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumblrComponent } from './tumblr.component';

describe('TumblrComponent', () => {
  let component: TumblrComponent;
  let fixture: ComponentFixture<TumblrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumblrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TumblrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
