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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-tache',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-tache.html',
  styleUrl: './edit-tache.scss',
})
export class EditTache implements OnInit {
  TacheModifForm: FormGroup;
  taches: TacheModel[] = [];
  // Formulaire réactif et liste locale des tâches

  constructor(
    private fb: FormBuilder,
    private TacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialisation du formulaire avec champs désactivés pour _id et createdAt
    this.TacheModifForm = this.fb.group({
      _id: [{ value: '', disabled: true }],
      title: ['', Validators.required], // titre obligatoire
      description: [''],
      completed: [false, Validators.required], // statut obligatoire
      createdAt: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    // Charge toutes les tâches
    this.TacheService.getAllTache().subscribe((tache) => {
      this.taches = tache;
    });

    // Récupère l’ID depuis les params route et patch les valeurs dans le formulaire
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.TacheService.getTacheById(params['id']).subscribe((tache) => {
          this.TacheModifForm.patchValue(tache);
        });
      }
    });
  }

  onSubmit(): void {
    // Récupère les valeurs du formulaire y compris les champs désactivés via getRawValue()
    const id = this.TacheModifForm.getRawValue()._id;
    const tacheData = this.TacheModifForm.getRawValue();

    if (this.TacheModifForm.valid) {
      // Appelle le service pour mettre à jour la tâche côté backend
      this.TacheService.updateTache(tacheData, id).subscribe(() => {
        // Redirection vers la liste des tâches après succès
        this.router.navigate(['/tasks']);
      });
    }
  }
}
