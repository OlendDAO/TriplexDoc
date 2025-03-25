import { ZEROWEI } from '@_/constants';
import type { Wei } from '@synthetixio/wei';

export function calculateCRatio(debt?: Wei, collateralValue?: Wei) {
  if (debt && collateralValue && !debt.eq(0) && !collateralValue.eq(0)) {
    return collateralValue.div(debt);
  }
  return ZEROWEI;
}
