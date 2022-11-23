import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import { useEffect, useState } from 'react'

import { TeamList } from './containers/TeamList';

function App() {


  const [dataLoading, setDataLoading] = useState<boolean>(false);

  useEffect(() => {
    setDataLoading(true);

    setDataLoading(false);
  }, [])

  return <>
    <TeamList />
  </>
}

export default App
