import React, { useState } from 'react';
import WeddingInvitation from '../WeddingInvitation/WeddingInvitation';
import LandingPageInvitation from '../LandingPageInvitation/LandingPageInvitation';
import PlaySong from '../../components/PlaySong/PlaySong';

const MainScreen = () => {
    const [isInvitationOpen, setInvitationOpen] = useState(false)

    const renderInvitation = () => (
        <>
            {isInvitationOpen ? (
                <>
                    <PlaySong isInvitationOpen={isInvitationOpen} />
                    <WeddingInvitation />
                </>
            ) : (
                <LandingPageInvitation setInvitationOpen={setInvitationOpen} />
            )}
        </>
    )

    return <>{renderInvitation()}</>
}

export default MainScreen;
