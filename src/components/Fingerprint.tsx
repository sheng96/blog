import FingerprintJS from "@fingerprintjs/fingerprintjs";
import React, { useEffect } from 'react';
function Fingerprint(){
    useEffect(() => {
        FingerprintJS.load().then((fp) => {
            return fp.get()
        }).then((result) => {
            console.log(result.visitorId)
            // 读取本地储存中的浏览器指纹
            const _fp = localStorage.getItem("fp_token");
            if (!_fp) {
                localStorage.setItem("fp_token",result.visitorId);
            }
        })
    },[])
    // const { canvas,languages,colorDepth,colorGamut,osCpu,platform,timezone,vendor,videoCard,audio} = result.components
    // console.log(FingerprintJS.hashComponents({canvas,languages,colorDepth,colorGamut,osCpu,platform,timezone,vendor,videoCard,audio}))

 return null
}

export default Fingerprint
