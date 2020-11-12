import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersicleComponent } from './versicle.component';

describe('VersicleComponent', () => {
  let component: VersicleComponent;
  let fixture: ComponentFixture<VersicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
