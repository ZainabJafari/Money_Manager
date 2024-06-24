import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { TransactionType } from '@/lib/types'
import { CreateCategoryShcema, CreateCategoryShcemaType } from '@/schema/categories'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface Props {
    type: TransactionType
}

const CreateCategoryDialog = ({type} : Props) => {
    const [open, setOpen] = useState(false) 
    const form = useForm<CreateCategoryShcemaType>({
        resolver: zodResolver(CreateCategoryShcema),
        defaultValues: {
            type
        }

    })
  return (
   <Dialog>
    <DialogTrigger asChild>
        <Button variant={'ghost'}
        className='flex border-separate item-center'>
             <PlusSquare />
             Create new
        </Button>
    </DialogTrigger>
   </Dialog>
  )
}

export default CreateCategoryDialog
