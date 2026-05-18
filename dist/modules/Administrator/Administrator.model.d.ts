import mongoose from "mongoose";
import type { IAdministrator } from "./Administrator.types.js";
export declare const administratorSchema: mongoose.Schema<IAdministrator, mongoose.Model<IAdministrator, any, any, any, any, any, IAdministrator>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: mongoose.SchemaDefinitionProperty<string, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    cpf?: mongoose.SchemaDefinitionProperty<string, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    dateOfBirth?: mongoose.SchemaDefinitionProperty<Date, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    phone?: mongoose.SchemaDefinitionProperty<string, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    address?: mongoose.SchemaDefinitionProperty<string, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<string | undefined, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<string | undefined, IAdministrator, mongoose.Document<unknown, {}, IAdministrator, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<IAdministrator & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IAdministrator>;
declare const Administrator: mongoose.Model<IAdministrator, {}, {}, {}, mongoose.Document<unknown, {}, IAdministrator, {}, mongoose.DefaultSchemaOptions> & IAdministrator & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IAdministrator>;
export default Administrator;
//# sourceMappingURL=Administrator.model.d.ts.map