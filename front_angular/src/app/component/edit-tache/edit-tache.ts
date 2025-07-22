import { TacheService } from './../../service/tache-service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TacheModel } from '../../model/tache-model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-tache',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-tache.html',
  styleUrl: './edit-tache.scss',
})
export class EditTache implements OnInit {
  TacheModifForm: FormGroup;
  taches: TacheModel[] = [];

  constructor(
    private fb: FormBuilder,
    private TacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //TODO: Ajout d'affichage d'erreurs pour les champs du formulaire
    this.TacheModifForm = this.fb.group({
      _id: [{ value: '', disabled: true }],
      title: ['', Validators.required],
      description: [''],
      completed: [false, Validators.required],
      createdAt: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    this.TacheService.getAllTache().subscribe((tache) => {
      this.taches = tache;
    });
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.TacheService.getTacheById(params['id']).subscribe((tache) => {
          this.TacheModifForm.patchValue(tache);
        });
      }
    });
  }
  onSubmit(): void {
    const id = this.TacheModifForm.getRawValue()._id;
    const tacheData = this.TacheModifForm.getRawValue();
    if (this.TacheModifForm.valid) {
      this.TacheService.updateTache(tacheData, id).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
