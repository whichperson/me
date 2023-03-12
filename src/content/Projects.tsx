import React, { useEffect, useState } from 'react';
import Window from '../components/Window';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { Title } from '../components/Title';


export type ProjectItem = {
    title: string;
    description: string;
    tools: Array<string>;
}

type ProjectProps = {
    title: string;
    description: string;
    tools: Array<string>;
}

const ProjectItems: Array<ProjectItem> = [
    {
        title: 'aspen',
        description: 'Aspen is an application aimed at helping people with Asperger\'s identify ' +
            'and recognize facial expressions during conversations. The application\'s initial prototype ' +
            'uses computer vision algorithms to recognize emotions portrayed by the facial expressions ' +
            'of the person talking to the Asperger individual.',
        tools: [ 'Python', 'Tensorflow', 'React', 'Mantine' ],
    },
    {
        title: 'cogo',
        description: 'During my Bachelor thesis, I focused my research on childhood dementia patients, exploring possibilities of a gamified recommender system to help optimize their quality of life. I\'m now working on introducing real-time elements and further expanding the research with a functional prototype.',
        tools: [ 'Spring/Hibernate', 'React', 'Kafka' ],
    },
    {
        title: 'creed',
        description: 'Creed is a great example of a project created for entertainment purposes. I made this for my friend because I wanted to surprise her with a The Office-themed birthday wish. It\'s a real-time notepad that allows users to write (loving) messages to each other using websockets.',
        tools: [ 'React', 'Redis', 'TailwindCSS' ],
    },
    {
        title: 'onyx',
        description: 'A React component library for enterprises based on human-computer interaction principles. As of right now, we are a team of three-ish people but once the initial components are completed, the project will be open-sourced.',
        tools: [ 'Figma', 'React' ],
    },
    {
        title: 'seed',
        description: 'Household management utilizing IoT features. Seed lets parents and children communicate via a centralized environment. Features include todo-lists, invitations, reminders via Google Home, and calendars. Although the first version was built with the Django framework, I\'m now recoding it with Spring Boot.',
        tools: [ 'Spring/Hibernate', 'GraphQL', 'React' ],
    },
    {
        title: 'waggle',
        description: 'My super secret project.',
        tools: [ 'React', 'Java', 'Spring/Hibernate', 'ThreeJS' ],
    },
];


export const Index = (): JSX.Element => {
    return <>
        <Title title={'Index'}/>

        <div className="mt-2 text-left">
            <span>Outside of my professional endeavours, I like to create projects based on whatever interests me at that moment, either for educational or entertainment purposes. If a project turns into something that may benefit from collaboration, I open-source it on GitHub. Some projects are still in progress, some are undergoing an overhaul, and others are in the recycling bin or rotting away in a folder until I remember their existence. Here, I showcase a handful of projects I have a soft spot for.</span>
        </div>

        <div className="mx-auto mt-12">
            <Link className="btn bg-light hover:border-b-light text-white font-medium py-2 px-4 border-b-4 border-main rounded mr-6" to="/resume">View Resume</Link>
            <Link className="btn bg-gray-400 hover:border-b-gray-400 text-white font-medium py-2 px-4 border-b-4 border-gray-600 rounded" to="http://github.com/whichperson" target="_blank">Visit Github</Link>
        </div>

        <div className="mt-auto text-center">
            <span className="italic text-sm">⚠️ You can click through the sidebar on the left to read about a project.</span>
        </div>
    </>;
};

export const Project = ({
    title,
    description,
    tools }: ProjectProps): JSX.Element => {
    return <>
        <Title title={title}/>

        <div className="mt-2 text-left">
            <span>{description}</span>
        </div>

        <div className="mt-4 text-left">
            <span className="font-medium capitalize">Tools</span>

            <div className="mt-2">
                {tools.length !== 0 && tools.map((tool, index) => {
                    return (
                        <span key={index} className="bg-gray-100 rounded px-6 py-1 mr-2 capitalize">{tool}</span>
                    );
                })}
            </div>
        </div>
    </>;
};

export default function Projects(): JSX.Element {
    const location = useLocation();
    const [ selected, setSelected ] = useState<ProjectItem | null>(null);

    useEffect(() => {
        if (location.hash) {
            const title = location.hash.substring('#'.length);

            const item = ProjectItems.find((projectItem) => {
                return projectItem.title === title;
            });
            setSelected(item);
        } else {
            setSelected(null);
        }
    }, [ location.hash, selected ]);

    return <Window
        id={'projects'}
        title="Projects"
        icon={'src/assets/icons8-folder.svg'}
        canGoBack={true}>
        <div className="w-full h-full items-center flex">
            <Menu items={ProjectItems} selectedItem={selected} onSelectItem={setSelected}/>

            <div id="projects-content" className="flex flex-col h-full w-full p-6 border-4 rounded-lg border-gray-100">
                {selected === null ?
                    <Index/> :
                    <Project
                        title={selected.title}
                        description={selected.description}
                        tools={selected.tools}
                    />}
            </div>
        </div>
    </Window>;
}
