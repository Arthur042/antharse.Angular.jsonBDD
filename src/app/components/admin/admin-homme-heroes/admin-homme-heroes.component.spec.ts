import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHommeHeroesComponent } from './admin-homme-heroes.component';

describe('AdminHommeHeroesComponent', () => {
  let component: AdminHommeHeroesComponent;
  let fixture: ComponentFixture<AdminHommeHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHommeHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHommeHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
