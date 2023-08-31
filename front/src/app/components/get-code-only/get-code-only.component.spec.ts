import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCodeOnlyComponent } from './get-code-only.component';

describe('GetCodeOnlyComponent', () => {
  let component: GetCodeOnlyComponent;
  let fixture: ComponentFixture<GetCodeOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCodeOnlyComponent]
    });
    fixture = TestBed.createComponent(GetCodeOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
