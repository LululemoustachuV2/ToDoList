export declare class TachesDTO {
    readonly title: string;
    readonly description?: string;
    readonly completed?: boolean;
    readonly createdAt: Date;
    constructor(title: string, description?: string, completed?: boolean, createdAt?: Date);
}
