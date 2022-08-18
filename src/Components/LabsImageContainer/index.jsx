import React from 'react';
import './styles.css';
import labtest from '../../Assets/Images/LabTest.png';
import search from '../../Assets/Images/SearchIcon.png';

const LabsImageContainer = () => {
  return (
    <>
        <div className='labsImageContainer'>
        {/* <a href='https://cdn.discordapp.com/attachments/1002779361230979103/1002999786481397920/labtest.png' target="_blank" className='labtestImageLink'> */}
                    <img src={labtest} alt = 'Labtest' className='labtestImage' />
                {/* </a> */}
            <a href='https://cdn.discordapp.com/attachments/1002779361230979103/1002999786481397920/labtest.png' target="_blank" className='testUpperLayer'>
                <div className='testDrugName'>DRUG NAME HERE</div>
                <div className='SearchIconContainer'><img src={search} alt ='Search Icon' /></div>
            </a>
        </div>
    </>
  )
}

export default LabsImageContainer;