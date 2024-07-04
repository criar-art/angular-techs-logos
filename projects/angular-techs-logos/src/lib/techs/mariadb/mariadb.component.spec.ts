import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariadbComponent } from './mariadb.component';

describe('MariadbComponent', () => {
  let component: MariadbComponent;
  let fixture: ComponentFixture<MariadbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariadbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MariadbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
