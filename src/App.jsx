import { useState } from 'react'
import { Post } from './Post'

export function App() {

  return (
    <>
      <Post 
        author="Gustavo Michels" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis cupiditate quibusdam dolorem officiis aperiam corrupti porro aut, excepturi exercitationem eum iure doloribus possimus dolorum assumenda harum rem quisquam nostrum!"
      />
      <Post 
        author="Fernando Monteiro" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum blanditiis cupiditate quibusdam dolorem officiis aperiam corrupti porro aut, excepturi exercitationem eum iure doloribus possimus dolorum assumenda harum rem quisquam nostrum!"
      />
    </>
  )
}