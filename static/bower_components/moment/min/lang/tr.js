// moment.js language configuration
// language : turkish (tr)
// authors : Erhan Gundogan : https://github.com/erhangundogan,
//           Burak Yiğit Kaya: https://github.com/BYK
(function () {
    function e(e) {
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'\u00fcnc\u00fc",
            4: "'\u00fcnc\u00fc",
            100: "'\u00fcnc\u00fc",
            6: "'nc\u0131",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'\u0131nc\u0131",
            90: "'\u0131nc\u0131"
        };
        e.lang("tr", {
            months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\u00fcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
            monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Sal\u0131_\u00c7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_\u00c7ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_\u00c7a_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[bug\u00fcn saat] LT",
                nextDay: "[yar\u0131n saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[d\u00fcn] LT",
                lastWeek: "[ge\u00e7en hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s \u00f6nce",
                s: "birka\u00e7 saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g\u00fcn",
                dd: "%d g\u00fcn",
                M: "bir ay",
                MM: "%d ay",
                y: "bir y\u0131l",
                yy: "%d y\u0131l"
            },
            ordinal: function (e) {
                if (e === 0)return e + "'\u0131nc\u0131";
                var n = e % 10, r = e % 100 - n, i = e >= 100 ? 100 : null;
                return e + (t[n] || t[r] || t[i])
            },
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();