import { useState } from "react";
import { Link } from "react-router-dom";

const FormChildren = ({ changeHandler, submitHandler, isSetOrderConfirmed }) => {
    const [isSent, setIsSent] = useState(false);
    return <>
        <h2 className='checkout__title'>Finalizar compra</h2>
        <h3 className='checkout__subtitle'>Completa los campos:</h3>
        <form onSubmit={submitHandler}>
            <div className='checkout__input-container'>
                <label className='checkout__label'>Nombre</label>
                <input className='checkout__input' name="name" id="name" onClick={changeHandler} required/>
            </div>
            <div className='checkout__input-container'>
                <label className='checkout__label'>Telefono</label>
                <input className='checkout__input' type="number" required />
            </div>
            <div className='checkout__input-container'>
                <label className='checkout__label'>Email</label>
                <input className='checkout__input' type="email" name="email" id="email" onClick={changeHandler} required />
            </div>
            <div className='checkout__input-container'>
                <label className='checkout__label'>Mensaje</label>
                <input className='checkout__input' type="text" name="message" id="message" onClick={changeHandler} />
            </div>
            {(isSent === false && isSetOrderConfirmed === false ? <input className='checkout__btn' type="submit" value="Enviar" onClick={
                () => {
                    setTimeout(() => {
                        isSetOrderConfirmed && setIsSent(true);
                    },0)
                }}
            /> : <Link to="/" className="comprarProductos mt-2">Volver atrás</Link>)}
        </form>
    </>
}
export default FormChildren;