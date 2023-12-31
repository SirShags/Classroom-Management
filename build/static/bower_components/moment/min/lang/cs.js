// moment.js language configuration
// language : czech (cs)
// author : petrbela : https://github.com/petrbela
(function () {
    function e(e) {
        function r(e) {
            return e > 1 && e < 5 && ~~(e / 10) !== 1
        }

        function i(e, t, n, i) {
            var s = e + " ";
            switch (n) {
                case"s":
                    return t || i ? "p\u00e1r vte\u0159in" : "p\u00e1r vte\u0159inami";
                case"m":
                    return t ? "minuta" : i ? "minutu" : "minutou";
                case"mm":
                    return t || i ? s + (r(e) ? "minuty" : "minut") : s + "minutami";
                    break;
                case"h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case"hh":
                    return t || i ? s + (r(e) ? "hodiny" : "hodin") : s + "hodinami";
                    break;
                case"d":
                    return t || i ? "den" : "dnem";
                case"dd":
                    return t || i ? s + (r(e) ? "dny" : "dn\u00ed") : s + "dny";
                    break;
                case"M":
                    return t || i ? "m\u011bs\u00edc" : "m\u011bs\u00edcem";
                case"MM":
                    return t || i ? s + (r(e) ? "m\u011bs\u00edce" : "m\u011bs\u00edc\u016f") : s + "m\u011bs\u00edci";
                    break;
                case"y":
                    return t || i ? "rok" : "rokem";
                case"yy":
                    return t || i ? s + (r(e) ? "roky" : "let") : s + "lety"
            }
        }

        var t = "leden_\u00fanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\u00e1\u0159\u00ed_\u0159\u00edjen_listopad_prosinec".split("_"), n = "led_\u00fano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\u00e1\u0159_\u0159\u00edj_lis_pro".split("_");
        e.lang("cs", {
            months: t,
            monthsShort: n,
            monthsParse: function (e, t) {
                var n, r = [];
                for (n = 0; n < 12; n++)r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return r
            }(t, n),
            weekdays: "ned\u011ble_pond\u011bl\u00ed_\u00fater\u00fd_st\u0159eda_\u010dtvrtek_p\u00e1tek_sobota".split("_"),
            weekdaysShort: "ne_po_\u00fat_st_\u010dt_p\u00e1_so".split("_"),
            weekdaysMin: "ne_po_\u00fat_st_\u010dt_p\u00e1_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[z\u00edtra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v ned\u011bli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve st\u0159edu v] LT";
                        case 4:
                            return "[ve \u010dtvrtek v] LT";
                        case 5:
                            return "[v p\u00e1tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[v\u010dera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou ned\u011bli v] LT";
                        case 1:
                        case 2:
                            return "[minul\u00e9] dddd [v] LT";
                        case 3:
                            return "[minulou st\u0159edu v] LT";
                        case 4:
                        case 5:
                            return "[minul\u00fd] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "p\u0159ed %s",
                s: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();