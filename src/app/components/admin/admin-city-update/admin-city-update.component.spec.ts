import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCityUpdateComponent } from './admin-city-update.component';

describe('AdminCityUpdateComponent', () => {
  let component: AdminCityUpdateComponent;
  let fixture: ComponentFixture<AdminCityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCityUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
