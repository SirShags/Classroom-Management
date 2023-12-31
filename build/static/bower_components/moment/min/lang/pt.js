// moment.js language configuration
// language : portuguese (pt)
// author : Jefferson : https://github.com/jalex79
(function () {
    function e(e) {
        e.lang("pt", {
            months: "Janeiro_Fevereiro_Mar\u00e7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Ter\u00e7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00e1bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\u00e1b".split("_"),
            weekdaysMin: "Dom_2\u00aa_3\u00aa_4\u00aa_5\u00aa_6\u00aa_S\u00e1b".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D \\de MMMM \\de YYYY",
                LLL: "D \\de MMMM \\de YYYY LT",
                LLLL: "dddd, D \\de MMMM \\de YYYY LT"
            },
            calendar: {
                sameDay: "[Hoje \u00e0s] LT",
                nextDay: "[Amanh\u00e3 \u00e0s] LT",
                nextWeek: "dddd [\u00e0s] LT",
                lastDay: "[Ontem \u00e0s] LT",
                lastWeek: function () {
                    return this.day() === 0 || this.day() === 6 ? "[\u00daltimo] dddd [\u00e0s] LT" : "[\u00daltima] dddd [\u00e0s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atr\u00e1s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m\u00eas",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinal: "%d\u00ba",
            week: {dow: 1, doy: 4}
        })
    }

    typeof define == "function" && define.amd && define(["../../moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();