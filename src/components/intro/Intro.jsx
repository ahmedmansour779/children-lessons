import { IconPlayerPauseFilled, IconPlayerPlayFilled, IconPlayerSkipForwardFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import image1 from "../../shared/1.jpg";
import image2 from "../../shared/2.jpg";
import image3 from "../../shared/3.jpg";
import image4 from "../../shared/4.jpg";
import audioSrc from "../../shared/introMusic.mp3";
import Logo1 from "../../shared/logo1.png";
import Logo2 from "../../shared/logo2.png";
import { Audio, IntroContent, IntroWrapper, Logo, LogoWrapper } from "../../styles/intro";

export default function Intro() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioEnded, setAudioEnded] = useState(false);
    let linkRef = useRef(audioEnded ? true : null);

    if (audioEnded) {
        linkRef.current.click()
    }

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
                        <LogoWrapper>
                            <Logo>
                                <img src={Logo2} />
                                <p>كليه التربية للطفولة المبكرة</p>
                            </Logo>
                            <Logo>
                                <img src={Logo1} />
                                <p>جامعة بني سويف</p>
                            </Logo>
                        </LogoWrapper>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem"
                        }}>
                            <div style={{
                                fontWeight: "bold"
                            }}>
                                فاعلية برنامج قائم على إستراتيجية مخطط البيت الدائري الإلكتروني في تنمية بعض مفاهيم الأمن والسلامة لدى أطفال الروضة
                            </div>
                            <div>
                                The effectiveness of a program based on the strategy of the
                                electronic round house scheme in developing some concepts of
                                security and safety among kindergarten children
                            </div>
                            <div>
                                بحث مكمل ضمن متطلبات الحصول على درجة الماجستير
                                في التربية  للطفولة المبكره قسم العلوم التربوية
                            </div>
                            <div>
                                <div>
                                    إعداد الباحثة
                                </div>
                                <div>
                                    منة الله هاني محمد
                                </div>
                                <div>
                                    معيدة بكلية التربية للطفولة المبكرة
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: "2rem",
                                flexWrap: "wrap"
                            }}
                        >
                            <Audio style={{ cursor: "pointer" }} onClick={togglePlayPause}>
                                {
                                    isPlaying ?
                                        <IconPlayerPauseFilled color="#332522" /> :
                                        <IconPlayerPlayFilled color="#332522" />
                                }
                            </Audio>
                            <Audio style={{ cursor: "pointer" }}>
                                <Link to="/children-lessons/lessons/">
                                    <IconPlayerSkipForwardFilled color="#332522" />
                                </Link>
                            </Audio>
                        </div>
                        <div style={{ display: "none" }}>
                            <audio ref={audioRef} >
                                <source src={audioSrc} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <Link ref={linkRef} style={{ display: "none" }} to="/children-lessons/lessons/">
                                <button>Navigate to Lesson</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={image1} alt="boy" />
                        <img src={image2} alt="boy" />
                        <img src={image3} alt="boy" />
                        <img src={image4} alt="boy" />
                    </div>
                </IntroContent>
            </IntroWrapper>
        </motion.div>
    )
}
