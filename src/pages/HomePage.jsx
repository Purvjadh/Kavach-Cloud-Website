import MovingTagline from "../components/Sections/MovingTagline"
import ServiceCloud from "../components/Sections/ServiceCloud"
import Achievements from "../components/Sections/Achievements"
import UserStories from "../components/Sections/Userstories"
import Hero from "../components/Sections/Hero"
import ServiceCards from "../components/Sections/ServiceCards"

export default function HomePage(){
    return(
       <>
        <Hero />
        <MovingTagline />
        <ServiceCloud />
        <ServiceCards/>
         <Achievements />
        <UserStories />
        </>
       
    )
}
