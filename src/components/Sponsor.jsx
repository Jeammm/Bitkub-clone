import React from "react"
import Marquee from "react-fast-marquee"

export default function Sponsor() {
    return (
        <div className="sponsor">
            <Marquee className="sponsor-marquee" speed="70" gradient={false}>
                <div className="sponsor-img-container">
                    <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fnews%2Fbitkub-brandinside-logo-1.png&w=640&q=75" alt="" />
                    <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fnews%2Fbitkub-moneychannel-logo-1.png&w=256&q=75" alt="" />
                    <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fnews%2Fbitkub-siamblockchain-logo-1.png&w=384&q=75" alt="" />
                    <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fnews%2Fbitkub-prachachat-logo-1.png&w=384&q=75" alt="" />
                    <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fnews%2Fbitkub-voicetv-logo-1.png&w=128&q=75" alt="" />
                    <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fnews%2Fbitkub-bangkokpost-logo-1.png&w=640&q=75" alt="" />
                </div>
            </Marquee>
        </div>
    )
}