// moment.js language configuration
// language : euskara (eu)
// author : Eneko Illarramendi : https://github.com/eillarra

require('../moment').lang('eu', {
    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
    longDateFormat: {
        LT: "HH:mm",
        L: "YYYY-MM-DD",
        LL: "YYYYko MMMMren D[a]",
        LLL: "YYYYko MMMMren D[a] LT",
        LLLL: "dddd, YYYYko MMMMren D[a] LT",
        l: "YYYY-M-D",
        ll: "YYYYko MMM D[a]",
        lll: "YYYYko MMM D[a] LT",
        llll: "ddd, YYYYko MMM D[a] LT"
    },
    calendar: {
        sameDay: '[gaur] LT[etan]',
        nextDay: '[bihar] LT[etan]',
        nextWeek: 'dddd LT[etan]',
        lastDay: '[atzo] LT[etan]',
        lastWeek: '[aurreko] dddd LT[etan]',
        sameElse: 'L'
    },
    relativeTime: {
        future: "%s barru",
        past: "duela %s",
        s: "segundo batzuk",
        m: "minutu bat",
        mm: "%d minutu",
        h: "ordu bat",
        hh: "%d ordu",
        d: "egun bat",
        dd: "%d egun",
        M: "hilabete bat",
        MM: "%d hilabete",
        y: "urte bat",
        yy: "%d urte"
    },
    ordinal: '%d.',
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 7  // The week that contains Jan 1st is the first week of the year.
    }
});
