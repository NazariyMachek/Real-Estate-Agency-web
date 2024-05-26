import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorCardComponent } from './Realtor-card.component';

describe('RealtorCardComponent', () => {
  let component: RealtorCardComponent;
  let fixture: ComponentFixture<RealtorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtorCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
