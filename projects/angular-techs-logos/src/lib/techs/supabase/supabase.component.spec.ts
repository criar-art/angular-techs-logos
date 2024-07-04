import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupabaseComponent } from './supabase.component';

describe('SupabaseComponent', () => {
  let component: SupabaseComponent;
  let fixture: ComponentFixture<SupabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
