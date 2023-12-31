// moment.js language configuration
// language : catalan (ca)
// author : Juan G. Hurtado : https://github.com/juanghurtado
(function () {
    function e(e) {
        e.lang("ca", {
            months: "Gener_Febrer_Mar\u00e7_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),
            monthsShort: "Gen._Febr._Mar._Abr._Mai._Jun._Jul._Ag._Set._Oct._Nov._Des.".split("_"),
            weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),
            weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                }, nextDay: function () {
                    return "[dem\u00e0 a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (this.hours() !== 1 ? "les" : "la") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinal: "%d\u00ba",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();