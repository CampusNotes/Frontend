import React from 'react';
import Navbarcomponent from '../components/Navbarcomponent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <div className='w-full h-screen'>
            <Navbarcomponent/>

            <div className=' w-full h-screen px-10 mt-8 flex '>
            
            <Sidebar />

            <div className=' w-auto h-full'>
                <h1>Inside data</h1>
            </div>

            </div>

            <Footer />

        </div>
    );
}

export default Dashboard;
