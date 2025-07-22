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
  taches: TacheModel[] = [];
  filtre: string = 'toutes';
  isDark: boolean = false;
  recherche: string = '';

  constructor(private sT: TacheService, private router: Router) {}

  ngOnInit(): void {
    this.isDark = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
    this.sT.getAllTache().subscribe((tache) => {
      this.taches = tache.reverse();
    });
  }

  deleteTache(t: TacheModel): void {
    if (confirm('Supprimer cette tache ?')) {
      this.sT.deleteTache(t._id).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }

  toggleCompletion(tache: TacheModel): void {
    tache.completed = !tache.completed;
    this.sT.updateTache(tache, tache._id).subscribe();
  }

  get tachesFiltrees(): TacheModel[] {
    let result = this.taches;

    if (this.filtre === 'actives') {
      result = result.filter((t) => !t.completed);
    } else if (this.filtre === 'terminees') {
      result = result.filter((t) => t.completed);
    }

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

  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
