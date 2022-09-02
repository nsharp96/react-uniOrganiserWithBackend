//Imports
import records from './tableOfUsers.js';

//User keys
const idKey = 'UserID';
const mutableKeys = ['UserFirstname', 'UserLastname', 'UserEmail', 'UserPassword', 'UserRegistered', 'UserUsertypeID', 'UserLevel', 'UserImageURL'];

export default { idKey, mutableKeys, records };