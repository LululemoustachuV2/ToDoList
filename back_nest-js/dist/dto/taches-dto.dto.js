"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TachesDTO = void 0;
class TachesDTO {
    title;
    description;
    completed;
    createdAt;
    constructor(title, description, completed, createdAt) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt || new Date();
    }
}
exports.TachesDTO = TachesDTO;
//# sourceMappingURL=taches-dto.dto.js.map