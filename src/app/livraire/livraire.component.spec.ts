import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LivraireComponent } from './livraire.component';

describe('LivraireComponent', () => {
  let component: LivraireComponent;
  let fixture: ComponentFixture<LivraireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivraireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
