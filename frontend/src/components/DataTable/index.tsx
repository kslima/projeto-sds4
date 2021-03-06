import axios from "axios";
import Ordenation from "Ordenation";
import Pagination from "Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatCurrency, formatLocalDate } from "Utils/format";
import { BASE_URL } from "Utils/requests";

const DataTable = () => {

    const [activePage, setActivePage] = useState(0);
    const [currentOrder, setCurrentOrder] = useState("date");
    const [sort, setSort] = useState("asc");

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=${currentOrder},${sort}`)
            .then(response => {
                setPage(response.data)
            });
    }, [activePage, currentOrder, sort]);

    const changePage = (index: number) => {
        setActivePage(index);
    }

    const changeOrder = (order: string) => {
        setCurrentOrder(order);
    }

    const changeSort = (sort: string) => {
        setSort(sort);
    }

    return (
        <>
            <div className="row px-3">

                <div className="col-sm-6">
                    <Ordenation sort={sort} onSortChange={changeSort} currentOrder={currentOrder} onOrdenationChange={changeOrder}/>
                </div>
                
                <div className="col-sm-6">
                    <Pagination page={page} onPageChange={changePage} />
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{formatCurrency(item.amount)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;