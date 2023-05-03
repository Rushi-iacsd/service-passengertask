import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCard1Component } from './pass-card1.component';

describe('PassCard1Component', () => {
  let component: PassCard1Component;
  let fixture: ComponentFixture<PassCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
