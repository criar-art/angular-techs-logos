import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyComponent } from './shopify.component';

describe('ShopifyComponent', () => {
  let component: ShopifyComponent;
  let fixture: ComponentFixture<ShopifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
