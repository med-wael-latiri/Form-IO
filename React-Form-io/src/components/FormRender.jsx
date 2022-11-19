import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { Form } from "@formio/react";
import { Link } from "react-router-dom";
import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;

// export default function FormRender() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadedForm, setloadedform] = useState([]);
//   const [selectedForm, setSelectedForm] = useState(null);
//   useEffect(() => {
//     fetch("https://formioregrow-default-rtdb.firebaseio.com/FormList.json")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const formList = [];
//         for (const key in data) {
//           const form = {
//             id: key,
//             ...data[key],
//           };
//           formList.push(form);
//         }
//         setIsLoading(false);

//         setloadedform(formList);
//       });
//   }, []);

//   if (isLoading) {
//     return (
//       <section>
//         <p>loading</p>
//       </section>
//     );
//   }
//   console.log(loadedForm);
//   return (
//     <Card className="my-4">
//       <Card.Body>
//         <Card.Title className="text-center">Form Render</Card.Title>
//         {loadedForm &&
//           loadedForm.map((form) => {
//             return (
//               <h6
//                 onClick={() => {
//                   setSelectedForm(form);
//                 }}
//               >
//                 {form.formName}
//               </h6>
//             );
//           })}
//         {selectedForm && (
//           <Form
//             form={selectedForm.components}
//             onSubmit={(e) => {
//               console.log(e);
//             }}
//           />
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
