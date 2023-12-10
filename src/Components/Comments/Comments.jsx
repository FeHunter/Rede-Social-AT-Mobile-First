import { CardContent, Typography } from '@mui/material';
import style from './Comments.module.css';

export function Comments ({name, date, text, perfilImg}){
    const defaultProfile = 'https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png';
    let photo = perfilImg ? perfilImg : defaultProfile;
    return (
        <div className={style.commentsContainer}>
            <CardContent className={style.commentsInfo}>
                <p> <img src={photo} alt={`${name} perfil photo`} style={{width: '5%'}} /> {name}</p>
                <Typography variant='caption'>{date}</Typography>
            </CardContent>
            <Typography variant='body1'>{text}</Typography>
        </div>
    );
}