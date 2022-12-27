import React, { useEffect, useState } from 'react';
import Rakiam from './Rakin/Rakiam';
//import Wirintukuam from './Wirintukuam/Wirintukuam';
import ChuchiWirintukun from './ChuchiWirintukun/ChuchiWirintukun';
import RulpaWirintukuwe from './RulpaWirintukuwe/RulpaWirintukuwe';
import Kaxvkaam from './Kaxvkaam/Kaxvkaam';
import {Box,Button,Container,Paper,AppBar,Toolbar, Typography, Grid, CircularProgress} from '@mui/material';
import {useStyles2} from '../styles/useCustomUseStyle';
import axios from 'axios';
import {images} from '../utils/objAukin';
import Backdrop from '@mui/material/Backdrop';



function Ruka() {

    const handleClose = () => {
        setTaZugu(false);
      };

  const classes = useStyles2();
  
  const [zulliafiel,setZulliafiel] = useState([true,false,false,false])
  const [zugunMW,setZugunMW] = useState(null)
  const [loadingMetadata, setLoadingMetadata] =useState(true)
  const [mapuzugun, setMapuzugun] = useState(true)
  const [thisZugun, setThisZugun] = useState(null)
  const [taZugu, setTaZugu] = useState(true)
  const welualChem = (i)=>{
    var zullin = [false,false,false,false]
    zullin[i] = true
    setZulliafiel(zullin)
  };
  const welualZugun = ()=>{
    if (mapuzugun){
        setMapuzugun(!mapuzugun)
        setThisZugun(zugunMW['wigkazugun'])
    }else{
        setMapuzugun(!mapuzugun)
        setThisZugun(zugunMW['mapuzugun'])
    }
    
  }


    useEffect(() => {
        const getData = async () => {
            try {

            const res = await axios.get(process.env.REACT_APP_API_URL+'/api/narvmal/metadata')  
            console.log(res)
            console.log(res.data)
            setZugunMW(res.data)
            console.log(loadingMetadata)
            if(mapuzugun){
                setThisZugun(res.data['mapuzugun'])
            } else{
                setThisZugun(res.data['wigkazugun'])
            }           
            } catch (err) {
            console.log(err)
            } finally {
            setLoadingMetadata(false);
            }
        };
        getData();
        }, []);

  

  return (<>
  <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={taZugu}
    >
        <Grid container sx={{display:'flex',alignContent:'center',justifyContent:'center', backgroundColor:'yellow', borderColor: 'black', borderWidth: '10px', borderStyle:'solid', color:'black' }} spacing={3} padding={2} marginTop={3} marginBottom={3} >
            <Grid item xs={12} sm={12} md={12} lg={12}> 
                <Typography variant='h4' align='center' >
                    Petu küzawküleiñ tüfachi App mu fey mu welulkaleafui. 
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}> 
                <Typography variant='h4' align='center' >
                    Todavía estamos trabajando en esta App así que podría contener errores.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{alignContent:'center', justifyContent:'center'}} > 
                <Typography variant='h3' align='center' >
                    <Button  variant='contained' sx={{ backgroundColor:'black'}} onClick={handleClose}> Nürüfam / Cerrar </Button>
                </Typography>
                
            </Grid>
        </Grid>
    </Backdrop>       
    {zugunMW!== null?
    <Container className={classes.folilRuka}  maxWidth={false}  disableGutters>
        
  
            <AppBar position="static" sx={{width:'100%'}}>
                <Box sx={{display:'flex',width:'100%',alignContent:'center',justifyContent:'center',paddingTop:2}}>
                    <Grid container>
                    <Grid item xs={0} sm={0} md={2} lg={2}> 
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} sx={{display:'flex',justifyContent:'center'}}> 
                    <Typography variant='h4'>
                        KimMapuzugumekeaiñ!
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} sx={{display:'flex',justifyContent:'center'}}>  
                    <Button variant='contained' className={classes.buttonNav} onClick={()=>{welualZugun()}} sx={{ my: 1, color: 'white', display: 'block' }} >{mapuzugun?'Español':'Mapuzugun'}</Button>

                    </Grid>
                    </Grid>
                </Box>
                <Toolbar sx={{width:'100%'}}>
                    <Grid container sx={{display:'flex',alignContent:'center',justifyContent:'center'}} spacing={1}>
                        <Grid item>
                        <Button variant='contained' className={classes.buttonNav} onClick={()=>{ welualChem(0)}} sx={{ my: 1, color: 'white', display: 'block' }} > {thisZugun.chalin}  </Button>
                        </Grid> 
                        <Grid item>
                        <Button variant='contained' onClick={()=>{ welualChem(1)}} sx={{ my: 1, color: 'white', display: 'block' }} >{thisZugun.wvzalkawe}</Button>
                        </Grid> 
                        <Grid item>
                        <Button variant='contained' onClick={()=>{ welualChem(2)}} sx={{ my: 1, color: 'white', display: 'block' }} >{thisZugun.rulpawirintukuwe}</Button>
                        </Grid> 
                        <Grid item>
                        <Button variant='contained' onClick={()=>{ welualChem(3)}} sx={{ my: 1, color: 'white', display: 'block' }} >{thisZugun.chuchiwirintukun}</Button>
                        </Grid> 
                        <Grid item>
                        <Button variant='contained' onClick={()=>{ welualChem(4)}} sx={{ my: 1, color: 'white', display: 'block' }} >{thisZugun.Rakiam}</Button>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
                    
                <Box sx={{display:'flex',alignContent:'center',justifyContent:'center',width:'100%'}}>
                    {zulliafiel[0]?
                          <Container disableGutters sx={{display:'flex',alignContent:'center',justifyContent:'center',padding:5,alignText:'center'}} >
                            
                            <Container sx={{width:'100%'}}>
                            <Paper sx={{mt:2,width:'100%'}} elevation={4} >
                            
                            <Container sx={{display:'flex',borderTopLeftRadius:4,borderTopRightRadius:4,padding:2,justifyContent:'center',backgroundColor:'#87ceeb'}}>
                                        <Typography variant='h4' sx={{display:'flex',padding:2,justifyContent:'center',weight:700, textAlign:'justify'}}> {thisZugun['chalin']}</Typography>
                            </Container>
                            <Grid container sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                            <Grid item padding={4}>
                            <image src={images[0].path}/>
                            </Grid>    
                            <Grid item padding={4}>
                            <Typography variant='h5'>{thisZugun['chalin2']}</Typography>
                            </Grid>    
                            
                                
                                
                            </Grid>
                            </Paper>
                            </Container>
                            
                          </Container>:null
                      }
                      {zulliafiel[1]?
                          <Container disableGutters sx={{display:'flex',alignContent:'center',justifyContent:'center'}} >
                              <Kaxvkaam zugun={thisZugun}/>
                          </Container>:null
                      }

                      {zulliafiel[2]?
                          <Container disableGutters sx={{display:'flex',alignContent:'center',justifyContent:'center'}} >
                              <RulpaWirintukuwe zugun={thisZugun}/>     
                          </Container>:null
                      }
                    
                    
                      {zulliafiel[3]?   
                          <Container disableGutters sx={{display:'flex',alignContent:'center',justifyContent:'center'}} >
                              <ChuchiWirintukun zugun={thisZugun}/>        
                          </Container>:null
                      }
                    {zulliafiel[4]?
                          <Container disableGutters sx={{display:'flex',alignContent:'center',justifyContent:'center'}} >
                              <Rakiam zugun={thisZugun}/>
                          </Container>:null
                      }


                </Box>
                
    </Container>:<Container sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}><CircularProgress/></Container>}
    
    </>
    
  );
}

export default Ruka;
