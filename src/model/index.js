const { ObjectId } = require('mongodb');

const buildMakeBusiness = require('./business');
const buildMakeOrder = require('./order');

module.exports = function
()
    {
        const makeBusiness = buildMakeBusiness();

        const makeOrder= buildMakeOrder(
            {
                ObjectId: ObjectId
            }
        );

        const models = Object.freeze(
            {
                makeOrder,
                makeBusiness
            }
        );

        return models;
    }