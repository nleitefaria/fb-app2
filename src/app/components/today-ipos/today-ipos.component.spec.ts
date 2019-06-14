import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayIposComponent } from './today-ipos.component';

describe('TodayIposComponent', () => {
  let component: TodayIposComponent;
  let fixture: ComponentFixture<TodayIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
