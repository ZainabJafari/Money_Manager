import { Currencies } from '@/lib/currencies';
import { z } from 'zod';
export const UpdateUserCurrencySchema = z.object({
    currencey: z.custom((value) => {
        const found = Currencies.some((c) => c.value === value);
        if (!found) {
            throw new Error('Invalid currency');
        }
        return value;
    }),
});    