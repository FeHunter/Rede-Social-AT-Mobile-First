import { useState } from 'react';
import style from './Post.module.css';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Card, Typography } from '@mui/material';


 

export function Post ({profileImg, img, imgAlt, title, text, date, author, likes, shares, commentsList}){

    const [commentsDiv, setCommentsDiv] = useState(false);
    let viewComments = commentsDiv ? { display: 'flex' } : { display: 'none' };
    return (
        <div className={style.post}>
            <div className={style.up}>
                {profileImg != null ? <img src={profileImg} alt="perfil photo" className={style.profileImg}/> : <AccountCircleIcon/>}
                <Typography variant='h3' fontSize='1em' marginLeft={2}>{author}</Typography>
                <Typography variant='overline' className={style.upDate}>{date}</Typography>
            </div>
            <div className={style.middle}>
                <Typography variant='h2' fontSize='1.3em' textAlign='center' >{title}</Typography>
                <img src={img} alt={imgAlt} />
                <Typography variant='body1'>{text}</Typography>
            </div>
            <div className={style.bottom}>
                <span className={style.bottomBtn}>{<ThumbUpIcon/>} {likes}</span>
                <span className={style.bottomBtn} onClick={()=>{setCommentsDiv(!commentsDiv)}} >{<ModeCommentIcon/>} {commentsList.length}</span>
                <span className={style.bottomBtn}>{<ShareIcon/>} {shares}</span>
            </div>
            <div className={style.commentsContainer} style={viewComments}>
                {commentsList}
            </div>
        </div>
    );
}

 