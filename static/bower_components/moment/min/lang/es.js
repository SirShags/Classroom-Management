// moment.js language configuration
// language : spanish (es)
// author : Julio Napurí : https://github.com/julionc
(function () {
    function e(e) {
        e.lang("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            weekdays: "domingo_lunes_martes_mi\u00e9rcoles_jueves_viernes_s\u00e1bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi\u00e9._jue._vie._s\u00e1b.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_S\u00e1".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D \\de MMMM \\de YYYY",
                LLL: "D \\de MMMM \\de YYYY LT",
                LLLL: "dddd, D \\de MMMM \\de YYYY LT"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[ma\u00f1ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d\u00eda",
                dd: "%d d\u00edas",
                M: "un mes",
                MM: "%d meses",
                y: "un a\u00f1o",
                yy: "%d a\u00f1os"
            },
            ordinal: "%d\u00ba",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();