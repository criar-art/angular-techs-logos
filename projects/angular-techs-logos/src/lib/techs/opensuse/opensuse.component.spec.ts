import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensuseComponent } from './opensuse.component';

describe('OpensuseComponent', () => {
  let component: OpensuseComponent;
  let fixture: ComponentFixture<OpensuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpensuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpensuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
