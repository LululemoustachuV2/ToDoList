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

//TODO: Ajouter l'affichage d'erreurs pour les champs du formulaire
export class AjoutTache {
  TacheCreaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private TacheService: TacheService,
    private router: Router
  ) {
    this.TacheCreaForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      createdAt: [new Date(), Validators.required],
    });
  }

  onSubmit(): void {
    if (this.TacheCreaForm.valid) {
      this.TacheService.addTache(this.TacheCreaForm.value).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
