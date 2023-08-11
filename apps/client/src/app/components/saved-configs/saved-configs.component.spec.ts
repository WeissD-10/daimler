import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedConfigsComponent } from './saved-configs.component';

describe('SavedConfigsComponent', () => {
  let component: SavedConfigsComponent;
  let fixture: ComponentFixture<SavedConfigsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedConfigsComponent]
    });
    fixture = TestBed.createComponent(SavedConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
