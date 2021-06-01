import SubHelpingTodaySection from "./SubHelpingTodaySection";
import SubHomeHero from "./SubHomeHero";
import SubSponsorSection from "./SubSponsorSection";
import SubVoluneerSection from "./SubVoluneerSection";


const Homepage = () => {
    return (
        <>
            <SubHomeHero></SubHomeHero>
            <SubSponsorSection />
            <SubVoluneerSection />
            <SubHelpingTodaySection/>
        </>
    )
}

export default Homepage