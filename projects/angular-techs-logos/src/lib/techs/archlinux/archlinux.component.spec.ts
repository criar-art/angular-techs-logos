import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchlinuxComponent } from './archlinux.component';

describe('ArchlinuxComponent', () => {
  let component: ArchlinuxComponent;
  let fixture: ComponentFixture<ArchlinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchlinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchlinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
