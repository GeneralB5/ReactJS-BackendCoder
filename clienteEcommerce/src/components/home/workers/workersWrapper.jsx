import ThumbnailRenata from "../../../assets/cto.jpg"
import ThumbnailEsteban from "../../../assets/ceo.jpg"
import ThumbnailHector from "../../../assets/cio.jpg"
import WorkersCard from "./workersCard/workersCard"
function WorkingPeopleWrapped({}){
    const workersArry = [
        {
            name:"Renata",
            lastName:"Sanchez",
            position:"c.t.o",
            thumbnail:ThumbnailRenata,
            phrase:"La vida es un viaje, no un destino."
        },
        {
            name:"Esteban",
            lastName:"Park",
            position:"c.e.o",
            thumbnail:ThumbnailEsteban,
            phrase:"El éxito es la suma de pequeños esfuerzos repetidos día tras día."
        },
        {
            name:"Hector",
            lastName:"Benavidez",
            position:"c.i.o",
            thumbnail:ThumbnailHector,
            phrase:"La creatividad es la inteligencia divirtiéndose."
        }
    ]
    
    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:20}} >
            <h2 style={{fontSize:40}} >People in our company</h2>
            <div  className="WorkingPeople">
            {workersArry.map(worker=><WorkersCard key={worker.position} worker={worker}/> )}
            </div>
        </div>
    )
}
export default WorkingPeopleWrapped