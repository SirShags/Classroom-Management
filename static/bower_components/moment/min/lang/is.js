// moment.js language configuration
// language : icelandic (is)
// author : Hinrik Örn Sigurðsson : https://github.com/hinrik
(function () {
    function e(e) {
        function t(e) {
            return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0
        }

        function n(e, n, r, i) {
            var s = e + " ";
            switch (r) {
                case"s":
                    return n || i ? "nokkrar sek\u00fandur" : "nokkrum sek\u00fandum";
                case"m":
                    return n ? "m\u00edn\u00fata" : "m\u00edn\u00fatu";
                case"mm":
                    if (t(e))return s + (n || i ? "m\u00edn\u00fatur" : "m\u00edn\u00fatum");
                    if (n)return s + "m\u00edn\u00fata";
                    return s + "m\u00edn\u00fatu";
                case"hh":
                    if (t(e))return s + (n || i ? "klukkustundir" : "klukkustundum");
                    return s + "klukkustund";
                case"d":
                    if (n)return "dagur";
                    return i ? "dag" : "degi";
                case"dd":
                    if (t(e))return n ? s + "dagar" : s + (i ? "daga" : "d\u00f6gum");
                    if (n)return s + "dagur";
                    return s + (i ? "dag" : "degi");
                case"M":
                    if (n)return "m\u00e1nu\u00f0ur";
                    return i ? "m\u00e1nu\u00f0" : "m\u00e1nu\u00f0i";
                case"MM":
                    if (t(e))return n ? s + "m\u00e1nu\u00f0ir" : s + (i ? "m\u00e1nu\u00f0i" : "m\u00e1nu\u00f0um");
                    if (n)return s + "m\u00e1nu\u00f0ur";
                    return s + (i ? "m\u00e1nu\u00f0" : "m\u00e1nu\u00f0i");
                case"y":
                    return n || i ? "\u00e1r" : "\u00e1ri";
                case"yy":
                    if (t(e))return s + (n || i ? "\u00e1r" : "\u00e1rum");
                    return s + (n || i ? "\u00e1r" : "\u00e1ri")
            }
        }

        e.lang("is", {
            months: "jan\u00faar_febr\u00faar_mars_apr\u00edl_ma\u00ed_j\u00fan\u00ed_j\u00fal\u00ed_\u00e1g\u00fast_september_okt\u00f3ber_n\u00f3vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_ma\u00ed_j\u00fan_j\u00fal_\u00e1g\u00fa_sep_okt_n\u00f3v_des".split("_"),
            weekdays: "sunnudagur_m\u00e1nudagur_\u00feri\u00f0judagur_mi\u00f0vikudagur_fimmtudagur_f\u00f6studagur_laugardagur".split("_"),
            weekdaysShort: "sun_m\u00e1n_\u00feri_mi\u00f0_fim_f\u00f6s_lau".split("_"),
            weekdaysMin: "Su_M\u00e1_\u00der_Mi_Fi_F\u00f6_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd, D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[\u00ed dag kl.] LT",
                nextDay: "[\u00e1 morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[\u00ed g\u00e6r kl.] LT",
                lastWeek: "[s\u00ed\u00f0asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s s\u00ed\u00f0an",
                s: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();