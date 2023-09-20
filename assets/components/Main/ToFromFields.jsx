import Dropdown from './Dropdown.jsx';

import { FaArrowRight } from 'react-icons/fa';

function ToFromFields( { setToDestination, setFromDestination, fromDestination, toDestination, setResultRequest } ) {
    // get all destinations API
    const destinations = ["1", "2", "3"];
    
    const computeDestinations = () => {
        setResultRequest(true);
    }
    

    return (
        <div className='fieldsNButton'>
            <div className='fields'>
                <div className='fromDropdown'>
                    <p className='fromKeyword'>From:</p>
                    <Dropdown destinations={destinations} currentDestination={fromDestination} setDestination={setFromDestination} />
                </div>
                <FaArrowRight />
                <div className='toDropdown'>
                    <p className='toKeyword'>To:</p>
                    <Dropdown destinations={destinations} currentDestination={toDestination} setDestination={setToDestination} />
                </div>
            </div>
            <button onClick={computeDestinations} className='computeDestinations'>Compute</button>
        </div>
    )
}

export default ToFromFields;