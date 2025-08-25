import { Pagination as MuiPagination } from '@mui/material';
import { BoxModel } from './Pagination.styles';
import type { PaginationProps } from '../types/expense.types';

export const Pagination = ({ count, page, onChange }: PaginationProps) => {
    return (
        <BoxModel>
            <MuiPagination
                count={count}
                page={page}
                onChange={onChange}
                color="primary"
            />
        </BoxModel>
    );
};
