import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RestaurantCard from "../RestaurantCard";

// components
import DiningCarousal from "./DiningCarousal";


const Dining = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <div>
      <DiningCarousal />
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Dine-Out Restaurants in Mumbai
      </h1>
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            {...restaurant}
            key={restaurant._id}
            whereIsthisres="asf"
          />
        ))}
      </div>
    </div>
  );
};

export default Dining;