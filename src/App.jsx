import './App.css'
import Blogs from './Componentes/Blogs/Blogs'
import Bookmarks from './Componentes/Bookmarks/Bookmarks'
import Header from './Componentes/Header/Header'
function App() {
  
  return (
    <>

      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
