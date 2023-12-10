import { CardContent, Typography } from '@mui/material';
import style from './FriendView.module.css';

export function FriendView({ profileImg, profileName, commonFriendQuantity, suggestionName, suggestion }) {

  const defaultProfile = "https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png";

  let profileIMG = profileImg ? profileImg : defaultProfile;

  const friend = (
    <div className={style.friendView}>
      <img src={profileIMG} alt="profilePhoto" />
      <Typography variant='h3' fontSize='1em'>{profileName}</Typography>
      <Typography variant='caption' className={style.commonFriend}>Common Friend: {commonFriendQuantity}</Typography>
    </div>
  );

  const friendSuggestion = (
    <div className={style.friendView} style={{ width: '100%' }}>
      <img src={profileIMG} alt="profilePhoto" className={style.profileIMG} />
      <Typography variant='h3' fontSize='1em'>{profileName}</Typography>
      <Typography variant='caption' className={style.commonFriend}>Common Friend: {suggestionName}</Typography>
    </div>

  );

  let type = !suggestion ? friend : friendSuggestion;

  return <div>{type}</div>;
}