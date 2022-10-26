import React from 'react';




function Boton({kineTukulal,tukulal,azkvnuam}){
    

    const alvtuam =  tukulal ? 'alvtuam':'pichituam';
    return (
        <div className='contbutton'>
            <button onClick={kineTukulal} className={ alvtuam+' but'+azkvnuam+' button-o'}>
            {tukulal? '+' : '-'}         
            </button>
        </div>

    );
}
export default Boton;