import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import SectionAG from "../components/SectionAG/SectionAG";
import SectionSolution from "../components/SectionSolution/SectionSolution";
import SectionView from "../components/SectionView/SectionView";
import SectionAbout from "../components/SectionAbout/SectionAbout";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <div className="container mx-auto">
        <SectionAG />
        <SectionSolution />
        <SectionView />
        <SectionAbout />
      </div>
      <Footer />
    </div>
  );
}
