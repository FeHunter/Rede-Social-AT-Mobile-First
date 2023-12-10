import { FriendsSuggestions } from '../Friends/FriendsSuggestions/FriendsSuggestions';
import style from './SideBar.module.css';

export function SideBar (){
    return (
        <div className={style.sideBar}>
            <FriendsSuggestions />
        </div>
    );
}