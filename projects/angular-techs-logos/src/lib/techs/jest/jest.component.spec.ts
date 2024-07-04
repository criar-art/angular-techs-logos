import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JestComponent } from './jest.component';

describe('JestComponent', () => {
  let component: JestComponent;
  let fixture: ComponentFixture<JestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
