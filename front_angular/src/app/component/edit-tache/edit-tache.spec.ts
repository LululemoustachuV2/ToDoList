import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTache } from './edit-tache';

describe('EditTache', () => {
  let component: EditTache;
  let fixture: ComponentFixture<EditTache>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTache]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTache);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
