import React, { Fragment } from 'react'
import { Menu } from 'antd'

const NavMenu = () => {

    const menu = {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: 1,
        items: [{key: 1, text: "nav  1"}, {key: 2, text: "nav  2"}]
    };

    return (
        <Fragment>
            <div>Nav Menu</div>

            <Menu 
                theme={menu.theme}
                mode={menu.model}
                defaultSelectedKeys={[menu.defaultSelectedKeys]}

            >
                {menu.items.map(item => <Menu.Item key = {item.key}>{item.text}</Menu.Item>)}
            </Menu>

        </Fragment>
    )
}

export default NavMenu;