import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { Form } from "@formio/react";
import TutorialDataService from "../services/tutorial.service";

function FormList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedForm, setloadedform] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [Forms, setForms] = useState([]);
  useEffect(() => {
    retrieveForms();
  }, []);
  const retrieveForms = () => {
    TutorialDataService.getAll()
      .then((response) => {
        setForms(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // useEffect(() => {
  //   fetch("http://localhost:8081/api/tutorials")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const formList = [];
  //       for (const key in data) {
  //         const form = {
  //           id: key,
  //           ...data[key],
  //         };
  //         formList.push(form);
  //       }
  //       setIsLoading(false);

  //       setloadedform(formList);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading</p>
  //     </section>
  //   );
  // }

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title className="text-center">FormList</Card.Title>
        {Forms &&
          Forms.map((form) => {
            return (
              <Card title="Form " className="my-4">
                <Card.Body>
                  <Card.Title
                    className="text-center"
                    onClick={() => {
                      setSelectedForm(form);
                    }}
                  >
                    {form.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        {selectedForm && (
          <Form
            form={selectedForm.components}
            onSubmit={(e) => {
              console.log(e.data);
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default FormList;
