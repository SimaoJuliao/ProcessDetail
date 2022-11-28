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
exports.BootstrapLayout = void 0;
var react_1 = require("react");
var Table_1 = require("react-bootstrap/Table");
var react_bootstrap_1 = require("react-bootstrap");
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var styles_1 = require("./styles");
var DropDown_1 = require("../../../DropDown");
var configs_1 = require("./configs");
var Pagination_1 = require("./Pagination");
exports.BootstrapLayout = function (_a) {
    var dataTableInstance = _a.dataTableInstance, sortParam = _a.sortParam, sortColumnsAccessors = _a.sortColumnsAccessors, maxPageItems = _a.maxPageItems, filters = _a.filters, pagination = _a.pagination, _b = _a.controls, changeSortParam = _b.changeSortParam, changeMaxPageItems = _b.changeMaxPageItems, fetchServiceData = _b.fetchServiceData;
    var getTableProps = dataTableInstance.getTableProps, headerGroups = dataTableInstance.headerGroups, rows = dataTableInstance.rows, prepareRow = dataTableInstance.prepareRow;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_bootstrap_1.Row, null,
            react_1["default"].createElement(react_bootstrap_1.Col, { sm: 6 },
                react_1["default"].createElement(styles_1.StyledWrapper, null,
                    react_1["default"].createElement(styles_1.StyledLabel, null, "VER POR P\u00C1GINA"),
                    react_1["default"].createElement(DropDown_1["default"], { label: "", options: configs_1.PageSizeDropdown, onValueChanged: function (id, value) {
                            if (!value || isNaN(parseFloat(value)))
                                return;
                            changeMaxPageItems(+value);
                            fetchServiceData();
                        }, value: "" + maxPageItems }))),
            filters.components.map(function (filterComponent) {
                var _a;
                return (react_1["default"].createElement(react_bootstrap_1.Col, { sm: 6 },
                    react_1["default"].createElement(styles_1.StyledWrapper, null,
                        react_1["default"].createElement(styles_1.StyledLabel, null, filterComponent.label.toUpperCase()),
                        filterComponent.getComponent(function (newValue) {
                            filters.changeFilterState(filterComponent.name, newValue);
                            fetchServiceData();
                        }, ((_a = filters.state.find(function (s) { return s.name === filterComponent.name; })) === null || _a === void 0 ? void 0 : _a.value) || ''))));
            })),
        react_1["default"].createElement(react_bootstrap_1.Row, null,
            react_1["default"].createElement(react_bootstrap_1.Col, null,
                react_1["default"].createElement(Table_1["default"], __assign({ striped: true, bordered: true, hover: true, size: "sm" }, getTableProps()),
                    react_1["default"].createElement("thead", null, headerGroups.map(function (headerGroup) { return (react_1["default"].createElement("tr", __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) { return (react_1["default"].createElement("th", __assign({}, column.getHeaderProps()),
                        react_1["default"].createElement(styles_1.StyledHeader, null,
                            column.render('Header'),
                            (sortColumnsAccessors === null || sortColumnsAccessors === void 0 ? void 0 : sortColumnsAccessors.includes(column.id)) ? (column.id === sortParam.sortByAccessorId ? (sortParam.isSortedDesc ? (react_1["default"].createElement(react_bootstrap_icons_1.ChevronDown, { className: 'active-icon', onClick: function () { return changeSortParam(column.id); } })) : (react_1["default"].createElement(react_bootstrap_icons_1.ChevronUp, { className: 'active-icon', onClick: function () { return changeSortParam(column.id); } }))) : (react_1["default"].createElement(react_bootstrap_icons_1.ChevronDown, { onClick: function () { return changeSortParam(column.id); } }))) : null))); }))); })),
                    react_1["default"].createElement("tbody", null, rows.map(function (row, i) {
                        prepareRow(row);
                        return (react_1["default"].createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
                            return react_1["default"].createElement("td", __assign({}, cell.getCellProps()), cell.render('Cell'));
                        })));
                    }))))),
        react_1["default"].createElement(react_bootstrap_1.Row, null,
            react_1["default"].createElement(react_bootstrap_1.Col, { sm: true }),
            react_1["default"].createElement(react_bootstrap_1.Col, { sm: true },
                react_1["default"].createElement(Pagination_1.Pagination, { pagination: pagination, fetchServiceData: function () {
                        fetchServiceData(false);
                    } })))));
};
