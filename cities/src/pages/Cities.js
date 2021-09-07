import React from 'react';
import City from '../components/City';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import cities from "../data/dataForCities";

export const Lille = () => {
    return (
        <>
            <Navigation/>
            <City {...cities[0]}/>
            <Footer/>
        </>
    );
};

export const Paris = () => {
    return (
        <>
            <Navigation/>
            <City {...cities[1]}/>
            <Footer/>
        </>
    );
};
export const Turin = () => {
    return (
        <>
            <Navigation/>
            <City {...cities[2]}/>
            <Footer/>
        </>
    );
};
export const Munich = () => {
    return (
        <>
            <Navigation/>
            <City {...cities[3]}/>
            <Footer/>
        </>
    );
};

export const NewYork = () => {
    return (
        <>
            <Navigation/>
            <City {...cities[4]}/>
            <Footer/>
        </>
    );
};

export const Venise = () => {
    return (
        <>
            <Navigation/>
            <City {...cities[5]}/>
            <Footer/>
        </>
    );
};

export const Dubaï = () => {
    return (
        <>
            <Navigation/>
            <City {...cities[6]}/>
            <Footer/>
        </>
    );
};




