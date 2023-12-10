import { Typography } from "@mui/material";
import { FriendView } from "../FriendView/FriendView";
import style from './FriendsSuggestions.module.css';

export function FriendsSuggestions (){
    
    const profile = {
        caroline: 'https://i.pinimg.com/280x280_RS/fe/36/91/fe3691eba175d6b598a209d5c3f3c794.jpg',
        john: 'https://preview.redd.it/twj32atpn4y81.jpg?auto=webp&s=83090ee3952ebd0c0462e144bddd113fa5532f39',
        thiago: 'https://i1.rgstatic.net/ii/profile.image/304717341626369-1449661683123_Q512/Christopher-Medley-2.jpg'
    }
    
    return (
        <div className={style.main}>
            <Typography variant="caption">Friends Suggestions</Typography>
            <div className={style.friendsSuggestions}>
                <FriendView profileImg={profile.caroline} profileName="Caroline" suggestionName="Phillip" suggestion />
                <FriendView profileImg={profile.john} profileName="John" suggestionName="Jacob" suggestion />
                <FriendView profileName="Fernando" suggestionName="Jake" suggestion  />
                <FriendView profileImg={profile.thiago} profileName="Thiago" suggestionName="Phillip" suggestion  />
                <FriendView profileName="Leonardo" suggestionName="Scott" suggestion  />
            </div>
        </div>
    );
}