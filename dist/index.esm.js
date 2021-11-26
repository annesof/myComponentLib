import { jsx } from 'react/jsx-runtime';
import { Button as Button$1 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { transitions, darken, shade, transparentize } from 'polished';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Colors = {
    black: "#000000",
    blueSw: "#00677A",
    tealSw: "#00AEAF",
};

//https://github.com/mui-org/material-ui/issues/22452
//component's rewrite because of a bug with typescript, prop "component" is not recognized
var useStyles = makeStyles(function () { return ({
    root: __assign(__assign({ background: "white", borderRadius: "15px", color: Colors.black, borderColor: Colors.black, boxShadow: "none", lineHeight: 1.65, padding: "3px 13px 3px 19px" }, transitions(["background", "borderColor"], "250ms cubic-bezier(0.4, 0, 0.2, 1) 0s")), { "&:hover": {
            background: Colors.tealSw,
            color: "white",
            borderColor: Colors.tealSw,
        }, "&:focus": {
            borderColor: darken(0.18, Colors.tealSw),
        }, "&:active": {
            background: shade(0.15, Colors.tealSw),
            borderColor: shade(0.15, Colors.tealSw),
            color: "white",
        }, "&[disabled]": {
            color: transparentize(0.5, Colors.tealSw),
        } }),
    outlinedSizeSmall: {
        padding: "3px 11px 3px 15px",
        borderRadius: "14px",
        margin: "0px 6px 0px 6px",
    },
    outlinedSizeLarge: {
        padding: "7px 21px 7px 25px",
        borderRadius: "20px",
    },
    containedPrimary: {
        backgroundColor: Colors.black,
        borderColor: Colors.black,
        color: "white",
        "&:hover": {
            background: Colors.blueSw,
            borderColor: Colors.blueSw,
        },
        "&[disabled]": {
            color: transparentize(0.5, "white"),
        },
    },
    iconSizeSmall: {
        "&>*:first-child": {
            fontSize: "14px",
        },
    },
    iconSizeMedium: {
        "&>*:first-child": {
            fontSize: "16px",
        },
    },
    iconSizeLarge: {
        "&>*:first-child": {
            fontSize: "18px",
        },
    },
    endIcon: {
        "&.MuiButton-iconSizeSmall": {
            marginLeft: "4px",
        },
        "&.MuiButton-iconSizeMedium": {
            marginLeft: "6px",
        },
        "&.MuiButton-iconSizeLarge": {
            marginLeft: "8px",
        },
    },
}); });
var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var classes = useStyles();
    return (jsx(Button$1, __assign({ classes: classes }, props, { children: children }), void 0));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
