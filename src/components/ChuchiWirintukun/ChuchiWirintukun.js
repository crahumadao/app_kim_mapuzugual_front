import React from 'react';
import { useState , useEffect } from 'react';
import { Paper, Typography,Container, TextareaAutosize, Button, Grid,Stack} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Txafla from '../Txafla/Txafla';
import PegelamZugu from '../PegelamZugu/PegelamZugu'

function ChuchiWirintukun({zugun}){

    
    const [konluw,setKonluw]     = useState('');
    const  [txaflaWif , setTxaflaWif] = useState([]);
    const  [idTxafla , setIdTxafla] = useState(0);
    const [gvlalen, setGvlalen] = useState(false);
    const [weluZugun,setWeluZugun] =useState('');

    const headers = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };


    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (konluw.length === 0)
            {
                console.log('GelayCemNoRume')
            }else{
                setGvlalen(false)
                let res = await axios.post(process.env.REACT_APP_API_URL+'/api/chuchiWirintukun/',{xoyzugunw:konluw},{headers:headers})        
                if (res.data['code']===1){
                var newtxipalu=res.data['wirintukunArray'].map(l=>l[2]);
                var newWif = {id:idTxafla,zugun:konluw,graf:newtxipalu,entual:idTxafla};
                console.log(newWif);
                setIdTxafla(idTxafla+1);
                setKonluw('');
                var newTxafla=txaflaWif.slice();
                newTxafla.push(newWif);
                setTxaflaWif(newTxafla);}
                else{
                    setWeluZugun(res.data['msg']);
                    setGvlalen(true);
                }

            }

        
    };
    
    const handleInputChangeK = (e)=>{
        let {  value} = e.target;
        let newDatos = value;
        setKonluw(newDatos);
    };

    const handleResChange = ()=>{

    }
      

    const entuafielWif= (value)=>{
        var entuafiel = txaflaWif.filter(word => word.id !== value);
        setTxaflaWif(entuafiel)
        console.log(txaflaWif)
    }

    useEffect(() => {        
        handleResChange();
      }, [konluw]);




      const logkoTxafla= [
        { field: 'id', headerName: 'Sección' ,hide:true},
        { field: 'zugun',
         headerName: zugun['zugunChuchi'],
         flex:0.6,
        renderCell: (params)=>{
            console.log('pr')
            console.log(params.value)
            return(
                
                <p>{params.value}</p>
                
            )
          }},
        {
          field: 'graf', 
          headerName: 'Grafemario',
          editable: false,
          flex:0.3,
          renderCell: (params)=>{
            console.log('paramsGRAF')
            console.log(params.value)
            return(
                <Stack>
                    <p>
                        {params.value.map((el)=><p>{el}</p>)}
                    </p>
                </Stack>
            )
          }
        },
        {
          field: 'entual',
          headerName: zugun['entuafiel'],
          flex:0.2,
          editable: false,
          renderCell: (params)=>{ 
                                      return(
                                          <>
                                          <IconButton aria-label="delete" onClick={()=>{entuafielWif(params.value)}}>
                                            <DeleteIcon  />  
                                          </IconButton>   
                                          </>
                                          )
                                      },
        },
      ]; 
    



    return(
        <Container sx={{width:'100%'}}>
            <Paper sx={{mt:2,width:'100%'}} elevation={4} >
                <Container sx={{display:'flex',borderTopLeftRadius:4,borderTopRightRadius:4,padding:2,justifyContent:'center',backgroundColor:'#87ceeb'}}>
                    <Typography variant='h4' sx={{display:'flex',padding:2,justifyContent:'center',weight:700, textAlign:'justify'}}> {zugun['chuchiwirintukun']} </Typography>
                </Container>
                <Container sx={{display:'flex',padding:1,justifyContent:'center'}}>
                    <Grid container spacing={1}sx={{display:'flex',padding:0,justifyContent:'center', width:'100%'}}>
                        <Grid item  xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='p' sx={{display:'flex',padding:2,justifyContent:'flex-start'}}> {zugun['chuchiPegelam']}</Typography>
                        </Grid>
                    </Grid>
                </Container> 
                <Container sx={{display:'flex',padding:2,justifyContent:'center'}}>
                    <TextareaAutosize minRows={5}  style={{ width:'100%'}} placeholder={zugun['textareaChuchi']} value={konluw} onChange={handleInputChangeK}> 
                    </TextareaAutosize>
                </Container>
                <Container sx={{display:'flex',padding:2,justifyContent:'center'}}>
                    <Button variant='contained' className='butChuchi' onClick={handleSubmit}>{zugun['kimamTatiWirintukun']}</Button>
                </Container>
                <PegelamZugu gvlalen={gvlalen} setGvlalen={(param)=>{setGvlalen(param)}} msg={weluZugun} color='warning'/>
            </Paper>

            {txaflaWif.length>0?
            <Paper sx={{mt:2,width:'100%'}} elevation={4} >
                <Container sx={{padding:3,width:'70%',display:'flex',justifyContent:'center' }}>
                    <Txafla wif={txaflaWif} logko={logkoTxafla}  />
                </Container>
            </Paper>:null
            }
        </Container>

    );
};

export default ChuchiWirintukun;