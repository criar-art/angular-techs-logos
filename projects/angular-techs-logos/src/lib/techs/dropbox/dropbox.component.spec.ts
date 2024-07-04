import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxComponent } from './dropbox.component';

describe('DropboxComponent', () => {
  let component: DropboxComponent;
  let fixture: ComponentFixture<DropboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
