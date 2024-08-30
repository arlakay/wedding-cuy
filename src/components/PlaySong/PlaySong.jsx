import React, { useState, useEffect, useRef } from 'react'
import { VolumeUp, VolumeOff } from '@material-ui/icons'

import audioSrc from '../../assets/music/RealityClub-AnythingYouWant.mp3'

const PlaySong = ({ isInvitationOpen }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef(new Audio(audioSrc))

    useEffect(() => {
        setIsPlaying(true)
    }, [isInvitationOpen])

    useEffect(() => {
        console.log('inside 2nd:', isPlaying)
        if (isPlaying) {
            audioRef.current.volume = 0.5
            audioRef.current.loop = true
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    return (
        <button
            className="fixed bottom-4 md:bottom-8 right-4 md:right-8 p-1 text-white border-none rounded-lg bg-champagne-gold z-[1000]"
            onClick={() => setIsPlaying(!isPlaying)}
        >
            {isPlaying ? (
                <VolumeUp className='font-xl' />
            ) : (
                <VolumeOff className='font-xl' />
            )}
        </button >
    )
}

export default PlaySong
