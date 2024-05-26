import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtorListComponent } from './Realtor-list.component';

describe('RealtorListComponent', () => {
  let component: RealtorListComponent;
  let fixture: ComponentFixture<RealtorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
