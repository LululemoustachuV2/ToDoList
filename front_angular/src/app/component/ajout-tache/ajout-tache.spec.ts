import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTache } from './ajout-tache';

describe('AjoutTache', () => {
  let component: AjoutTache;
  let fixture: ComponentFixture<AjoutTache>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutTache]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTache);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
