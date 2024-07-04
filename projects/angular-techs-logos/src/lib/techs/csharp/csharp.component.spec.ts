import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpComponent } from './csharp.component';

describe('CsharpComponent', () => {
  let component: CsharpComponent;
  let fixture: ComponentFixture<CsharpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsharpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
