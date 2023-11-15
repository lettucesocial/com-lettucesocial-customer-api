const buildGetAllCreatorList = require('./get-all-creator-list');
const buildSearchCreatorByZipcode = require('./search-creator-by-zipcode');
const buildGetCreatorById= require('./get-creator-by-id');


module.exports = function
(
    {
        getAllCreatorDB,
        getAllCreatorByZipcodeDB,
        getCreatorByIdDB
    }
)
    {

        const getAllCreatorList = buildGetAllCreatorList(
            {
                getAllCreatorDB: getAllCreatorDB
            }
        );
        
        const searchCreatorByZipcode = buildSearchCreatorByZipcode(
            {
                getAllCreatorByZipcodeDB: getAllCreatorByZipcodeDB
            }
        );

        const getCreatorById = buildGetCreatorById(
            {
                getCreatorByIdDB:getCreatorByIdDB
            }
        );

        
        const services = Object.freeze(
            {
                getAllCreatorList,
                searchCreatorByZipcode,
                getCreatorById
            }
        );

        return services;
    }