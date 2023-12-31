// moment.js language configuration
// language : latvian (lv)
// author : Kristaps Karlsons : https://github.com/skakri
(function () {
    function e(e) {
        function n(e, t, n) {
            var r = e.split("_");
            return n ? t % 10 === 1 && t !== 11 ? r[2] : r[3] : t % 10 === 1 && t !== 11 ? r[0] : r[1]
        }

        function r(e, r, i) {
            return e + " " + n(t[i], e, r)
        }

        var t = {
            mm: "min\u016bti_min\u016btes_min\u016bte_min\u016btes",
            hh: "stundu_stundas_stunda_stundas",
            dd: "dienu_dienas_diena_dienas",
            MM: "m\u0113nesi_m\u0113ne\u0161us_m\u0113nesis_m\u0113ne\u0161i",
            yy: "gadu_gadus_gads_gadi"
        };
        e.lang("lv", {
            months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "YYYY.MM.DD.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, LT",
                LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
            },
            calendar: {
                sameDay: "[\u0160odien pulksten] LT",
                nextDay: "[R\u012bt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s v\u0113l\u0101k",
                past: "%s agr\u0101k",
                s: "da\u017eas sekundes",
                m: "min\u016bti",
                mm: r,
                h: "stundu",
                hh: r,
                d: "dienu",
                dd: r,
                M: "m\u0113nesi",
                MM: r,
                y: "gadu",
                yy: r
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();