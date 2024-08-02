import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import Footer from './components/Footer'

function App() {
    const allData = data.map((item)=>{
      return (
        <Card 
        key={item.id}
        {...item}
        />
      )
    })
  return (
    <>
    <Navbar />
    <Hero />
    <section className='cards-list'>
      {allData}
      </section>
      <Footer />
    
    </>
  )
}

export default App
