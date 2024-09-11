import React from 'react'
import WelcomePageMobile from '../../components/WelcomePage/WelcomePageMobile'
import GroomBrideMobile from '../../components/BrideGroom/GroomBrideMobile'
import EventDetailsMobile from '../../sections/EventDetails/EventDetailsMobile'
import WeddingGift from '../../sections/WeddingGift/WeddingGift'
import FooterMobile from '../../sections/Footer/FooterMobile'
import Rsvp from '../../sections/Rsvp/Rsvp'
import Wishes from '../../sections/Wishes/Wishes'
import ThankYou from '../../sections/ThankYou/ThankYou'

const WeddingInvitation = () => {
    return (
        <>
            <div>
                {/* <MobileStyledComponent /> */}
                <WelcomePageMobile />
                {/* <Quotes /> */}
                <GroomBrideMobile />
                <EventDetailsMobile />
                <Rsvp />
                <Wishes />
                {/* <PictureGalleryMobile /> */}
                <WeddingGift />
                <ThankYou />
                {/* <Carousel /> */}
                {/* <ThankYouV3 /> */}
                <FooterMobile />

                {/* <WelcomePage /> */}
                {/* <BrideGroom /> */}
                {/* <TimelineContent /> */}
                {/* <EventDetails /> */}
                {/* <CountdownTimer /> */}
                {/* <HealthProtocols /> */}
                {/* <PictureGallery /> */}
                {/* <ClosingPage /> */}
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default WeddingInvitation;
