import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecNavComponent } from './sec-nav.component';

describe('SecNavComponent', () => {
  let component: SecNavComponent;
  let fixture: ComponentFixture<SecNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
