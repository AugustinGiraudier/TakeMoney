
function getBillet(num){
    let billet = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 726 345" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-2267.32,-3507.35)">
        <g transform="matrix(1,0,0,1.39434,-1305.95,-991.4)">
            <g transform="matrix(1.57841,0,0,1.13201,-3076.8,-1067.6)">
                <rect x="4213.15" y="3793.28" width="459.485" height="218.465" style="fill:rgb(127,202,193);"/>
                <clipPath id="_clip1">
                    <rect x="4213.15" y="3793.28" width="459.485" height="218.465"/>
                </clipPath>
                <g clip-path="url(#_clip1)">
                    <g transform="matrix(1.17297,0,0,1.17297,-732.919,-672.387)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(31,157,141);"/>
                    </g>
                    <g transform="matrix(1.17297,0,0,1.17297,-273.433,-672.387)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(31,157,141);"/>
                    </g>
                    <g transform="matrix(1.17297,0,0,1.17297,-273.433,-453.922)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(31,157,141);"/>
                    </g>
                    <g transform="matrix(1.17297,0,0,1.17297,-732.919,-453.922)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(31,157,141);"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-58.5592,-34.9608)">
                        <circle cx="4501.45" cy="3937.47" r="74.272" style="fill:rgb(31,157,141);"/>
                        <clipPath id="_clip2">
                            <circle cx="4501.45" cy="3937.47" r="74.272"/>
                        </clipPath>
                        <g clip-path="url(#_clip2)">
                            <g transform="matrix(0.833406,0,0,0.826464,749.916,683.293)">
                                <circle cx="4501.45" cy="3937.47" r="74.272" style="fill:rgb(127,202,193);"/>
                            </g>
                        </g>
                    </g>
                    <path d="M4672.64,3793.28L4213.15,3793.28L4213.15,4011.75L4672.64,4011.75L4672.64,3793.28ZM4653.61,3812.3L4653.61,3992.73C4653.61,3992.73 4232.17,3992.73 4232.17,3992.73C4232.17,3992.73 4232.17,3812.3 4232.17,3812.3C4316.63,3812.3 4653.61,3812.3 4653.61,3812.3L4653.61,3812.3Z" style="fill:rgb(31,157,141);"/>
                    <g transform="matrix(0.633549,0,0,0.633549,2587.78,1787.94)">`;
    if(num >=20){
        billet += `<text x="2863.93px" y="3375.37px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:95.833px;fill:rgb(31,157,141);">` + num + `</text>`;              
    }
    else if(num == 1){
       billet += `<text x="2909.53px" y="3375.37px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:95.833px;fill:rgb(31,157,141);">`+ num +`</text>`;          
    }
    else if(num >= 10){
        billet += `<text x="2883.91px" y="3375.37px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:95.833px;fill:rgb(31,157,141);">`+ num +`</text>`;
    }
    else{
        billet += `<text x="2894.6px" y="3375.37px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:95.833px;fill:rgb(31,157,141);">`+ num +`</text>`;
    }

    billet += `</g>
                </g>
                </g>
                </g>
                </g>
                </svg>`

    return billet;

}

function getDisBillet(){
    return `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 726 345" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-3143.39,-3837.91)">
        <g transform="matrix(1,0,0,1.39434,-1271.86,-1091.04)">
            <g transform="matrix(1.57841,0,0,1.13201,-2234.82,-759.063)">
                <rect x="4213.15" y="3793.28" width="459.485" height="218.465" style="fill:rgb(64,64,64);"/>
                <clipPath id="_clip1">
                    <rect x="4213.15" y="3793.28" width="459.485" height="218.465"/>
                </clipPath>
                <g clip-path="url(#_clip1)">
                    <g transform="matrix(1.17297,0,0,1.17297,-732.919,-672.387)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(79,113,109);"/>
                    </g>
                    <g transform="matrix(1.17297,0,0,1.17297,-273.433,-672.387)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(79,113,109);"/>
                    </g>
                    <g transform="matrix(1.17297,0,0,1.17297,-273.433,-453.922)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(79,113,109);"/>
                    </g>
                    <g transform="matrix(1.17297,0,0,1.17297,-732.919,-453.922)">
                        <circle cx="4216.69" cy="3807.14" r="59.611" style="fill:rgb(79,113,109);"/>
                    </g>
                    <g transform="matrix(1,0,0,1,-58.5592,-34.9608)">
                        <circle cx="4501.45" cy="3937.47" r="74.272" style="fill:rgb(79,113,109);"/>
                        <clipPath id="_clip2">
                            <circle cx="4501.45" cy="3937.47" r="74.272"/>
                        </clipPath>
                        <g clip-path="url(#_clip2)">
                            <g transform="matrix(0.833406,0,0,0.826464,749.916,683.293)">
                                <circle cx="4501.45" cy="3937.47" r="74.272" style="fill:rgb(64,64,64);"/>
                            </g>
                        </g>
                    </g>
                    <path d="M4672.64,3793.28L4213.15,3793.28L4213.15,4011.75L4672.64,4011.75L4672.64,3793.28ZM4653.61,3812.3L4653.61,3992.73C4653.61,3992.73 4232.17,3992.73 4232.17,3992.73C4232.17,3992.73 4232.17,3812.3 4232.17,3812.3C4316.63,3812.3 4653.61,3812.3 4653.61,3812.3L4653.61,3812.3Z" style="fill:rgb(79,113,109);"/>
                    <g transform="matrix(0.633549,0,0,0.633549,2587.78,1787.94)">
                        <text x="2891.42px" y="3375.37px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:95.833px;fill:rgb(79,113,109);">X</text>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`
}

function getDisTicket(num){
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="100%" height="100%" viewBox="0 0 1091 206" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,-1030.22,-3901.98)">
            <g transform="matrix(1,0,0,1.39434,-1271.86,-1106.41)">
                <g transform="matrix(0.96206,0,0,0.717184,1370.94,1659.61)">
                    <rect x="967.863" y="2694.32" width="1133.91" height="205.886" style="fill:rgb(79,113,109);"/>
                    <g transform="matrix(1.03944,0,0,1,-220.463,0)">
                        <path d="M1273.83,2694.32L1214.04,2694.32L1143.24,2900.2L1203.03,2900.2L1273.83,2694.32Z" style="fill:rgb(64,64,64);"/>
                    </g>
                    <g transform="matrix(1.03944,0,0,1,-127.246,0)">
                        <path d="M1273.83,2694.32L1214.04,2694.32L1143.24,2900.2L1203.03,2900.2L1273.83,2694.32Z" style="fill:rgb(64,64,64);"/>
                    </g>
                    <g transform="matrix(1.03944,0,0,1,-126.429,0)">
                        <text x="1273.04px" y="2853.01px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:141.667px;fill:rgb(64,64,64);">`+ num +`</text>
                    </g>
                    <g transform="matrix(1.03944,0,0,1,616.296,0)">
                        <text x="1284.38px" y="2857.93px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:154.167px;fill:rgb(64,64,64);">€</text>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    `
}

function getTicket(num){
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="100%" height="100%" viewBox="0 0 1091 206" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,-996.134,-3205.12)">
            <g transform="matrix(1,0,0,1.39434,-1305.95,-1006.76)">
                <g transform="matrix(0.96206,0,0,0.717184,1370.94,1088.38)">
                    <rect x="967.863" y="2694.32" width="1133.91" height="205.886" style="fill:rgb(127,202,193);"/>
                    <g transform="matrix(1.03944,0,0,1,-220.463,0)">
                        <path d="M1273.83,2694.32L1214.04,2694.32L1143.24,2900.2L1203.03,2900.2L1273.83,2694.32Z" style="fill:rgb(31,157,141);"/>
                    </g>
                    <g transform="matrix(1.03944,0,0,1,-127.246,0)">
                        <path d="M1273.83,2694.32L1214.04,2694.32L1143.24,2900.2L1203.03,2900.2L1273.83,2694.32Z" style="fill:rgb(31,157,141);"/>
                    </g>
                    <g transform="matrix(1.03944,0,0,1,-87.3541,0)">
                        <text x="1273.04px" y="2853.01px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:141.667px;fill:rgb(31,157,141);">`+ num +`</text>
                    </g>
                    <g transform="matrix(1.03944,0,0,1,616.296,0)">
                        <text x="1284.38px" y="2857.93px" style="font-family:'LEMONMILK-Bold', 'LEMON MILK';font-weight:700;font-size:154.167px;fill:rgb(31,157,141);">€</text>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    `

}