'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// Components
// import { Spinner } from '@/components/Spinner'
import { Inputs } from './types';
import { Button, Input, Link, Spinner, user } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { loginSchema } from '@/schemas';
import { toast } from 'react-toastify';
import { PiEyeBold, PiEyeClosedBold, PiUserBold } from 'react-icons/pi';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { redirect } from 'next/navigation';
import { loginStudents } from '@/controllers';


export function SignInForm() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<Inputs>({
        // resolver: zodResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<Inputs> = async ({ user, password })=> {
        try {
            setIsLoading(true);
            const response = await loginStudents(user, password);
            if (response === true) {
                router.push('/students');
            }
        }catch (error) {
            toast.error('¡Ups! Algo salió mal, al intentar iniciar sesión.');
            console.error('Error Login:', error);
        }finally {
            setIsLoading(false);
        }
    };

    // const onSubmit: SubmitHandler<Inputs> = async ({ user, password }) => {
    //     try {
    //         setIsLoading(true);

    //         const response = await axios.post('http://127.0.0.1:8000/Users/Login', `username=${user}&password=${password}`, {
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             }
    //         })
    //         // const router = useRouter();
    //         // const x = atob('eyJpZDoiOjEsInN1YiI6Imx1aXNkbG9wZXJhIiwic2NvcGUiOiIiLCJleHAiOjE3MTQyNDg1MDd9');
    //         // console.log('atob', x);

    //         // console.log('response: ', response);
    //         // console.log(response.data);

    //         const jwtToken = response.data.access_token;
    //         const token_type = response.data.token_type;
    //         console.log('jwtToken: ', jwtToken);

    //         sessionStorage.setItem('token', `${token_type} ${jwtToken}`);

    //         if (response.status === 200) {
    //             router.push('/students');
    //         }
    //         console.log('Login success!');

    //     } catch (error) {
    //         toast.error('¡Ups! Algo salió mal, estamos trabajando para resolverlo.');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4 flex-col items-center p-2'>
            <Input
                label='Usuario / Correo'
                isInvalid={!!errors.user}
                errorMessage={errors.user?.message}
                {...register('user')}
                className='w-80'
                endContent={<PiUserBold size={20} className='my-2' />}
            />
            <Input
                label='Contraseña'
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
                {...register('password')}
                className='w-80'
                type={isVisible ? 'text' : 'password'}
                endContent={
                    <button className='focus:outline-none' type='button' onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ?
                            <PiEyeBold size={20} className='my-2' />
                            :
                            <PiEyeClosedBold size={20} className='my-2' />
                        }
                    </button>
                }
            />

            <Button
                type='submit'
                color='primary'
                className='w-80 m-2 h-12 text-base font-semibold'
            >
                Ingresar
            </Button>

            <span className='flex gap-2 font-semibold mt-2'>
                ¿Olvidaste la contraseña?
                <Link href='/auth/recover-password' color='primary' className='decar'>
                    Recuperar
                </Link>
            </span>

            {isLoading && <Spinner />}
        </form>
    )
};