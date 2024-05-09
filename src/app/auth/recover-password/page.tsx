import { Card, CardBody, CardHeader } from '@nextui-org/card';
import {Image} from '@nextui-org/image';
import NextLink from 'next/link';
import {Link} from '@nextui-org/link';
import { RecoverForm } from '@/components/Forms/Recover';

export default function recoverPage() {
	return (
		<div className='w-full h-screen flex justify-center items-center py-20 px-5 bg-bgLogin bg-cover'>
			<Card className='py-6 px-5 sm:px-12 rounded-[4rem]'>
				<CardHeader className='flex flex-col justify-center'>
					<Link href='/' className='relative'>
						<span className='text-2xl font-bold'>Academy SI</span>
					</Link>
					<h1 className='text-xl'>Recuperación de contraseña</h1>
				</CardHeader>
				<CardBody>
					<RecoverForm />
				</CardBody>
			</Card>
		</div>
	);
}