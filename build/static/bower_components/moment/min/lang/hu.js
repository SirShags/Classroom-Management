// moment.js language configuration
// language : hungarian (hu)
// author : Adam Brunner : https://github.com/adambrunner
(function () {
    function e(e) {
        function n(e, t, n, r) {
            var i = e, s;
            switch (n) {
                case"s":
                    return r || t ? "n\u00e9h\u00e1ny m\u00e1sodperc" : "n\u00e9h\u00e1ny m\u00e1sodperce";
                case"m":
                    return "egy" + (r || t ? " perc" : " perce");
                case"mm":
                    return i + (r || t ? " perc" : " perce");
                case"h":
                    return "egy" + (r || t ? " \u00f3ra" : " \u00f3r\u00e1ja");
                case"hh":
                    return i + (r || t ? " \u00f3ra" : " \u00f3r\u00e1ja");
                case"d":
                    return "egy" + (r || t ? " nap" : " napja");
                case"dd":
                    return i + (r || t ? " nap" : " napja");
                case"M":
                    return "egy" + (r || t ? " h\u00f3nap" : " h\u00f3napja");
                case"MM":
                    return i + (r || t ? " h\u00f3nap" : " h\u00f3napja");
                case"y":
                    return "egy" + (r || t ? " \u00e9v" : " \u00e9ve");
                case"yy":
                    return i + (r || t ? " \u00e9v" : " \u00e9ve")
            }
            return ""
        }

        function r(e) {
            return (e ? "" : "m\u00falt ") + "[" + t[this.day()] + "] LT[-kor]"
        }

        var t = "vas\u00e1rnap h\u00e9tf\u0151n kedden szerd\u00e1n cs\u00fct\u00f6rt\u00f6k\u00f6n p\u00e9nteken szombaton".split(" ");
        e.lang("hu", {
            months: "janu\u00e1r_febru\u00e1r_m\u00e1rcius_\u00e1prilis_m\u00e1jus_j\u00fanius_j\u00falius_augusztus_szeptember_okt\u00f3ber_november_december".split("_"),
            monthsShort: "jan_feb_m\u00e1rc_\u00e1pr_m\u00e1j_j\u00fan_j\u00fal_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vas\u00e1rnap_h\u00e9tf\u0151_kedd_szerda_cs\u00fct\u00f6rt\u00f6k_p\u00e9ntek_szombat".split("_"),
            weekdaysShort: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D., LT",
                LLLL: "YYYY. MMMM D., dddd LT"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return r.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return r.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s m\u00falva",
                past: "%s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();