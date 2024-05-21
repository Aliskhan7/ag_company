import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import SectionDevoptima from "@/components/SectionDevoptima/SectionDevoptima";
import SectionSolution from "@/components/SectionSolution/SectionSolution";
import SectionView from "@/components/SectionView/SectionView";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <div className="container mx-auto">
        <SectionDevoptima />
        <SectionSolution />
        <SectionView />
        <SectionAbout />
      </div>
      <Footer />
    </div>
  );
}
