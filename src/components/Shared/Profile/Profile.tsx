'use client';

import { useState } from 'react';
// Sources
import { Link, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import { LogOut, User } from 'lucide-react';

export function Profile() {
    const [isOpen, setIsOpen] = useState(false);

    return (        
        <Popover 
            isOpen={isOpen} 
            onOpenChange={open => setIsOpen(open)} 
            placement='bottom-end' 
            backdrop='blur'
        >
            <PopoverTrigger>
                <div className='p-4 rounded-lg flex items-center justify-center bg-white cursor-pointer border border-gray-300'>
                    <User />
                </div>
            </PopoverTrigger>
            <PopoverContent className='p-4 flex items-start'>
                
                <Link 
                    isBlock 
                    href='/settings' 
                    showAnchorIcon 
                    color='foreground' 
                    onClick={() => setIsOpen(false)}
                    className='w-full'
                >
                    Configuración
                </Link>
                <Link 
                    isBlock 
                    href='/support' 
                    showAnchorIcon 
                    color='foreground' 
                    onClick={() => setIsOpen(false)}
                    className='w-full'
                >
                    Soporte
                </Link>
                <Link 
                    isBlock 
                    href='/auth/login' 
                    color='danger' 
                    className='font-semibold flex gap-2' 
                >
                    Cerrar sesión
                    <LogOut size={15}/>
                </Link>
            </PopoverContent>
        </Popover>
    )
}