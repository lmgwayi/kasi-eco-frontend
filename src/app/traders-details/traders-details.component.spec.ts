import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradersDetailsComponent } from './traders-details.component';

describe('TradersDetailsComponent', () => {
  let component: TradersDetailsComponent;
  let fixture: ComponentFixture<TradersDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradersDetailsComponent]
    });
    fixture = TestBed.createComponent(TradersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
