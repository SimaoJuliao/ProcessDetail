"use strict";
exports.__esModule = true;
exports.buildColumn = void 0;
exports.buildColumn = function (header, id, show, cell) {
    if (show === void 0) { show = true; }
    var obj = {
        Header: header,
        accessor: id,
        show: show
    };
    if (cell) {
        obj.Cell = cell;
    }
    return obj;
};
