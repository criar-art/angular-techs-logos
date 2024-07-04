import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiduComponent } from './baidu.component';

describe('BaiduComponent', () => {
  let component: BaiduComponent;
  let fixture: ComponentFixture<BaiduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
