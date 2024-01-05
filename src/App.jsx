import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import {useState} from "react";
import EffectSection from "./components/EffectSection.jsx";

export default function App() {
    const [tab, setTab] = useState('effect');

    return (
        <>
            <Header/>
            <main>
                <IntroSection/>
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>

                {tab === 'main' &&
                    <>
                        <TeachingSection/>
                        <DifferencesSection/>
                    </>
                }

                {tab === 'feedback' && <FeedbackSection/>}

                {tab === 'effect' && <EffectSection />}
            </main>
        </>
    )
}
