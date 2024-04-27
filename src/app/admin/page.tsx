import { ButtonMenu } from '@/components/Students/StudentMenu/ButtonMenu';
import { Input } from '@nextui-org/react';
import { ChevronRight, FilePenLine } from 'lucide-react';

export default function adminPage() {
	return (
		<div className='w-full h-screen flex flex-col items-center gap-5 bg-white rounded-md p-10'>
			<div className='flex flex-col justify-center text-center'>
				<h2 className='font-bold text-2xl'>Inicio</h2>
				<h3 className=''>Datos del estudiante</h3>
			</div>
			<div className='w-full flex gap-3 justify-center flex-wrap'>
				<Input
					isReadOnly
					type='text'
					label='Nombres'
					defaultValue='Maria Liseth'
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Apellidos'
					defaultValue='Perez Diaz'
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Tipo de documento'
					defaultValue='CC'
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='number'
					label='Documento de identidad'
					defaultValue='1000465456'
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='email'
					label='Email Institucional'
					defaultValue='maira.perez@correo.edu.co'
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Carné'
					defaultValue='20157141'
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='number'
					label='Numero de contacto'
					defaultValue='3012561215'
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Grado Acadédemico'
					defaultValue='10'
					className='max-w-md'
				/>
			</div>
			
		</div>
	);
}