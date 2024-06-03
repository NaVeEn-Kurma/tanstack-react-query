import React, { Component } from "react";
import { Form, Button, Rate, Radio } from "antd";
import FormBuilder from "antd-form-builder";
import { useRef } from "react";

const Basic = () => {
  const formRef = useRef();
  const handleFinish = (evt) => {
    console.log("submit: ", formRef.current.getFieldsValue());
  };

  const getMeta = () => {
    const options = ["Apple", "Orange", "Banana"];
    const meta = {
      columns: 1,
      initialValues: { obj: { input: 12 } },
      fields: [
        {
          key: "obj.input",
          label: "Input",
          required: true,
          initialValue: "hello",
          tooltip: "This is the tooltip.",
        },
        { key: "checkbox", label: "Checkbox", widget: "checkbox" },
        { key: "rating", label: "Rating", widget: Rate, initialValue: 2 },
        {
          key: "switch",
          label: "Switch",
          widget: "switch",
          initialValue: true,
        },
        { key: "select", label: "Select", widget: "select", options },
        {
          key: "checkbox-group",
          label: "Checkbox Group",
          widget: "checkbox-group",
          options,
        },
        {
          key: "radio-group",
          label: "Radio Group",
          widget: "radio-group",
          forwardRef: true,
          options,
        },
        {
          key: "radio-button-group",
          label: "Radio Button Group",
          widget: "radio-group",
          buttonGroup: true,
          forwardRef: true,
          options,
        },
        { key: "password", label: "Password", widget: "password" },
        { key: "textarea", label: "Textarea", widget: "textarea" },
        { key: "number", label: "Number", widget: "number" },
        { key: "date-picker", label: "Date Picker", widget: "date-picker" },
      ],
    };

    const form = formRef?.current;

    // Just example of how to dynamicly change fields based on user's input
    if (form && form.getFieldValue("checkbox")) {
      console.log("first", meta);
      meta.fields.splice(2, 1);
      console.log(meta);
    }
    return meta;
  };

  return (
    <Form ref={formRef} layout="horizontal" onFinish={handleFinish}>
      <FormBuilder meta={getMeta()} form={formRef} />
      <Form.Item wrapperCol={{ span: 16, offset: 8 }} className="form-footer">
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Basic;
