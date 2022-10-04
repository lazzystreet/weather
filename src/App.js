import React, { useState } from 'react';
import { BrowserRouter, matchRoutes, Navigate, Route, Routes, useParams,  } from 'react-router-dom';

import './App.css';

import { useCitiesList } from './hooks/useCitiesList';

import { Input } from './Input';
import { ErrorBoundary } from './ErrorBoundary';
import { SingleCity } from './SingleCity';
import { CardList } from './CardList';
import { CardNoMemo } from './Card';


export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes>
          {/* <Route path='/*' element={<Navigate to path='/home' replace/>}/> */}
          <Route path='/home' element={
            <div className="Main">
              <Input />
              <ErrorBoundary>
                <CardList />
              </ErrorBoundary>
            </div >
          } />
           { <Route path="/city/:city" element={<SingleCity />} /> }
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
