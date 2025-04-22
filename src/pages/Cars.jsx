import React from 'react'
import { NavLink } from 'react-router-dom'

const Cars = () => {
    const carsData = [
        {
            id:1,
            carsName: 'Honda Civic',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, culpa?'

        },
        {
            id:2,
            carsName: 'Audi R8',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, culpa?'
        },
        {
            id:3,
            carsName: 'Lamborghini Aventador',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, culpa?'
        }
    ]
  return (
    <>
    <div className='container-lg'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-2 mt-4" style={{ "--bs-columns": 5 }}> {/*limits 5 columns & auto fill available space */}
            {carsData.map((car) => (    
                <div className='col' style={{ minWidth: '200px', flexGrow: 1 }} key={car.id}>   
                    <div className='card h-100 '>
                        <div className='card-header text-white' style={{backgroundColor : "#cfd1d1"}}>
                            <p className="text-dark">{car.carsName}</p>
                        </div>
                        <div className='card-body'> 
                            <NavLink
                             to={`${car.id}`}
                            >  
                            {car.carsName}
                           </NavLink>
                            <p>
                                {car.description}
                            </p>
                        </div>

                    </div>
                </div>  
            ))}
        </div>       
     </div>

    </>
  )
}

export default Cars