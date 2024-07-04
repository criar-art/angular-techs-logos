import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentosComponent } from './centos.component';

describe('CentosComponent', () => {
  let component: CentosComponent;
  let fixture: ComponentFixture<CentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
