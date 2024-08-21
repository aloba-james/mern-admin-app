import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useGetTransactonsQuery } from 'state/api';
import Header from 'components/Header';

const Transactions = () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState([]);
    const [search, setSearch] = useState("");


  return (
    <div>Transactions</div>
  )
}

export default Transactions