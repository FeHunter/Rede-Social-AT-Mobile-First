import { Typography } from "@mui/material";
import { FriendView } from "../FriendView/FriendView";
import style from './FriendsList.module.css';

export function FriendsList (){

    const profiles = {
        phillip: 'https://cdn.entergynewsroom.com/userfiles/OpCo%20Presidents/2023/PhillipMay.jpg',
        scott: 'https://theboardr.blob.core.windows.net/headshots/27419_900.jpg',
        jacob: 'https://physics.anu.edu.au/contact/people/image.php/2026/440/1/image.webp',
        jake: 'https://media.licdn.com/dms/image/C5603AQF5jGPUbispLQ/profile-displayphoto-shrink_800_800/0/1586888088689?e=2147483647&v=beta&t=24pe5j_SKg9wHb992Oi7wdsDMA0IE_BoLY9TeeIJhTk',

    }

    return (
        <div className={style.main}>
            <Typography variant="caption">My Friends</Typography>
            <div className={style.friendList}>
                <FriendView profileImg={profiles.phillip}  profileName="Phillip" commonFriendQuantity={4} />
                <FriendView profileImg={profiles.jake}  profileName="Jake" commonFriendQuantity={1} />
                <FriendView  profileName="Scott" commonFriendQuantity={8} />
                {/* <FriendView profileImg={profiles.scott}  profileName="Scott" commonFriendQuantity={8} /> */}
                <FriendView profileImg={profiles.jacob}  profileName="Jacob" commonFriendQuantity={3} />
            </div>
        </div>
    );
}