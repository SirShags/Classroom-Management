// moment.js language configuration
// language : finnish (fi)
// author : Tarmo Aidantausta : https://github.com/bleadof
(function () {
    function e(e) {
        function r(e, t, n, r) {
            var s = "";
            switch (n) {
                case"s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case"m":
                    return r ? "minuutin" : "minuutti";
                case"mm":
                    s = r ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return r ? "tunnin" : "tunti";
                case"hh":
                    s = r ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return r ? "p\u00e4iv\u00e4n" : "p\u00e4iv\u00e4";
                case"dd":
                    s = r ? "p\u00e4iv\u00e4n" : "p\u00e4iv\u00e4\u00e4";
                    break;
                case"M":
                    return r ? "kuukauden" : "kuukausi";
                case"MM":
                    s = r ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return r ? "vuoden" : "vuosi";
                case"yy":
                    s = r ? "vuoden" : "vuotta"
            }
            return s = i(e, r) + " " + s, s
        }

        function i(e, r) {
            return e < 10 ? r ? n[e] : t[e] : e
        }

        var t = "nolla yksi kaksi kolme nelj\u00e4 viisi kuusi seitsem\u00e4n kahdeksan yhdeks\u00e4n".split(" "), n = ["nolla", "yhden", "kahden", "kolmen", "nelj\u00e4n", "viiden", "kuuden", t[7], t[8], t[9]];
        e.lang("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\u00e4kuu_hein\u00e4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tam_hel_maa_huh_tou_kes_hei_elo_syy_lok_mar_jou".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] LT",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] LT",
                llll: "ddd, Do MMM YYYY, [klo] LT"
            },
            calendar: {
                sameDay: "[t\u00e4n\u00e4\u00e4n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p\u00e4\u00e4st\u00e4",
                past: "%s sitten",
                s: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();