import React from 'react';
import { useState } from 'react';

import Rakiwe from './Rakiwe'
import { Grid, Button, Paper, Container, CssBaseline, Typography,Stack } from '@mui/material'
import {objAukin} from '../../utils/objAukin'



function Rakiam2 ({zugun}){ 
    const [rakinKvli,setRakinKvli ] = useState([0,0,0,0]);//[0,0,0,0]);
    const [wirin,setWirin ] = useState(['','','','']);//[0,0,0,0]);
    const [wirinPefalgen,setWirinPefalgen ] = useState([false,false,false,false]);//[0,0,0,0]);
    const [aukinList,setAukinList] = useState([[],[],[],[]]);
    const [allkvtuam, setAllkvtuam] = useState(new Audio())
    const [total,setTotal] = useState(0)
    const [playing, setPlaying] = useState([false,false,false,false])
    const [playing_, setPlaying_] = useState(false)
    
    
    const b1style={
        backgroundColor:'#8c22c5',
        weight:700,
        padding:1

    }

    const b2style={
        backgroundColor:'#f033e0',
        weight:700,
        padding:1
    }
    const b3style={
        backgroundColor:'#38cd3d',
        weight:700,
        padding:1
    }
    const b4style={
        backgroundColor:'#e6e627',
        weight:700,
        padding:1
    }



    const kineTukulal = (s)=>{
            let werakin;
            if (s[0]==='+') {
                 werakin=rakinKvli[parseInt(s[1])]+1;    
                if (werakin >9){
                    werakin=0;
                };
            }else{
                werakin=rakinKvli[parseInt(s[1])]-1;
                if (werakin<0){
                    werakin=9;
                };
            };              
            let pre = rakinKvli.map(l => l);
            pre[parseInt(s[1])] = werakin;
            setRakinKvli(pre);
            wirintukukunulal(parseInt(s[1]),pre[parseInt(s[1])])
            zewmaAukinList(parseInt(s[1]),pre[parseInt(s[1])])           
            console.log(total) 
            setTotal(rakinKvli[3]*1000+rakinKvli[2]*100+rakinKvli[1]*10+rakinKvli[0])
            
        };
    const wirintukukunulal = (s,r)=>{
            let posrakin;
            const rakindict = {1:'kiñe',2:'epu',3:'küla',4:'meli',5:'kechu',6:'kayu',7:'reqle',8:'pura',9:'aylla',0:''}
                switch(s) {
                    case 0:
                        posrakin = ''
                        break;

                    case 1:
                        posrakin = 'mari'
                        break;

                    case 2:
                        posrakin = 'pataka'
                        break;

                    case 3:
                        posrakin = 'waragka'   
                        break;

                    default:
                        posrakin=''
                    }

            let pre = wirin.map(l => l);   
            let prep = wirinPefalgen.map(l => l);                     

            if ((posrakin==='') & (r===0) ){
                prep[s] = false;
            }else{
            prep[s] = true;
            }
            if(r===1 & s!==0){
                pre[s]=posrakin
            }else if(r===0){
                pre[s]='';
                prep[s]=false;
            }else{
                pre[s]=rakindict[r]+' '+posrakin;
            }

            
            setWirin(pre);
            setWirinPefalgen(prep);
        };
    const zewmaAukinList =  (s,r)=>{
            let posrakin;
            const rakindict = {1:'1_kiñe.mp3',2:'2_epu.mp3',
                               3:'3_kvla.mp3',4:'4_meli.mp3',
                               5:'5_kechu.mp3',6:'6_kayu.mp3',
                               7:'7_reqle.mp3',8:'8_pura.mp3',
                               9:'9_aylla.mp3'}
            let pre = aukinList.map(l => l);   
            switch(s) {
                case 0:
                    posrakin=''
                    break;
                case 1:
                    posrakin = '10_mari.mp3'
                    break;

                case 2:
                    posrakin = '100_pataka.mp3'
                    break;

                case 3:
                    posrakin = '1000_waragka.mp3'   
                    break;

                default:
                    posrakin=''
                }
            
            if(r===1 & s!==0){
                pre[s]=[posrakin]
            }else if(r===0){
                pre[s]=[];
            }else{
                if (posrakin!==''){
                    pre[s]=[posrakin,rakindict[r]];
                }else{
                    pre[s]=[rakindict[r]];
                }
                
            }
            console.log('aukin',pre);
            setAukinList(pre);
            var tatiaukinList =[]
            console.log('asdasdasasd')
            console.log(pre)
            pre.map( async (element)=>{
                            console.log('primer Await')
                            console.log(element)
                            await element.map(async(subelement)=>{
                                        console.log('2do Await')
                                        console.log(subelement)
                                        const a = objAukin.filter((element2)=>element2.name === subelement)
                                        console.log('a')
                                        console.log(a)
                                        const pathsrc = a.pop()
                                        console.log('b')
                                        var srcAudio = new Audio(pathsrc.path)
                                        srcAudio.type="audio/mp3"
                                        console.log(srcAudio)
                                    tatiaukinList.push( srcAudio)
                                        }
                            )
            })
            console.log('tatiaukinList')
            console.log(tatiaukinList)
            setAllkvtuam(tatiaukinList );
        };
    const playSound = (sound) =>{
        console.log('...c')
        sound.play();
        setPlaying([false,false,false,false])
    }

    const playingS = (num) =>{
        var toset = [false,false,false,false]
        toset[num] = true
        setPlaying(toset)
        console.log('-X')
    }

        
    const allkvtuamAudio = ()=>{
        console.log(aukinList);
        console.log(allkvtuam);
        setPlaying_(true)
        let prevSoundDurationSum = 0;
        
        for (let playsound = allkvtuam.length-1; playsound >= 0; playsound--) {
            setTimeout(playSound, prevSoundDurationSum, allkvtuam[playsound]);
            setTimeout(playingS, prevSoundDurationSum, playing[playsound]);
            if (playsound === 0 ){setTimeout(setPlaying_(false), prevSoundDurationSum+allkvtuam[playsound].duration * 1000, playing[playsound]);}

            /* Add to the sum */
            prevSoundDurationSum += allkvtuam[playsound].duration * 1000;
        }







    }
    return(
        <Container sx={{width:'100%'}}>
        <Paper sx={{mt:2,width:'100%'}} elevation={4} >
        <CssBaseline/>
        <Container sx={{display:'flex',borderTopLeftRadius:4,borderTopRightRadius:4,padding:2,justifyContent:'center',backgroundColor:'#87ceeb'}}>
                    <Typography variant='h4' sx={{display:'flex',padding:2,justifyContent:'center',weight:700, textAlign:'justify'}}> {zugun['Rakiam']}</Typography>
        </Container>
        <Grid container sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
            <Grid item xs={12} sm={10} md={10} lg={10}>
                <Grid container columnGap={2} marginTop={2} marginBottom={2} sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <Grid item xs={2} sm={2} md={2} lg={2} sx={{display:'flex', justifyContent:'center','flexDirection': 'column'}} >
                        <Button  variant='contained' onClick={()=>kineTukulal('+3')}   style={b4style}>
                            +
                        </Button>
                        <Container disableGutters>
                            <Rakiwe rakinKvli={rakinKvli[3]} furiazgen='3'/>
                        </Container>
                        <Button variant='contained' onClick={()=>kineTukulal('-3')}   style={b4style}>
                            -
                        </Button>
                    </Grid>
                    
                
                    <Grid item xs={2} sm={2} md={2} lg={2} sx={{display:'flex', justifyContent:'center','flexDirection': 'column'}} >
                        <Button variant='contained' onClick={()=>kineTukulal('+2')}   style={b3style}>
                            +
                        </Button>
                        <Container disableGutters>
                        <Rakiwe rakinKvli={rakinKvli[2]} furiazgen='2'/>
                        </Container>
                        <Button variant='contained' onClick={()=>kineTukulal('-2')}   style={b3style}>
                            -
                        </Button>
                    </Grid>

                    <Grid item xs={2} sm={2} md={2} lg={2} sx={{display:'flex', justifyContent:'center','flexDirection': 'column'}} >
                        <Button variant='contained' onClick={()=>kineTukulal('+1')}   style={b2style}>
                            +
                        </Button>
                        <Container disableGutters>
                        <Rakiwe rakinKvli={rakinKvli[1]} azkvnuam='1'/>
                        </Container>
                        <Button variant='contained' onClick={()=>kineTukulal('-1')}   style={b2style}>
                            -
                        </Button>
                    </Grid>
                
                    <Grid item xs={2} sm={2} md={2} lg={2} sx={{display:'flex', justifyContent:'center','flexDirection': 'column'}} >
                        <Button variant='contained' onClick={()=>kineTukulal('+0')}   style={b1style}>
                            +
                        </Button>
                        <Container disableGutters>
                        <Rakiwe rakinKvli={rakinKvli[0]} azkvnuam='0'/>
                        </Container>
                        <Button variant='contained' onClick={()=>kineTukulal('-0')}   style={b1style}>
                            -
                        </Button>
                    </Grid>
                </Grid>    
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10} sx={{display:'flex', justifyContent:'center','flexDirection': 'column'}} >
                <Container disableGutters  sx={{display:'flex', justifyContent:'center'}} >
                    <Paper sx={{padding:2}}>
                        <Typography variant='h4'  sx={{display:'flex', justifyContent:'center','flexDirection': 'column'}}>
                            {rakinKvli[3]*1000+rakinKvli[2]*100+rakinKvli[1]*10+rakinKvli[0]? rakinKvli[3]*1000+rakinKvli[2]*100+rakinKvli[1]*10+rakinKvli[0]: 'Chem no rume'}
                        </Typography>
                    </Paper>
                </Container>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10}>
            <Grid container  marginTop={2} marginBottom={2} sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{display:'flex', justifyContent:'center','flexDirection': 'column'}} >
                        <Container disableGutters  sx={{display:'flex', justifyContent:'center'}} >
                            <Stack direction="row" spacing={2}>
                                {rakinKvli[3]>0?
                                   <Typography variant='h5' sx={b4style}> {' '+wirin[3]+' '}</Typography> : null}
                                {rakinKvli[2]>0?
                                   <Typography variant='h5' sx={b3style}> {' '+wirin[2]+' '}</Typography> :null}
                                {rakinKvli[1]>0?
                                   <Typography variant='h5' sx={b2style}> {' '+wirin[1]+' '}</Typography> :null}
                                {rakinKvli[0]>0?
                                   <Typography variant='h5' sx={b1style}> {' '+wirin[0]+' '}</Typography> :null}
                            </Stack>
                        </Container>
                    </Grid>
                </Grid>    
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}> 
                <Container sx={{display:'flex',justifyContent:'center'}}>
                    <Button variant='contained' onClick={()=>allkvtuamAudio()} disabled={(rakinKvli[3]*1000+rakinKvli[2]*100+rakinKvli[1]*10+rakinKvli[0] | playing_)? false: true}> 
                            {zugun['allkvtuge']}
                    </Button>
                </Container>                  
            </Grid>
            
        </Grid>
        </Paper>
        </Container>
    );        
};

export default Rakiam2;
