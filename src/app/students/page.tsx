'use client';

import { Input } from '@nextui-org/input';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function StudentPage() {

	const [token, setToken] = useState('')
	const [studentData, setStudentData] = useState({
        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        documentoIdentidad: '',
        emailInstitucional: '',
        carnet: '',
        numeroContacto: '',
        gradoAcademico: ''
    });

	useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

	// console.log('token', token)

	
	const fetchStudentById = useCallback(async () => {
		const url = `${process.env.NEXT_PUBLIC_APP_URL_BACKEND}/student/getbyid/1`;

		try {
			const response = await axios.get(url, {
				headers: {
					'accept': 'application/json',
					'Authorization': `${token}`
				}
			});
			console.log('response', response.data);

			setStudentData({
                nombres: response.data.nombre,
                apellidos: response.data.apellido,
                tipoDocumento: response.data.tipo_documento,
                documentoIdentidad: response.data.documento,
                emailInstitucional: response.data.Email,
                carnet: response.data.carne,
                numeroContacto: response.data.telefono,
                gradoAcademico: response.data.grado
            });
		} catch (error) {
			console.error('Error:', error);
		}
	}, [token]); 

	useEffect(() => {
		fetchStudentById();
	}, [fetchStudentById]); 


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
					value={studentData.nombres}
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Apellidos'
					value={studentData.apellidos}
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Tipo de documento'
					value={studentData.tipoDocumento}
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='number'
					label='Documento de identidad'
					value={studentData.documentoIdentidad}
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='email'
					label='Email Institucional'
					value={studentData.emailInstitucional}
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Carné'
					value={studentData.carnet}
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='number'
					label='Numero de contacto'
					value={studentData.numeroContacto}
					className='max-w-md'
				/>
				<Input
					isReadOnly
					type='text'
					label='Grado Acadédemico'
					value={studentData.gradoAcademico}
					className='max-w-md'
				/>
			</div>

		</div>
	);
}