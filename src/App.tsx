import React from 'react';
import './App.css';
import { RestDashboardContainer } from './rest-dashboard/RestaurantDashboardContainer';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">Restaurants Dashboard</header>
      <RestDashboardContainer></RestDashboardContainer>
    </div>
  );
}

export default App;
