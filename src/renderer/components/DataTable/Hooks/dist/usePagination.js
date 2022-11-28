"use strict";
exports.__esModule = true;
exports.usePagination = void 0;
var react_1 = require("react");
exports.usePagination = function (totalItems, length, fetchDataNextRender) {
    var _a = react_1.useState(0), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = react_1.useState(0), pageCount = _b[0], setPageCount = _b[1];
    react_1.useEffect(function () {
        setPageCount(totalItems !== undefined ? Math.ceil(totalItems / length) : 0);
    }, [totalItems, length, fetchDataNextRender]);
    return {
        currentPage: currentPage,
        pageCount: pageCount,
        changeCurrentPageSelected: function (value) {
            setPageCount(length ? Math.ceil(totalItems / length) : 0);
            setCurrentPage(value);
        },
        resetPagination: function () {
            setCurrentPage(0);
            setPageCount(0);
            return 0;
        }
    };
};
