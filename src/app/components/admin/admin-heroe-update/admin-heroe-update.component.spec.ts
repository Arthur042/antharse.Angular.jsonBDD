import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeroeUpdateComponent } from './admin-heroe-update.component';

describe('AdminHeroeUpdateComponent', () => {
  let component: AdminHeroeUpdateComponent;
  let fixture: ComponentFixture<AdminHeroeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeroeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeroeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
