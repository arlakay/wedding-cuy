import React, { useState } from 'react';
import WeddingInvitation from '../WeddingInvitation/WeddingInvitation';
import LandingPageInvitation from '../LandingPageInvitation/LandingPageInvitation';
import PlaySong from '../../components/PlaySong/PlaySong';
import { AnimatePresence, motion } from 'framer-motion';

const MainScreen = () => {
    const [isInvitationOpen, setInvitationOpen] = useState(false)

    const transitionVariants = {
        enter: {
            y: 0,
            opacity: 1,
            transition: { duration: 1.5, ease: 'easeInOut' }
        },
        exit: {
            y: '-100vh',
            opacity: 0,
            transition: { duration: 1.5, ease: 'easeInOut' }
        },
    };

    const renderInvitation = () => (
        <>
            
            <AnimatePresence>
                {isInvitationOpen ? (
                    <>
                        <motion.div
                            key="wedding-invitation"
                            initial={{ y: '100vh', opacity: 0 }}
                            animate={transitionVariants.enter}
                            exit={transitionVariants.exit}
                            style={{ position: 'absolute', width: '100%', height: '100%' }}
                        >
                            <PlaySong isInvitationOpen={isInvitationOpen} />
                            <WeddingInvitation />
                        </motion.div>

                    </>
                ) : (
                    <motion.div
                        key="landing-page-invitation"
                        initial={{ y: 0, opacity: 1 }}
                        animate={transitionVariants.enter}
                        exit={transitionVariants.exit}
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                    >

                        <LandingPageInvitation setInvitationOpen={setInvitationOpen} />

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )

    return <>{renderInvitation()}</>
}

export default MainScreen;
