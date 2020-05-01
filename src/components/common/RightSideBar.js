import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { Menu, Sidebar } from 'semantic-ui-react'

/**
 * @class RightSideBar
 *
 * @classdesc RightSideBar component
 *
 */
class RightSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            smallDevice: false
        }
        this.handleVisible = this.handleVisible.bind(this)
    }

    handleVisible() {
        this.setState(() => ({ visible: !this.state.visible }))
    }

    componentDidMount() {
        window.addEventListener("resize", this.setVisible.bind(this));
        this.setVisible();
    }

    setVisible() {
        if (window.innerWidth > 1024) {
            this.setState(() => ({ visible: true, smallDevice: false }));
        } else {
            this.setState(() => ({ visible: false, smallDevice: true }));
        }
    }


    render() {
        const { visible, smallDevice } = this.state;
        return (
            <div>
                {!visible &&
                    <Sidebar
                        visible
                        direction='right'
                        className="hamburger-wrapper"
                    >
                        <div className="hamburger">
                            <i className="material-icons" onClick={() => this.handleVisible()}>menu</i>
                        </div>
                    </Sidebar>

                }
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    vertical
                    visible={visible}
                    direction='right'
                    className="right-sidebar"
                >
                    <div className="profile-main-wrapper">
                        {smallDevice &&
                            <div className="cancel">
                                <i className="material-icons" onClick={() => this.handleVisible()}>cancel</i>
                            </div>
                        }
                        <div className="profile-name-wrapper">
                            <div>Hi Martin</div>
                            <p>AMCP Corp</p>
                        </div>
                        <div className="profile-wrapper"><img className="profile-pic" src="" alt="" /></div>
                    </div>
                    <div className="btn-wrapper">
                        <Button variant="contained" size="large">Action Button</Button>
                    </div>
                </Sidebar>
            </div>
        )
    }


}

export default RightSideBar