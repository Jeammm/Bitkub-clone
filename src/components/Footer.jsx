import React from "react"
import facebook from "../assets/images/facebook-2.webp"

export default function Footer() {
    return (
        <footer>
            <div className="menu-list">
                <div className="menu-list--item">
                    <p>บริการของเรา</p>
                    <ul>
                        <li><a href="#">ตลาดซื้อขาย</a></li>
                        <li><a href="#">ซื้อและขาย CRYPTOCURRENCY</a></li>
                        <li><a href="#">ซื้อ BITCOIN</a></li>
                        <li><a href="#">ซื้อ ETHEREUM</a></li>
                    </ul>
                </div>

                <div className="menu-list--item">
                    <p>เกี่ยวกับบิตคับ</p>
                    <ul>
                        <li><a href="#">เกี่ยวกับเรา</a></li>
                        <li><a href="#">ภารกิจของเรา</a></li>
                        <li><a href="#">ข้อตกลงและเงื่อนไข</a></li>
                        <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
                        <li><a href="#">นโยบายการใช้คุกกี้</a></li>
                        <li><a href="#">นโยบาย AML/CFT</a></li>
                        <li><a href="#">คำสั่งซื้อขายที่ไม่เหมาะสม</a></li>
                        <li><a href="#">นโยบายการแจ้งเบาะแสและข้อร้องเรียน</a></li>
                    </ul>
                </div>

                <div className="menu-list--item">
                    <p>ศูนย์ดูแลลูกค้า</p>
                    <ul>
                        <li><a href="#">คำถามที่พบบ่อย(FAQ)</a></li>
                        <li><a href="#">สารบัญเหรียญ</a></li>
                        <li><a href="#">ค่าธรรมเนียม</a></li>
                        <li><a href="#">ระยะเวลาการฝาก-ถอน</a></li>
                        <li><a href="#">ความปลอดภัย</a></li>
                        <li><a href="#">BUG BOUNTY PROGRAM</a></li>
                        <li><a href="#">ข้อมูล API</a></li>
                    </ul>
                </div>

                <div className="menu-list--item">
                    <p>ประกาศและข่าวสาร</p>
                    <ul>
                        <li><a href="#">ห้องข่าว</a></li>
                        <li><a href="#">ประกาศ</a></li>
                        <li><a href="#">บล็อค</a></li>
                    </ul>
                </div>

                <div className="menu-list--item">
                    <p>ติดต่อเรา</p>
                    <ul>
                        <li><a href="#">ติดต่อเรา</a></li>
                        <li><a href="#">ร่วมงานกับเรา</a></li>
                        <li><a href="#">การลิสต์เหรียญ</a></li>
                        <li><a href="#">ติดต่อด้านพัฒนาธุรกิจ</a></li>
                        <li><a href="#">ช่องทางการร้องเรียน</a></li>
                    </ul>
                </div>


            </div>
            <div className="trust">
                <img src="https://www.trustmarkthai.com/trust_banners/dbd_gold.png" alt="" />
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Fsectigo_trust_seal_lg_140x54.png&w=256&q=75" alt="" />
            </div>
            <hr />
            <div className="social-link">
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fsocial_media%2Ffacebook-2.png&w=64&q=75" alt="" />
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fsocial_media%2Finstagram-2.png&w=64&q=75" alt="" />
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fsocial_media%2Ftwitter-2.png&w=64&q=75" alt="" />
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fsocial_media%2Flineat-2.png&w=64&q=75" alt="" />
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fsocial_media%2Ftelegram-2.png&w=64&q=75" alt="" />
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fsocial_media%2Flinkedin-2.png&w=64&q=75" alt="" />
                <img src="https://www.bitkub.com/_next/image?url=%2Fstatic%2Fimages%2Ficons%2Fsocial_media%2Fyoutube-2.png&w=64&q=75" alt="" />
            </div>
            <h6>© 2022 BITKUB ONLINE CO., LTD ALL RIGHT RESERVED</h6>
        </footer>
    )
}