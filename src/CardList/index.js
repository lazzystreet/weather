import React, { useContext } from 'react';

import { Card } from '../Card';

import '../App.js';
import { withGlobalState } from '../hocs/withGlobalState';

export class CardListNoState extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            orderBy: 'desc',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        this.setState({
            orderBy: event.target.value,
        });
    }

    render(){
        const { orderBy } = this.state;
        const { citiesList } = this.props.state;
        let sortedCitiesList = citiesList.sort();
        if (orderBy === 'desc'){
            sortedCitiesList.reverse();
        }
        // if (sortedCitiesList.length === 3){
        //     throw new Error('I crashed');
        // }
        return (
            <>
                <select className="Select" value={orderBy} onChange={this.handleOnChange}>
                        <option value='desc'>By name desc</option>
                        <option value='asc'>By name asc</option>
                    </select>
                <div className="CardList">
                    
                    {
                        sortedCitiesList.map(city => <Card key={city} city={city} />)
                    }
                </div>
            </>
        )
    }
}

// export const CardList = () => {
//     const { state: {citiesList} } = useContext(GlobalContext);
//     return (
//         <div className="CardList">
//             {
//                 citiesList.map(city => <Card key={city} city={city} />)
//             }
//         </div>
//     )
// }

export const CardList = withGlobalState(CardListNoState);