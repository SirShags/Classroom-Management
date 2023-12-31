// moment.js language configuration
// language : dutch (nl)
// author : Joris Röling : https://github.com/jjupiter
(function () {
    function e(e) {
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        e.lang("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, r) {
                return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Vandaag om] LT",
                nextDay: "[Morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "\u00e9\u00e9n minuut",
                mm: "%d minuten",
                h: "\u00e9\u00e9n uur",
                hh: "%d uur",
                d: "\u00e9\u00e9n dag",
                dd: "%d dagen",
                M: "\u00e9\u00e9n maand",
                MM: "%d maanden",
                y: "\u00e9\u00e9n jaar",
                yy: "%d jaar"
            },
            ordinal: function (e) {
                return e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();