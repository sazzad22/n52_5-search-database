import React, { useEffect, useState } from 'react';
import Meal from '../components/Meal/Meal';

const Restaurent = () => {
    const [searchText, setSearchText] = useState('');//everytime text typed in the input ,a state changes.
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
        .then(data=> setMeals(data.meals))
    }, [searchText])
    console.log(searchText);
    const searchFood = e => {
        setSearchText(e.target.value)
    }

    return (
        <div className='mx-10'>
            <h3 className='text-xl mb-4 '>Search Your food</h3>
            <input onChange={searchFood} className='drop-shadow-xl border rounded-2xl border-rose-500' type="text" name="" id="" />
            <br />
            <div className='grid grid-cols-3 gap-4'>
            {
                meals.map(meal=> <Meal key={meals.id} meal={meal}></Meal>)
            }

            </div>
        </div>
    );
};

export default Restaurent;