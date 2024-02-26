import { Navbarcomponent, Footer } from "../components";
import HeroImage from '../assets/Hero.svg'
import { Button } from "@material-tailwind/react";


function Home() {
  return (
    <>
      <div className="w-full bg-purple-50 pt-6 sticky top-0">
        <Navbarcomponent />
      </div>
      <div className="bg-purple-50 pb-12">
        <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center order-2 lg:order-1 lg:items-start">
            <div className="w-full mb-2"><h1 className="text-5xl text-center tracking-widest font-bold text-purple-700 lg:text-start">Learn Share Collaborate</h1></div>
            <div className="w-full mb-6"><p className="text-md text-center lg:text-start">Your Hub for Quality Notes and Productive Discussions</p></div>
            <Button className="bg-purple-100 text-black hover:bg-purple-300 hover:text-white">Join the Community</Button>
          </div>
          <div className="order-1 lg:order-2">
            <img className="w-full h-auto" src={HeroImage} alt="main section image" />
          </div>
        </section>
      </div>
      <div className="w-full container mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default Home;

