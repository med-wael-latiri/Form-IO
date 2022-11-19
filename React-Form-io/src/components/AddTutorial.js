import React, { useState, useCallback } from "react";
import TutorialDataService from "../services/tutorial.service";
import { FormBuilder } from "@formio/react";

import { useNavigate } from "react-router-dom";
import "../styles/Builder.css";

const initialState = {
  components: [],
};
const AddTutorial = () => {
  const [formName, setFormName] = useState("");
  const [FormDescription, setFormDescription] = useState("");
  const [jsonSchema, setJsonSchema] = useState(initialState);
  const [data, setData] = useState(null);
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false,
    components: "",
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      title: formName,
      description: FormDescription,
      components: jsonSchema,
    };
    // console.log(data.components);

    TutorialDataService.create(data)
      .then((response) => {
        setTutorial({
          title: response.data.title,
          description: response.data.description,
          components: response.data.components,
        });
        console.log(data.components);
        setSubmitted(true);
        // console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };
  const handleOnClick = useCallback(
    () => navigate("/FormList", { replace: true }),
    [navigate]
  );
  return (
    <>
      <input
        placeholder="Form Name"
        onChange={(e) => {
          setFormName(e.target.value);
        }}
      ></input>
      <input
        placeholder="Form Description"
        onChange={(e) => {
          setFormDescription(e.target.value);
        }}
      ></input>

      <FormBuilder
        form={{ display: "form" }}
        onChange={(schema) => {
          const schemaCopy = { ...schema };
          // schemaCopy.components.push(schema);

          setJsonSchema(schemaCopy);
        }}
      />

      <button type="button" class="btn btn-primary" onClick={saveTutorial}>
        Save Form
      </button>

      {/* <button
        type="submit"
        class="btn btn-primary"
        form={jsonSchema}
        onClick={onSubmitHandler}
      >
        Save Form
      </button> */}
      {/* <Card title="Form JSON Schema" className="my-4">
        <Card.Body>
          <Card.Title className="text-center">Form JSON Schema</Card.Title>
          {jsonSchema.components && (
            <ReactJson src={jsonSchema.components} collapsed={true}></ReactJson>
          )}
        </Card.Body>
      </Card> */}
      {/* <FormRender jsonSchema={jsonSchema} /> */}
    </>
  );
};

export default AddTutorial;
