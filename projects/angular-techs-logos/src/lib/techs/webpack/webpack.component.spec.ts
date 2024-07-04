import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpackComponent } from './webpack.component';

describe('WebpackComponent', () => {
  let component: WebpackComponent;
  let fixture: ComponentFixture<WebpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebpackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
