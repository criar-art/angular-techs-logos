import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerComponent } from './deezer.component';

describe('DeezerComponent', () => {
  let component: DeezerComponent;
  let fixture: ComponentFixture<DeezerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeezerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeezerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
