import type { ICreateAdministratorDTO, IUpdateAdministratorDTO } from "./Administrator.types.js";
declare class AdministratorService {
    create(data: ICreateAdministratorDTO): Promise<import("mongoose").Document<unknown, {}, import("./Administrator.types.js").IAdministrator, {}, import("mongoose").DefaultSchemaOptions> & import("./Administrator.types.js").IAdministrator & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    find(): Promise<(import("mongoose").Document<unknown, {}, import("./Administrator.types.js").IAdministrator, {}, import("mongoose").DefaultSchemaOptions> & import("./Administrator.types.js").IAdministrator & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    update(id: string, data: IUpdateAdministratorDTO): Promise<import("mongoose").Document<unknown, {}, import("./Administrator.types.js").IAdministrator, {}, import("mongoose").DefaultSchemaOptions> & import("./Administrator.types.js").IAdministrator & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./Administrator.types.js").IAdministrator, {}, import("mongoose").DefaultSchemaOptions> & import("./Administrator.types.js").IAdministrator & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
declare const _default: AdministratorService;
export default _default;
//# sourceMappingURL=Administrator.service.d.ts.map