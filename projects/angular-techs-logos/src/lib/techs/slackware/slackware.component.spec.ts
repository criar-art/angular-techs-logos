import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackwareComponent } from './slackware.component';

describe('SlackwareComponent', () => {
  let component: SlackwareComponent;
  let fixture: ComponentFixture<SlackwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlackwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
