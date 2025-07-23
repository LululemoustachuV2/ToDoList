import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TachesDTO } from 'src/dto/taches-dto.dto';
import { SchemaTaches, TachesDocument } from 'src/schema/schema-taches.schema';

@Injectable()
// Service injectable contenant la logique métier liée aux tâches
export class ServiceTachesService {
  constructor(
    @InjectModel(SchemaTaches.name) private tachesModel: Model<TachesDocument>,
    // Injection du modèle Mongoose 'Taches' pour interagir avec la base MongoDB
  ) {}

  // Création d’une nouvelle tâche à partir d’un DTO
  async addTache(tachesDTO: TachesDTO): Promise<SchemaTaches> {
    try {
      const creerTaches = new this.tachesModel(tachesDTO);
      return await creerTaches.save(); // Sauvegarde en base et retourne la tâche créée
    } catch (error) {
      console.log(error);
      // Gestion des erreurs avec exception HTTP 500 (erreur serveur)
      throw new HttpException(
        'Erreur lors de la création de la tâche',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Récupération de toutes les tâches en base
  async getAllTaches(): Promise<SchemaTaches[]> {
    try {
      return await this.tachesModel.find().exec();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Erreur lors de la récupération des tâches',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Récupère une tâche par son ID, avec gestion des erreurs spécifiques
  async getTacheById(id: string): Promise<SchemaTaches> {
    try {
      if (!id) {
        // Si l’ID n’est pas fourni, renvoie une erreur 400 (mauvaise requête)
        throw new HttpException(
          'ID de la tâche est requis',
          HttpStatus.BAD_REQUEST,
        );
      }

      const tache = await this.tachesModel.findById(id).exec();

      if (!tache) {
        // Si aucune tâche ne correspond à l’ID, renvoie une erreur 404 (non trouvé)
        throw new HttpException(
          "Tâche avec l'id " + id + ' introuvable',
          HttpStatus.NOT_FOUND,
        );
      }

      return tache;
    } catch (error) {
      if (error instanceof HttpException) {
        // Relance l’exception si c’est déjà une erreur HTTP connue
        throw error;
      }

      console.error(error);
      throw new HttpException(
        'Erreur lors de la récupération de la tâche',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Met à jour une tâche par son ID avec les données reçues
  async updateTache(id: string, updateTachesDto: any): Promise<SchemaTaches> {
    try {
      if (!id) {
        throw new HttpException(
          'ID de la tâche est requis',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Protection : empêche la modification de la date de création
      if ('createdAt' in updateTachesDto) {
        delete updateTachesDto.createdAt;
      }

      // Mise à jour avec retour du document modifié ({ new: true })
      const updatedTache = await this.tachesModel.findByIdAndUpdate(
        id,
        updateTachesDto,
        { new: true },
      );

      if (!updatedTache) {
        throw new HttpException(
          "Tâche avec l'id " + id + ' introuvable',
          HttpStatus.NOT_FOUND,
        );
      }

      return updatedTache;
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) throw error;

      throw new HttpException(
        'Erreur lors de la mise à jour de la tâche',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Supprime une tâche par son ID
  async deleteTache(id: string): Promise<SchemaTaches> {
    try {
      if (!id) {
        throw new HttpException(
          'ID de la tâche est requis',
          HttpStatus.BAD_REQUEST,
        );
      }

      const deletedTache = await this.tachesModel.findByIdAndDelete(id);
      if (!deletedTache) {
        throw new HttpException(
          "Tâche avec l'id " + id + ' introuvable',
          HttpStatus.NOT_FOUND,
        );
      }

      return deletedTache;
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) throw error;

      throw new HttpException(
        'Erreur lors de la suppression de la tâche',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
