import { useEffect, useState } from 'react'
import style from './Header.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export function Header ({title, logoUrl, logoAlt}){
    const [visible, setVisible] = useState(false);
    const status = visible ? { display: 'flex', position: 'absolute', top: '10%' } : { display: 'none' };
    
    // Aletera direção do flex no menu
    const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);
    const atualizarLarguraJanela = () => {
      setLarguraJanela(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', atualizarLarguraJanela);
        return () => {
        window.removeEventListener('resize', atualizarLarguraJanela);
         };
    }, []);
    let direction = larguraJanela < 900 ? 'column' : 'row';

    return (
        <header className={style.header}>
            <div className={style.fixedMenu}>
                <img src={logoUrl} alt={logoAlt} />
                <Typography variant='h1' fontSize='2em'>{title}</Typography>
                <span className={style.toggle} onClick={() => setVisible(!visible)} >=</span>
            </div>
        <div className={style.expandi} style={status}>
            <nav>
            <ul>
                <Stack direction={direction}>
                    <Button variant="outlined" >Home</Button>
                    <Button variant="outlined">Friends List</Button>
                    <Button variant="outlined">Explore</Button>
                    <Button variant="outlined">Mensage</Button>
                    <Button variant="outlined">Profile</Button>
                </Stack>
            </ul>
            </nav>
        </div>
        </header>
    );
}


// Usei compoente de menu feito no TP 3.09