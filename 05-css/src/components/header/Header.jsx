import React from 'react'
// import '../styles/Header.css'   //this style of css is not preffer we use module style for css

// module css 
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h2 className={styles.logo}>Sheryians</h2>
      <button className={styles.btn}>Login </button>
    </div>
  )
}

export default Header
