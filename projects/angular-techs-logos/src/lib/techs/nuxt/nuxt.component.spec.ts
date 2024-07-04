import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuxtComponent } from './nuxt.component';

describe('NuxtComponent', () => {
  let component: NuxtComponent;
  let fixture: ComponentFixture<NuxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
