import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2MainContainer } from './header2-main-container';

describe('Header2MainContainer', () => {
  let component: Header2MainContainer;
  let fixture: ComponentFixture<Header2MainContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header2MainContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header2MainContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
