import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/teste-img.png';
import Icon2 from '../../images/imagem-teste.jpg';
import Icon3 from '../../images/teste-img.png';

const Services = () => {
  return (
    // <ServicesContainer id="servicos/ofertas">
    <ServicesContainer>
      <ServicesH1>Nossas ofertas:</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Subtítulo para o primeiro card</ServicesH2>
            <ServicesP>Uma breve descrição.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Subtítulo para o segundo card</ServicesH2>
            <ServicesP>Uma breve descrição.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Subtítulo para o terceiro card</ServicesH2>
            <ServicesP>Uma breve descrição.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
