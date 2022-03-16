import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'


function Pizza({ pizza }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [quantity, setquantity] = useState(1);
    const [varient, setveriant] = useState("small");
    return (
        <div style={{ margin: '70px' }} className="shadow p-3 mb-5 bg-white rounded">
            <div onClick={handleShow} >
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />

            </div>
            <div className='d-flex p-2 col-example'>

                <div className='w-100'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setveriant(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>

                </div>

                <div className='w-100'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1} >{i + 1}</option>
                        })}
                    </select>

                </div>

            </div>


            <div className='d-flex p-2 col-example'>
                <div className='m-1 w-100'>
                    <h1>Price :{pizza.prices[0][varient] * quantity}</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn'>Add to Cart</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{pizza.name}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: "300px", width: "300px" }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>






        </div>

    )
}

export default Pizza; 