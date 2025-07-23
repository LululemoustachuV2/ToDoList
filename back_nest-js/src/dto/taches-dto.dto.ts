export class TachesDTO {
  readonly title: string; // Titre de la tâche, obligatoire
  readonly description?: string; // Description optionnelle de la tâche
  readonly completed?: boolean; // Statut d’achèvement, optionnel (true/false)
  readonly createdAt: Date; // Date de création, obligatoire

  constructor(
    title: string,
    description?: string,
    completed?: boolean,
    createdAt?: Date
  ) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    // Si pas de date fournie, initialise avec la date actuelle
    this.createdAt = createdAt || new Date();
  }
}
