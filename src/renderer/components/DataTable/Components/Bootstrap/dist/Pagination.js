"use strict";
exports.__esModule = true;
exports.Pagination = void 0;
var react_1 = require("react");
var react_paginate_1 = require("react-paginate");
exports.Pagination = function (_a) {
    var fetchServiceData = _a.fetchServiceData, _b = _a.pagination, currentPage = _b.currentPage, changeCurrentPageSelected = _b.changeCurrentPageSelected, pageCount = _b.pageCount;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_paginate_1["default"], { pageCount: pageCount, forcePage: currentPage, onPageChange: function (data) {
                changeCurrentPageSelected(data.selected);
                fetchServiceData();
            }, previousLabel: 'Anterior', nextLabel: 'Próxima', breakLabel: '...', marginPagesDisplayed: 1, pageRangeDisplayed: 2, containerClassName: 'pagination pagination-sm', pageClassName: 'page-item', pageLinkClassName: 'page-link', previousClassName: 'page-item', previousLinkClassName: 'page-link', nextClassName: 'page-item', nextLinkClassName: 'page-link', activeClassName: 'active', breakClassName: 'page-link', breakLinkClassName: 'active' })));
};
