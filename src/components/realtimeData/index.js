import StartFirebase from "../firebaseConfig/index";
import React from "react";
import {ref, onValue, set, get, update, remove, child} from 'firebase/database';
import {Table} from 'react-bootstrap';




const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super(); 
        this.state = {
            tableData: []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'listartis');

        onValue(dbRef, (snapshot)=>
        {
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data":data});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(


          
            
        <Table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Artis</th>
                    <th>Album</th>
                    <th>Album Photo</th>
                    <th>Judul</th>
                    <th>Tahun Rilis</th>
                </tr>
            </thead>

            <tbody>
                {this.state.tableData.map((row, index)=>{
                    return(
                    <tr>
                            <td>{row.key}</td>
                        <td>{row.data.artis}</td>
                        <td>{row.data.album}</td>
                        <td><img src={row.data.gambar} width="200px" height="200px" alt="..."></img></td>
                        <td>{row.data.judul}</td>
                        <td>{row.data.tahun_rilis}</td>
                    
                    </tr>
                    
                    )
                })}
            </tbody>
        </Table>

       
        )
    }
}