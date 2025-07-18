import { TachesDTO } from 'src/dto/taches-dto.dto';
import { ServiceTachesService } from 'src/service-taches/service-taches.service';
export declare class ControllerTachesController {
    private readonly tachesService;
    constructor(tachesService: ServiceTachesService);
    getHello(): string;
    addTache(tachesDTO: TachesDTO): Promise<import("../schema/schema-taches.schema").SchemaTaches>;
    getAllTaches(): Promise<import("../schema/schema-taches.schema").SchemaTaches[]>;
    getTacheById(id: string): Promise<import("../schema/schema-taches.schema").SchemaTaches>;
    updateTache(id: string, updateTachesDto: any): Promise<import("../schema/schema-taches.schema").SchemaTaches>;
    deleteTache(id: string): Promise<import("../schema/schema-taches.schema").SchemaTaches>;
}
