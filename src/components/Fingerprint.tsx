import FingerprintJS from "@fingerprintjs/fingerprintjs";
export default async function (){

    const fpPromise = FingerprintJS.load();
    // 读取本地储存中的浏览器指纹
    const _fp = localStorage.getItem("fp_token");
    if (!_fp) {
        const fp = await fpPromise;
        const result = await fp.get();
        localStorage.setItem("fp_token", result.visitorId);
    }
    const fp = await fpPromise;
    const result = await fp.get();
    // console.log(result)
    console.log(result.visitorId)
    const { canvas,languages,colorDepth,colorGamut,osCpu,platform,timezone,vendor,videoCard,audio} = result.components
    console.log(FingerprintJS.hashComponents({canvas,languages,colorDepth,colorGamut,osCpu,platform,timezone,vendor,videoCard,audio}))

 return (<></>)
}
