import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import FinanceSection from '../components/FinanceSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Financiamento from '../components/FinanciamentoSection/FinanciamentoElements';
// import Services from '../components/Services/ServicesElements';
// import { homeObjOne } from '../components/InfoSection/Data';
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <FinanceSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <InfoSection {...homeObjFour}/>
    <InfoSection {...homeObjFive}/>
    <Services />
    <Financiamento />
    <Footer />
    </>
  )
}

export default Home
