"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledWrapper = exports.StyledLabel = exports.StyledHeader = void 0;
var styled_components_1 = require("styled-components");
exports.StyledHeader = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: left;\n  padding: 8px 2px;\n\n  .active-icon {\n    color: #12a3bb;\n  }\n  svg {\n    margin: 4px;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  align-items: left;\n  padding: 8px 2px;\n\n  .active-icon {\n    color: #12a3bb;\n  }\n  svg {\n    margin: 4px;\n  }\n"])));
exports.StyledLabel = styled_components_1["default"].section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 14px;\n  letter-spacing: 2px;\n  color: #646464;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n"], ["\n  font-size: 14px;\n  letter-spacing: 2px;\n  color: #646464;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n"])));
exports.StyledWrapper = styled_components_1["default"].section(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3;
