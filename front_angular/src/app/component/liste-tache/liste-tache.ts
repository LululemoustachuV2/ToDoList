// Importation des modules Angular nécessaires et du modèle de tâche
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TacheModel } from '../../model/tache-model';
import { TacheService } from '../../service/tache-service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-tache',
  imports: [RouterLink, DatePipe, FormsModule],
  templateUrl: './liste-tache.html',
  styleUrl: './liste-tache.scss',
})
export class ListeTache implements OnInit {
  // Liste de toutes les tâches récupérées
  taches: TacheModel[] = [];

  // Valeur du filtre actuel (toutes, actives, terminées)
  filtre: string = 'toutes';

  // Thème actuel (dark mode ou pas)
  isDark: boolean = false;

  // Terme de recherche dans la barre de recherche
  recherche: string = '';

  constructor(private sT: TacheService, private router: Router) {}

  // Initialisation du composant
  ngOnInit(): void {
    // Récupération du thème stocké
    this.isDark = localStorage.getItem('theme') === 'dark';
    this.applyTheme();

    // Récupération des tâches depuis le service et inversion pour voir les plus récentes en haut
    this.sT.getAllTache().subscribe((tache) => {
      this.taches = tache.reverse();
    });
  }

  // Suppression d’une tâche après confirmation utilisateur
  deleteTache(t: TacheModel): void {
    if (confirm('Supprimer cette tache ?')) {
      this.sT.deleteTache(t._id).subscribe(() => {
        this.router.navigate(['/tasks']); // Redirection vers la liste après suppression
      });
    }
  }

  // Inversion de l’état "terminée" d’une tâche
  toggleCompletion(tache: TacheModel): void {
    tache.completed = !tache.completed;
    this.sT.updateTache(tache, tache._id).subscribe(); // Mise à jour côté backend
  }

  // Getter calculant dynamiquement la liste des tâches filtrées (filtre + recherche)
  get tachesFiltrees(): TacheModel[] {
    let result = this.taches;

    // Filtrage selon l'état de la tâche
    if (this.filtre === 'actives') {
      result = result.filter((t) => !t.completed);
    } else if (this.filtre === 'terminees') {
      result = result.filter((t) => t.completed);
    }

    // Filtrage selon le mot-clé de recherche
    if (this.recherche.trim()) {
      const keyword = this.recherche.trim().toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(keyword) ||
          t.description.toLowerCase().includes(keyword)
      );
    }

    return result;
  }

  // Changement du thème (dark <=> light)
  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.applyTheme(); // Applique les classes CSS au body
  }

  // Application du thème sur le body de la page
  applyTheme(): void {
    if (this.isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
