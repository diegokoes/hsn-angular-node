import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header1TopMain } from './header1-top-main';

describe('Header1TopMain', () => {
  let component: Header1TopMain;
  let fixture: ComponentFixture<Header1TopMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header1TopMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header1TopMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
