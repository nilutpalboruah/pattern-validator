import PATTERNS from 'patterns';
import FUNCTION_NAMES from 'constants/functionNames';

function isValidName(name: string): boolean {
  return PATTERNS.PERSON_NAME.test(name);
}

export default {
  [FUNCTION_NAMES.NAME_VALIDATOR]: isValidName
}