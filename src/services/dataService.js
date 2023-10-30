import firebase from "../firebase/firebaseConfig";

const database = firebase.database();
const restaurantRef = database.ref("Restaurants");      //db collection
// export faka new restaurant function
export const addRestaurant = (newRestaurant) => {
  return restaurantRef.push(newRestaurant);
};

// Export function to listen for changes & get the latest update
export const listenForRestaurants = (callback) => {
  restaurantRef.on('value', (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
