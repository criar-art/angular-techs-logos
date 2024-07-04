import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimevideoComponent } from './primevideo.component';

describe('PrimevideoComponent', () => {
  let component: PrimevideoComponent;
  let fixture: ComponentFixture<PrimevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimevideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
