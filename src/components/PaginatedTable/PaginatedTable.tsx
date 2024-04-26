import React, {useEffect, useState} from 'react';
import styles from "./PaginatedTable.module.css";
import MyTable from "../MyTable/MyTable";
import TableControls from "../TableControls/TableControls";
import Navbar from "../Navbar/Navbar";
import {ITableItems} from "../../types/types";
import login from "../../api/login";
import {fetchItems} from "../../api/fetchItems";
import {returnPaginationRange} from "../../utils/utils";
import Modal from "../Modal/Modal";

const PaginatedTable = () => {
    const [tableItems,setTableItems] = useState<ITableItems[]>([]);
    const [itemsTotal,setItemsTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize,setPageSize] = useState<number>(5);
    const [pagination, setPagination] = useState<(string|number)[]>([]);
    const [selectedSort, setSelectedSort] = useState<string>("");
    const [searchQuery,setSearchQuery] = useState<string>("");

    useEffect(()=>{
        login().then((res)=>{
            fetchItems(res?.data['access_token'],currentPage,pageSize).then(
                (res)=>{
                    setTableItems(res?.data.result??[]);
                    setItemsTotal(res?.data.total??0);
                    setPagination(returnPaginationRange(Math.ceil(res?.data.total??0/pageSize),currentPage,1));
                }
            )
        })
    }, [currentPage,pageSize]);
    const handlePageChange = (current:number) =>{
        setCurrentPage(current);
    }
    const handlePageSizeChange = (size:number) =>{
        setPageSize(size)
    }
    const sortTableItems = (sort:string) => {
        setSelectedSort(sort);
        switch (sort) {
            case "ascending":
                setTableItems([...tableItems].sort((a, b) => a.name > b.name ? 1 : -1));
                break;
            case "descending":
                setTableItems([...tableItems].sort((a, b) => a.name < b.name ? 1 : -1));
                break;
        }
    };
    const handleSearchQuery = (query: string) =>{
        setSearchQuery(query)
    }
    const handleCreateQueryButton = (tableItem: ITableItems) =>{
        console.log(tableItem)
    }
    return (
        <>
            <Navbar
                itemsTotal={itemsTotal}
                onSortSelectChange={sortTableItems}
                handleSearchQuery={handleSearchQuery}
            />
            <div className={styles.tableContainer}>
                <MyTable
                    tableItems={tableItems.filter(item => item.name.includes(searchQuery.toString()))}
                    onCreateQueryButtonClick={handleCreateQueryButton}
                />
                <TableControls
                    pagination={pagination}
                    currentPage={currentPage}
                    onCurrentPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                />
            </div>
        </>
    );
};

export default PaginatedTable;
