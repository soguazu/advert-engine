import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Sidebar from './components/sidebar/sidebar.component';

import './App.css';

class App extends React.Component {
    

    render() {
        return (
            <div className='App'>
                <Sidebar />
                <Homepage />
            </div>
        )
    }
}

export default App;