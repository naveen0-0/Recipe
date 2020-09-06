import React from 'react';
import style from '../fullwebsite.module.css';


export default function Recipe (props) {

   function ingredientImage(ingredient) {
      if(ingredient.image){
         return <div><img className={style.ingredientImage} src={ingredient.image} alt={ingredient.text}/></div>
      }
      else return <div></div>;
   }

   return (

      <div className={style.recipe} onClick={()=>console.log(props.info)}>
         <div className={style.recipeName}>{props.info.recipe.label}</div>
         <img src={props.info.recipe.image} alt="Something"/>

         <div className={style.calories}>Calories : {props.info.recipe.calories}</div>

         <div className={style.ingredients}>
            <div className={style.ingredientsName}>Ingredients</div>
            <div className={style.ingredientsContainer}>
               {props.info.recipe.ingredients.map((ingredient,index) => <div className={style.ingredient} key={index}>
                  <div className={style.ingredientName}>{ingredient.text}</div>
                  {ingredientImage(ingredient)}
               </div>)}
            </div>
         </div>
      </div>

   )

}
