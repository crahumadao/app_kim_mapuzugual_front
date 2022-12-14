import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography,Container, TextareaAutosize, Button, Grid } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const headers = {
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

function RulpaWirintukuwe({zugun}){


    const [konlu,setKonlu]     = useState('')
    const [txipalu,setTxipalu] = useState('')
    const [welulkan,setWelulkan] = useState([])


    const handleInputChangeK = (e)=>{
        let {name, value} = e.target;
        let newDatos = {...konlu,[name]:value};
        console.log(newDatos)
        setKonlu(newDatos);
        
      };
    
      
      
      const handleSubmit = async (e)=>{
        e.preventDefault();
        let gk = document.getElementsByName('grafemario_konlu')[0].value !=='0';
        let gt = document.getElementsByName('grafemario_txipalu')[0].value!=='0';
        let xz = document.getElementsByName('xoyzugun')[0].value !=='';
        if (!(gk & gt & xz)){
          console.log('Weza femüimi');
          let wiñolal = []
          if (!gk) {
            let tvfa = 'Tukul-lafimi tati grafemario konal'
            wiñolal.push(tvfa)
          };
            
          if (!gt){
            let tvfa = 'Tukul-lafimi tati grafemario konal'
            wiñolal.push(tvfa)
          };
           
          if (!xz) {
            let tvfa = 'Wirintukulaimi tami xoy zugun'
            wiñolal.push(tvfa)
          };
            setWelulkan(wiñolal)
        } else{
            setWelulkan([])
          
          let res = await axios.post(process.env.REACT_APP_API_URL+'/api/rulpazugual/',konlu,{headers:headers})
          setTxipalu(res.data.rulgepalu)
        }
      };


      const handleResChange = ()=>{        
        console.log('123')
      };


      useEffect(() => {        
        handleResChange()
      }, [konlu]);

        

    return(

    <Container sx={{width:'100%'}}>
            <Paper sx={{mt:2,width:'100%'}} elevation={4} >
                <Container sx={{display:'flex',borderTopLeftRadius:4,borderTopRightRadius:4,padding:2,justifyContent:'center',backgroundColor:'#87ceeb'}}>
                    <Typography variant='h4' sx={{display:'flex',padding:2,justifyContent:'center',weight:700, textAlign:'justify'}}> {zugun['rulpawirintukuwe']}</Typography>
                </Container>

                <Container hidden={welulkan===''}>
                    <ul id='welulkale' className='welulkale'>
                        {welulkan.map((welulka)=><li className='showError'>{welulka}</li>,)}
                    </ul>
                </Container>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Container sx={{ borderRadius: '16px', border:1, borderColor:'#949494',paddingBottom:3}}>
                            <Grid container spacing={1} mt={1}>
                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                             <Typography variant='h6'> <strong>{zugun['tWiTxoy']}</strong></Typography>
                             </Grid>
                             <Grid item xs={12} sm={12} md={12} lg={12} pr={2}>
                                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                                    <InputLabel id="grafemario_konlu">{zugun['grafemarioKonlu']}</InputLabel>
                                    <Select
                                        labelId="grafemario_konlu"
                                        name= "grafemario_konlu"
                                        id="grafemario_konlu"
                                        label="Grafemario konlu"
                                        onChange={handleInputChangeK}
                                    >
                                        <MenuItem value='Azümchefe'>Azümchefe</MenuItem>
                                        <MenuItem value='Ragileo'>Ragileo</MenuItem>
                                        <MenuItem value='Unificado'>Unificado</MenuItem>
                                    </Select>
                                </FormControl>
                                </Grid>
                             </Grid>
                             <TextareaAutosize minRows={8} name='xoyzugun'  style={{ width:'100%'}} placeholder={zugun['konluMsg']} value={konlu.xoyzugun} onChange={handleInputChangeK}> 
                            </TextareaAutosize> 
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Container sx={{ borderRadius: '16px', border:1, borderColor:'#949494',paddingBottom:3}}>
                            
                        <Grid container spacing={1} mt={1}>
                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Typography variant='h6'><strong>{zugun['tRuTxoy']}</strong></Typography>
                             </Grid>
                             <Grid item xs={12} sm={12} md={12} lg={12} pr={2}>
                                <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                                    <InputLabel id="grafemario_txipalu">{zugun['grafemarioTxipalu']}</InputLabel>
                                    <Select
                                        labelId="grafemario_txipalu"
                                        id="grafemario_txipalu"
                                        name= "grafemario_txipalu"
                                        label="grafemario_txipalu"
                                        onChange={handleInputChangeK}
                                    >
                                        
                                        <MenuItem value='Azümchefe'>Azümchefe</MenuItem>
                                        <MenuItem value='Ragileo'>Ragileo</MenuItem>
                                        <MenuItem value='Unificado'>Unificado</MenuItem>
                                    </Select>
                                </FormControl>
                                </Grid>
                             </Grid>
                            
                        <TextareaAutosize  minRows={8}  style={{ width:'100%'}} placeholder={zugun['txipaluMsg']} value={txipalu} > 
                            </TextareaAutosize> 
                        </Container>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx ={{display:'flex',justifyContent:'center',paddingTop:3,paddingBottom:3}}>
                    <Button variant='contained' onClick={handleSubmit}>{zugun['rulpafe']}</Button>
                </Container>
            </Paper>
        </Container>
    );
};




export default RulpaWirintukuwe;