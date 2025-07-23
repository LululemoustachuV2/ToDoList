"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleTachesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const controller_taches_controller_1 = require("../controller-taches/controller-taches.controller");
const schema_taches_schema_1 = require("../schema/schema-taches.schema");
const service_taches_service_1 = require("../service-taches/service-taches.service");
let ModuleTachesModule = class ModuleTachesModule {
};
exports.ModuleTachesModule = ModuleTachesModule;
exports.ModuleTachesModule = ModuleTachesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: schema_taches_schema_1.SchemaTaches.name, schema: schema_taches_schema_1.TachesSchema },
            ]),
        ],
        controllers: [controller_taches_controller_1.ControllerTachesController],
        providers: [service_taches_service_1.ServiceTachesService],
    })
], ModuleTachesModule);
//# sourceMappingURL=module-taches.module.js.map