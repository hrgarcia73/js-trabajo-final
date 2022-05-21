import Home from './home.view'
import Records from "./records.view";
import NewRecord from "./newRecord.view";
import EditRecord from "./editRecord.view";
import notFound from './404.view'

const pages = {
    home: Home,
    records: Records,
    newRecord: NewRecord,
    editRecord: EditRecord,
    notFound: notFound
}

export{pages};
