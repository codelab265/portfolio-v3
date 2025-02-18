import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFigma,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import ContainerWrapper from "./ContainerWrapper";

export default function Footer() {
    return (
        <ContainerWrapper className="py-8 border-t border-grey px-4 md:px-0">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="space-y-4 md:space-y-0">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/logo.svg"
                                alt="Mphatso"
                                className="w-5 h-5"
                            />
                            <span className="font-medium text-white">
                                Mphatso
                            </span>
                        </div>
                        <a
                            href="mailto:mphatsomlenga1@gmail.com"
                            className="text-grey"
                        >
                            mphatsomlenga1@gmail.com
                        </a>
                    </div>
                    <p className="text-white">
                        Web and Mobile App Developer | Backend Developer
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h3 className="text-base font-medium mb-2 text-white">
                        Media
                    </h3>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-grey hover:text-primary transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-grey hover:text-primary transition-colors"
                        >
                            <FontAwesomeIcon icon={faFigma} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-grey hover:text-primary transition-colors"
                        >
                            <FontAwesomeIcon icon={faDiscord} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-grey">
                © Copyright {new Date().getFullYear()}. Made by Mphatso
            </div>
        </ContainerWrapper>
    );
}
