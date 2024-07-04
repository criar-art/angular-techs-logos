import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebianComponent } from './debian.component';

describe('DebianComponent', () => {
  let component: DebianComponent;
  let fixture: ComponentFixture<DebianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
