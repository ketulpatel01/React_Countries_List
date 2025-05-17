import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import CountriesCard from "./CountriesCard";

function Countries() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalpages, setTotalpages] = useState(0)
  const [loading, setLoading] = useState(false)

  const Get_data_from_server = async () => {

    setLoading(true)
    const resp = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)

    const data_from_server = await resp.json()
    setData(data_from_server.data)
    setTotalpages(data_from_server.totalPages)
    setLoading(false)
  }

  useEffect(() => {
    Get_data_from_server();
  }, [page]); 

  return loading ? <LoadingIndicator /> : (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {data.map((item) => (
          <CountriesCard key={item.id} country={item.country} population={item.population} />
        ))}
      </div>
      <div>
        {/* Pagination */}
        <Pagination current={page} onChange={setPage} total={totalpages}/>
      </div>
    </div>
  );
}

export default Countries;