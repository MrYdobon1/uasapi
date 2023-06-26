import React from "react";
import StartFirebase from "../firebaseConfig";
import {ref, set, get, update, remove, child} from "firebase/database";

export class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            db: '',
            artis: '',
            judul: '',
            album: '',
            gambar:'',
            tahun_rilis: ''
        }
        this.interface = this.interface.bind(this);
    }
    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }
    render(){
        return(
             <>

            <label>ID</label>
             <input type="text" id="artisbox" value={this.state.id} 
             onChange={e =>{this.setState({id: e.target.value});}}/>
             <br/> <br/> 

             <label>Nama Artis</label>
             <input type="text" id="artisbox" value={this.state.artis} 
             onChange={e =>{this.setState({artis: e.target.value});}}/>
             <br/> <br/> 
             
             <label>Judul Lagu</label>
             <input type="text" id="judulbox" value={this.state.judul} 
             onChange={e =>{this.setState({judul: e.target.value});}}/>
             <br/> <br/> 

             <label>Album</label>
             <input type="text" id="albumbox" value={this.state.album} 
             onChange={e =>{this.setState({album: e.target.value});}}/>
             <br/> <br/> 

             <label>Tahun Rilis</label>
             <input type="number" id="tahun_rilisbox" value={this.state.tahun_rilis}
             onChange={e =>{this.setState({tahun_rilis: e.target.value});}}/>
             <br/> <br/> 

             <label>Gambar</label>
             <input type="text" id="gambarbox" value={this.state.gambar}
             onChange={e =>{this.setState({gambar: e.target.value});}}/>
             <br/> <br/> 


             <button class="btn btn-primary" id="addBtn" onClick={this.interface}>Add Data</button>
             <button class="btn btn-primary" id="updateBtn" onClick={this.interface}>Update Data</button>
             <button class="btn btn-primary" id="deleteBtn" onClick={this.interface}>Delete Data</button>
             <button class="btn btn-primary"     id="selectBtn" onClick={this.interface}>Get Data from DB</button>
             </>
        )
    }

    interface(event){
        const id = event.target.id;

        if(id=='addBtn'){
            this.insertData();
        }
        else if (id=='updateBtn'){
            this.updateData();
        }
        else if (id=='deleteBtn'){
            this.deleteData();
        }
        else if (id=='selectBtn'){
            this.selectData();
        }
    }

    getAllInputs(){
        return{
            id: this.state.id,
            artis: this.state.artis,
            judul: this.state.judul,
            album: this.state.album,
            tahun_rilis: this.state.tahun_rilis,
            gambar: this.state.gambar,
        }
    }

    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'listartis/'+data.id),
        {
            artis: data.artis,
            judul: data.judul,
            album: data.album,
            tahun_rilis: data.tahun_rilis,
            gambar: data.gambar
        })
        .then(()=>{alert('sukses')})
        .catch((error)=>{alert('error'+error)});
    }

    updateData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'listartis/'+data.id),
        {
            artis: data.artis,
            judul: data.judul,
            album: data.album,
            tahun_rilis: data.tahun_rilis,
            gambar: data.gambar
        })
        .then(()=>{alert('sukses')})
        .catch((error)=>{alert('error'+error)});
    }

    deleteData(){
        const db = this.state.db;
        const id = this.getAllInputs().id;

        remove(ref(db, 'listartis/'+id))
        .then(()=>{alert('sukses')})
        .catch((error)=>{alert('error'+error)});
    }

    selectData(){
        const dbref =ref(this.state.db);
        const id = this.getAllInputs().id;
        get (child(dbref, 'listartis/'+id)).then((snapshot) => {
            if(snapshot.exists()){
                this.setState({
                    artis: snapshot.val().artis,
                    judul: snapshot.val().judul,
                    album: snapshot.val().album,
                    tahun_rilis: snapshot.val().tahun_rilis,
                    gambar: snapshot.val().gambar
                })
            }

            else{
                alert("no data found");
            }
        })
        .catch((error)=>{alert('error'+error)});
    }
}