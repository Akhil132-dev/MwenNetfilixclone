import React from 'react'
import './Home.scss'
import {AcUnit} from '@material-ui/icons'
import Header from '../Componenets/Header/Header'
import Featured from '../Componenets/featured/Featured'
function Home() {
    return (
        <div className="home">
            <Header />
           <Featured type="movie"/>
        </div>
    )
}

export default Home
















