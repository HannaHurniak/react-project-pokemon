import React from 'react';
import MaterialPagination from '@material-ui/lab/Pagination';

const Pagination = ({ currentPage, countPage, onPageChange, size }) => {
    return ( 
        <MaterialPagination
            page={currentPage}
            count={countPage}
            onChange={onPageChange}
            size='large'
            variant="outlined"
            color="secondary"
        />
     );
}
 
export default Pagination;