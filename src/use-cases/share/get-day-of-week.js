module.exports = function buildGetDayOfWeek
(
    {
        moment
    }
)
    {
        if
        (
            !moment
        )
            {
                throw new Error("buildGetDayOfWeek must have moment")
            }

        return function getDayOfWeek
        ()
            {

                let now = moment();

                now.tz('America/Los_Angeles')

                const todaysDay = now.format('dddd');

                return todaysDay;
            }
    }