import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdLivePreviewComponent } from './id-live-preview.component';

describe('IdLivePreviewComponent', () => {
  let component: IdLivePreviewComponent;
  let fixture: ComponentFixture<IdLivePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdLivePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdLivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
