import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"


export function App() {
   return (
      <>
       <Header />

       <div className={styles.wrapper}>
         
         <Sidebar />

         <main>
         <Post author="Wagner Lima" content="uai so trem" />
       
       <Post author="Dimas Lima" content="eita nu o du zoro"/>
    
         </main>
       </div>

      </>
    )
}


