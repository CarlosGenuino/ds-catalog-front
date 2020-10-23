import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg'
import './styles.scss'

type Props ={
    text: string
}

const ButtonIcon = ({text}:Props) => (
    <Link to="/catalog">
        <div className="d-flex">
            <button className="btn btn-primary btn-icon">
                <h5>
                    {text} 
                </h5>
            </button>
            <div className="btn-icon-content">
                <ArrowIcon />
            </div>
        </div>
    </Link>
    
    
)


export default ButtonIcon;