import React, { useState } from 'react';
import { Collapse, Icon, Row, Col } from 'antd';
import '../../../static/pricing-table.css';

const PricingTable = () => {

    const columns = [
        {
            id: "one",
            title: "Premium",
            subTitle: "3999 $",
            desc: "/ month",
        },
        {
            id: "two",
            title: "Premium",
            subTitle: "3999 $",
            desc: "/ month"
        },
        {
            id: "three",
            title: "Premium",
            subTitle: "3999 $",
            desc: "/ month"
        },
        {
            id: "four",
            title: "Premium",
            subTitle: "3999 $",
            desc: "/ month"
        }
    ]

    const data = [
        {
            id: 1,
            title: "Try 'N' Learn",
            list: [ "item1", "item2", "item3" ],
            packages: {
                one: true,
                two: true,
                three: false
            }
        },
        {
            id: 2,
            title: "Try 'N' Learn",
            list: [ "item1", "item2", "item3" ],
            packages: {
                one: false,
                two: true,
                three: true
            }
        },
        {
            id: 3,
            title: "Try 'N' Learn",
            list: [ "item1", "item2", "item3" ],
            packages: {
                one: true,
                two: false,
                three: false
            }
        }
    ]

    const [selectedColumn, setSelectedColumn] = useState("one");

    const columnWidth = columns.length < 6 ? 3 : 2;
    const columnSectionWidth = columns.length * columnWidth;
    const featureSectionWidth = 24 - columnSectionWidth;

    const { Panel } = Collapse;

    const columnOnClick = (column) => {
        setSelectedColumn(column.id);
    }

    const getHeaderColumn = () => {
        return columns.map(column => {
            return (
                <Col key={column.id} onClick={() => columnOnClick(column)} className={`item-label ${selectedColumn === column.id ? 'active' : ''}`} sm={columnWidth}>
                    {column.title}
                </Col>
            )
        })
    }

    const getRowItem = () => {
        return data.map(row => {
            return (
                <Row key={row.id} className="price-item" type="flex" justify="center" style={{alignItems: "strech"}}>
                    <Col className="price-column" sm={featureSectionWidth}>
                        <Collapse 
                            bordered={false}
                            expandIcon={({ isActive }) => <Icon type="plus" rotate={isActive ? 135 : 0} />}
                        >
                            <Panel header={row.title} key="1">
                                    <ul>
                                        {row.list.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                            </Panel>
                        </Collapse>
                    </Col>

                    {
                        columns.map(col => {
                            return (
                                <Col key={col.id} className={`price-column ${selectedColumn === col.id ? 'active' : ''}`} sm={columnWidth}>
                                    <div className={`dot ${row.packages[col.id] === true ? 'fill' : ''}`}></div>
                                </Col>
                            )
                        })
                    }
                </Row>
            )
        })
    }

    const getFooterColumn = () => {
        return columns.map(column => {
            return (
                <Col key={column.id} onClick={() => columnOnClick(column)} className={`item-label ${selectedColumn === column.id ? 'active' : ''}`} sm={columnWidth}>
                    Order Now
                </Col>
            )
        })
    }

    return (  

        <div className="price-table-wrapper">
            <div className="price-table-header">
                <Row className="price-item" type="flex" justify="center" align="middle">
                    <Col sm={featureSectionWidth}></Col>
                    {getHeaderColumn()}
                </Row>
            </div>
            <div className="price-table">
                {getRowItem()}
            </div>
            <div className="price-table-footer">
                <Row className="price-item" type="flex" justify="center" align="middle">
                    <Col sm={featureSectionWidth}></Col>
                   {getFooterColumn()}
                </Row>
            </div>
        </div>

    );
}
 
export default PricingTable;