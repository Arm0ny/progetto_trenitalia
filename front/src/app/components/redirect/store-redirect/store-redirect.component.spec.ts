import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRedirectComponent } from './store-redirect.component';

describe('StoreRedirectComponent', () => {
  let component: StoreRedirectComponent;
  let fixture: ComponentFixture<StoreRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreRedirectComponent]
    });
    fixture = TestBed.createComponent(StoreRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
