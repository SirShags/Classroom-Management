// moment.js language configuration
// language : danish (da)
// author : Ulrik Nielsen : https://github.com/mrbase
(function () {
    function e(e) {
        e.lang("da", {
            months: "Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),
            weekdays: "S\u00f8ndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_L\u00f8rdag".split("_"),
            weekdaysShort: "S\u00f8n_Man_Tir_Ons_Tor_Fre_L\u00f8r".split("_"),
            weekdaysMin: "S\u00f8_Ma_Ti_On_To_Fr_L\u00f8".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd D. MMMM, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I g\u00e5r kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "f\u00e5 sekunder",
                m: "minut",
                mm: "%d minutter",
                h: "time",
                hh: "%d timer",
                d: "dag",
                dd: "%d dage",
                M: "m\u00e5nede",
                MM: "%d m\u00e5neder",
                y: "\u00e5r",
                yy: "%d \u00e5r"
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();