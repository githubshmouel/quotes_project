import React from 'react'
import Front from './front'
import Back from './back'

function Quote(props){


    return(
        <div className="col">
       
        <Front background={props.background} quote={props.quote} />
       
        </div>
    )
}

export default Quote

