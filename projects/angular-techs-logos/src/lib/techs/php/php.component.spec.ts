import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpComponent } from './php.component';

describe('PhpComponent', () => {
  let component: PhpComponent;
  let fixture: ComponentFixture<PhpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
