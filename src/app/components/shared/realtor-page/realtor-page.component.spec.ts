import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorPageComponent } from './realtor-page.component';

describe('RealtorPageComponent', () => {
  let component: RealtorPageComponent;
  let fixture: ComponentFixture<RealtorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
