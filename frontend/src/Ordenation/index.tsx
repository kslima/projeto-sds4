
type Props = {
    sort: string;
    onSortChange: Function;
    currentOrder: string;
    onOrdenationChange: Function;
}

const Ordenation = ({sort, onSortChange, currentOrder, onOrdenationChange }: Props) => {

    return (
        <div>
            <div className="dropdown" >
                <button className="btn btn-outline-primary dropdown-toggle"
                    type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Ordenado por ...
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><h6 className="dropdown-header">Selecione uma opção:</h6></li>
                    <li><button className={`dropdown-item ${currentOrder === "date" ? 'active' : ''}`} onClick={() => onOrdenationChange("date")}>Data</button></li>
                    <li><button className={`dropdown-item ${currentOrder === "seller.name" ? 'active' : ''}`} onClick={() => onOrdenationChange("seller.name")}>Vendedor</button></li>
                    <li><button className={`dropdown-item ${currentOrder === "visited" ? 'active' : ''}`} onClick={() => onOrdenationChange("visited")}>Clientes visitados</button></li>
                    <li><button className={`dropdown-item ${currentOrder === "deals" ? 'active' : ''}`} onClick={() => onOrdenationChange("deals")}>negócios fechados</button></li>
                    <li><button className={`dropdown-item ${currentOrder === "amount" ? 'active' : ''}`} onClick={() => onOrdenationChange("amount")}>Valor</button></li>
                </ul>

                <div className="btn-group px-md-3" role="group">
                    <button type="button" className={`btn btn-outline-primary ${sort === "asc" ? 'active' : ''}`} onClick={() => onSortChange("asc")}>Crescente</button>
                    <button type="button" className={`btn btn-outline-primary ${sort === "desc" ? 'active' : ''}`} onClick={() => onSortChange("desc")}>Decrescente</button>
                </div>

            </div>
        </div>

    )
}

export default Ordenation;