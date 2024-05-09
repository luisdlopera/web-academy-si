import NextImage from 'next/image';
// Sources
import { Image } from '@nextui-org/image';
import { Spinner as NextSpinner } from '@/components/Shared/Spinner';

export function Spinner() {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-[#0008] fixed top-0 left-0 z-50'>
            <NextSpinner/>
        </div>
    )
};  