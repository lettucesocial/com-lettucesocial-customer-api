const buildGetDayOfWeek = require('./get-day-of-week');

module.exports = function
(
    {
        moment
    }
)
    {

        const getDayOfWeek= buildGetDayOfWeek(
            {
                moment: moment
            }
        );

        const services = Object.freeze(
            {
                getDayOfWeek
            }
        );

        return services;
    }