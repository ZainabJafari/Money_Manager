"use client";
import React, { useState } from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { Link, Menu } from 'lucide-react'
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { UserButton } from '@clerk/nextjs';
import { ThemeSwitcherBtn } from './ThemeSwitcherBtn';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
        <MobileNavbar />
    </>
  )
}

const items = [ 
    {
        label: 'Dashboard',
        link: '/'
    },
    {
        label: 'Transactions',
        link: '/transactions'
    },
    {
        label: 'Manage',
        link: '/manage'
    },
]

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex items-center justify-between border-separate border-b bg-background md:hidden'>
           <nav className='container flex items-center justify-between px-8'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant='ghost' size={'icon'}>
                        <Menu />
                    </Button>                    
                </SheetTrigger>
                <SheetContent className='w-[400px] sm:w-[540px]' side="left">
                    
                        <Logo />
                    <div className='flex flex-col gap-4'>
                        {items.map((item) => (
                            <NavbarItem key={item.label} link={item.link} label={item.label} 
                            clickCallback={() => setIsOpen((prev) => !prev)}
                            />
                        ))}
                    </div>
                    </SheetContent>

            </Sheet>
            <div className='flex h-[80px] min-h-[60px] items-center gap-x-4'>
                <Logo />
            </div>
            <div className='flex items-center gap-2'>
                <ThemeSwitcherBtn />
                <UserButton afterSignOutUrl='/sign-in' />
            </div>
        
           </nav>
        </div>
    )
}
function DesktopNavbar() {
    return (
        <div className='hidden border-separate border-b bg-background md:block'>
            <nav className='container flex items-center justify-between px-8'>
                <div className='flex h-[80px] min-h-[60px] items-center gap-4'>
                    <Logo />
                    <div className='flex h-full'>
                        {items.map((item) => (
                            <NavbarItem key={item.label} link={item.link} label={item.label} />
                        ))} 
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <ThemeSwitcherBtn />
                    <UserButton afterSignOutUrl='/sign-in' />
                </div>
            </nav>
        </div>
    )
}

function NavbarItem({link, label , clickCallback}: {
    link: string;
    label: string;
    clickCallback?: () => void;
}) {
    const pathName = usePathname()
    const isActive = pathName === link;
    return (
        <div className='relative flex items-center'>
            <Link href={link} className={cn(
                buttonVariants({ variant: "ghost"}),
                "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
                isActive && "text-foreground"
            )}
            onClick={ () => { if (clickCallback) clickCallback() }}
            >
                {label}</Link>
            {isActive && <div className='absolute -bottom-[2px] left-1/2 hidden h-[2px] -translate-x-1/2 rounded-xl bg-primary md:block' />}
        </div>
    )
}
export default Navbar
