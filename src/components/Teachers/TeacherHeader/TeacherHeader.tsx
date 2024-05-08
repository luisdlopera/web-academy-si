import React, { ReactNode } from 'react';
import { Profile } from '@/components/Shared/Profile';

interface StudentHeaderProps {
    children?: ReactNode;
}

const TeacherHeader = ({ children }: StudentHeaderProps) => {
    return (
        <section className='flex flex-col justify-end w-3/4 px-8'>
            <div className='w-full flex items-center justify-between h-16 my-6 gap-2 bg-secondary'>
                <p><strong>Bienvenida,</strong> MAIRA LISETH PEREZ</p>
                <p><strong>Grado,</strong> 10°</p>
                <p><strong>Periodo,</strong> 2024-1</p>
                <Profile />
            </div>
            {children}
        </section>
    )
}

export { TeacherHeader }