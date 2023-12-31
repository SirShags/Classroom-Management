// moment.js language configuration
// language : slovenian (sl)
// author : Robert Sedovšek : https://github.com/sedovsek
(function () {
    function e(e) {
        function t(e, t, n) {
            var r = e + " ";
            switch (n) {
                case"m":
                    return t ? "ena minuta" : "eno minuto";
                case"mm":
                    return e === 1 ? r += "minuta" : e === 2 ? r += "minuti" : e === 3 || e === 4 ? r += "minute" : r += "minut", r;
                case"h":
                    return t ? "ena ura" : "eno uro";
                case"hh":
                    return e === 1 ? r += "ura" : e === 2 ? r += "uri" : e === 3 || e === 4 ? r += "ure" : r += "ur", r;
                case"dd":
                    return e === 1 ? r += "dan" : r += "dni", r;
                case"MM":
                    return e === 1 ? r += "mesec" : e === 2 ? r += "meseca" : e === 3 || e === 4 ? r += "mesece" : r += "mesecev", r;
                case"yy":
                    return e === 1 ? r += "leto" : e === 2 ? r += "leti" : e === 3 || e === 4 ? r += "leta" : r += "let", r
            }
        }

        e.lang("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[v\u010deraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[prej\u0161nja] dddd [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prej\u0161nji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "\u010dez %s",
                past: "%s nazaj",
                s: "nekaj sekund",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "en dan",
                dd: t,
                M: "en mesec",
                MM: t,
                y: "eno leto",
                yy: t
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();