import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsConfigComponent } from './seasons-config.component';

describe('SeasonsConfigComponent', () => {
  let component: SeasonsConfigComponent;
  let fixture: ComponentFixture<SeasonsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonsConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
