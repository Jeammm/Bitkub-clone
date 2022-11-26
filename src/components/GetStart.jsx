import React from "react"

export default function GetStart() {

    const arrow = <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium tw-h-4 tw-w-4 mui-style-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>

    return (
        <div className="home-inner">
            <div className="get-start get-start-real">
                <h2>เริ่มต้นการใช้งาน</h2>
                <div className="steps">
                    <div className="step get-start-step">
                        <div className="step-number">
                            <h1>1</h1>
                        </div>
                        <h3>สมัคร</h3>
                        <p>หากคุญสนใจในการเทรด crypto สมัครสมาชิกได้เลยที่นี่</p>
                        <a href="#">สมัครเลย {arrow}</a>
                    </div>
                    <div className="step get-start-step">
                        <div className="step-number">
                            <h1>2</h1>
                        </div>
                        <h3>เงินฝาก</h3>
                        <p>ฝากเงินหรือเหรียญ crypto ด้วยการโอนเงินจากบัญชีธนาคาร หรือจากกระเป๋าเหรียญ crypto</p>
                        <a href="#">ช่องทางโอนเงิน {arrow}</a>
                    </div>
                    <div className="step get-start-step">
                        <div className="step-number">
                            <h1>3</h1>
                        </div>
                        <h3>เริ่มเทรด</h3>
                        <div className="goto-link">
                        <p>ซื้อขายเหรียญ crypto บนแพลตฟอร์มชั้นนำของประเทศไทย</p>
                            <a href="#">เปิดดูบริการของเรา {arrow}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}