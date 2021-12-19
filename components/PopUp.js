import React from 'react'

function PopUp(props) {
    return (props.trigger) ?(
        <div className='popup'>
            <div className='popup-inner'>
                <Button className="close-btn">Set</Button>
            </div>
        </div>
    ):"";
}

export default PopUp
