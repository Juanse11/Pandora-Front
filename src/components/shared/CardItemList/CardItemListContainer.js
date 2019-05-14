import React from 'react'

import CardList from './CardItemList'

class CardItemListContainer extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        const items = this.fetchItems()
        this.setState(() => ({ items }))
    }

    fetchItems = () => {
        const items = [{
            title: 'Spurs New Stadium - Soledad',
            price: '300,000',
            rating: 5,
            image: "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
            sport: 'Futbol'
        },{
            title: 'Spurs New Stadium - Soledad',
            price: '300,000',
            rating: 5,
            image: "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
            sport: 'Futbol'
        },{
            title: 'Spurs New Stadium - Soledad',
            price: '300,000',
            rating: 5,
            image: "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
            sport: 'Futbol'
        },{
            title: 'Spurs New Stadium - Soledad',
            price: '300,000',
            rating: 5,
            image: "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
            sport: 'Futbol'
        }]
        return items
    }

    render() {
        return <CardList {...this.state} />
    }
}

export default CardItemListContainer