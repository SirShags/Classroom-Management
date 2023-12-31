// moment.js language configuration
// language : danish (da)
// author : Ulrik Nielsen : https://github.com/mrbase

require('../moment').lang('da', {
    months: "Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),
    weekdays: "Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag".split("_"),
    weekdaysShort: "Søn_Man_Tir_Ons_Tor_Fre_Lør".split("_"),
    weekdaysMin: "Sø_Ma_Ti_On_To_Fr_Lø".split("_"),
    longDateFormat: {
        LT: "h:mm A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY h:mm A",
        LLLL: "dddd D. MMMM, YYYY h:mm A"
    },
    calendar: {
        sameDay: '[I dag kl.] LT',
        nextDay: '[I morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[I går kl.] LT',
        lastWeek: '[sidste] dddd [kl] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "få sekunder",
        m: "minut",
        mm: "%d minutter",
        h: "time",
        hh: "%d timer",
        d: "dag",
        dd: "%d dage",
        M: "månede",
        MM: "%d måneder",
        y: "år",
        yy: "%d år"
    },
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
});
