import * as NUMBER_PATTERNS from './patterns/number.patterns';
import * as STRING_PATTERNS from './patterns/string.patterns';
import * as ALPHA_NUMERIC_PATTERNS from './patterns/alphaNumeric.patterns';

export default {
  ...NUMBER_PATTERNS,
  ...STRING_PATTERNS,
  ...ALPHA_NUMERIC_PATTERNS,
};