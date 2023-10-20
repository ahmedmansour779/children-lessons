import { IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import image from "../../shared/children.png";
import audioSrc from "../../shared/introMusic.mp3";
import { Audio, IntroContent, IntroWrapper, Text } from "../../styles/intro";

export default function Intro() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioEnded, setAudioEnded] = useState(false);
    const history = window.location.href;

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleAudioEnd = () => {
            setAudioEnded(true);
        };

        audioElement.addEventListener('ended', handleAudioEnd);

        return () => {
            audioElement.removeEventListener('ended', handleAudioEnd);
        };
    }, []);

    const togglePlayPause = () => {
        let audioElement = audioRef.current;
        if (audioElement) {
            if (isPlaying) {
                audioElement.pause();
            } else {
                audioElement.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    { audioEnded ? window.location.href = history + "lessons" : console.log("play") }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <IntroWrapper>
                <IntroContent>
                    <div>
                        <h1>Kids</h1>
                        <h3>TOYS & GAMES & LEARN</h3>
                        <Text>
                            جاهزون يا أطفال ؟
                        </Text>
                        <Audio style={{ cursor: "pointer" }} onClick={togglePlayPause}>
                            {
                                isPlaying ?
                                    <IconPlayerPauseFilled color="#332522" /> :
                                    <IconPlayerPlayFilled color="#332522" />
                            }
                        </Audio>
                        <div>
                            <audio autoPlay ref={audioRef}>
                                <source src={audioSrc} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="boy" />
                    </div>
                </IntroContent>
            </IntroWrapper>
        </motion.div>
    )
}
