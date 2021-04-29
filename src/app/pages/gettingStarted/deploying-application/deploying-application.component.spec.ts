import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployingApplicationComponent } from './deploying-application.component';

describe('DeployingApplicationComponent', () => {
  let component: DeployingApplicationComponent;
  let fixture: ComponentFixture<DeployingApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeployingApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
