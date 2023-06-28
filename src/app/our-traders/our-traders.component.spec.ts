import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTradersComponent } from './our-traders.component';

describe('OurTradersComponent', () => {
  let component: OurTradersComponent;
  let fixture: ComponentFixture<OurTradersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTradersComponent]
    });
    fixture = TestBed.createComponent(OurTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
