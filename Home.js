import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'> 
        
        <Banner />
            <div className='home_section'>
                <Card 
                 src="./img/3.jfif" title="NewYork House"
                  descrption="American homes are a lot like America.
                  Colonial houses are often box-shaped, two-story houses." 
                  price ="72K$"
                />
                <Card 
                 src="./img/4.jfif" title="California House"
                  descrption="American homes are a lot like America.
                  and five or seven windows.box-shaped, two-story houses. "
                  price ="79K$"
                />
                <Card 
                 src="./img/5.jfif" title="Whortn House"
                  descrption="American homes are a lot like America.
                  Colonial houses are often box-shaped, two-story houses." T
                  price ="82K$"
                />
                
            </div>
            <div className='home_section'>
            <Card 
                 src="./img/9.jfif" title="Best House"
                  descrption="American homes are a lot like America.
                  Colonial houses are often box-shaped, two-story houses." T
                  price ="52K$"
                />
                <Card 
                 src="./img/7.jfif" title="PensulVenia House"
                  descrption="American homes are a lot like America.
                  Colonial houses are often box-shaped, two-story houses." T
                  price ="62K$"
                />
                <Card 
                 src="./img/8.jfif" title="MaxcicoWay House"
                  descrption="American homes are a lot like America.
                  Colonial houses are often box-shaped, two-story houses." T
                  price ="54K$"
                />
            </div>
          </div>
    )
}

export default Home;
