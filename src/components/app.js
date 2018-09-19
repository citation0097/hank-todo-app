import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item';
import dummyListData from '../dummy_data/list_data';

// const App = () => (
class App extends Component {
    state = {
        list: []
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        // Call sever to get data
        this.setState({
            list: dummyListData
        })
    }

    // addItem(item){
     addItem = (item) => {    
        item._id = new Date().getTime();
        this.setState({
            list: [item,...this.state.list]
        });
        
    }
    render(){
        const {list} = this.state;
        return(
            <div className="container">
                <h1 className='center'>To Do App</h1>
                <AddItem add={this.addItem}/>
                <List data={list}/>
            </div>
        );
    }
    
}

export default App;
