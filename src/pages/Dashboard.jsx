// import React from 'react';
import Navbarcomponent from '../components/Navbarcomponent';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FileUploadForm } from '../components';

const Dashboard = () => {
    const [selectTab, setSelectTab] = useState(1)

    const renderComponent = () => {
        switch (selectTab) {
            case 1:
                return <div>Home tab</div>;
            case 2:
                return <div>Library</div>;
            case 3:
                return (

                    <FileUploadForm />

                );
            default:
                return <div>Page not found</div>;
        }
    }


    return (
        <div className='relative'>
            <div className='pt-6'>
                <Navbarcomponent />
            </div>

            <div className="absolute left-86 top-[20rem] rounded-full w-72 h-72 bg-purple-500 -z-50 
      mix-blend-multiply filter blur-3xl opacity-50 animate-blob_animate animation-delay-2000">
            </div>
            <div className="absolute left-64 top-[12rem] rounded-full w-80 h-80 bg-pink-400 -z-50 mix-blend-multiply filter blur-3xl opacity-60 animate-blob_animate animation-delay-4000">
            </div>
            <div className="absolute left-[24rem] top-[18rem] rounded-full w-96 h-96 bg-fuchsia-300 -z-50 mix-blend-multiply filter blur-3xl opacity-60 animate-blob_animate animation-delay-6000">
            </div>

            <div className='container mx-auto py-11 flex gap-11'>

                <div className='w-1/3'>
                    <Sidebar selectedTab={setSelectTab} />
                </div>
                <div className='w-full'>
                    {renderComponent()}
                </div>

            </div>


            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Dashboard;
