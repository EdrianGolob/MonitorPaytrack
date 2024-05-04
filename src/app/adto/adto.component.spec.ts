import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdtoComponent } from './adto.component';

describe('AdtoComponent', () => {
  let component: AdtoComponent;
  let fixture: ComponentFixture<AdtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
