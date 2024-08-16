import { useEffect, useState } from "react";
import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  
  

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Looks like You're offline!! Please Check your internet connection;</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurant(filteredRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}>
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link
           style={{
              textDecoration: 'none',
              color: '#000',
            }} key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>

            
            <RestaurantCard resData={restaurant} />
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
