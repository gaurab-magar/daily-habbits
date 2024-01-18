import React from 'react'

export const Header = () => {
  return (
    <header>
        <navbar>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">Daily-Habbit</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto  mb-lg">
                            <li className="nav-item"><a href='/li' className='nav-link'>li-mode</a></li>
                            <li className="nav-item"><a href='/da' className="nav-link active">da-mode</a></li>
                            <li className="nav-item"><a href="/about" className="nav-link">theme1</a></li>
                            <li className='nav-item'><a href="/contact" className='nav-link'>theme2</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </navbar>
    </header>
  )
}
