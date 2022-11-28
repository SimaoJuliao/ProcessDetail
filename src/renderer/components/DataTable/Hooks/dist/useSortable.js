"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useSortable = void 0;
var react_1 = require("react");
exports.useSortable = function () {
    var _a = react_1.useState({
        sortByAccessorId: '',
        isSortedDesc: false
    }), sortParam = _a[0], setSortParam = _a[1];
    var changeSortParam = react_1.useCallback(function (accessorId) {
        if (accessorId === sortParam.sortByAccessorId) {
            setSortParam(__assign(__assign({}, sortParam), { isSortedDesc: !sortParam.isSortedDesc }));
        }
        else {
            setSortParam({ sortByAccessorId: accessorId, isSortedDesc: false });
        }
    }, [sortParam]);
    return { sortParam: sortParam, changeSortParam: changeSortParam };
};
