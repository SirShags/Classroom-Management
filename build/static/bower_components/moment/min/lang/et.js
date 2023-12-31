// moment.js language configuration
// language : estonian (et)
// author : Henry Kehlmann : https://github.com/madhenry
(function () {
    function e(e) {
        function t(e, t, n, r) {
            return r || t ? "paari sekundi" : "paar sekundit"
        }

        e.lang("et", {
            months: "jaanuar_veebruar_m\u00e4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_m\u00e4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "p\u00fchap\u00e4ev_esmasp\u00e4ev_teisip\u00e4ev_kolmap\u00e4ev_neljap\u00e4ev_reede_laup\u00e4ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[T\u00e4na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[J\u00e4rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p\u00e4rast",
                past: "%s tagasi",
                s: t,
                m: "minut",
                mm: "%d minutit",
                h: "tund",
                hh: "%d tundi",
                d: "p\u00e4ev",
                dd: "%d p\u00e4eva",
                M: "kuu",
                MM: "%d kuud",
                y: "aasta",
                yy: "%d aastat"
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();