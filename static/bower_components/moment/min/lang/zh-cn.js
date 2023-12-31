// moment.js language configuration
// language : chinese
// author : suupic : https://github.com/suupic
(function () {
    function e(e) {
        e.lang("zh-cn", {
            months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
            weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
            weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
            longDateFormat: {
                LT: "Ah\u70b9mm",
                L: "YYYY\u5e74MMMD\u65e5",
                LL: "YYYY\u5e74MMMD\u65e5",
                LLL: "YYYY\u5e74MMMD\u65e5LT",
                LLLL: "YYYY\u5e74MMMD\u65e5ddddLT",
                l: "YYYY\u5e74MMMD\u65e5",
                ll: "YYYY\u5e74MMMD\u65e5",
                lll: "YYYY\u5e74MMMD\u65e5LT",
                llll: "YYYY\u5e74MMMD\u65e5ddddLT"
            },
            meridiem: function (e, t, n) {
                return e < 9 ? "\u65e9\u4e0a" : e < 11 && t < 30 ? "\u4e0a\u5348" : e < 13 && t < 30 ? "\u4e2d\u5348" : e < 18 ? "\u4e0b\u5348" : "\u665a\u4e0a"
            },
            calendar: {
                sameDay: "[\u4eca\u5929]LT",
                nextDay: "[\u660e\u5929]LT",
                nextWeek: "[\u4e0b]ddddLT",
                lastDay: "[\u6628\u5929]LT",
                lastWeek: "[\u4e0a]ddddLT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s\u5185",
                past: "%s\u524d",
                s: "\u51e0\u79d2",
                m: "1\u5206\u949f",
                mm: "%d\u5206\u949f",
                h: "1\u5c0f\u65f6",
                hh: "%d\u5c0f\u65f6",
                d: "1\u5929",
                dd: "%d\u5929",
                M: "1\u4e2a\u6708",
                MM: "%d\u4e2a\u6708",
                y: "1\u5e74",
                yy: "%d\u5e74"
            }
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();