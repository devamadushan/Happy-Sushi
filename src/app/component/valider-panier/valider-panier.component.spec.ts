import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderPanierComponent } from './valider-panier.component';

describe('ValiderPanierComponent', () => {
  let component: ValiderPanierComponent;
  let fixture: ComponentFixture<ValiderPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValiderPanierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValiderPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
