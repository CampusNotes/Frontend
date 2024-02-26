import React from 'react';
import Navbarcomponent from '../components/Navbarcomponent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <div className='w-full h-screen'>
            <Navbarcomponent />

            <div className='container mx-auto py-11 flex '>

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
