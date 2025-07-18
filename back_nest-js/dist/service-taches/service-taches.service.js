"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTachesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_taches_schema_1 = require("../schema/schema-taches.schema");
let ServiceTachesService = class ServiceTachesService {
    tachesModel;
    constructor(tachesModel) {
        this.tachesModel = tachesModel;
    }
    async addTache(tachesDTO) {
        try {
            const creerTaches = new this.tachesModel(tachesDTO);
            return await creerTaches.save();
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Erreur lors de la création de la tâche', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllTaches() {
        try {
            return await this.tachesModel.find().exec();
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Erreur lors de la récupération des tâches', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getTacheById(id) {
        try {
            if (!id) {
                throw new common_1.HttpException('ID de la tâche est requis', common_1.HttpStatus.BAD_REQUEST);
            }
            const tache = await this.tachesModel.findById(id).exec();
            if (!tache) {
                throw new common_1.HttpException("Tâche avec l'id " + id + ' introuvable', common_1.HttpStatus.NOT_FOUND);
            }
            return tache;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            console.error(error);
            throw new common_1.HttpException('Erreur lors de la récupération de la tâche', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateTache(id, updateTachesDto) {
        try {
            if (!id) {
                throw new common_1.HttpException('ID de la tâche est requis', common_1.HttpStatus.BAD_REQUEST);
            }
            if ('createdAt' in updateTachesDto) {
                delete updateTachesDto.createdAt;
            }
            const updatedTache = await this.tachesModel.findByIdAndUpdate(id, updateTachesDto, { new: true });
            if (!updatedTache) {
                throw new common_1.HttpException("Tâche avec l'id " + id + ' introuvable', common_1.HttpStatus.NOT_FOUND);
            }
            return updatedTache;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.HttpException('Erreur lors de la mise à jour de la tâche', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteTache(id) {
        try {
            if (!id) {
                throw new common_1.HttpException('ID de la tâche est requis', common_1.HttpStatus.BAD_REQUEST);
            }
            const deletedTache = await this.tachesModel.findByIdAndDelete(id);
            if (!deletedTache) {
                throw new common_1.HttpException("Tâche avec l'id " + id + ' introuvable', common_1.HttpStatus.NOT_FOUND);
            }
            return deletedTache;
        }
        catch (error) {
            console.error(error);
            if (error instanceof common_1.HttpException)
                throw error;
            throw new common_1.HttpException('Erreur lors de la suppression de la tâche', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.ServiceTachesService = ServiceTachesService;
exports.ServiceTachesService = ServiceTachesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_taches_schema_1.SchemaTaches.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ServiceTachesService);
//# sourceMappingURL=service-taches.service.js.map