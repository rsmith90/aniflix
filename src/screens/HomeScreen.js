import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import requests from '../features/Requests';
import Row from "../components/Row";
import "../styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">

    <Nav />

    <Banner />

    <Row title="TrendingAnime" fetchURL={requests.fetchTopRated} isLargeRow/>
    <Row title="Action" fetchURL={requests.fetchAction}/>
    <Row title="TopAnimation" fetchURL={requests.fetchTopAnimation}/>
    <Row title="Family" fetchURL={requests.fetchFamilyShows}/>
    <Row title="Comedy" fetchURL={requests.fetchComedyShows}/>
    <Row title="Kids" fetchURL={requests.fetchKidsShows}/>
    
    
    </div>
  )
}

export default HomeScreen