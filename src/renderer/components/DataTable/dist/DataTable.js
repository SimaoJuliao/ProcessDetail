"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
exports.DataTable = void 0;
var react_1 = require("react");
var BootstrapLayout_1 = require("./Components/Bootstrap/BootstrapLayout");
var react_table_1 = require("react-table");
var useSortable_1 = require("./Hooks/useSortable");
var usePagination_1 = require("./Hooks/usePagination");
var useFilters_1 = require("./Hooks/useFilters");
exports.DataTable = function (_a) {
    var columns = _a.columns, data = _a.data, hiddenColumnsAccessor = _a.hiddenColumnsAccessor, sortColumnsAccessors = _a.sortColumnsAccessors, fetchData = _a.fetchData, totalItemCount = _a.totalItemCount, _b = _a.filters, filters = _b === void 0 ? [] : _b;
    var dataTableInstance = react_table_1.useTable({
        columns: columns,
        data: data
    });
    var _c = react_1.useState(false), fetchDataNextRender = _c[0], setFetchDataNextRender = _c[1];
    var _d = react_1.useState(10), maxPageItems = _d[0], setMaxPageItems = _d[1];
    var _e = useSortable_1.useSortable(), sortParam = _e.sortParam, changeSortParam = _e.changeSortParam;
    var pagination = usePagination_1.usePagination(totalItemCount, maxPageItems, fetchDataNextRender);
    var filtersState = useFilters_1.useFilters(filters);
    react_1.useEffect(function () {
        if (hiddenColumnsAccessor === null || hiddenColumnsAccessor === void 0 ? void 0 : hiddenColumnsAccessor.length) {
            dataTableInstance.setHiddenColumns(hiddenColumnsAccessor);
        }
        fetchServiceData();
    }, []);
    react_1.useEffect(function () {
        var asyncCall = function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchData({ pagination: pagination, sortParam: sortParam, filters: filtersState.state, maxPageItems: maxPageItems })];
                    case 1:
                        _a.sent();
                        setFetchDataNextRender(false);
                        return [2 /*return*/];
                }
            });
        }); };
        if (fetchDataNextRender) {
            asyncCall();
        }
    }, [fetchDataNextRender]);
    var fetchServiceData = function (resetPagination) {
        if (resetPagination === void 0) { resetPagination = true; }
        resetPagination && pagination.resetPagination();
        setFetchDataNextRender(true);
    };
    return (react_1["default"].createElement(BootstrapLayout_1.BootstrapLayout, { dataTableInstance: dataTableInstance, sortColumnsAccessors: sortColumnsAccessors, sortParam: sortParam, maxPageItems: maxPageItems, filters: filtersState, pagination: pagination, controls: {
            changeMaxPageItems: function (value) { return setMaxPageItems(value); },
            changeSortParam: function (id) {
                changeSortParam(id);
                fetchServiceData(false);
            },
            fetchServiceData: fetchServiceData
        } }));
};
