import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressComponent } from './wordpress.component';

describe('WordpressComponent', () => {
  let component: WordpressComponent;
  let fixture: ComponentFixture<WordpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
