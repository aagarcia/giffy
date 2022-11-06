import './App.css';
import React, { Suspense } from 'react'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import StaticContext from 'context/StaticContext';
import { GifsContextProvider } from 'context/GifsContext';
import { Link, Route } from "wouter";

const HomePage = React.lazy(() => import('pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'Alex', 
        suscribeteAlCanal: true
      }
    }>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>
            <GifsContextProvider>
              <Route component={HomePage} path="/" />
              <Route component={SearchResults} path="/search/:keyword/:rating?" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={() => <h1>404 ERROR :(</h1>} path='/404' />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
    
  );
}

export default App;
