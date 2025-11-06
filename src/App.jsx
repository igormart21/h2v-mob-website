import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Diferenciais from './components/Diferenciais'
import CarrosselInstitucional from './components/CarrosselInstitucional'
import Ecosistema from './components/Ecosistema'
import Mercado from './components/Mercado'
import ModeloNegocio from './components/ModeloNegocio'
import Projetos from './components/Projetos'
import CarrosselProjeto from './components/CarrosselProjeto'
import ApresentacaoProjeto from './components/ApresentacaoProjeto'
import CarrosselProjetoVideos from './components/CarrosselProjetoVideos'
import Sustentabilidade from './components/Sustentabilidade'
import FAQ from './components/FAQ'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ApresentacaoProjeto />
      <Sobre />
      <Ecosistema />
      <CarrosselInstitucional />
      <Diferenciais />
      <Mercado />
      <ModeloNegocio />
      <Projetos />
      <CarrosselProjeto />
      <CarrosselProjetoVideos />
      <Sustentabilidade />
      <FAQ />
      <Contato />
      <Footer />
    </div>
  )
}

export default App

