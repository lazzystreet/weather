import React from 'react';

import './App.css';

import { Input } from './Input';
import { ErrorBoundary } from './ErrorBoundary';
import { CardList } from './CardList';
import { useCitiesList } from './hooks/useCitiesList';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="Main">
        <Input />
        <ErrorBoundary>
          <CardList  />
        </ErrorBoundary>
      </div >
    </GlobalContext.Provider>
  );
}

export default App;
