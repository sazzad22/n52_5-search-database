import React from 'react';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;

    return (
        <div className='p-3 mt-20 drop-shadow-lg border rounded bg-slate-100'>
            <img className=' p-1'  src={strMealThumb} alt="" />
            <h4 className='font-bold'>{strMeal}</h4>
            <p className='text-sm'>{strInstructions.slice(0, 200)}</p>
        </div>
    );
};

export default Meal;