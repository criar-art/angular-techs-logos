import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechsComponent } from './list-techs.component';

describe('ListTechsComponent', () => {
  let component: ListTechsComponent;
  let fixture: ComponentFixture<ListTechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTechsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
