import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginLayoutComponent } from './pre-login-layout.component';

describe('PreLoginLayoutComponent', () => {
  let component: PreLoginLayoutComponent;
  let fixture: ComponentFixture<PreLoginLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
