import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinstallComponent } from './modal-install.component';

describe('ModalinstallComponent', () => {
  let component: ModalinstallComponent;
  let fixture: ComponentFixture<ModalinstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalinstallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalinstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
