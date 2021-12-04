import React, { Component } from "react";
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component'
export class Directory extends Component {
    constructor() {
        super()
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneskers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                linkUrl: '',
                size: 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                id: 5,
                linkUrl: '',
                size: 'large'
            },
            ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSecInfo }) => {
                    return (
                        <MenuItem
                            key={id}
                            { ...otherSecInfo }
                        />
                    )
                })}

            </div>
        )
    }

}