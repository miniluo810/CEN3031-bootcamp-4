import React, {Component} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';


// const App = (props) => {
//     const [filterText, setFilterText] = useState('');
//     const [selectedBuilding, setSelectedBuilding] = useState(0);
//     const filterUpdate = (value) => {
//         //Here you can set the filterText property of state to the value passed into this function
//         this.setState({
//             filterText:value
//         })
//         //setFilterText(value);
//     };
//     const selectedUpdate = (id) => {
//         //Here you can update the selectedBuilding property of state to the id passed into this function
//         setSelectedBuilding(id);
//     };

class App extends Component{ 
    constructor (props){
        super(props)
        this.state={
            filterText:'',
            selectedBuilding:0,
            list:this.props.data
        }

    }
    filterUpdate(value){
        this.setState({
            filterText:value
        })
    }
    viewInfo(id){
        let updatedId=id-1
        this.setState({
            selectedBuilding:updatedId
        })

    }
    listUpdate(removeId){
        const updatedList=this.state.list.filter(item=>item.id!==removeId)
        this.setState({
            list:updatedList,
            selectedBuilding:0
        })
    }
    addList(newList){
        this.setState({
            list:newList
        })
    }
render(){
    return (
        <div className="bg">
            <div className="row">
                <h1>UF Directory App</h1>
            </div>
            
            <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
            />
            <main>
                <div className="row">
                    <div className="column1">
                        <div className="tableWrapper">
                            <table className="table table-striped table-hover">
                                <tr>
                                    <td>
                                        <b>Code Building</b>
                                    </td>
                                </tr>
                                <BuildingList
                                    filterText={this.state.filterText}
                                    data={this.state.list}
                                    viewInfo={this.viewInfo.bind(this)}
                                />
                            </table>
                        </div>
                    </div>
                    <div className="column2">
                        <ViewBuilding 
                            selectedBuilding={this.state.selectedBuilding}
                            data={this.state.list}
                        />
                         <RemoveBuilding 
                            selectedBuilding={this.state.selectedBuilding}
                            listUpdate={this.listUpdate.bind(this)}
                        /> 
                        <AddBuilding 
                            getList={this.state.list}
                            addList={this.addList.bind(this)}
                        />  
                    
                     </div>
                </div>
                
                
                <Credit/>
            </main>
        </div>
    );
};
}


export default App;
