//Imports
import joi from 'joi';

//Schema

const idSchema = joi.number().integer().min(1).required();

const objectSchema = joi.object({
    ModuleID: joi.number().integer(),
    ModuleName: joi.string().min(8),
    ModuleCode: joi.string().regex(/^\D{2}\d{4}$/),
    ModuleLevel: joi.number().integer().min(3).max(7),
    ModuleYearID: joi.number().integer().allow(null),
    ModuleLeaderID: joi.number().integer().allow(null),
    ModuleImageURL: joi.string().uri()
}).unknown(true);

const mutableKeys = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleYearID', 'ModuleLeaderID', 'ModuleImageURL']

const createSchema = objectSchema.and(...mutableKeys);

const updateSchema = joi.object({
    id: idSchema,
    obj: objectSchema.or(...mutableKeys)
});

export default { idSchema, createSchema, updateSchema };