import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './Post'

import styles from './App.module.css'
import './global.css'

export function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />
        <main>
          <Post 
            author="Gustavo Michels" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis cupiditate quibusdam dolorem officiis aperiam corrupti porro aut, excepturi exercitationem eum iure doloribus possimus dolorum assumenda harum rem quisquam nostrum!"
          />
          <Post 
            author="Fernando Monteiro" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis cupiditate quibusdam dolorem officiis aperiam corrupti porro aut, excepturi exercitationem eum iure doloribus possimus dolorum assumenda harum rem quisquam nostrum!"
          />
        </main>
      </div>
    </>
  )
}