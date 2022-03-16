import React from 'react'
import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'


function HomeScreen() {
    return (
        <div className='row'>

            {pizzas.map(pizza => {
                return (
                    <div className='col-md-4'>
                        <Pizza pizza={pizza} />
                    </div>
                )

            })}


        </div>

    )
}

export default HomeScreen