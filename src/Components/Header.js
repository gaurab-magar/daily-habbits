import React, { useEffect, useState } from 'react'
import "../index.css";
import "bootstrap/dist/js/bootstrap.bundle"
export const Header = () => {
    const [theme , setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");
    useEffect(()=>{
        localStorage.setItem('theme',JSON.stringify(theme))
        document.body.classList.remove('light', 'dark', 'gone', 'gtwo');
        document.body.classList.add(theme);
    },[theme])

  return (
   <header>
        <navbar>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container px-4">
                    <a class="navbar-brand" href="/daily">Daily-Habbit</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <li className="nav-item"><a href='/li' onClick={(e) => { e.preventDefault(); setTheme("light"); }} className={`nav-link fw-bold ${theme === 'light' ? 'active' : 'light'}`}>li-mode</a></li>
                            <li className="nav-item"><a href='/da' onClick={(e) => {e.preventDefault(); setTheme("dark"); }} className={`nav-link fw-bold ${theme === 'dark' ? 'active' : 'dark'}`}>da-mode</a></li>
                            <li className="nav-item"><a href="/about" onClick={(e) => {e.preventDefault();setTheme("gone"); }} className={`nav-link fw-bold ${theme === 'gone' ? 'active' : 'gone'}`}>theme1</a></li>
                            <li className='nav-item'><a href="/contact" onClick={(e) =>{e.preventDefault(); setTheme("gtwo"); }} className={`nav-link fw-bold ${theme === 'gtwo' ? 'active' : 'gtwo'}`}>theme2</a></li>
                        </div>
                    </div>
                </div>
            </nav>
        </navbar>
    </header>
  )
}
