import { TacheService } from './../../service/tache-service';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ajout-tache',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './ajout-tache.html',
  styleUrl: './ajout-tache.scss',
})
export class AjoutTache {
  TacheCreaForm: FormGroup;
  // FormGroup réactif qui gère le formulaire d’ajout de tâche

  constructor(
    private fb: FormBuilder,
    private TacheService: TacheService,
    private router: Router
  ) {
    // Injection des dépendances : constructeur propre
    this.TacheCreaForm = this.fb.group({
      title: ['', Validators.required], // Titre obligatoire, validation basique
      description: [''], // Description optionnelle
      createdAt: [new Date(), Validators.required],
      // Date création initialisée à maintenant, obligatoire
    });
  }

  onSubmit(): void {
    if (this.TacheCreaForm.valid) {
      // Vérifie que le formulaire est valide avant d’envoyer la requête

      this.TacheService.addTache(this.TacheCreaForm.value).subscribe(() => {
        // Appelle le service pour créer la tâche en backend

        this.router.navigate(['/tasks']);
        // Redirige vers la liste des tâches après succès
      });
    }
  }
}
