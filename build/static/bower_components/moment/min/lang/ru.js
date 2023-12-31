// moment.js language configuration
// language : russian (ru)
// author : Viktorminator : https://github.com/Viktorminator
(function () {
    function e(e) {
        function n(e, n) {
            var r = e.split("_"), i = Math.min(t.length, r.length), s = -1;
            while (++s < i)if (t[s](n))return r[s];
            return r[i - 1]
        }

        function r(e, t, r) {
            var i = {
                mm: "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442_\u043c\u0438\u043d\u0443\u0442\u044b",
                hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432_\u0447\u0430\u0441\u0430",
                dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439_\u0434\u043d\u044f",
                MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432_\u043c\u0435\u0441\u044f\u0446\u0430",
                yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442_\u0433\u043e\u0434\u0430"
            };
            return r === "m" ? t ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + n(i[r], +e)
        }

        function i(e, t) {
            var n = {
                nominative: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
                accusative: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_")
            }, r = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
            return n[r][e.month()]
        }

        function s(e, t) {
            var n = {
                nominative: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
                accusative: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_")
            }, r = /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
            return n[r][e.day()]
        }

        var t = [function (e) {
            return e % 10 === 1 && e % 100 !== 11
        }, function (e) {
            return e % 10 >= 2 && e % 10 <= 4 && e % 10 % 1 === 0 && (e % 100 < 12 || e % 100 > 14)
        }, function (e) {
            return e % 10 === 0 || e % 10 >= 5 && e % 10 <= 9 && e % 10 % 1 === 0 || e % 100 >= 11 && e % 100 <= 14 && e % 100 % 1 === 0
        }, function (e) {
            return !0
        }];
        e.lang("ru", {
            months: i,
            monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
            weekdays: s,
            weekdaysShort: "\u0432\u0441\u043a_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442".split("_"),
            weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY \u0433.",
                LLL: "D MMMM YYYY \u0433., LT",
                LLLL: "dddd, D MMMM YYYY \u0433., LT"
            },
            calendar: {
                sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432] LT",
                nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",
                lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
                nextWeek: function () {
                    return this.day() === 2 ? "[\u0412\u043e] dddd [\u0432] LT" : "[\u0412] dddd [\u0432] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd [\u0432] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd [\u0432] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd [\u0432] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "\u0447\u0435\u0440\u0435\u0437 %s",
                past: "%s \u043d\u0430\u0437\u0430\u0434",
                s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
                m: r,
                mm: r,
                h: "\u0447\u0430\u0441",
                hh: r,
                d: "\u0434\u0435\u043d\u044c",
                dd: r,
                M: "\u043c\u0435\u0441\u044f\u0446",
                MM: r,
                y: "\u0433\u043e\u0434",
                yy: r
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();