import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvelteComponent } from './svelte.component';

describe('SvelteComponent', () => {
  let component: SvelteComponent;
  let fixture: ComponentFixture<SvelteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvelteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvelteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
