import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenddataComponent } from './backenddata.component';

describe('BackenddataComponent', () => {
  let component: BackenddataComponent;
  let fixture: ComponentFixture<BackenddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackenddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackenddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
