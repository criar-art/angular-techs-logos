import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepenComponent } from './codepen.component';

describe('CodepenComponent', () => {
  let component: CodepenComponent;
  let fixture: ComponentFixture<CodepenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodepenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodepenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
