'use client';

import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, SortDescriptor, } from '@nextui-org/table';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from '@nextui-org/dropdown';
import { Pagination, PaginationItem, PaginationCursor } from '@nextui-org/pagination';
import { Chip, ChipProps } from '@nextui-org/chip';
import { User } from '@nextui-org/user';
import { PlusIcon } from '../../icons/PlusIcon';
import { VerticalDotsIcon } from '../../icons/VerticalDotsIcon';
import { ChevronDownIcon } from '../../icons/ChevronDownIcon';
import { SearchIcon } from '../../icons/SearchIcon';
import { columns, users, statusOptions, roleOptions } from './data';
import { capitalize } from './utils';
import { Select, SelectSection, SelectItem } from '@nextui-org/select';
import React, { useCallback, useMemo, useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from '@nextui-org/modal';
import { Link } from '@nextui-org/link';
import { Checkbox } from '@nextui-org/checkbox';
import ModalUser from './ModalUser/ModalUser';

const statusColorMap: Record<string, ChipProps['color']> = {
    active: 'success',
    paused: 'danger',
    vacation: 'warning',
};

const INITIAL_VISIBLE_COLUMNS = ['name', 'role', 'status', 'actions'];

type User = typeof users[0];


export function TableUser() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [filterValue, setFilterValue] = useState('');
    const [selectedKeys, setSelectedKeys] = useState<any>(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState<any>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = useState<any>('all');
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: 'age',
        direction: 'ascending',
    });

    const [page, setPage] = useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        if (visibleColumns === 'all') return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status),
            );
        }

        return filteredUsers;
    }, [
        users,
        filterValue,
        statusFilter
    ]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {
        return [...items].sort((a: User, b: User) => {
            const first = a[sortDescriptor.column as keyof User] as number;
            const second = b[sortDescriptor.column as keyof User] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === 'descending' ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = useCallback((user: User, columnKey: React.Key) => {
        const cellValue = user[columnKey as keyof User];

        switch (columnKey) {
            case 'name':
                return (
                    <User
                        avatarProps={{ radius: 'lg', src: user.avatar }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case 'role':
                return (
                    <div className='flex flex-col'>
                        <p className='text-bold text-small capitalize'>{cellValue}</p>
                        <p className='text-bold text-tiny capitalize text-default-400'>{user.team}</p>
                    </div>
                );
            case 'status':
                return (
                    <Chip className='capitalize' color={statusColorMap[user.status]} size='sm' variant='flat'>
                        {cellValue}
                    </Chip>
                );
            case 'actions':
                return (
                    <div className='relative flex justify-end items-center gap-2'>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size='sm' variant='light'>
                                    <VerticalDotsIcon className='text-default-300' />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onNextPage = useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue('');
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue('')
        setPage(1)
    }, [])

    const topContent = useMemo(() => {
        return (
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between gap-3 items-end'>
                    <Input
                        isClearable
                        className='w-full sm:max-w-[44%]'
                        placeholder='Buscar por nombre...'
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className='flex gap-3'>
                        <Dropdown>
                            <DropdownTrigger className='hidden sm:flex'>
                                <Button endContent={<ChevronDownIcon className='text-small' />} variant='flat'>
                                    Tipo
                                </Button>
                            </DropdownTrigger>

                            <DropdownMenu
                                disallowEmptySelection
                                aria-label='Table Columns'
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode='multiple'
                                onSelectionChange={setStatusFilter}
                            >
                                {roleOptions.map((role) => (
                                    <DropdownItem key={role.uid} className='capitalize'>
                                        {capitalize(role.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className='hidden sm:flex'>
                                <Button endContent={<ChevronDownIcon className='text-small' />} variant='flat'>
                                    Estado
                                </Button>
                            </DropdownTrigger>

                            <DropdownMenu
                                disallowEmptySelection
                                aria-label='Table Columns'
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode='multiple'
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className='capitalize'>
                                        {capitalize(status.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className='hidden sm:flex'>
                                <Button endContent={<ChevronDownIcon className='text-small' />} variant='flat'>
                                    Filtrar por Columnas
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label='Table Columns'
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode='multiple'
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className='capitalize'>
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button onPress={onOpen} color='primary' endContent={<PlusIcon />}>
                            Agregar usuario
                        </Button>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-default-400 text-small'>La cantidad de usuarios es {users.length}</span>
                    <label className='flex items-center text-default-400 text-small'>
                        Filas por página:
                        <select
                            className='bg-transparent outline-none text-default-400 text-small'
                            onChange={onRowsPerPageChange}
                        >
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        users.length,
        hasSearchFilter,
    ]);

    const bottomContent = useMemo(() => {
        return (
            <div className='py-2 px-2 flex justify-between items-center'>
                <span className='w-[30%] text-small text-default-400'>
                    {selectedKeys === 'all'
                        ? 'Todos los usuarios seleccionados'
                        : `Selecionaste ${selectedKeys.size} de ${filteredItems.length} usuarios`}
                </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color='primary'
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className='hidden sm:flex w-[30%] justify-end gap-2'>
                    <Button isDisabled={pages === 1} size='sm' variant='flat' onPress={onPreviousPage}>
                        Anterior
                    </Button>
                    <Button isDisabled={pages === 1} size='sm' variant='flat' onPress={onNextPage}>
                        Siguiente
                    </Button>
                </div>
            </div>
        );
    }, [
        selectedKeys,
        items.length,
        page,
        pages,
        hasSearchFilter
    ]);


    return (
        <>
            <Table
                aria-label='Tabla de usuarios'
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement='outside'
                classNames={{
                    wrapper: 'max-h-[382px]',
                }}
                selectedKeys={selectedKeys}
                selectionMode='multiple'
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement='outside'
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === 'actions' ? 'center' : 'start'}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={'No se encuentran usuarios'} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <ModalUser isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
}
