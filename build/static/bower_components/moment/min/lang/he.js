// moment.js language configuration
// language : Hebrew (he)
// author : Tomer Cohen : https://github.com/tomer
// author : Moshe Simantov : https://github.com/DevelopmentIL
(function () {
    function e(e) {
        e.lang("he", {
            months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),
            monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),
            weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),
            weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),
            weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D [\u05d1]MMMM YYYY",
                LLL: "D [\u05d1]MMMM YYYY LT",
                LLLL: "dddd, D [\u05d1]MMMM YYYY LT",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY LT",
                llll: "ddd, D MMM YYYY LT"
            },
            calendar: {
                sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",
                nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT",
                nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT",
                lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",
                lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u05d1\u05e2\u05d5\u05d3 %s",
                past: "\u05dc\u05e4\u05e0\u05d9 %s",
                s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
                m: "\u05d3\u05e7\u05d4",
                mm: "%d \u05d3\u05e7\u05d5\u05ea",
                h: "\u05e9\u05e2\u05d4",
                hh: "%d \u05e9\u05e2\u05d5\u05ea",
                d: "\u05d9\u05d5\u05dd",
                dd: "%d \u05d9\u05de\u05d9\u05dd",
                M: "\u05d7\u05d5\u05d3\u05e9",
                MM: "%d \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd",
                y: "\u05e9\u05e0\u05d4",
                yy: "%d \u05e9\u05e0\u05d9\u05dd"
            }
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();