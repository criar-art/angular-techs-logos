import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalilinuxComponent } from './kalilinux.component';

describe('KalilinuxComponent', () => {
  let component: KalilinuxComponent;
  let fixture: ComponentFixture<KalilinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalilinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalilinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
