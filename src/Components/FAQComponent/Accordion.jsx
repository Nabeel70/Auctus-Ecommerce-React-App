import React, {useState} from 'react';
import FAQBody from '../FAQBody';
import './styles.css';

const Accordion = ({item}) => {
    const [expand, setExpand] = useState(false)

    const onToggleExpansion = () => {
        expand ? setExpand(false) : setExpand(true)
    }

  return (
    <>
        <div className='accordion'>
            <div className='accordionHeader' onClick={onToggleExpansion}>
                <div className='accordionTitle'>{item.header}</div>
                <div className='headerIcon'>{expand ? "-" : "+"}</div>
            </div>
        </div>
        {
            expand? 
                <div className='accordionBody'>
                    {item.body.map((item) => (
                        <FAQBody item = {item} />
                    ))}
                </div> 
            :null
        }
    </>
  )
}

export default Accordion;