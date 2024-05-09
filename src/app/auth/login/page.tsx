import { Image } from '@nextui-org/image';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import { SignInForm } from '@/components/Forms';

export default function LoginPage() {
	return (
		<div className='w-full h-screen flex justify-center items-center py-20 px-5 bg-bgLogin bg-cover'>
			<Card className='py-6 px-5 sm:px-12 rounded-[4rem]'>
				<CardHeader className='flex flex-col justify-center'>
					<Link as={NextLink} href='/' className='relative'>
						<span className='text-2xl font-bold'>Academy SI</span>
					</Link>
					<h1 className='text-xl'>Iniciar Sesión</h1>
				</CardHeader>
				<CardBody>
					<SignInForm />
				</CardBody>
			</Card>
		</div>
	);
}