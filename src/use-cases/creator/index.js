const buildGetAllCreatorList = require('./get-all-creator-list');
const buildSearchCreatorByZipcode = require('./search-creator-by-zipcode');


module.exports = function
(
    {
        getAllCreatorDB,
        getAllCreatorByZipcodeDB,
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

        
        const services = Object.freeze(
            {
                getAllCreatorList,
                searchCreatorByZipcode
            }
        );

        return services;
    }