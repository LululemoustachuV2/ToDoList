import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TachesDTO } from 'src/dto/taches-dto.dto';
import { SchemaTaches, TachesDocument } from 'src/schema/schema-taches.schema';

@Injectable()
export class ServiceTachesService {
  constructor(
    @InjectModel(SchemaTaches.name) private tachesModel: Model<TachesDocument>,
  ) {}

  async addTache(tachesDTO: TachesDTO): Promise<SchemaTaches> {
    try {
      const creerTaches = new this.tachesModel(tachesDTO);
      return await creerTaches.save();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Erreur lors de la création de la tâche',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

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

  async getTacheById(id: string): Promise<SchemaTaches> {
    try {
      if (!id) {
        throw new HttpException(
          'ID de la tâche est requis',
          HttpStatus.BAD_REQUEST,
        );
      }

      const tache = await this.tachesModel.findById(id).exec();

      if (!tache) {
        throw new HttpException(
          "Tâche avec l'id " + id + ' introuvable',
          HttpStatus.NOT_FOUND,
        );
      }

      return tache;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      console.error(error);
      throw new HttpException(
        'Erreur lors de la récupération de la tâche',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateTache(id: string, updateTachesDto: any): Promise<SchemaTaches> {
    try {
      if (!id) {
        throw new HttpException(
          'ID de la tâche est requis',
          HttpStatus.BAD_REQUEST,
        );
      }

      if ('createdAt' in updateTachesDto) {
        delete updateTachesDto.createdAt;
      }

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
