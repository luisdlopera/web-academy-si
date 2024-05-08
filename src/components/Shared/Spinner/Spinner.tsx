import NextImage from 'next/image';
// Sources
import { Image } from '@nextui-org/react';
import { Spinner as NextSpinner } from '@nextui-org/react';

export function Spinner() {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-[#0008] fixed top-0 left-0 z-50'>
            <NextSpinner/>
        </div>
    )
};  