import React from "react"

export default function SignUp() {
    return (
        <div className="sign-up">
            <div className="invite">
                <h2>ลองใช้งาน Bitkub ฟรี • ไม่ต้องใช้บัตรเครดิต</h2>
            </div>
            <div className="forms">
                <div className="input-box">
                    <span class="material-icons inside-form-box">email</span>
                    <input className="form input" type="text" placeholder="Email Address" name="email" />
                </div>

                <div className="input-box">
                    <span class="material-icons inside-form-box">lock</span>
                    <input className="form input" type="text" placeholder="Password" name="password" />
                </div>

                <div className="input-box">
                    <span class="material-icons inside-form-box">lock</span>
                    <input className="form input" type="text" placeholder="Repeat Password" name="repeat-password" />
                </div>

                <button className="submit"><div className="button"><p>สมัครเลย</p><span class="material-icons inside-form-box"><span class="material-symbols-outlined">arrow_forward</span></span></div></button>

            </div>
        </div>
    )
}