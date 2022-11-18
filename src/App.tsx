import { useState } from 'react'
import { TeamList } from './containers/TeamList';
import { ServiceProvider } from './model/ServiceProvider';

function App() {

  const [selectedServiceProvider, setSelectedServiceProvider] = useState<ServiceProvider>();
  const [serviceProviders, setServiceProviders] = useState<ServiceProvider[]>([]);

  return <>
    <TeamList serviceProvider={selectedServiceProvider} />
  </>
}

export default App
