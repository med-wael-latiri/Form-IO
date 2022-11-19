import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import { Form } from "@formio/react";
import TutorialDataService from "../services/tutorial.service";

function FormList() {
  const [selectedForm, setSelectedForm] = useState(null);
  const [Forms, setForms] = useState([]);

  useEffect(() => {
    retrieveForms();
  }, []);
  const retrieveForms = () => {
    TutorialDataService.getAll()
      .then((response) => {
        setForms(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addDataForm = (d) => {
    var data = {
      values: d,
      _id: d.id,
    };
    console.log(data._id);
    TutorialDataService.creates(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
              console.log(selectedForm.id);
              e.data.id = selectedForm.id;
              console.log(e.data.id);
              addDataForm(e.data);
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default FormList;
