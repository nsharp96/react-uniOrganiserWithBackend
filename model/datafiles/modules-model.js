//Imports -------------------------------------------------------------------------------
import dbConn from '../database/database.js';

//Module keys
const idKey = 'ModuleID';
const mutableKeys = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleLeaderID', 'ModuleImageURL'];

//Conformance



export default { dbConn, idKey, mutableKeys };