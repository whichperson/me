import React from 'react';
import Window from '../components/Window';
import { Title } from '../components/Title';
import briefcaseIcon from '../assets/briefcase-svgrepo-com.svg';


export default function Resume(): JSX.Element {
    return <Window
        id={'resume'}
        title={'Work'}
        icon={briefcaseIcon}
        canGoBack={true}>
        <>
            <Title title={'Resume'}/>

            <div className="mt-2 text-left w-9/12">
                <div>
                    <span>I started my career in 2018, after taking a gap year from High School. I now work as a full-time software engineer in the logistics sector. I'm still exploring my interests and growing and I haven't steered my career in one direction, yet. Here's a short roadmap of my career so far.</span>
                </div>

                <div className="mt-4">
                    <span className="font-medium">2020 - Present</span>
                    <ul className="list-none mt-2">
                        <li>🚢 Full-Stack Software Engineer (Cofano Software Solutions)</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <span className="font-medium">2019 - 2020</span>
                    <ul className="list-none mt-2">
                        <li>💻 Data Scientist (TRiMM)</li>
                        <li>👩‍🏫 Teaching Assistant (University of Twente)</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <span className="font-medium">2018 - 2019</span>
                    <ul className="list-none mt-2">
                        <li>📝 IT Intern (CompSoft)</li>
                    </ul>
                </div>
            </div>
        </>
    </Window>;
}
