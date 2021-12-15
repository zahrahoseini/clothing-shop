import React from "react";
import './shop.styles.scss';
import { ShopData } from './shop.data'
import PreviewCollection from "../../components/preview-collection/preview-collection.components";

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: ShopData,
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectonProps }) => (
                        <PreviewCollection key={id} {...otherCollectonProps} />
                    )) 
                }
            </div>
        )
    }

}

export default ShopPage