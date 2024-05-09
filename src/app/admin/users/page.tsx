

import { TableUser } from '@/components/Admin/TableUser/TableUser';
import { Spinner } from '@/components/Shared/Spinner';
import { useState } from 'react';

export default function UsersPage() {

    return (
        <div className='w-full h-screen flex flex-col items-center gap-5 bg-white rounded-md p-10'>
            <h1 className='w-full font-black text-3xl  text-primary text-center'>Gestión de usuarios</h1>

            <TableUser />

        </div>
    );
}