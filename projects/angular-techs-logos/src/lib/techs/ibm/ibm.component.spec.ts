import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmComponent } from './ibm.component';

describe('IbmComponent', () => {
  let component: IbmComponent;
  let fixture: ComponentFixture<IbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
