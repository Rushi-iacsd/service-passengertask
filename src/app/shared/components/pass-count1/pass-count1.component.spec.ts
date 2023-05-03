import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCount1Component } from './pass-count1.component';

describe('PassCount1Component', () => {
  let component: PassCount1Component;
  let fixture: ComponentFixture<PassCount1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassCount1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassCount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
