import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewHeroeComponent } from './admin-new-heroe.component';

describe('AdminNewHeroeComponent', () => {
  let component: AdminNewHeroeComponent;
  let fixture: ComponentFixture<AdminNewHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
