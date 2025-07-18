export class TacheModel {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;

  constructor(
    _id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: Date
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt || new Date();
  }
}
