import Hero from "@components/hero";
import Navbar from "@components/navbar";
import Platforms from "@components/platforms";
import SectionCenter from "@components/SectionCenter";
import TitleContent from "@components/TitleContent";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Platforms />
      <SectionCenter>
        <TitleContent title="Our Service" content="Kreatif Infotek Global is a full service digital agency.We partner with clients in the PNW to deliver strategic consulting, custom applications and CMS-driven website development." center={true} />
      </SectionCenter>

      <SectionCenter>
        <TitleContent title="Our Service" content="Kreatif Infotek Global is a full service digital agency.We partner with clients in the PNW to deliver strategic consulting, custom applications and CMS-driven website development." center={false} />
        <div className="w-6/12 p-10"><img className="w-4/5" src="/group-859.png" alt="kreatifit-banner"/></div>
      </SectionCenter>

    </div>
  )
}
