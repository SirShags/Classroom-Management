// moment.js language configuration
// language : norwegian bokmål (nb)
// author : Espen Hovlandsdal : https://github.com/rexxars
(function () {
    function e(e) {
        e.lang("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "s\u00f8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00f8rdag".split("_"),
            weekdaysShort: "s\u00f8n_man_tir_ons_tor_fre_l\u00f8r".split("_"),
            weekdaysMin: "s\u00f8_ma_ti_on_to_fr_l\u00f8".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[I dag klokken] LT",
                nextDay: "[I morgen klokken] LT",
                nextWeek: "dddd [klokken] LT",
                lastDay: "[I g\u00e5r klokken] LT",
                lastWeek: "[Forrige] dddd [klokken] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en m\u00e5ned",
                MM: "%d m\u00e5neder",
                y: "ett \u00e5r",
                yy: "%d \u00e5r"
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();