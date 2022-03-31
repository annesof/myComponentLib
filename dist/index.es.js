import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Button as Button$1, Checkbox as Checkbox$1, Grid, TextField, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { transitions } from 'polished';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState, useEffect, useRef, useCallback } from 'react';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

//https://github.com/mui-org/material-ui/issues/22452
//component's rewrite because of a bug with typescript, prop "component" is not recognized
var useStyles$1 = makeStyles(function () { return ({
    root: __assign({ borderRadius: "20px", boxShadow: "none", lineHeight: 1.65, padding: "3px 13px 3px 19px" }, transitions(["background", "borderColor"], "250ms cubic-bezier(0.4, 0, 0.2, 1) 0s")),
    outlinedSizeSmall: {
        padding: "3px 11px 3px 15px",
        borderRadius: "20px",
        margin: "0px 6px 0px 6px",
    },
    outlinedSizeLarge: {
        padding: "7px 21px 7px 25px",
        borderRadius: "20px",
    },
    containedSizeSmall: {
        padding: "3px 11px 3px 15px",
        borderRadius: "20px",
        margin: "0px 6px 0px 6px",
    },
    containedSizeLarge: {
        padding: "7px 21px 7px 25px",
        borderRadius: "20px",
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
    var classes = useStyles$1();
    return (jsx(Button$1, __assign({ classes: classes }, props, { children: children }), void 0));
};

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var SvgComponent$2 = function (props) { return (jsx("svg", __assign({ viewBox: '0 0 10 10', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: jsx("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm3.96 6.906a.311.311 0 0 1-.433 0L2.582 4.961a.311.311 0 0 1 0-.434l.422-.422a.297.297 0 0 1 .422 0L4.75 5.418l2.813-2.813a.297.297 0 0 1 .421 0l.422.422a.311.311 0 0 1 0 .434L4.961 6.906Z' }, void 0) }), void 0)); };

var SvgComponent$1 = function (props) { return (jsxs("svg", __assign({ viewBox: '0 0 10 10', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: [jsx("rect", { rx: 1 }, void 0), jsx("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M9 1H1v8h8V1ZM3 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H3Z' }, void 0)] }), void 0)); };

var SvgComponent = function (props) { return (jsx("svg", __assign({ viewBox: '0 0 10 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: jsx("rect", { x: 0.5, y: 0.5, width: 9, height: 9, rx: 0.5 }, void 0) }), void 0)); };

var useStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    icon: {
        borderRadius: 1,
        width: 12,
        height: 12,
        boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
        "input:disabled ~ &": {
            boxShadow: "none",
        },
    },
    uncheckedIcon: {
        stroke: "#18A0FB",
        backgroundColor: "white",
        "input:hover ~ &": {
            backgroundColor: "#F1F1F1",
        },
        "input:disabled ~ &": {
            stroke: "#B2B2B2",
            backgroundColor: "#F1F1F1",
        },
    },
    checkedIcon: {
        fill: "#18A0FB",
        background: "white",
        "input:disabled ~ &": {
            fill: "#B2B2B2",
        },
    },
    indeterminateIcon: {
        background: "#18A0FB",
        fill: "white",
        boxShadow: "none",
        "input:disabled ~ &": {
            background: "#B2B2B2",
            fill: "#F1F1F1",
        },
    },
});
var Checkbox = function (props) {
    var classes = useStyles();
    return (jsx(Checkbox$1, __assign({ disableRipple: true, className: classes.root, color: 'default', checkedIcon: jsx(SvgComponent$2, { className: clsx(classes.icon, classes.checkedIcon) }, void 0), icon: jsx(SvgComponent, { className: clsx(classes.icon, classes.uncheckedIcon) }, void 0), indeterminateIcon: jsx(SvgComponent$1, { className: clsx(classes.icon, classes.indeterminateIcon) }, void 0) }, props), void 0));
};

function useDebounce(value, delay) {
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        var timer = setTimeout(function () { return setDebouncedValue(value); }, delay || 500);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}

var AsyncAutocompletePaginated = function (_a) {
    var loadOptions = _a.loadOptions, _b = _a.renderOptionCustom, renderOptionCustom = _b === void 0 ? undefined : _b, _c = _a.value, valueFilter = _c === void 0 ? null : _c; _a.valueAccessor; var _e = _a.labelAccessor, labelAccessor = _e === void 0 ? "label" : _e, _f = _a.label, label = _f === void 0 ? undefined : _f, _g = _a.error, error = _g === void 0 ? false : _g, _h = _a.helperText, helperText = _h === void 0 ? "" : _h, _j = _a.fetchSize, fetchSize = _j === void 0 ? 15 : _j, props = __rest(_a, ["loadOptions", "renderOptionCustom", "value", "valueAccessor", "labelAccessor", "label", "error", "helperText", "fetchSize"]);
    var _k = useState(""), inputValue = _k[0], setInputValue = _k[1];
    var _l = useState([]), options = _l[0], setOptions = _l[1];
    var _m = useState(false), loading = _m[0], setLoading = _m[1];
    var _o = useState(0), offset = _o[0], setOffset = _o[1];
    var _isMounted = useRef(true);
    var _p = useState(0), nbItems = _p[0], setNbItems = _p[1];
    var _q = useState(true), keepGoing = _q[0], setKeepGoing = _q[1];
    var debouncedSearchTerm = useDebounce(inputValue, 500);
    useEffect(function () {
        return function () {
            // ComponentWillUnmount
            _isMounted.current = false;
        };
    }, []);
    var fetchData = useCallback(function (input, offset) {
        if (input === void 0) { input = ""; }
        function fetch(name, offset) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var result_1, _b, e_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 3, , 4]);
                            _b = loadOptions;
                            if (!_b) return [3 /*break*/, 2];
                            return [4 /*yield*/, ((_a = loadOptions(name, offset, fetchSize)) === null || _a === void 0 ? void 0 : _a.json())];
                        case 1:
                            _b = (_c.sent());
                            _c.label = 2;
                        case 2:
                            result_1 = _b;
                            if (_isMounted.current && result_1) {
                                setOffset(offset);
                                // to prevent update state when component is unmount
                                offset === 0
                                    ? setOptions(result_1.items)
                                    : setOptions(function (opt) { return opt.concat(result_1.items); });
                                nbItems || setNbItems(result_1.count);
                                setLoading(false);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _c.sent();
                            console.log(e_1);
                            if (_isMounted.current) {
                                // to prevent update state when component is unmount
                                setOptions([]);
                                setNbItems(0);
                                setLoading(false);
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        setLoading(true);
        fetch(input, offset);
    }, [loadOptions, fetchSize, nbItems]);
    useEffect(function () {
        setInputValue(valueFilter ? valueFilter[labelAccessor] : "");
    }, [valueFilter, labelAccessor]);
    useEffect(function () {
        options.length === nbItems && setKeepGoing(false);
    }, [nbItems, options.length]);
    var handleChange = function (event) {
        var val = event.target.value;
        setInputValue(val[labelAccessor] || val);
    };
    var handleSelectChange = function (event, value, reason) {
        props.onChange && props.onChange(event, value, reason);
        var computedValue = value && value[labelAccessor] ? value[labelAccessor] : value;
        setInputValue(props.multiple || !computedValue ? "" : computedValue);
    };
    var renderOption = function (option, state) {
        if (renderOptionCustom) {
            return renderOptionCustom(option, state);
        }
        return (jsx(Grid, __assign({ container: true, alignItems: 'center' }, { children: jsx(Grid, __assign({ item: true, xs: true }, { children: option && option[labelAccessor] ? option[labelAccessor] : option }), void 0) }), void 0));
    };
    useEffect(function () {
        if (!valueFilter ||
            debouncedSearchTerm === "" ||
            valueFilter.value !== debouncedSearchTerm) {
            fetchData(inputValue, 0);
            setKeepGoing(true);
        }
        //needed to avoid inputValue missing warning
        // eslint-disable-next-line
    }, [debouncedSearchTerm, fetchData, valueFilter]);
    var controlledValue = valueFilter !== null ? { value: valueFilter } : { value: "" };
    return (jsx(Grid, __assign({ container: true, spacing: 1 }, { children: jsx(Grid, __assign({ item: true, xs: 9 }, { children: jsx(Autocomplete, __assign({ filterOptions: function (x) { return x; }, getOptionSelected: function (option) {
                    return valueFilter && option === valueFilter[labelAccessor];
                }, getOptionLabel: function (option) {
                    return option[labelAccessor] || option[labelAccessor] === ""
                        ? option[labelAccessor]
                        : option;
                } }, controlledValue, props, { options: options, onChange: handleSelectChange, openOnFocus: true, loading: loading, ListboxProps: {
                    //load more when scroll
                    onScroll: function (event) {
                        var listboxNode = event.currentTarget;
                        if (Math.round(listboxNode.scrollTop) + listboxNode.clientHeight ===
                            listboxNode.scrollHeight) {
                            keepGoing && fetchData(inputValue, offset + fetchSize);
                        }
                    },
                }, renderInput: function (params) { return (jsx(TextField, __assign({}, params, { label: label, fullWidth: true, error: error, helperText: helperText, onChange: handleChange, inputProps: __assign(__assign({}, params.inputProps), { value: inputValue }), InputProps: __assign(__assign({}, params.InputProps), { endAdornment: (jsxs(Fragment, { children: [loading && jsx(CircularProgress, { color: 'inherit', size: 20 }, void 0), params.InputProps.endAdornment] }, void 0)) }) }), void 0)); }, renderOption: renderOption }), void 0) }), void 0) }), void 0));
};

export { AsyncAutocompletePaginated, Button, Checkbox };
//# sourceMappingURL=index.es.js.map
