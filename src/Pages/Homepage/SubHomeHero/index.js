import { Link } from 'react-router-dom'

import { FaPlay } from "react-icons/fa";

import HomeHeroImage from '../../../Assets/Images/Home.jpg'
import HomeHeroSideImage from '../../../Assets/Images/HomeHeroSide.webp'


const SubHomeHero = () => {

    return (
        <section className={'grid grid-cols-1 md:grid-cols-2'}>
            <div className={'min-h-150px bg-white relative overflow-hidden flex items-center justify-center'}>
                <div className={'inline-block z-30 px-8 pb-10 pt-14 md:pb-0 md:pt-0'}>
                    <h2 className={'text-gray-900 font-serif font-bold text-head-8 md:text-head-6'}>Make someone's <span className={'caplitalize text-red-500'}>Life</span><br></br> by <span className={'text-blue-400'}>giving</span> of yours</h2>
                    <p className={'font-primary text-gray-500 mt-5 md:mt-10 font-light pr-14 tracking-wider text-paragraph-sm'}>
                        NGO is a digital platform for collection donations to be distributed to people in need. We build strength, stability, and self relience through shelter
                    </p>

                    <div className={'mt-4'}>
                        <button className={'mr-2 text-white focus:outline-none px-5 py-3 text-paragraph-sm font-secondary bg-red-500 rounded-lg'}><Link to={'/donate'}>Donate Now</Link></button>
                        <button className={'mr-2 text-gray-600 focus:outline-none px-5 py-3 text-paragraph-sm font-secondary  rounded-lg'}> <span className={'pr-2 inline-block align-text-bottom'}><FaPlay /></span> Watch Video</button>
                    </div>
                </div>
                {/** eslint-disable-next-line */}
                <img src={HomeHeroSideImage} className={'w-full absolute bottom-0'} alt={'No Image!'}/>
            </div>
            <div>
                {/** eslint-disable-next-line */}
                <img src={HomeHeroImage} className={'w-full'} alt={'No Image!'}/>
            </div>
        </section>
    )
}


export default SubHomeHero