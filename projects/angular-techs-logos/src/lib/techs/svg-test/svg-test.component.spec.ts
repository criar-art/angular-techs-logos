import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTestComponent } from './svg-test.component';

describe('SvgTestComponent', () => {
  let component: SvgTestComponent;
  let fixture: ComponentFixture<SvgTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
