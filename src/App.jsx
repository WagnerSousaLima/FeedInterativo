import { Post } from "./Post"
import { Header } from "./components/Header"

import "./global.css"


 export function App() {
   return (
     <>
       <Header />
       
       <Post author="Wagner Lima" content="uai so trem" />
       
       <Post author="Dimas Lima" content="eita nu o du zoro"/>
    
    </>
  )
}


