import React, { Component } from "react";
import './directory.styles.scss';
import { MenuItem } from '../../components/menu-item/menu-item.component'

export class Directory extends Component {
    constructor() {
        super()
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'sneskers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4,
                size: 'large'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                id: 5,
                size: 'large'
            },
            ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => {
                    return (
                        <MenuItem
                            title={title}
                            image={imageUrl}
                            key={id}
                            size={size}
                        />
                    )
                })}

            </div>
        )
    }

}