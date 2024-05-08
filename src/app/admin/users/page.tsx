

import { Spinner } from "@/components/Shared/Spinner";
import { Button, Input, Link, Tooltip, Image, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useState } from "react";

export default function UsersPage() {

    return (
        <div className='w-full h-screen flex flex-col items-center gap-5 bg-white rounded-md p-10'>
            <h1>Gestión de usuarios</h1>

            {/* <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>CEO</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>Zoey Lang</TableCell>
                        <TableCell>Technical Lead</TableCell>
                        <TableCell>Paused</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>Jane Fisher</TableCell>
                        <TableCell>Senior Developer</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>William Howard</TableCell>
                        <TableCell>Community Manager</TableCell>
                        <TableCell>Vacation</TableCell>
                    </TableRow>
                </TableBody>
            </Table> */}

        </div>
    );
}