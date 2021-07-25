import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableComponentComponent } from './observable-component.component';

describe('ObservableComponentComponent', () => {
  let component: ObservableComponentComponent;
  let fixture: ComponentFixture<ObservableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
