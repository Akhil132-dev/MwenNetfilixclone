import { ListItemAvatar } from '@material-ui/core'
import { ArrowBackOutlined, ArrowForward } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import Listitem from '../Listitem/Listitem'
import './List.scss'
function List() {
    const [slideNumber, setslideNumber] = useState(0)
    const [ismoved, setismoved] = useState(false)
    const  listRaf = useRef()
    const handleClick = (direction) => {
        let distance = listRaf.current.getBoundingClientRect().x - 50
     
        if (direction === 'left' && slideNumber > 0) {
            listRaf.current.style.transform = `translateX(${230 + distance}px)`
            setslideNumber(slideNumber-1)
        }
        else if (slideNumber < 5) {
            setslideNumber(slideNumber + 1)
            setismoved(true)
             listRaf.current.style.transform=`translateX(${-230+distance}px)`
        }
        console.log(distance)
    }
    return (
        <div className="list">
            <span className="list__title">
                continue to watch  
            </span>
            <div className="list__wrapper">
                <ArrowBackOutlined className={ismoved ? `list__slider left`: `none`} onClick={()=>handleClick('left')}/>
                <div className="list__container" ref={listRaf}>
                    <Listitem index={0}/>
                    <Listitem index={1} />
                    <Listitem index={2}/>
                    <Listitem index={3}/>
                    <Listitem index={4}/>
                    <Listitem index={5}/>
                    <Listitem index={6}/>
                    <Listitem index={7}/>
                    <Listitem index={8}/>
                    <Listitem index={9}/>
                
                 
                </div>
                <ArrowForward className="list__slider right" onClick={()=>handleClick('right')}/>
            </div>
        </div>
    )
}

export default List
