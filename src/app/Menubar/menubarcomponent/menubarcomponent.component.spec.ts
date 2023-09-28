import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarcomponentComponent } from './menubarcomponent.component';

describe('MenubarcomponentComponent', () => {
  let component: MenubarcomponentComponent;
  let fixture: ComponentFixture<MenubarcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenubarcomponentComponent]
    });
    fixture = TestBed.createComponent(MenubarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
