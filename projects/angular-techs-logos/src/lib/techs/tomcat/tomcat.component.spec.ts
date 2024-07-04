import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomcatComponent } from './tomcat.component';

describe('TomcatComponent', () => {
  let component: TomcatComponent;
  let fixture: ComponentFixture<TomcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
