import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMapComponent } from './header-map.component';

describe('HeaderMapComponent', () => {
  let component: HeaderMapComponent;
  let fixture: ComponentFixture<HeaderMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
