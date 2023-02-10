import React from 'react'
import './Planet.css'
import githublogo from './icons/githublogo.svg'
import resume from './icons/resume.svg'
import linked from './icons/linkedinlogo.png'

function Planet() {
    return (
        <div className='planet'>
            <div className='moon'>
                <div className='orbit1'>
                    <a href="https://github.com/JoshyWoshy2" className='link'>
                        <img className='gitlogo' src={githublogo} alt='' />
                    </a>
                </div>
                <div className='orbit2'>
                    <a href="https://www.linkedin.com/in/josh-andreas-808113252" className='link'>
                        <img className='linked' src={linked} alt='' />
                    </a>
                </div>
                <div className='orbit3'>
                    <a href="https://docs.google.com/document/d/1KmnCcOEYLsrLLxS_OWB2Xdj_P8bbTuxJp_37wqTSgP0/edit?usp=sharing" className='link'>
                        <img className='resume' src={resume} alt='' />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Planet