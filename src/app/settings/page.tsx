import { StudentHeader } from '@/components/Students';
import { ButtonMenu } from '@/components/Shared/ButtonMenu';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import { ChevronRight, Save, UserCog, Lock } from 'lucide-react';

export default function settingsPage() {

    return (
        <div className='flex items-start'>
            <a href='/students' className='fixed top-0 w-full h-2 bg-yellow z-10'></a>
            <div className='w-1/4 bg-white h-screen flex flex-col gap-4 items-center justify-start p-10'>
                <Link href='/students'>
                    <h1 className='w-full font-black text-3xl mb-14'>ACADEMY SI</h1>
                </Link>
                <UserCog size={200} color='#002972' />
                <h2 className='w-full font-black text-xl mb-14 text-center'>Configuración</h2>
            </div>
            <StudentHeader>

                <div className='w-full flex flex-col items-center gap-5 bg-white rounded-md p-10 mb-10'>
                    <div className='flex flex-col justify-center text-center'>
                        <h2 className='font-bold text-2xl'>Configuracion del estudiante</h2>
                    </div>
                    <div className='w-full flex gap-3 justify-center flex-wrap'>
                        <Input
                            type='text'
                            label='Nombres'
                            defaultValue='Maria Liseth'
                            className='max-w-md'
                        />
                        <Input
                            type='text'
                            label='Apellidos'
                            defaultValue='Perez Diaz'
                            className='max-w-md'
                        />
                        <Input
                            type='text'
                            label='Tipo de documento'
                            defaultValue='CC'
                            className='max-w-md'
                        />
                        <Input
                            type='number'
                            label='Documento de identidad'
                            defaultValue='1000465456'
                            className='max-w-md'
                        />
                        <Input
                            type='email'
                            label='Email Institucional'
                            defaultValue='maira.perez@correo.edu.co'
                            className='max-w-md'
                        />
                        <Input
                            type='text'
                            label='Carné'
                            defaultValue='20157141'
                            className='max-w-md'
                        />
                        <Input
                            type='number'
                            label='Numero de contacto'
                            defaultValue='3012561215'
                            className='max-w-md'
                        />
                        <Input
                            type='text'
                            label='Grado Acadédemico'
                            defaultValue='10'
                            className='max-w-md'
                        />
                    </div>
                    <ButtonMenu
                        ButtonLink='/settings'
                        startContent={<Save />}
                        endContent={<ChevronRight size='15' />}
                        content={'Actualizar datos'}
                        isActive={true}
                    />
                    <div className='flex flex-col justify-center text-center'>
                        <h2 className='font-bold text-2xl'>Cambiar contraseña</h2>
                    </div>
                    <Input
                        type='text'
                        label='Contraseña actual'
                        placeholder='*********'
                        className='max-w-md'
                    />
                    <Input
                        type='text'
                        label='Nueva contraseña'
                        placeholder='*********'
                        className='max-w-md'
                    />
                    <Input
                        type='text'
                        label='Confirmar contraseña'
                        placeholder='*********'
                        className='max-w-md'
                    />
                    <ButtonMenu
                        ButtonLink='/settings'
                        startContent={<Lock  />}
                        endContent={<ChevronRight  />}
                        content={'Actualizar Contraseña'}
                        isActive={true}
                    />
                </div>
            </StudentHeader>
        </div>
    );
}

