"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var patterns_1 = __importDefault(require("patterns"));
var functionNames_1 = __importDefault(require("constants/functionNames"));
function isValidPhone(phoneNumber) {
    return patterns_1.default.PHONE_NUMBER.test(phoneNumber);
}
exports.default = (_a = {},
    _a[functionNames_1.default.PHONE_VALIDATOR] = isValidPhone,
    _a);
//# sourceMappingURL=number.validators.js.map