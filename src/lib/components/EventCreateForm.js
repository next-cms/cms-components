import React, { useState } from "react";
import {
    DatePicker, 
    Form,
    Input,
    Button
  } from "antd";
import CategoryTag from "./CategoryTag";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
 
    // const val = ["tag1", "tag2"] 
    // const newElm ={tags: val } 

const EventCreateForm = props =>{
    const [tags,setTags] = useState([]);
    const [editorState,setEditorState] = useState(EditorState.createEmpty())
    const getTags = (tag) =>{
        setTags(tag);
    }
    const onEditorStateChange = editorState =>{
        setEditorState(editorState);
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            const newElm ={tags: tags } 
              let newVal =  Object.assign(values, newElm)
            console.log('Received values of form: ', newVal);
          }
        });
      };

      const { getFieldDecorator } = props.form;

      return(
        <div style={{backgroundColor: "whitesmoke", width: "50%", margin:"0 auto", padding:"0 20px"}}>
            <h1>Event Creation Form</h1>

            <Form layout="vertical" onSubmit={handleSubmit}>
                
            <Form.Item label = "Title">
            {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the event title!', whitespace: true }],
            })(<Input />)}
            </Form.Item>
            {/* <Form.Item label="Description">
            {getFieldDecorator('description', {
                rules: [
                {
                    required: true,
                    message: 'Please input the event description!',
                },
                ],
            })(<textarea />)} */}
            <Form.Item label="Description">
            {getFieldDecorator('description', {
                rules: [
                {
                    required: true,
                    message: 'Please input the event description!',
                },
                ],
            })(<Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />)}
            </Form.Item>

            <Form.Item label="Event Date[when]">
                {getFieldDecorator('date-time-picker', {
                    rules: [{ type: 'object', required: true, message: 'Please select the event date!' },
                ]

            })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                )}
            </Form.Item>

            <Form.Item label = "Place[where]">
            {getFieldDecorator('place', {
                rules: [{ required: true, message: 'Please input the event place!', whitespace: true }],
            })(<Input />)}
            </Form.Item>

            <Form.Item label="Category">      
                <CategoryTag getTag={getTags} /> 
            </Form.Item>

            {/* <Form.Item>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                />
            </Form.Item> */}

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Create Event
                </Button>
            </Form.Item>
        </Form>
        </div>
      )
};
const WrappedEventCreateForm = Form.create({ name: 'eventcreateform' })(EventCreateForm);
export default WrappedEventCreateForm;
