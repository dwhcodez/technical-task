// Import React core components
import React from 'react';

// Import components
import Header from './components/header';
import Breadcrumb from './components/breadcrumb';
import ListItems from './components/list-items'

// Import styles
import './styles/app.scss';


function App() {
    return (
        <div className="App">

            <Header />

            <section id="content-container" className="container">

                <Breadcrumb />

                <ListItems />

            </section>

        </div>
    );
}

export default App;
