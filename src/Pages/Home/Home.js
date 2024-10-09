import {  useState } from 'react'
import Profile from "../../assets/profile.jpg"
import img1 from "../../assets/Post Images/img1.jpg"
import img2 from "../../assets/Post Images/img2.jpg"
import img3 from "../../assets/Post Images/img3.jpg"
import img4 from "../../assets/Post Images/img4.jpg"
import img5 from "../../assets/Post Images/img5.jpg"
import img6 from "../../assets/Post Images/img6.jpg"


import DPimg1 from "../../assets/DP/img1.jpg"
import DPimg2 from "../../assets/DP/img2.jpg"
import DPimg3 from "../../assets/DP/img3.jpg"
import DPimg4 from "../../assets/DP/img4.jpg"
import DPimg5 from "../../assets/DP/img5.jpg"
import DPimg6 from "../../assets/DP/img6.jpg"

import cover from "../../assets/Info-Dp/img-3.jpg"

import Cover1 from "../../assets/Friends-Cover/cover-1.jpg"
import Cover2 from "../../assets/Friends-Cover/cover-2.jpg"
import Cover3 from "../../assets/Friends-Cover/cover-3.jpg"
import Cover5 from "../../assets/Friends-Cover/cover-5.jpg"
import Cover7 from "../../assets/Friends-Cover/cover-7.jpg"
import Cover8 from "../../assets/Friends-Cover/cover-8.jpg"
import Cover9 from "../../assets/Friends-Cover/cover-9.jpg"

import Uimg1 from "../../assets/User-post/img1.jpg"
import Uimg2 from "../../assets/User-post/img2.jpg"
import Uimg3 from "../../assets/User-post/img3.jpg"


import "../Home/Home.css"

import Left from "../../Components/LeftSide/Left"
import Middle from "../../Components/MiddleSide/Middle"
import Right from '../../Components/RightSide/Right'
import Nav from '../../Components/Navigation/Nav'
import moment from 'moment/moment'

const Home = ({setFriendsProfile}) => {
  
    const [posts,setPosts] = useState(
        [
          {
            id:1,
            username:"Harry",
            profilepicture:DPimg1,
            img:img1,
            datetime:moment("20240131", "YYYYMMDD").fromNow(),
            body:"Mi primero Post, ¿Listo para dar el siguiente paso hacia tu futuro? No pierdas esta oportunidad única: 100 becas universitarias están disponibles para estudiantes talentosos como tú. Estas becas cubren hasta el 100% de la matrícula, asegurando que el costo no sea un obstáculo para alcanzar tus metas académicas.",
            like: 44,
            comment:3,
            unFilledLike:true,
            coverpicture:Cover1,
            userid:"@Iamharry",
            ModelCountryName:"USA",
            ModelJobName:"Java Developer",
            ModelJoinedDate:"Joined in 2019-02-28",
            followers:1478
          },
          {
            id:2,
            username:"Marco",
            profilepicture:DPimg2,
            img:img2,
            datetime:moment("20240605", "YYYYMMDD").fromNow(),
            body:"Mi segundo, e invitamos a nuestra Kermés Solidaria el próximo sábado 14 de octubre. ¡Ven con tu familia y amigos para disfrutar de un día lleno de diversión, juegos, comida deliciosa y mucho más! 🎪🎈 Todo lo recaudado será destinado a apoyar programas educativos para niños en situación vulnerable. 🎒📚 Habrá rifas, música en vivo, puestos de comida, y muchas sorpresas para todas las edades. ¡Tu participación puede marcar la diferencia!",
            like: 84,
            comment:3,
            coverpicture:Cover2,
            userid:"@chris777",
            ModelCountryName:"Australia",
            ModelJobName:"Cyber Security",
            ModelJoinedDate:"Joined in 2018-01-17",
            followers:1730
          },
          {
            id:3,
            username:"Luis",
            profilepicture:DPimg3,
            img:img3,
            datetime:moment("20240813", "YYYYMMDD").fromNow(),
            body:"Mi tercero, Este sábado 21 de octubre, participa en nuestra Campaña Médica Gratuita. Ofrecemos consultas generales, exámenes de vista, y orientación nutricional sin costo.",
            like: 340,
            comment:76,
            coverpicture:Cover3,
            userid:"@April",
            ModelCountryName:"India",
            ModelJobName:"Python Developer",
            ModelJoinedDate:"Joined in 2022-03-01",
            followers:426
          },
          {
            id:4,
            username:"Pedro007",
            profilepicture:Profile,
            img:Uimg1,
            datetime:moment("20240310", "YYYYMMDD").fromNow(),
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
            like: 22,
            comment:3,
            coverpicture:cover,
            userid:"@vijay98",
            ModelCountryName:"India",
            ModelJobName:"Web Developer in Google",
            ModelJoinedDate:"Joined in 2023-08-12",
            followers:5000
          },
          {
            id:5,
            username:"Lauro12323",
            profilepicture:DPimg4,
            img:img4,
            datetime:moment("20240101", "YYYYMMDD").fromNow(),
            body:"¡Ayúdanos a equipar a nuestros bomberos voluntarios! Estamos recolectando linternas, pilas y otros equipos esenciales para enfrentar los incendios forestales. Tu colaboración puede marcar la diferencia en la protección de nuestras comunidades.",
            like: 44,
            comment:3,
            coverpicture:Cover5,
            userid:"@laralara",
            ModelCountryName:"London",
            ModelJobName:"CEO in Google",
            ModelJoinedDate:"Joined in 2023-04-15",
            followers:3005
          },
          {
            id:6,
            username:"Viviana5004",
            profilepicture:Profile,
            img:Uimg2,
            datetime:moment("20240618", "YYYYMMDD").fromNow(),
            body:"Nuestros bomberos necesitan tu ayuda para combatir los incendios. Estamos recolectando linternas, pilas y equipos básicos para mejorar su capacidad de respuesta. ¡Cada aporte es vital!",
            like: 84,
            comment:3,
            coverpicture:cover,
            userid:"@vijay98",
            ModelCountryName:"India",
            ModelJobName:"Web Developer in Google",
            ModelJoinedDate:"Joined in 2023-08-12",
            followers:5000
          },
          {
            id:7,
            username:"Kevin7777",
            profilepicture:DPimg5,
            img:img5,
            datetime:moment("20240505", "YYYYMMDD").fromNow(),
            body:"Mi Quinto, Have A Awesome Day Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum laborum necessitatibus ex",
            like: 30,
            comment:3,
            coverpicture:Cover7,
            userid:"@kenny80",
            ModelCountryName:"South Africa",
            ModelJobName:"Full Stack Web Developer in Twitter",
            ModelJoinedDate:"Joined in 2020-08-09",
            followers:626
          },
          {
            id:8,
            username:"Virginia",
            profilepicture:Profile,
            img:Uimg3,
            datetime:moment("20240219", "YYYYMMDD").fromNow(),
            body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum provident consequuntur reprehenderit tenetur, molestiae quae blanditiis rem placeat! Eligendi, qui quia quibusdam dolore molestiae veniam neque fuga explicabo illum?",
            like: 340,
            comment:3,
            coverpicture:Cover8,
            userid:"@vijay98",
            ModelCountryName:"India",
            ModelJobName:"Web Developer in Google",
            ModelJoinedDate:"Joined in 2023-08-12",
            followers:5000

          },
          {
            id:9,
            username:"Reinalda",
            profilepicture:DPimg6,
            img:img6,
            datetime:moment("20240404", "YYYYMMDD").fromNow(),
            body:"¡Haz la diferencia plantando vida! Únete a nuestra Campaña de Arborización el próximo 22 de octubre. Vamos a plantar 1000 árboles para ayudar a mejorar el medio ambiente y embellecer nuestra comunidad.",
            like: 844,
            comment:3,
            coverpicture:Cover9,
            userid:"@reyanaRey",
            ModelCountryName:"Russia",
            ModelJobName:"Back End Developer in Microsoft",
            ModelJoinedDate:"Joined in 2020-02-29",
            followers:3599
           }
        ]
      )

      const [body,setBody] =useState("")
      const [importFile,setImportFile] =useState("")
      

      const handleSubmit =(e)=>{
        e.preventDefault()
        
        
        const id =posts.length ? posts[posts.length -1].id +1 :1
        const username="Enrique007"
        const profilepicture=Profile
        const datetime=moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()
        const img =images ? {img:URL.createObjectURL(images)} : null
        
        const obj ={id:id,
                   profilepicture:profilepicture,
                   username:username,
                   datetime:datetime,
                   img:img && (img.img),
                   body:body,
                   like:0,
                   comment:0
                  }

        

        const insert =[obj, ...posts]
        setPosts(insert)
        setBody("")
        setImages(null)

      }
   
   const [search,setSearch] =useState("")

    
  const [following,setFollowing] =useState("")
        
  const [showMenu,setShowMenu] =useState(false)
  const [images,setImages] =  useState(null)

  return (
    <div className='interface'>
        <Nav 
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        />

    <div className="home">
   
        <Left />

        <Middle 
        handleSubmit={handleSubmit}
        body ={body}
        setBody ={setBody}
        importFile ={importFile}
        setImportFile ={setImportFile}
        posts={posts}
        setPosts={setPosts}
        search={search}
        setFriendsProfile={setFriendsProfile}
        images={images}
        setImages={setImages}

        />

        <Right
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        following={following}
        setFollowing={setFollowing}
        />
    </div>

    </div>
  )
}

export default Home