import React from 'react'
import './Home.scss'
import {AcUnit} from '@material-ui/icons'
import Header from '../Componenets/Header/Header'
import Featured from '../Componenets/featured/Featured'
import List from '../Componenets/List/List'
function Home() {
    return (
        <div className="home">
            <Header />
            <Featured type="movie" />
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
















