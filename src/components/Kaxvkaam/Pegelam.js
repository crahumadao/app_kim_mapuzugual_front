import React from "react";
import {Grid,Container,Paper,Typography} from '@mui/material'


function Pegelam({hemvl}) {
    function factorial (n) {
	var total = 1; 
	for (let i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

   // const componentToHex = (c)=> {
   //     var hex = c.toString(16);
   //     return hex.length === 1 ? "0" + hex : hex;
   //   }
      
//    const rgbToHex = (r, g, b) => {
 //       return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  //    }

    const colors = [
        "#17d12b",
        "#1c5845",
        "#2ab376",
        "#30fdb4",
        "#3b9b18",
        "#44d835",
        "#452aa7",
        "#454da9",
        "#4cd135",
        "#78db16",
        "#80e219",
        "#a20e42",
        "#be2cab",
        "#d147af",
        "#d2cd15",
        "#dd62a9",
        "#df9c5b",
        "#e52e4a",
        "#efc26f",
        "#fef2ec"
      ]
    let wif = [];
    
    let maxColumn = 0;
    
    for (let i = 0; i<hemvl.hemvlkawe.length; i++){
        
        if (hemvl.hemvlkawe[i][3].length>maxColumn) maxColumn = hemvl.hemvlkawe[i][3].length  
        
    }


    
    //let multi =  1;
    //if (maxColumn>5) multi=2

    let columns = factorial(maxColumn);
    for (let i = 0; i<hemvl.hemvlkawe.length; i++){
        wif.push(
            <Grid key={'2cond-grid-'+i.toString()+hemvl.vy} item xs={12} sm={12} md={12} lg={12} >
                <Container sx={{display:'flex',justifyContent:'center',width:'100%',paddingBottom:2,borderColor:'#ffffff' }}>
                    
                        <Grid container columns={columns} sx={{display:'flex',justifyContent:'center',width:'100%',backgroundColor:'#fafafa',border:2,borderRadius:2 }} spacing={1}>
                            {function() { 
                                let xoyZugun =[];
                                for (let j = 0; j<hemvl.hemvlkawe[i][3].length;j++){
                                    let chumtei = Math.max(Math.floor(columns/hemvl.hemvlkawe[i][3].length),2   )
                                    let maxLengthWord = 0;

                                    hemvl.hemvlkawe[i][2].forEach(element=>{
                                        if (element.length>maxLengthWord) maxLengthWord = element.length
                                        });
                                    let tasa = Math.round(7*(maxLengthWord/maxColumn)).toString()+'px'
                                    //if (hemvl.hemvlkawe[i][3].length<=5) multi=2

                                    

                                    xoyZugun.push(
                                        <Grid key={'3cond-grid-'+i.toString()+hemvl.vy+j.toString()} item xs={columns} sm={(columns/2)} md={chumtei} lg={chumtei} sx={{display:'flex',justifyContent:'center',width:'100%', color:'#ffffff'}} >
                                            <Grid container sx={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center',height:'100%'}} spacing={1}>
                                                <Paper sx={{mt:2,marginBottom:2,width:'100%'}} elevation={4} >
                                                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ height:'auto'}}>
                                                        <Container sx={{ borderTopLeftRadius:5 , borderTopRightRadius:5,  backgroundColor:colors[j], color:'#ffffff',wordWrap:'break-word',alignContent:'center', justifyContent:'center'}}>
                                                            <Typography><strong>{hemvl.hemvlkawe[i][3][j]}</strong></Typography>
                                                        </Container>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ borderColor:colors[j], textAlign:'justify',alignContent:'center', justifyContent:'center'}}>
                                                        <Container sx={{  height:tasa , color:'#000000'}}>
                                                            <Typography sx={{alignContent:'center', justifyContent:'center'}}>{hemvl.hemvlkawe[i][2][j]}</Typography>
                                                        </Container>
                                                    </Grid>
                                                </Paper>
                                                {tasa}
                                            </Grid>
                                        </Grid>
                                        )
                                    } 
                                    return xoyZugun
                                }()
                            }
                        </Grid>
                </Container>
            </Grid>
        )
    }
    return wif
}

export default Pegelam;