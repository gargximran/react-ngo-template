import SubHelpingTodaySection from "./SubHelpingTodaySection";
import SubHomeHero from "./SubHomeHero";
import SubSponsorSection from "./SubSponsorSection";
import SubVoluneerSection from "./SubVoluneerSection";
import SubCategoryShowupSection from "./SubCategoryShowupSection";


const Homepage = () => {
    return (
        <>
            <SubHomeHero></SubHomeHero>
            <SubSponsorSection />
            <SubVoluneerSection />
            <SubCategoryShowupSection />
            <SubHelpingTodaySection />

        </>
    )
}

export default Homepage