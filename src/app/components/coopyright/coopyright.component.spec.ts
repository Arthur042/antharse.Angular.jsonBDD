import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopyrightComponent } from './coopyright.component';

describe('CoopyrightComponent', () => {
  let component: CoopyrightComponent;
  let fixture: ComponentFixture<CoopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoopyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
