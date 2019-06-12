import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsExchangesComponent } from './us-exchanges.component';

describe('UsExchangesComponent', () => {
  let component: UsExchangesComponent;
  let fixture: ComponentFixture<UsExchangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsExchangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
