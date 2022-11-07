import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionsocialComponent } from './organizacionsocial.component';

describe('OrganizacionsocialComponent', () => {
  let component: OrganizacionsocialComponent;
  let fixture: ComponentFixture<OrganizacionsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacionsocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizacionsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


