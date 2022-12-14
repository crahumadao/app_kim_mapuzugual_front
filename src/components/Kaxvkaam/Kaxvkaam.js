import React from 'react';
import { useState, useEffect } from 'react';
import { Paper, Typography,Container,  Button, Grid,Stack, TextField, Collapse} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Pegelam from './Pegelam';
import axios from 'axios';


function Kaxvkaam({zugun}){



    const [konlu, setKonlu] = useState({hemvl:''});
    const [loading, setLoading] = useState(false);
    const [kaxvel,setKaxvel] = useState([]);
    const [gvlalen,setGvlalen] = useState({});
    const headers = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };




    const handleSubmit = async (e)=>{
        e.preventDefault();
        setKonlu({hemvl:''} )
        //let res = await axios.post('http://localhost:5001/api/wvzalkafe/',{xoyzugunw:konluw},{headers:headers})        
        setLoading(true)
        let res = await axios.post(process.env.API_URL+'/api/wvzalkafe/',konlu,{headers:headers})        
        let gvlalen = {}

        if (res.data.data) {
            res.data.data.map((element)=>{gvlalen[element.vy]=true;return 0})
            setGvlalen(gvlalen)
            }
        setKaxvel(res.data.data)
        setLoading(false)

        
    };
    
    const handleInputChangeK = (e)=>{
        
        let {name, value} = e.target;
        let newDatos = {...konlu,[name]:value};
        setKonlu(newDatos);
    };


    const collapseHandler = (e)=>{
        console.log('E')
        console.log(gvlalen)
        let {name, value} = e.target;
        let notValue;
        if (value === 'true'){
            notValue = false
        }else if (value === 'false'){
            notValue = true
        }else{
            notValue = !value
        }
        
        let newDatos = {...gvlalen,[name]:notValue};
        console.log(newDatos)
        console.log('F')
        setGvlalen(newDatos)
    }
    const handleKeypress = e => {      
        //it triggers by pressing the enter key    
        if (e.keyCode === 13) {      
            handleSubmit();    }  };
            
    useEffect(()=>{setKaxvel(kaxvel)},[kaxvel])
    
    return(
        <Container sx={{width:'100%'}}>
            <Paper sx={{mt:2,width:'100%'}} elevation={4} >
                <Container sx={{display:'flex',borderTopLeftRadius:4,borderTopRightRadius:4,padding:2,justifyContent:'center',backgroundColor:'#87ceeb'}}>
                    <Typography variant='h4' sx={{display:'flex',padding:2,justifyContent:'center',weight:700, textAlign:'justify'}}> {zugun['wvzalkawe']}</Typography>
                </Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Container sx={{display:'flex',padding:2,justifyContent:'center'}}>
                            <Typography variant='h6'>
                                {zugun['tamiZugun']}
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}> 
                        <Container sx={{display:'flex',padding:2,justifyContent:'center'}}> 
                            <TextField id="folilZugun" value={konlu.hemvl} label={zugun['Nhemvl']}  name="hemvl" onChange={handleInputChangeK} />    
                        </Container>
                    </Grid>
                
                </Grid>
                <Container sx={{display:'flex',padding:2,justifyContent:'center'}}>
                    <Button variant='contained' onKeyDown={handleKeypress} onClick={handleSubmit} disabled={konlu.hemvl===''}> {zugun['Wvzalkafe']}</Button>
                </Container>
            </Paper>

            <Paper sx={{mt:2,width:'100%'}} elevation={4} >
                {loading? 
                <Container sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}><CircularProgress/></Container>
                
                :<> 
                <Stack direction='column' sx={{mt:2,width:'100%'}}>
                
                    {kaxvel.length>0 ? <>{kaxvel.map((hemvl)=>
                        <Grid key={'main-grid-'+hemvl.vy} container sx={{display:'flex',justifyContent:'center',width:'100%',marginTop:3}}>
                             <Grid item xs={8} sm={8} md={8} lg={8} sx={{display:'flex',justifyContent:'center',width:'100%',marginTop:3,marginBottom:3}}>
                                <Typography variant='h4' >
                                    {zugun['Nhemvl']}:  <strong>{hemvl.vy}</strong> 
                                </Typography>
                            </Grid>   
                            <Grid item xs={4} sm={4} md={4} lg={4} sx={{display:'flex',justifyContent:'center',width:'100%',marginTop:3,marginBottom:3}}>
                                <Button name={hemvl.vy} value={gvlalen[hemvl.vy]} onClick={collapseHandler} variant='outlined'>
                                    {!gvlalen[hemvl.vy]? zugun['gvlafe']:zugun['nvrvfkvnuge']}
                                </Button>
                            </Grid>   
                            <Collapse in={gvlalen[hemvl.vy]} >
                            
                            <Grid item xs={12} sm={12} md={12} lg={12} >
                                    <Grid container spacing={3} >
                                        <Pegelam hemvl={hemvl}/>
                                    </Grid>
                            </Grid>
                            
                            </Collapse>
                        </Grid>
                )}</>:null}
                </Stack>
                </>
              }
            </Paper>
            

            
        </Container>

    );
};

export default Kaxvkaam;