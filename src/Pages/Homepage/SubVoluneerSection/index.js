import aboutVoluneer from '../../../Assets/Images/aboutUsVolunteerImage.webp'



const SubVoluneerSection = () => (
    <section className={'relative'}>
        <img src={aboutVoluneer} alt="N" className="w-full"/>
        <div className={'absolute top-1 md:top-9 w-full'}>
            <h2 className={'text-center md:text-sub-head-1 text-gray-400 font-light'}>ABOUT US</h2>
            <h2 className={'text-center md:text-head-6 font-serif font-bold text-black'}>More People, More <span className={'text-blue-400'}>Impact</span></h2>
        </div>

    </section>
)


export default SubVoluneerSection