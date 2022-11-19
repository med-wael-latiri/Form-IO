import { FormBuilder } from "@formio/react";

import React, { useState } from "react";

import "../styles/Builder.css";

const initialState = {
  components: [],
};

export default function Builder() {
  const [formName, setFormName] = useState("");
  const [FormDescription, setFormDescription] = useState("");
  const [jsonSchema, setJsonSchema] = useState(initialState);
  const [data, setData] = useState(null);

  const onSubmitHandler = (submission) => {
    fetch("https://formioregrow-default-rtdb.firebaseio.com/FormList.json", {
      method: "POST",
      body: JSON.stringify(buidedForm),
      headers: {
        "Contenet-Type": "application/json",
      },
    });
    console.log(buidedForm);
    setData(submission.data);
  };
  let buidedForm = {
    formName,
    FormDescription,
    components: jsonSchema,
  };
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

      <button type="button" class="btn btn-primary" onClick={onSubmitHandler}>
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
}
