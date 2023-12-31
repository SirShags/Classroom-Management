// moment.js language configuration
// language : galician (gl)
// author : Juan G. Hurtado : https://github.com/juanghurtado
(function () {
    function e(e) {
        e.lang("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xu\u00f1o_Xullo_Agosto_Setembro_Octubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._Xu\u00f1._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays: "Domingo_Luns_Martes_M\u00e9rcores_Xoves_Venres_S\u00e1bado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._M\u00e9r._Xov._Ven._S\u00e1b.".split("_"),
            weekdaysMin: "Do_Lu_Ma_M\u00e9_Xo_Ve_S\u00e1".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT"
                }, nextDay: function () {
                    return "[ma\u00f1\u00e1 " + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (this.hours() !== 1 ? "\u00e1" : "a") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (this.hours() !== 1 ? "\u00e1s" : "a") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fai %s",
                s: "uns segundo",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un d\u00eda",
                dd: "%d d\u00edas",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinal: "%d\u00ba",
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();