// moment.js language configuration
// language : swedish (sv)
// author : Jens Alm : https://github.com/ulmus
(function () {
    function e(e) {
        e.lang("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s\u00f6ndag_m\u00e5ndag_tisdag_onsdag_torsdag_fredag_l\u00f6rdag".split("_"),
            weekdaysShort: "s\u00f6n_m\u00e5n_tis_ons_tor_fre_l\u00f6r".split("_"),
            weekdaysMin: "s\u00f6_m\u00e5_ti_on_to_fr_l\u00f6".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Idag klockan] LT",
                nextDay: "[Imorgon klockan] LT",
                lastDay: "[Ig\u00e5r klockan] LT",
                nextWeek: "dddd [klockan] LT",
                lastWeek: "[F\u00f6rra] dddd[en klockan] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "f\u00f6r %s sedan",
                s: "n\u00e5gra sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en m\u00e5nad",
                MM: "%d m\u00e5nader",
                y: "ett \u00e5r",
                yy: "%d \u00e5r"
            },
            ordinal: function (e) {
                var t = e % 10, n = ~~(e % 100 / 10) === 1 ? "e" : t === 1 ? "a" : t === 2 ? "a" : t === 3 ? "e" : "e";
                return e + n
            },
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();