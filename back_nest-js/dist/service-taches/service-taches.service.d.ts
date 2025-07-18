import { Model } from 'mongoose';
import { TachesDTO } from 'src/dto/taches-dto.dto';
import { SchemaTaches, TachesDocument } from 'src/schema/schema-taches.schema';
export declare class ServiceTachesService {
    private tachesModel;
    constructor(tachesModel: Model<TachesDocument>);
    addTache(tachesDTO: TachesDTO): Promise<SchemaTaches>;
    getAllTaches(): Promise<SchemaTaches[]>;
    getTacheById(id: string): Promise<SchemaTaches>;
    updateTache(id: string, updateTachesDto: any): Promise<SchemaTaches>;
    deleteTache(id: string): Promise<SchemaTaches>;
}
