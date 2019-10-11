import React from 'react'
import { Input, Popover, Button } from 'antd'

const ContentCreationForm = () => {
    const content = (
        <div style={{ height: "20px", display: "flex" }}>
            <p>Content</p>
            <p>Content</p>
        </div>
    )
    return (
        <div className="container">
            <div style={{ marginTop: "30px" }}>
                <div >
                    <Input placeholder="Title" />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Popover placement="right" content={content}>
                        <Button>Right</Button>
                    </Popover>
                </div>
            </div>
        </div>
    )
}
export default ContentCreationForm;
