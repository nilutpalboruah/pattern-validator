import PATTERNS from 'patterns';
import FUNCTION_NAMES from 'constants/functionNames';

function isValidPhone(phoneNumber: string): boolean {
  return PATTERNS.PHONE_NUMBER.test(phoneNumber);
}

export default {
  [FUNCTION_NAMES.PHONE_VALIDATOR]: isValidPhone
};
