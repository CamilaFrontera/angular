import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewedAdminComponent } from './most-viewed-admin.component';

describe('MostViewedAdminComponent', () => {
  let component: MostViewedAdminComponent;
  let fixture: ComponentFixture<MostViewedAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostViewedAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
