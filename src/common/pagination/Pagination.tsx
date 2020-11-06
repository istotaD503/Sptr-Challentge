import React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { PaginationControlProps } from '../../interfaces/Restaurant';

export const PaginationControl = ({ page, switchPage }: PaginationControlProps) => 
<div className="PaginationControl">
    <button onClick={() => switchPage(false)}>
        <ArrowBack></ArrowBack>
    </button>{page}
    <button onClick={() => switchPage(true)}>
        <ArrowForward></ArrowForward>
    </button>
</div>
