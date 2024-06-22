"use client"

import { Dialog, DialogTitle } from "@/components/ui/dialog";
import { TransactionType } from "@/lib/types";
import { ReactNode } from "react"

interface Props {
    trigger: ReactNode;
    type: TransactionType
}

function CreateTransactionDialog({trigger, type}: Props){
    return (
        <Dialog>
            <DialogTitle asChild>{trigger}</DialogTitle>
        </Dialog>
    )
}

export default CreateTransactionDialog