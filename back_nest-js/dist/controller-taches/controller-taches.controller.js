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
exports.ControllerTachesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const taches_dto_dto_1 = require("../dto/taches-dto.dto");
const service_taches_service_1 = require("../service-taches/service-taches.service");
let ControllerTachesController = class ControllerTachesController {
    tachesService;
    constructor(tachesService) {
        this.tachesService = tachesService;
    }
    getHello() {
        return 'Hello world depuis nestjs';
    }
    addTache(tachesDTO) {
        return this.tachesService.addTache(tachesDTO);
    }
    getAllTaches() {
        return this.tachesService.getAllTaches();
    }
    getTacheById(id) {
        return this.tachesService.getTacheById(id);
    }
    updateTache(id, updateTachesDto) {
        return this.tachesService.updateTache(id, updateTachesDto);
    }
    deleteTache(id) {
        return this.tachesService.deleteTache(id);
    }
};
exports.ControllerTachesController = ControllerTachesController;
__decorate([
    (0, common_1.Get)("test"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ControllerTachesController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('tasks'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [taches_dto_dto_1.TachesDTO]),
    __metadata("design:returntype", void 0)
], ControllerTachesController.prototype, "addTache", null);
__decorate([
    (0, common_1.Get)('tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControllerTachesController.prototype, "getAllTaches", null);
__decorate([
    (0, common_1.Get)('tasks/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ControllerTachesController.prototype, "getTacheById", null);
__decorate([
    (0, common_1.Put)('tasks/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ControllerTachesController.prototype, "updateTache", null);
__decorate([
    (0, common_2.Delete)('tasks/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ControllerTachesController.prototype, "deleteTache", null);
exports.ControllerTachesController = ControllerTachesController = __decorate([
    (0, common_1.Controller)('controller-taches'),
    __metadata("design:paramtypes", [service_taches_service_1.ServiceTachesService])
], ControllerTachesController);
//# sourceMappingURL=controller-taches.controller.js.map