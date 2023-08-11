import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMaskComponent } from './config-mask.component';

describe('ConfigMaskComponent', () => {
  let component: ConfigMaskComponent;
  let fixture: ComponentFixture<ConfigMaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigMaskComponent]
    });
    fixture = TestBed.createComponent(ConfigMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
