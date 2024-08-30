import React from 'react'
import WelcomePage from '../../components/WelcomePage/WelcomePage'
import BrideGroom from '../../components/BrideGroom/BrideGroom'
import TimelineContent from '../../components/TimelineContent/TimelineContent'
import EventDetails from '../../sections/EventDetails/EventDetails'
import CountdownTimer from '../../sections/CountdownTimer/CountdownTimer'
import PictureGallery from '../../sections/PictureGallery/PictureGallery'
import ClosingPage from '../../sections/ClosingPage/ClosingPage'
import Footer from '../../sections/Footer/Footer'
import MobileStyledComponent from '../../sections/MobileSizedSection/MobileSizedSection'
import WelcomePageMobile from '../../components/WelcomePage/WelcomePageMobile'
import GroomBrideMobile from '../../components/BrideGroom/GroomBrideMobile'
import EventDetailsMobile from '../../sections/EventDetails/EventDetailsMobile'
import WeddingGift from '../../sections/WeddingGift/WeddingGift'
import FooterMobile from '../../sections/Footer/FooterMobile'
import Rsvp from '../../sections/Rsvp/Rsvp'
import Wishes from '../../sections/Wishes/Wishes'
import PictureGalleryMobile from '../../sections/PictureGallery/PictureGalleryMobile'
import ThankYou from '../../sections/ThankYou/ThankYou'
import Quotes from '../../sections/Quotes/Quotes'
import Carousel from '../../sections/ThankYou/ThankYouV2'

const WeddingInvitation = () => {
    return (
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
            <Carousel />
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
    )
}

export default WeddingInvitation;
