import React, { useEffect, useState } from 'react';
import TeamMember from './TeamMember';
import member1 from '../../../assets/images/team/1.jpg'
import member2 from '../../../assets/images/team/2.jpg'
import member3 from '../../../assets/images/team/3.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';

const TeamMembers = () => {


    const teamPersions = [
        {
            id: 1,
            name: "Tanvir Hosai",
            expart: "Managing Department",
            member: member1,
            fb: "link",
            twitter: "twitter link",
            linkdIn: "linkdIn link",
            instagram: "instagram link"
        },
        {
            id: 2,
            name: "Nasir Kamalga",
            expart: "Engine Reapaire",
            member: member2,
            fb: "link",
            twitter: "twitter link",
            linkdIn: "linkdIn link",
            instagram: "instagram link"
        },
        {
            id: 3,
            name: "Mr Malang",
            expart: "Engine Reconstruction",
            member: member2,
            fb: "link",
            twitter: "twitter link",
            linkdIn: "linkdIn link",
            instagram: "instagram link"
        },
    ]



    return (
        <div>
            <div className='text-center'>
                <h4 className='text-orange-600 text-2xl font-bold'>Team</h4>
                <h1 className='text-4xl font-bold my-2'>Meet Out Team</h1>
                <p className='my-4 max-w-2xl mx-auto'>We have a best team to work with this way in theim  </p>

            </div>

            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    teamPersions.map(teamPersion =>
                        <TeamMember
                            key={teamPersion.id}
                            teamPersion={teamPersion}
                        ></TeamMember>
                    )
                }
            </div>

            <div className=' my-6 right-4 top-1/2'>
                <AiOutlineArrowRight />
            </div>
        </div>
    );
};

export default TeamMembers;