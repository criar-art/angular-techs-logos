import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedhatComponent } from './redhat.component';

describe('RedhatComponent', () => {
  let component: RedhatComponent;
  let fixture: ComponentFixture<RedhatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedhatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
