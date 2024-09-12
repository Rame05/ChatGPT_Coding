import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductDisplay from './components/ProductDisplay';
import Footer from './components/Footer';
import './styles.css';
import './output.css'

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Sidebar />
                <ProductDisplay />
            </main>
            <Footer />
        </div>
    );
}

export default App;
