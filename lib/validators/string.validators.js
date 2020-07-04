"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var patterns_1 = __importDefault(require("patterns"));
var functionNames_1 = __importDefault(require("constants/functionNames"));
function isValidName(name) {
    return patterns_1.default.PERSON_NAME.test(name);
}
exports.default = (_a = {},
    _a[functionNames_1.default.NAME_VALIDATOR] = isValidName,
    _a);
//# sourceMappingURL=string.validators.js.map