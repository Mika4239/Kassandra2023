import { useEffect, useState } from "react";
import axios from "../../axios";
import DataTable from "../../components/dataTable/dataTable";
import { MatchData } from "../../types/matchData";

const Data = () => {
    const [data, setData] = useState<MatchData[]>([]);

    useEffect(() => {
        axios.get('/matchData').then(response => setData(response.data))
    }, []);

    return (
        <>
        <DataTable data={data} />
        </>
    );
};

export default Data;