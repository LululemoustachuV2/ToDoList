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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TachesSchema = exports.SchemaTaches = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let SchemaTaches = class SchemaTaches {
    title;
    description;
    completed;
    createdAt;
};
exports.SchemaTaches = SchemaTaches;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SchemaTaches.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SchemaTaches.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], SchemaTaches.prototype, "completed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], SchemaTaches.prototype, "createdAt", void 0);
exports.SchemaTaches = SchemaTaches = __decorate([
    (0, mongoose_1.Schema)()
], SchemaTaches);
exports.TachesSchema = mongoose_1.SchemaFactory.createForClass(SchemaTaches);
//# sourceMappingURL=schema-taches.schema.js.map