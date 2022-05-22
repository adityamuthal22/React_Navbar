import React from 'react'
import styles from '../navbar.module.css'

const Links = () => {
    const LinksArray=["Services","Projects","About"]
  return (
   <>
   <ul className={styles.links}>
    {LinksArray.map((link)=>(
        <a href=""><li key={link}>{link}</li></a>
    ))}
   </ul>
   </>
  )
}

export default Links