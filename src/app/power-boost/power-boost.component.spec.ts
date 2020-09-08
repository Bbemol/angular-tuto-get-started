import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBoostComponent } from './power-boost.component';

describe('PowerBoostComponent', () => {
  let component: PowerBoostComponent;
  let fixture: ComponentFixture<PowerBoostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBoostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
