import SubCampaignSection from "./SubCampaignSection";
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

        <SubCampaignSection />
        <SubHelpingTodaySection />
      </>
    );
}

export default Homepage