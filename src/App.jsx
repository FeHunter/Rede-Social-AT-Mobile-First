import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Content } from './Components/Content/Content';
import { SideBar } from './Components/SideBar/SideBar';
import { Footer } from './Components/Footer/Footer';

const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png";

function App() {
  return (
    <div id='page'>
      <Header title="Social Cars" logoUrl={logoUrl} logoAlt="Logo" />
      <Content />
      <SideBar />
      <Footer />
    </div>
  )
}

export default App
