// src/components/TableComp.tsx

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import type { TableProps } from '../types/expense.types';

export function TableComponent<T extends { expenseId: string }>({ data, columns }: TableProps<T>) {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell key={String(col.key)}>{col.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((rowData) => (
                        <TableRow key={rowData.expenseId}>
                            {columns.map((col, colIndex) => (
                                <TableCell key={String(col.key) ?? colIndex}>
                                    {col.cellRenderer(rowData)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}