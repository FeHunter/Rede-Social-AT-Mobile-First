import { Comments } from '../Comments/Comments';
import { FriendsList } from '../Friends/FriendsList/FriendsList';
import { Post } from '../Post/Post';
import style from './Content.module.css'

export function Content (){

    // Profile Img
    const profile = {
        phillip: 'https://cdn.entergynewsroom.com/userfiles/OpCo%20Presidents/2023/PhillipMay.jpg',
        maxV: 'https://cdn.brasil247.com/pb-b247gcp/swp/jtjeq9/media/2023090314094_d747e66f-1a95-4607-9157-d00b10ef9bd6.jpg',
        carla: 'https://media.licdn.com/dms/image/C4D03AQE3VljfCULcog/profile-displayphoto-shrink_200_200/0/1649955046383?e=1704326400&v=beta&t=zNiqEYxMD4UJziCkzkq9BcjHg3y4UbA5NUVIk7qmKNY',
        caroline: 'https://i.pinimg.com/280x280_RS/fe/36/91/fe3691eba175d6b598a209d5c3f3c794.jpg',
        john: 'https://preview.redd.it/twj32atpn4y81.jpg?auto=webp&s=83090ee3952ebd0c0462e144bddd113fa5532f39',
        thiago: 'https://i1.rgstatic.net/ii/profile.image/304717341626369-1449661683123_Q512/Christopher-Medley-2.jpg',
        scott: 'https://theboardr.blob.core.windows.net/headshots/27419_900.jpg',
        jacob: 'https://physics.anu.edu.au/contact/people/image.php/2026/440/1/image.webp',
        jake: 'https://media.licdn.com/dms/image/C5603AQF5jGPUbispLQ/profile-displayphoto-shrink_800_800/0/1586888088689?e=2147483647&v=beta&t=24pe5j_SKg9wHb992Oi7wdsDMA0IE_BoLY9TeeIJhTk',
    }
    // posts
    const posts = {
        post1: 'https://revistacarro.com.br/wp-content/uploads/2020/03/Lamborghini-Aventador-SVJ-Coupe_1280x768.jpg',
        post2: 'https://i.guim.co.uk/img/media/86c9b94dc3ba8f81fed226abdc7ceda5bb834333/0_0_5162_3099/master/5162.jpg?width=465&dpr=1&s=none',
        post3: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/07/17/42606a5d-0e50-48d3-819c-ca1451bd61d1/rhiannan-iffland-road-trip',
    }

    return (
        <main className={style.content}>
            <FriendsList  />
            <Post
            author="Phillip H."
            profileImg={profile.phillip}
            date="12/09/2019"
            img={posts.post1}
            title="Lamborghini Aventador"
            text="Check this Lamborghini Aventador"
            likes={10}
            comments={2}
            shares={8}
            commentsList={[
                <Comments name="Scott" profileImg={profile.scott} date="12/09/2019" text="Nice car!" />,
                <Comments name="Jacob" profileImg={profile.jacob} date="12/09/2019" text="That a great car" />,
            ]}
            />
            <Post
            author="Maximilian V."
            profileImg={profile.maxV}
            date="26/11/2023"
            img={posts.post2}
            title="Three-Time Formula 1 World Champion"
            text="Great season this year, amazing show!"
            likes={23}
            comments={5}
            shares={5}
            commentsList={[
                <Comments name="Wolf" date="26/11/2023" text="This was a really fantastic season!" />,
                <Comments name="Josh" date="26/11/2023" text="Very happy with the results this year, let go!" />,
                <Comments name="Jake" profile={profile.jake} date="26/11/2023" text="Well done mate!" />,
                <Comments name="Lewis" date="26/11/2023" text="Great job!" />,
                <Comments name="Allonso" date="26/11/2023" text="Great season Max, happy for you!" />
            ]}
            />
            <Post
            author="Carla T."
            profileImg={profile.carla}
            date="12/09/2019"
            img={posts.post3}
            title="Driving around"
            text="Driving around..."
            likes={25}
            shares={8}
            commentsList={[
                <Comments name="Phillip" profileImg={profile.phillip} date="12/09/2019" text="This cool!" />,
                <Comments name="Caroline" profileImg={profile.caroline} date="12/09/2019" text="Wow great journey" />,
                <Comments name="Lando" date="12/09/2019" text="Nice..." />,
            ]}
            />
        </main>
    );
}