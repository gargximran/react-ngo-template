import healthyFoodLogo from '../../../Assets/healthy_food_logo.png'
import medicalLogo from '../../../Assets/medicate_help_logo.png'
import cleanWaterLogo from '../../../Assets/clean_water_logo.png'
import educationLogo from '../../../Assets/education_logo.png'

const SubCategoryShowupSection =  () => {
    return (
        <section className={' mx-auto w-4/5 py-5'}>
            <div className={'grid grid-cols-1 md:grid-cols-2'}>
                <div className={'min-h-150px flex items-center'}>
                    <div>
                        <h2 className="md:text-sub-head-2 text-paragraph-sm text-gray-400 font-light">CATEGORIES</h2>
                        <h2 className={'md:text-head-6 text-paragraph font-serif font-bold text-black'}>Connects nonprofits, donors, & companies in <span className={'text-blue-400'}>Every Country</span></h2>
                        <p className="text-gray-400 font-light text-paragraph-sm pt-5 pr-4">
                            We help local nonprofits access the funding, tools, training, and support they need to become more.
                        </p>
                    </div>
                </div>

                <div className={'grid grid-cols-1 md:grid-cols-2 gap-2'}>
                    <div className={'hover:shadow-xl transition duration-300 py-7'}>
                        <div className={'text-center'}>
                            <div className="p-1 bg-green-500 bg-opacity-50 inline-flex rounded-full items-center justify-center ">
                                {/*eslint-disable-next-line*/}
                                <img src={healthyFoodLogo} alt="No Image!" className={'w-8 h-8 '} />
                            </div>
                        </div>
                        <h2 className={'text-center font-primary text-paragraph font-bold text-gray-600 py-3'}>Medical Help</h2>
                        <p className="text-center font-primary-text-paragraph-sm font-light text-gray-500 px-2">
                            The assistance provided is healthy food used for cooking and eating
                        </p>
                    </div>
                    <div className={'hover:shadow-xl transition duration-300 py-7'}>
                        <div className={'text-center'}>
                            <div className="p-1 bg-red-500 bg-opacity-50 inline-flex rounded-full items-center justify-center ">
                                {/*eslint-disable-next-line*/}
                                <img src={medicalLogo} alt="No Image!" className={'w-8 h-8 '} />
                            </div>
                        </div>
                        <h2 className={'text-center font-primary text-paragraph font-bold text-gray-600 py-3'}>Healthy Food</h2>
                        <p className="text-center font-primary-text-paragraph-sm font-light text-gray-500 px-2">

                            The assistance provided some of medicine for various diseases
                        </p>
                    </div>

                    <div className={'hover:shadow-xl transition duration-300 py-7'}>
                        <div className={'text-center'}>
                            <div className="p-1 bg-red-500 bg-opacity-50 inline-flex rounded-full items-center justify-center ">
                                {/*eslint-disable-next-line*/}
                                <img src={cleanWaterLogo} alt="No Image!" className={'w-8 h-8 '} />
                            </div>
                        </div>
                        <h2 className={'text-center font-primary text-paragraph font-bold text-gray-600 py-3'}>Clean Water</h2>
                        <p className="text-center font-primary-text-paragraph-sm font-light text-gray-500 px-2">

                            The assistance provided is clean water for drinking cooking and bathing
                        </p>
                    </div>

                    <div className={'hover:shadow-xl transition duration-300 py-7'}>
                        <div className={'text-center'}>
                            <div className="p-1 bg-blue-500 bg-opacity-50 inline-flex rounded-full items-center justify-center ">
                                {/*eslint-disable-next-line*/}
                                <img src={educationLogo} alt="No Image!" className={'w-8 h-8 '} />
                            </div>
                        </div>
                        <h2 className={'text-center font-primary text-paragraph font-bold text-gray-600 py-3'}>Education</h2>
                        <p className="text-center font-primary-text-paragraph-sm font-light text-gray-500 px-2">

                            Give shoppers a secure one click checkout anywhere across the network
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default SubCategoryShowupSection