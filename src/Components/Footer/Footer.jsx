import { Typography } from '@mui/material';
import style from './Footer.module.css';

export function Footer (){
    return (
        <Typography variant='caption' color='GrayText' className={style.footer}>&copy; Felipe R, aluno infnet.</Typography>
    );
}