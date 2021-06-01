import unisefLogo from '../../../Assets/Images/sponsoreImran/unisef.png'
import afterPaylogo from '../../../Assets/Images/sponsoreImran/afterpayLogo.png'
import firstHealthLogov from '../../../Assets/Images/sponsoreImran/firstHealthLogo.png'
import lovatoLogo from '../../../Assets/Images/sponsoreImran/Lovato_Logo-removebg-preview.png'
import afterPaylogo2 from '../../../Assets/Images/sponsoreImran/afterpayLogo.png'



const SubSponsorSection = () => {
    return (
        <section className={'bg-gray-100'}>
            <div className={'flex w-4/5 justify-center mx-auto flex-wrap'}>

                {
                    [unisefLogo, afterPaylogo, firstHealthLogov, lovatoLogo, afterPaylogo2].map((logo, index) => (
                        <div className={'h-32 flex items-center'} key={index}>
                            <img className={'h-8 my-auto px-3 opacity-75 hover:opacity-100 hover:bg-white'} src={logo} alt="No Image!"/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SubSponsorSection