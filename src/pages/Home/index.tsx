import React from 'react';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss'

export default () => (
    <div className="home-container">
        <div className="row home-content">
            <div className="col-6">
                <h1 className="text-title">
                    Conheça o melhor<br/>catálogo de produtos
                 </h1>
                <p className="text-subtitle">Ajudaremos a você a encontrar os melhores produtos do mercado</p>
                <div>
                    <ButtonIcon text="inicie agora sua busca"/>
                </div>
            </div>
            <div className="col-6">
                <MainImage className="main-image"></MainImage>
            </div>
        </div>
    </div>
)