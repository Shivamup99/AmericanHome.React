import { Button } from '@material-ui/core';
import React from 'react'
import './SearchPage.css';
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className="searchPage"> 
        
        <div className="searchPage_info">

            <p>50 stays .22 jan to 31 jan 2 guest</p>
            <h1>Stays nearby</h1>

            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type of Places</Button>
            <Button variant="outlined">Offerdable Price</Button>
            <Button variant="outlined">Rooms and Beds</Button>
            <Button variant="outlined">More Filters</Button>
        
        </div>
        <SearchResult 
         img="img/10.jfif"
         location="Private room in mid NewYork "
         title="Stay at this Spacious Edward House"
         description="1 guest . 1 bedroom .1 bed 
         .1.5 shared bathrooms .wifi .
          kitchen .free Parking  "
         star={4.73}
         price="$45 /night"
         total="$117"
        />

        <SearchResult 
         img="img/11.jfif"
         location="Private room in mid Whortne "
         title="Stay at this Spacious Edward House"
         description="2 guest . 1 bedroom .2 bed 
         .2 shared bathrooms .wifi .
          kitchen .free Parking  washingMachine"
         star={4.79}
         price="$50 /night"
         total="$129"
        />
        <SearchResult 
         img="img/12.jfif"
         location="Private room in mid California "
         title="Stay at this Spacious Edward House"
         description="4 guest . 3 bedroom .6 bed 
         .3 shared bathrooms .wifi .
          kitchen .free Parking  washingMachine Tv"
         star={5.81}
         price="$69 /night"
         total="$149"
        />

<SearchResult 
         img="img/13.jfif"
         location="Private room in mid Maxico "
         title="Stay at this Spacious Edward House"
         description="2 guest . 1 bedroom .1 bed 
         .1.5 shared bathrooms .wifi .
          kitchen .free Parking  "
         star={6.73}
         price="$39 /night"
         total="$99"
        />
        <SearchResult 
         img="img/14.jfif"
         location="Private room in mid PensulVenia "
         title="Stay at this Spacious Edward House"
         description="1 guest . 1 bedroom .1 bed 
         .1.5 shared bathrooms .wifi .
          kitchen .free Parking  washingMachine "
         star={3.73}
         price="$46 /night"
         total="$115"
        />
        <SearchResult 
         img="img/15.jfif"
         location="Private room in mid NewYork "
         title="Stay at this Spacious Edward House"
         description="3 guest . 1 bedroom .2 bed 
         .1 shared bathrooms .wifi .
          kitchen .free Parking  "
         star={6.73}
         price="$30 /night"
         total="$89"
        />


            
        </div>
    )
}

export default SearchPage
