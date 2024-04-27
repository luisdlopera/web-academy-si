'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
// Components
import { Button, Input, Link, Spinner } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { PiEyeBold, PiEyeClosedBold, PiUserBold } from 'react-icons/pi';
import { signIn } from 'next-auth/react';

export function RecoverForm() {

    interface Inputs {
        user: string;
        password: string;
    };

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        // resolver: zodResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<Inputs> = async ({ user, password }) => {
        try {
            setIsLoading(true);        

            const response = await signIn('credentials', {
                user,
                password,
                redirect: false
            });
            
            if (response?.error) {
                toast.warning(response?.error, {toastId: response?.error!});
            } else if (response?.ok) {
                const route = response.url?.includes('/auth/signin') ? '/dashboard' : response.url || '/dashboard';
                router.push(route);
            }
        } catch (error) {
            toast.error('¡Ups! Algo salió mal, estamos trabajando para resolverlo.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className='flex gap-4 flex-col items-center p-2'>
            <Input
                label='Ingresa Tu Correo'
                isInvalid={!!errors.user}
                errorMessage={errors.user?.message}
                {...register('user')}
                className='w-80'
                endContent={<PiUserBold size={20} className='my-2' />}
            />

            <Button
                type='submit'
                color='primary'
                className='w-80 m-2 h-12 text-base font-semibold'
            >
                Recuperar
            </Button>

            <span className='flex gap-2 font-semibold mt-2'>
                ¿Ya tienes cuenta?
                <Link href='/auth/login' color='primary' className='decar'>
                    Iniciar Sesión
                </Link>
            </span>
            
            {isLoading && <Spinner/>}
        </form>
    )
};