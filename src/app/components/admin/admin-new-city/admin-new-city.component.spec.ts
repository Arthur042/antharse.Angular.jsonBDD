import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCityComponent } from './admin-new-city.component';

describe('AdminNewCityComponent', () => {
  let component: AdminNewCityComponent;
  let fixture: ComponentFixture<AdminNewCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
