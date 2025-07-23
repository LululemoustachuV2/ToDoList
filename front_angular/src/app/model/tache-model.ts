// Modèle de données pour une tâche (TacheModel)
// Représente la structure d'une tâche utilisée côté Angular (front-end)

export class TacheModel {
  // Identifiant unique de la tâche (généré par MongoDB)
  _id: string;

  // Titre de la tâche
  title: string;

  // Description détaillée de la tâche
  description: string;

  // Statut de la tâche : true si terminée, false sinon
  completed: boolean;

  // Date de création de la tâche
  createdAt: Date;

  constructor(
    _id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: Date
  ) {
    // Initialisation des propriétés à partir des arguments du constructeur
    this._id = _id;
    this.title = title;
    this.description = description;
    this.completed = completed;

    // Si aucune date de création n'est fournie, on utilise la date actuelle
    this.createdAt = createdAt || new Date();
  }
}
