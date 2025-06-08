import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Products = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <h3>Products Page</h3>
    </div>
  )
}

export default Products
