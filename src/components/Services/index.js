import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src="images/svg-1.svg" />
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="images/svg-2.svg" />
                <ServicesH2>Vitual Offices</ServicesH2>
                <ServicesP>You can access our platfrom online anywhere in the world</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src="images/svg-3.svg" />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services