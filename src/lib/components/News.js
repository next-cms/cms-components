import React, { useState } from 'react';
import { Tabs } from 'antd';
import AllNews from './AllNews';

const News = () => {
    const { TabPane } = Tabs;
    const [activeTab, setActiveTab] = useState("All");

    const news = [
        {
            key: 1,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO SYSTEMS - CASE KOJAMO SYSTEMS - CASE KOJAMO SYSTEMS - CASE KOJAMO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Quis viverra nibh cras pulvinar mattis nunc. Luctus venenatis lectus magna fringilla. Urna condimentum mattis pellentesque id nibh tortor. Adipiscing diam donec adipiscing tristique risus nec feugiat. Malesuada nunc vel risus commodo viverra maecenas. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Suspendisse interdum consectetur libero id faucibus. Lacus suspendisse faucibus interdum posuere lorem. Quam pellentesque nec nam aliquam. At quis risus sed vulputate. Sit amet consectetur adipiscing elit. ",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 2,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Society"
        },
        {
            key: 3,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 4,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Future"
        },
        {
            key: 5,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Society"
        },
        {
            key: 6,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Future"
        },
        {
            key: 7,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem Ipsum",
            date: "10/01/2019",
            tag: "Business"
        },
        {
            key: 8,
            title: "COMBINING DATA FROM MULTIPLE SYSTEMS - CASE KOJAMO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Quis viverra nibh cras pulvinar mattis nunc. Luctus venenatis lectus magna fringilla. Urna condimentum mattis pellentesque id nibh tortor. Adipiscing diam donec adipiscing tristique risus nec feugiat. Malesuada nunc vel risus commodo viverra maecenas. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Suspendisse interdum consectetur libero id faucibus. Lacus suspendisse faucibus interdum posuere lorem. Quam pellentesque nec nam aliquam. At quis risus sed vulputate. Sit amet consectetur adipiscing elit. ",
            date: "10/01/2019",
            tag: "Business"
        },
    ]

    const [newsPortals, setNewsPortals] = useState(news);

    const tags = [...new Set(news.map(item => item.tag))]

    const onTabChange = (tab) => {
        setActiveTab(tab);
        setNewsPortals(news.filter(n => n.tag === tab));
    }

    const onTabChangeFilter = (activeKey) => {
        setActiveTab(activeKey);
        if (activeKey === "All") {
            setNewsPortals(news);
        } else {
            setNewsPortals(news.filter(n => n.tag === activeKey));
        }
    }

    return (
        <div>
            <div className="container">
                <div className="card-container" style={{ margin: "20px 0" }}>
                    <Tabs activeKey={activeTab} type="card" onChange={(activeKey) => onTabChangeFilter(activeKey)}>

                        <TabPane tab="All News" key="All">
                            <AllNews onTabChange={onTabChange} news={newsPortals} />
                        </TabPane>
                        {tags.map(tag =>
                            <TabPane tab={tag} key={tag}>
                                <AllNews news={newsPortals} onTabChange={onTabChange} />
                            </TabPane>
                        )}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default News;