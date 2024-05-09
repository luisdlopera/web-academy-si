
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/modal';
import { Select, SelectItem } from '@nextui-org/select';
import { Input } from '@nextui-org/input';
import { Checkbox } from '@nextui-org/checkbox';
import { Button } from '@nextui-org/button';

type ModalUserProps = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function ModalUser({ isOpen, onOpenChange }: ModalUserProps) {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement='top-center'
            size='2xl'
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-1'>Agrega datos del nuevo usuario</ModalHeader>
                        <ModalBody>
                            <div className='flex flex-row gap-2 flex-wrap justify-center'>
                                <Select
                                    label='Seleccione el rol'
                                    className='w-[48%]'
                                >
                                    <SelectItem key={1}>
                                        Admin
                                    </SelectItem>
                                    <SelectItem key={2}>
                                        Profesor
                                    </SelectItem>
                                    <SelectItem key={3}>
                                        Estudiante
                                    </SelectItem>
                                </Select>
                                <Select
                                    label='Seleccione el estado'
                                    className='w-[48%]'
                                >
                                    <SelectItem key={1}>
                                        Activo
                                    </SelectItem>
                                    <SelectItem key={2}>
                                        Vacaciones
                                    </SelectItem>
                                    <SelectItem key={3}>
                                        Inactivo
                                    </SelectItem>
                                </Select>
                                <Input
                                    type='text'
                                    label='Nombres'
                                    placeholder='Ej: Juanito'
                                    variant='flat'
                                    required={true}
                                    className='w-[48%]'
                                />
                                <Input
                                    type='text'
                                    label='Apellidos'
                                    placeholder='Ej: Pérez Pérez'
                                    variant='flat'
                                    className='w-[48%]'
                                />
                                <Select
                                    label='Seleccione tipo de documento'
                                    className='w-[48%]'
                                >
                                    <SelectItem key={1}>
                                        CC
                                    </SelectItem>
                                    <SelectItem key={2}>
                                        TI
                                    </SelectItem>
                                </Select>
                                <Input
                                    type='text'
                                    label='Documento'
                                    placeholder='Ej: 1234567890'
                                    variant='flat'
                                    className='w-[48%]'
                                />
                                <Input
                                    type='text'
                                    label='Correo electrónico'
                                    placeholder='Ej: yo@mail.com'
                                    variant='flat'
                                    className='w-[48%]'
                                />
                                <Input
                                    type='text'
                                    label='Numero de contacto'
                                    placeholder='Ej: 301 456 7890'
                                    variant='flat'
                                    className='w-[48%]'
                                />

                            </div>
                            <div className='flex py-2 px-1 justify-between'>
                                <Checkbox
                                    classNames={{
                                        label: 'text-small',
                                    }}
                                >
                                    Esta seguro de crear este usuario
                                </Checkbox>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='danger' variant='flat' onPress={onClose}>
                                Cerrar
                            </Button>
                            <Button color='primary' onPress={onClose}>
                                Crear usuario
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}