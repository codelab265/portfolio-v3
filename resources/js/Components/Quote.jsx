import { QuoteIcon } from "lucide-react";
import Box from "./Box";

export default function Quote() {
    return (
        <div className="w-full relative px-4 md:px-0 mt-12">
            <section className="max-w-[712px] mx-auto">
                <Box className="flex items-center justify-center p-8 text-xl relative">
                    <div className="z-10 size-[42px] bg-background rounded-full absolute left-[14px] -top-[21px] flex items-center justify-center">
                        <QuoteIcon />
                    </div>
                    With great power comes great electricity bill
                </Box>
                <div className="flex items-center justify-end">
                    <Box className="border-t-0 inline-flex items-center justify-center p-4 text-xl relative">
                        <div className="z-10 size-[42px] bg-background rounded-full absolute right-[14px] -top-[21px] flex items-center justify-center">
                            <QuoteIcon />
                        </div>
                        - DR.Who
                    </Box>
                </div>
            </section>
            <div className="hidden md:block absolute top-1/2 -right-1 -translate-y-1/2 h-1/2 w-10 border " />
        </div>
    );
}
