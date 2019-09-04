import React, { Fragment } from 'react'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu;

const NavMenu = () => {

    const menu = {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: 1,
        items: [{key: 1, text: "nav  1"}, {key: 2, text: "nav  2"}]
    };

    {/*const submenu = {
        title: {
            className: "submenu-title-wrapper",
            iconType: "setting",
            titleText: "Nav"
        },
        itemGroup: [{title: "item 1",
                    items:[{key: 1, text:"option 1"}, {key: 2, text: "option 2"}]}, 
                    {title: "item 2",
                    items:[{key: 1, text: "option 1"}, {key: 2, text: "option 2"}]}]

    };*/}

    return (
        <Fragment>
            <div>Nav Menu</div>

            <Menu 
                theme={menu.theme}
                mode={menu.mode}
                defaultSelectedKeys={[menu.defaultSelectedKeys]}

            >
                {menu.items.map(item => <Menu.Item key = {item.key}>{item.text}</Menu.Item>)}
                
            </Menu>

            {/* <SubMenu
            title = {<span className= {submenu.title.className}> <Icon type= {submenu.title.iconType}/>{submenu.title.titleText}</span>}
            >

                {submenu.itemGroup.map(itemgroup => <Menu.ItemGroup title = {itemgroup.title}>
                    {submenu.itemgroup.items.map(item => <Menu.Item key = {item.key}>{item.text}</Menu.Item>)}
                </Menu.ItemGroup>)}

            </SubMenu> */}

        </Fragment>
    )
}

export default NavMenu;