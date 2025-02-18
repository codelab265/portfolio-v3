import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContainerWrapper from "./ContainerWrapper";

export default function Contact() {
    return (
        <ContainerWrapper id="contacts" className="py-20 px-4 md:px-0">
            <div className="flex gap-4 items-center mb-12">
                <h2 className="text-[32px] font-medium text-white">
                    <span className="text-primary">#</span>contacts
                </h2>
                <div className="w-20 h-[1px] bg-primary" />
            </div>

            <div className="grid grid-cols-12 gap-8">
                <p className="text-grey col-span-12 md:col-span-6">
                    I'm interested in freelance opportunities. However, if you
                    have other request or question, don't hesitate to contact me
                </p>
                <div className="col-span-2" />
                <div className="border border-grey p-4 col-span-12 md:col-span-4">
                    <h3 className="text-base font-medium mb-4 text-white">
                        Message me here
                    </h3>
                    <div className="space-y-4">
                        <a
                            href="https://wa.me/265992374819"
                            className="flex items-center gap-2"
                        >
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="text-grey"
                            />
                            <span className="text-grey">+265 992 374 819</span>
                        </a>
                        <a
                            href="mailto:mphatsomlenga1@gmail.com"
                            className="flex items-center gap-2"
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-grey"
                            />
                            <span className="text-grey">
                                mphatsomlenga1@gmail.com
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    );
}
