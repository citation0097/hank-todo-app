import React  from 'react';
import Item from './item';
// import React , { Component } from 'react';
// import dummyListData from '../dummy_data/list_data';

// console.log('Dummydata',dummyListData);

const List = (props) => {
    // state = {
    //     list: []
    // }

    // componentDidMount(){
    //     this.getListData();
    // }

    // getListData(){
    //     // Call sever to get data

    //     this.setState({
    //         list: dummyListData
    //     })
    // }

    // render(){
        // console.log('State', this.state);
        // const listElements = this.state.list.map((item, index) =>{
            const listElements = props.data.map((item, index) =>{    
            // return <li className="collection-item" key={item._id}>{item.title}</li>
            // return <Item key={item._id} item={item} index={index}/>
            return <Item key={item._id} item={item} delete = { () => props.delete(index) }/>
        });

        return(
              <div>
                {/* <h1> List goes here</h1> */}
                <ul className="collection">
                    {listElements}
                </ul>
             </div>
        );
    // }
}

export default List;