import { Document } from 'mongoose';
export type TachesDocument = SchemaTaches & Document;
export declare class SchemaTaches {
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
}
export declare const TachesSchema: import("mongoose").Schema<SchemaTaches, import("mongoose").Model<SchemaTaches, any, any, any, Document<unknown, any, SchemaTaches, any> & SchemaTaches & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SchemaTaches, Document<unknown, {}, import("mongoose").FlatRecord<SchemaTaches>, {}> & import("mongoose").FlatRecord<SchemaTaches> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
