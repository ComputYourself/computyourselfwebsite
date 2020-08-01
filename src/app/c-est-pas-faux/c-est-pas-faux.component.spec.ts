import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CEstPasFauxComponent } from './c-est-pas-faux.component';

describe('CEstPasFauxComponent', () => {
  let component: CEstPasFauxComponent;
  let fixture: ComponentFixture<CEstPasFauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CEstPasFauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CEstPasFauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
