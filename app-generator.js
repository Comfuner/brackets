let houses = [{
    name: "א", data:
        [{
            name: {
                eng: "russia",
                heb: "רוסיה",
                code: "RU"
            },
            status: null
        },
            {
                name: {
                    eng: "Saudi Arabia",
                    heb: "ע. הסעודית",
                    code: "SA"
                },
                status: null
            },
            {
                name: {
                    eng: "Egypt",
                    heb: "מצרים",
                    code: "EG"
                },
                status: null
            },
            {
                name: {
                    eng: "uruguay",
                    heb: "מצרים",
                    code: "EG"
                },
                status: null
            }]
},
    {
        name: "ב", data: [{
            name: {
                eng: "Portugal",
                heb: "פורטוגל",
                code: "PO"
            },
            status: null
        },
            {
                name: {
                    eng: "Spain",
                    heb: "ספרד",
                    code: "SP"
                },
                status: null
            },
            {
                name: {
                    eng: "Morocco",
                    heb: "מרוקו",
                    code: "MO"
                },
                status: null
            },
            {
                name: {
                    eng: "Iran",
                    heb: "איראן",
                    code: "IR"
                },
                status: null
            }]
    },
    {
        name: "ג", data: [{
            name: {
                eng: "France",
                heb: "צרפת",
                code: "FR"
            },
            status: null
        },
            {
                name: {
                    eng: "Australia",
                    heb: "אוסטרליה",
                    code: "AU"
                },
                status: null
            },
            {
                name: {
                    eng: "Peru",
                    heb: "פרו",
                    code: "PE"
                },
                status: null
            },
            {
                name: {
                    eng: "Denmark",
                    heb: "דנמרק",
                    code: "DK"
                },
                status: null
            }]
    },
    {
        name: "ד", data: [{
            name: {
                eng: "Argentina",
                heb: "ארגנטינה",
                code: "AR"
            },
            status: null
        },
            {
                name: {
                    eng: "Iceland",
                    heb: "איסלנד",
                    code: "IC"
                },
                status: null
            },
            {
                name: {
                    eng: "Croatia",
                    heb: "קרואטיה",
                    code: "CR"
                },
                status: null
            },
            {
                name: {
                    eng: "Nigeria",
                    heb: "ניגריה",
                    code: "NI"
                },
                status: null
            }]
    },
    {
        name: "ה", data: [{
            name: {
                eng: "Brazil",
                heb: "ברזיל",
                code: "BR"
            },
            status: null
        },
            {
                name: {
                    eng: "Switzerland",
                    heb: "שוויץ",
                    code: "SW"
                },
                status: null
            },
            {
                name: {
                    eng: "Costa Rica",
                    heb: "ק.ריקה",
                    code: "CR"
                },
                status: null
            },
            {
                name: {
                    eng: "Serbia",
                    heb: "סרביה",
                    code: "RS"
                },
                status: null
            }]
    },
    {
        name: "ו", data: [{
            name: {
                eng: "Germany",
                heb: "גרמניה",
                code: "DE"
            },
            status: null
        },
            {
                name: {
                    eng: "Mexico",
                    heb: "מקסיקו",
                    code: "MX"
                },
                status: null
            },
            {
                name: {
                    eng: "Sweden",
                    heb: "שוודיה",
                    code: "SE"
                },
                status: null
            },
            {
                name: {
                    eng: "Korea (Republic of)",
                    heb: "ד.קוריאה",
                    code: "KR"
                },
                status: null
            }]
    },
    {
        name: "ז", data: [{
            name: {
                eng: "Belgium",
                heb: "בלגיה",
                code: "BE"
            },
            status: null
        },
            {
                name: {
                    eng: "Panama",
                    heb: "פנמה",
                    code: "PA"
                },
                status: null
            },
            {
                name: {
                    eng: "Tunisia",
                    heb: "תוניס",
                    code: "TN"
                },
                status: null
            },
            {
                name: {
                    eng: "England",
                    heb: "אנגליה",
                    code: "GB"
                },
                status: null
            }]
    },
    {
        name: "ח", data: [{
            name: {
                eng: "Poland",
                heb: "פולין",
                code: "PO"
            },
            status: null
        },
            {
                name: {
                    eng: "Senegal",
                    heb: "סנגל",
                    code: "SN"
                },
                status: null
            },
            {
                name: {
                    eng: "Colombia",
                    heb: "קולומביה",
                    code: "CO"
                },
                status: null
            },
            {
                name: {
                    eng: "Japan",
                    heb: "יפן",
                    code: "JP"
                },
                status: null
            }]
    }
];


tempStr = "<h2>שלב הבתים</h2>";
for (let i = 0; i < houses.length; i++) {
    tempStr += `       
        <div class='inter-brackets-house' data-houseNum="${i}" data-outcomes="win,lost" data-finished="false">
        
        <h3>בית ${houses[i].name}</h3>
        <span class="inter-brackets-house-message">בחרו מקום ראשון</span>
        `;

    for (let i1 = 0; i1 < houses[i].data.length; i1++) {
        tempStr += `
<div class="country-select" data-country="${houses[i].data[i1].name.eng}" data-status="${houses[i].data[i1].status}">
                <div class="country-select-state"></div>
                <div class="country-select-info">
                    <div class="country-flag">
                        <img src="./assests/img/thumb.png"/>
                    </div>
                    <div class="country-name">${houses[i].data[i1].name.heb}</div>
                    <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                </div>
</div>
`;
    }
    tempStr += "</div>";
}

document.querySelector('.inter-brackets-houses').innerHTML = tempStr;

function flagCb(data, item) {
    //item.style.backgroundImage = "url('"+ JSON.parse(data.response)[0].flag + "')";
    item.getElementsByTagName('img')[0].src = JSON.parse(data.response)[0].flag;
}

function getFlag(item, cname, cFunction) {
    if (cname.toLowerCase() === "england") {
        item.getElementsByTagName('img')[0].src = "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg"
    } else {
        xhttp = new XMLHttpRequest();
        let url = 'https://restcountries.eu/rest/v2/name/' + cname + '/?fields=flag';
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                cFunction(this, item);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}

let items = Array.from(document.querySelectorAll('.country-select'));
//console.log(items);

items.map(function (item) {
    getFlag(item, item.dataset.country, flagCb);
});

// matches
var tempMatch = "<h2>שמינית הגמר</h2>";
for (let i = 0; i < 8; i++) {
    tempMatch += `
    <div class="inter-brackets-match" data-finished="false" data-match="${i + 1}">
    <h3>משחק ${i + 1}</h3>
    <span class="inter-brackets-house-message">בחרו מנצח</span>
            <div class="country-select" data-country="" data-status="null">
                <div class="country-select-state"></div>
                <div class="country-select-info">
                <div class="country-flag">
                    <img src="./assests/img/thumb.png"/>
                </div>
                <div class="country-name">?</div>
                <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                </div>
            </div>
            <div class="country-select" data-country="" data-status="null">
                <div class="country-select-state"></div>
                <div class="country-select-info">
                <div class="country-flag">
                    <img src="./assests/img/thumb.png"/>
                </div>
                <div class="country-name">?</div>
                <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
</div>
            </div>
    </div>
    `;
}

document.querySelector('.inter-brackets-sixteen').innerHTML = tempMatch;

var tempMatch = "<h2>רבע הגמר</h2>";
for (let i = 0; i < 4; i++) {
    tempMatch += `
    <div class="inter-brackets-match" data-finished="false" data-match="${i + 1}">
    <h3>משחק ${i + 1}</h3>
    <span class="inter-brackets-house-message">בחרו מנצח</span>
            <div class="country-select" data-country="" data-status="null">
                            <div class="country-select-state"></div>
                            <div class="country-select-info">
                <div class="country-flag">
                    <img src="./assests/img/thumb.png"/>
                </div>
                <div class="country-name">?</div>
                <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                </div>
            </div>
            <div class="country-select" data-country="" data-status="null">
                <div class="country-select-state"></div>
                            <div class="country-select-info">
                <div class="country-flag">
                    <img src="./assests/img/thumb.png"/>
                </div>
                <div class="country-name">?</div>
                <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                </div>
    </div>
    </div>
    `;
}
document.querySelector('.inter-brackets-quarter').innerHTML = tempMatch

var tempMatch = "<h2>חצי הגמר</h2>";

for (let i = 0; i < 2; i++) {
    tempMatch += `
    <div class="inter-brackets-match" data-finished="false" data-match="${i + 1}">
    <h3>משחק ${i + 1}</h3>
    <span class="inter-brackets-house-message">בחרו מנצח</span>
            <div class="country-select" data-country="" data-status="null">
                            <div class="country-select-state"></div>
                            <div class="country-select-info">
                <div class="country-flag">
                    <img src="./assests/img/thumb.png"/>
                </div>
                <div class="country-name">?</div>
                <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                </div>
            </div>
            <div class="country-select" data-country="" data-status="null">
                <div class="country-select-state"></div>
                            <div class="country-select-info">
                <div class="country-flag">
                    <img src="./assests/img/thumb.png"/>
                </div>
                <div class="country-name">?</div>
                <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                </div>
            </div>
    </div>
    `;
}

document.querySelector('.inter-brackets-semi-wrapper').innerHTML = tempMatch;


var tempMatch = "<h2>משחק הגמר</h2>";
for (let i = 0; i < 1; i++) {
    tempMatch += `
    <div class="inter-brackets-match" data-finished="false" data-match="${i + 1}">
    <h3>הגמר</h3>
    <span class="inter-brackets-house-message">בחרו מנצח</span>
            <div class="country-select" data-country="" data-status="null">
                            <div class="country-select-state"></div>
                            <div class="country-select-info">
                                    <div class="country-flag">
                                        <img src="./assests/img/thumb.png"/>
                                    </div>
                                    <div class="country-name">?</div>
                                    <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                            </div>
            </div>
            <div class="country-select" data-country="" data-status="null">
                <div class="country-select-state"></div>
                <div class="country-select-info">
                                <div class="country-flag">
                                    <img src="./assests/img/thumb.png"/>
                                </div>
                                <div class="country-name">?</div>
                                <div class="input-wrapper"><span class="input-wrapper-content">בחרו</span></div>
                </div>
            </div>
 
    </div>
    `;
}
document.querySelector('.inter-brackets-final-wrapper').innerHTML = tempMatch;

