import styled from "styled-components"

export const CardsContainer=styled.div`
    margin-top: 20px;
    height: 557px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    background-image: url("../../images/Foods/cards-container-bg.jpg");
    background-size: cover;
    overflow: hidden;
`
export const H1Cards=styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;
    text-align: center;
    color: #05a081;
    text-shadow: 1px 1px 2px black;
`
export const CardsWrapper=styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`
export const FoodCards=styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const FoodCardImg=styled.img`
    height: 160px;
    width: 160px;
    margin: auto;
    margin-bottom: 10px;
    clip-path: circle();
`
export const H2Card=styled.h2`
    font-size: 1rem;
    margin: auto;
    margin-bottom: 10px;
`
export const PCard=styled.p`
    font-size: 1rem;
    text-align: center;
`