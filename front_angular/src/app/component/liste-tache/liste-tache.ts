import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TacheModel } from '../../model/tache-model';
import { TacheService } from '../../service/tache-service';

@Component({
  selector: 'app-liste-tache',
  imports: [RouterLink],
  templateUrl: './liste-tache.html',
  styleUrl: './liste-tache.scss',
})
export class ListeTache implements OnInit {
  taches: TacheModel[] = [];

  constructor(private sT: TacheService, private router: Router) {}

  ngOnInit(): void {
    this.sT.getAllTache().subscribe((tache) => {
      this.taches = tache;
    });
  }

  deleteTache(t: TacheModel): void {
    if (confirm('Supprimer cette tache ?')) {
      this.sT.deleteTache(t._id).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}

