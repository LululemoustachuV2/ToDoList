export class TachesDTO {
  readonly title: string;
  readonly description?: string;
  readonly completed?: boolean;
  readonly createdAt: Date;

  constructor(
    title: string,
    description?: string,
    completed?: boolean,
    createdAt?: Date
  ) {
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = createdAt || new Date();
  }
}
