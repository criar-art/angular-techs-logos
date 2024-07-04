import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubernetsComponent } from './kubernets.component';

describe('KubernetsComponent', () => {
  let component: KubernetsComponent;
  let fixture: ComponentFixture<KubernetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubernetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubernetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
