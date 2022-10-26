import React from 'react';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Paper, Typography, Grid, Switch, Stack, TextField } from '@mui/material'
function Wirintukuam() {
    const [folilZugun, setFolilZugun] = useState(' ')
    const [chumgechi, setChumgechi] = useState(0)
    const [le, setLe] = useState(false)
    const [ke, setKe] = useState(false)
    const [la, setLa] = useState(false)
    const [a, setA] = useState(false)
    const [femlu, setFemlu] = useState(0)
    const [txipan, setTxipan] = useState(' ')

    const sets = {
        folilZugun: (value) => { setFolilZugun(value) },
        chumgechi: (value) => { setChumgechi(value) },
        le: (value) => { setLe(value) },
        ke: (value) => { setKe(value) },
        la: (value) => { setLa(value) },
        a: (value) => { setA(value) },
        femlu: (value) => { setFemlu(value) },
    }

    const superPron = {
        0: {0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
        },
        1: {0: '',
            1: 'n',
            2: 'ymi',
            3: 'y',
            4: 'yu',
            5: 'ymu',
            6: 'y egu',
            7: 'iñ',
            8: 'ymün',
            9: 'y egün',
        },
        2: {0: '',
            1: 'li',
            2: 'lmi',
            3: 'le',
            4: 'liyu',
            5: 'lmu',
            6: 'le egu',
            7: 'liyiñ',
            8: 'lmün',
            9: 'le egün'
        }
        ,
        3: { 0:'',
            1: 'chi',
            2: 'ge',
            3: 'pe',
            4: 'yu',
            5: 'mu',
            6: 'pe egu',
            7: 'yiñ',
            8: 'mün',
            9: 'pe egün'
        }
    }



    const handleInputChangeK = (e) => {
        let { name, value } = e.target;
        console.log('name/Value')
        console.log(name)
        console.log(value)
        console.log(sets[name])
        sets[name](value);
        zewmayalTxipan()

    };

    const handleInputChange = (e) => {
        let { name } = e.target;
        const v = {
            'a': a,
            'le': le,
            'ke': ke,
            'la': la
        }
        sets[name](!v[name])
        zewmayalTxipan()
    }


    const zewmayalTxipan = () => {
        var zugun = folilZugun
        if (le) zugun = zugun + 'le'

        if (ke) zugun = zugun + 'ke'
        if (la) zugun = zugun + 'la'
        if (a) {
            if (zugun.at(-1) === 'a') zugun = zugun + 'y'
            zugun = zugun + 'a'
        }
        console.log(chumgechi,femlu)
        console.log(superPron[chumgechi][femlu])

        zugun = zugun + superPron[chumgechi][femlu]
        setTxipan(zugun)
        console.log(zugun)
    }

    useEffect(() => { }, [])


    return (
        <Container sx={{ width: '100%' }}>
            <Paper sx={{ mt: 1, width: '100%' }} elevation={4} >
                <Container sx={{ display: 'flex', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 2, justifyContent: 'center', backgroundColor: '#87ceeb' }}>
                    <Typography variant='h4' sx={{ display: 'flex', padding: 2, justifyContent: 'center', weight: 700, textAlign: 'justify' }}> RulpaWirintukuwe </Typography>
                </Container>
                <Container sx={{ borderRadius: '16px', border: 1, borderColor: '#949494', paddingBottom: 3, paddingTop: 2 }}>
                    <Grid container sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <Grid item xs={4} sm={4} md={3} lg={3} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Stack direction='column'>
                                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
                                    <Typography variant='p'><strong>Folil Zugun</strong></Typography>
                                </Container>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <TextField id="folilZugun" label="Zugun" name="folilZugun" onChange={handleInputChangeK} />
                                </Container>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sm={4} md={1} lg={1} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Stack direction='column' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1 }}>
                                    <Typography variant='p'><strong>le</strong></Typography>
                                </Container>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Switch name='le' checked={le} onChange={handleInputChange} />
                                </Container>
                            </Stack>

                        </Grid>
                        <Grid item xs={4} sm={4} md={1} lg={1} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Stack direction='column' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1 }}>
                                    <Typography variant='p'><strong>ke</strong></Typography>
                                </Container>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Switch name='ke' checked={ke} onChange={handleInputChange} />
                                </Container>

                            </Stack>

                        </Grid>
                        <Grid item xs={4} sm={4} md={1} lg={1} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Stack direction='column' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1 }}>
                                    <Typography variant='p'><strong>la</strong></Typography>
                                </Container>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Switch name='la' checked={la} onChange={handleInputChange} />
                                </Container>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sm={4} md={1} lg={1} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Stack direction='column' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1 }}>
                                    <Typography variant='p'><strong>a</strong></Typography>
                                </Container>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Switch name='a' checked={a} onChange={handleInputChange} />
                                </Container>
                            </Stack>
                        </Grid>
                        <Grid item xs={4} sm={4} md={3} lg={3} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Stack direction='column' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1 }}>
                                    <Typography variant='p'><strong>Tati Femlu</strong></Typography>
                                </Container>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                                        <InputLabel id="femlu">Femlu</InputLabel>
                                        <Select
                                            labelId="femlu"
                                            id="femlu"
                                            name="femlu"
                                            label="femlu"
                                            onChange={handleInputChangeK}
                                        >
                                            <MenuItem value={1}>iñche (yo)</MenuItem>
                                            <MenuItem value={2}>eymi (tú)</MenuItem>
                                            <MenuItem value={3}>fey/kizu (el/ella)</MenuItem>
                                            <MenuItem value={4}>iñchiu (nostros 2)</MenuItem>
                                            <MenuItem value={5}>eymu (ustedes 2)</MenuItem>
                                            <MenuItem value={6}>fey/kizu egu (ellxs 2)</MenuItem>
                                            <MenuItem value={7}>iñchiñ (nosotros [+ de 2])</MenuItem>
                                            <MenuItem value={8}>eymün (ustedes [+ de 2])</MenuItem>
                                            <MenuItem value={9}>fey/kizu egün (ellxs [+ de 2])</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Container>

                            </Stack>
                        </Grid>
                        <Grid item xs={4} sm={4} md={2} lg={2} sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Stack direction='column' sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 1 }}>
                                    <Typography variant='p'><strong>Chumgechi?</strong></Typography>
                                </Container>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                                        <InputLabel id="chumgechi">Femlu</InputLabel>
                                        <Select
                                            labelId="chumgechi"
                                            id="chumgechi"
                                            name="chumgechi"
                                            label="chumgechi"
                                            onChange={handleInputChangeK}
                                        >
                                            <MenuItem value={1}>indicativo (n, ymi, ...)</MenuItem>
                                            <MenuItem value={2}>condicional (li, lmi, ...)</MenuItem>
                                            <MenuItem value={3}>imperativo (chi,ge, ...)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Container>
                            </Stack>
                        </Grid>
                    </Grid>

                </Container>

                {txipan ?
                    <Container container sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        {txipan}
                    </Container> : null

                }
            </Paper>
        </Container>










    );
};

export default Wirintukuam;