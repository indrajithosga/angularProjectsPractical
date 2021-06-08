import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeneralSetupComponent } from './list-general-setup.component';

describe('ListGeneralSetupComponent', () => {
  let component: ListGeneralSetupComponent;
  let fixture: ComponentFixture<ListGeneralSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGeneralSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeneralSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
