import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>
            Tours give you the opportunity to see a lot, within time frame. 
        </p>
        <DestinationData
            className="first-desc"
            heading="Taal Volcano, Batangas"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam veritatis quia dolores esse asperiores ducimus aut totam nulla ex tempora qui sint maiores harum ipsum explicabo, cupiditate reprehenderit incidunt architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor animi alias nulla velit odio ex esse totam, dolore excepturi repudiandae quas debitis dolorum accusamus laboriosam cupiditate aliquid, tenetur molestias."
            img1="src/assets/1.jpg"
            img2="src/assets/2.jpg"
        />
        <DestinationData
            className="first-desc-reverse"
            heading="Mt. Daguldul, Batangas"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam veritatis quia dolores esse asperiores ducimus aut totam nulla ex tempora qui sint maiores harum ipsum explicabo, cupiditate reprehenderit incidunt architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolor animi alias nulla velit odio ex esse totam, dolore excepturi repudiandae quas debitis dolorum accusamus laboriosam cupiditate aliquid, tenetur molestias."
            img1="src/assets/5.jpg"
            img2="src/assets/8.jpg"
        />
    </div>
  )
}

export default Destination;