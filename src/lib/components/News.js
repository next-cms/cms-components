import React from 'react';
import { Tabs } from 'antd';
import AllNews from './AllNews';

const News = () => {
    const { TabPane } = Tabs;
    return (
        <div>
            <div className="container">
                <div className="card-container" style={{ margin: "20px 0" }}>
                    <Tabs type="card">
                        <TabPane tab="All News" key="1">
                            <AllNews />
                        </TabPane>
                        <TabPane tab="Business" key="2">
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                        <TabPane tab="Future" key="3">
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                        <TabPane tab="Society" key="4">
                            <p>Content of Tab Pane 4</p>
                            <p>Content of Tab Pane 4</p>
                            <p>Content of Tab Pane 4</p>
                        </TabPane>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default News;