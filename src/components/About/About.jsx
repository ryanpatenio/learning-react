import React from 'react'

const About = React.memo(({count}) => {
    console.log('about components is rendering')
  return (
    <div>
        <div className="container-lg">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 gap-2">
                <div className="col w-50" style={{flexGrow: 1}}>
                    <div className="card">
                        <div className="card-header">
                            <h4>This is About {count}</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className="col">
                                    <label htmlFor="">Contact</label>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>          
        </div>
            {/* <div style={{display:"flex", width: "500px"}}>
                <div style={{flexGrow:1, background:"lightblue"}}>A (flex-grow: 1)</div>
                <div style={{flexGrow:2, background:"lightcoral"}}>B (flex-grow: 2)</div>
            </div> */}
    </div>
  )
},(prev, next) => {

    return prev.count === 9;
})

export default About