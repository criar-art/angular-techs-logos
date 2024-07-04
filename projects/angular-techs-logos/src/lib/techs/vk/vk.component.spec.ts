import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkComponent } from './vk.component';

describe('VkComponent', () => {
  let component: VkComponent;
  let fixture: ComponentFixture<VkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
