"use server";

import prisma from "@/lib/prisma";
import { UpdateUserCurrencySchema } from "@/schema/userSettings";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export async function UpdateUserCurrency(currencey: string) {
  const parsedBody = UpdateUserCurrencySchema.safeParse({ currencey }); 

    if (!parsedBody.success) {
        throw new Error('Invalid currency');
    }

    const user = await currentUser();
    if (!user) {
       redirect('/sign-in');
    }

    const userSettings = await prisma.userSettings.update({
        where: {
            userId: user.id,
        },
        data: {
            currency: currencey,
        },
    });

    return userSettings;
}