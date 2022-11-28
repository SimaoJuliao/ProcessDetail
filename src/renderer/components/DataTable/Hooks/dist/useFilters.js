"use strict";
exports.__esModule = true;
exports.useFilters = void 0;
var react_1 = require("react");
var lodash_1 = require("lodash");
exports.useFilters = function (components) {
    var _a = react_1.useState(components.map(function (f) { return ({ name: f.name, value: (f === null || f === void 0 ? void 0 : f.defaultValue) || '' }); })), state = _a[0], setFilterState = _a[1];
    return {
        components: components,
        state: state,
        changeFilterState: function (name, newValue) {
            var newFilterState = lodash_1["default"].cloneDeep(state).map(function (s) {
                if (s.name === name) {
                    s.value = newValue;
                }
                return s;
            });
            setFilterState(newFilterState);
        }
    };
};
