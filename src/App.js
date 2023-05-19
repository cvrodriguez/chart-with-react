import logo from './logo.svg';
import './App.css';
import MyChartComponent from './Components/MyChartComponent'

function App() {

  var data = {
    "Scope 1": {
        "1.1 - Stationary combustion": [
            [
                "Activity 1",
                348.2180161951077,
                "tonnes CO2e"
            ],
            [
                "Activity 2",
                532.7006332709296,
                "tonnes CO2e"
            ],
            [
                "Activity 3",
                1199.3629477642955,
                "tonnes CO2e"
            ]
        ],
        "1.2 - Mobile combustion": [
            [
                "Activity 4",
                1438.8019766857358,
                "tonnes CO2e"
            ],
            [
                "Activity 5",
                1184.124427535566,
                "tonnes CO2e"
            ],
            [
                "Activity 6",
                1868.7135740705016,
                "tonnes CO2e"
            ],
            [
                "Activity 7",
                1688.4400213821737,
                "tonnes CO2e"
            ],
            [
                "Activity 8",
                1151.5705033119443,
                "tonnes CO2e"
            ],
            [
                "Activity 9",
                982.8703612828364,
                "tonnes CO2e"
            ],
            [
                "Activity 10",
                1815.7775602803242,
                "tonnes CO2e"
            ]
        ],
        "1.3 - Process emissions": [
            [
                "Activity 11",
                1534.6470377943763,
                "tonnes CO2e"
            ],
            [
                "Activity 12",
                410.165489122935,
                "tonnes CO2e"
            ],
            [
                "Activity 13",
                99.38244939233395,
                "tonnes CO2e"
            ],
            [
                "Activity 14",
                1465.2155291531853,
                "tonnes CO2e"
            ]
        ],
        "1.4 - Fugitive emissions": [
            [
                "Activity 15",
                852.2366972253552,
                "tonnes CO2e"
            ],
            [
                "Activity 16",
                282.4304397309963,
                "tonnes CO2e"
            ],
            [
                "Activity 17",
                712.0063549101866,
                "tonnes CO2e"
            ],
            [
                "Activity 18",
                370.1571836550834,
                "tonnes CO2e"
            ],
            [
                "Activity 19",
                755.3647778661218,
                "tonnes CO2e"
            ],
            [
                "Activity 20",
                1338.7863370881564,
                "tonnes CO2e"
            ],
            [
                "Activity 21",
                293.22065931768185,
                "tonnes CO2e"
            ],
            [
                "Activity 22",
                1844.4648597849975,
                "tonnes CO2e"
            ],
            [
                "Activity 23",
                1588.4696848258195,
                "tonnes CO2e"
            ],
            [
                "Activity 24",
                1483.5304809232812,
                "tonnes CO2e"
            ]
        ]
    },
    "Scope 2": {
        "2.1 - Indirect emissions from the use of electricity": [
            [
                "Activity 25",
                1240.0079284648964,
                "tonnes CO2e"
            ],
            [
                "Activity 26",
                267.39542267924605,
                "tonnes CO2e"
            ],
            [
                "Activity 27",
                1712.4030556969203,
                "tonnes CO2e"
            ],
            [
                "Activity 28",
                83.41578552956832,
                "tonnes CO2e"
            ],
            [
                "Activity 29",
                1338.3387148948316,
                "tonnes CO2e"
            ],
            [
                "Activity 30",
                654.060318179277,
                "tonnes CO2e"
            ],
            [
                "Activity 31",
                1352.253522729517,
                "tonnes CO2e"
            ]
        ],
        "2.2 - Indirect emissions from the use of steam": [
            [
                "Activity 32",
                1095.9180871093251,
                "tonnes CO2e"
            ],
            [
                "Activity 33",
                1377.7366275650002,
                "tonnes CO2e"
            ],
            [
                "Activity 34",
                119.12865440904501,
                "tonnes CO2e"
            ],
            [
                "Activity 35",
                1791.5816479355158,
                "tonnes CO2e"
            ],
            [
                "Activity 36",
                822.719594277633,
                "tonnes CO2e"
            ]
        ],
        "2.3 - Indirect emissions from the use of heating": [
            [
                "Activity 37",
                1586.6068790325612,
                "tonnes CO2e"
            ],
            [
                "Activity 38",
                1619.3795276574917,
                "tonnes CO2e"
            ],
            [
                "Activity 39",
                258.2648534916677,
                "tonnes CO2e"
            ],
            [
                "Activity 40",
                436.4580203768422,
                "tonnes CO2e"
            ],
            [
                "Activity 41",
                822.3843092080466,
                "tonnes CO2e"
            ],
            [
                "Activity 42",
                1457.8349743847766,
                "tonnes CO2e"
            ],
            [
                "Activity 43",
                1885.3595021129092,
                "tonnes CO2e"
            ]
        ],
        "2.4 - Indirect emissions from the use of cooling": [
            [
                "Activity 44",
                473.7948706632928,
                "tonnes CO2e"
            ],
            [
                "Activity 45",
                20.97946045648486,
                "tonnes CO2e"
            ],
            [
                "Activity 46",
                97.90805675196923,
                "tonnes CO2e"
            ],
            [
                "Activity 47",
                1245.4978351036668,
                "tonnes CO2e"
            ],
            [
                "Activity 48",
                1610.0950600571812,
                "tonnes CO2e"
            ]
        ]
    },
    "Scope 3": {
        "3.1 - Purchased goods and services": [
            [
                "Activity 49",
                1130.8579496968623,
                "tonnes CO2e"
            ],
            [
                "Activity 50",
                977.2336523425658,
                "tonnes CO2e"
            ],
            [
                "Activity 51",
                657.4890083868559,
                "tonnes CO2e"
            ],
            [
                "Activity 52",
                52.867032596727704,
                "tonnes CO2e"
            ]
        ],
        "3.2 - Capital goods": [
            [
                "Activity 53",
                854.45717288429,
                "tonnes CO2e"
            ],
            [
                "Activity 54",
                1052.2017781063255,
                "tonnes CO2e"
            ],
            [
                "Activity 55",
                857.8462906771967,
                "tonnes CO2e"
            ],
            [
                "Activity 56",
                1297.833779317426,
                "tonnes CO2e"
            ],
            [
                "Activity 57",
                716.2184594318803,
                "tonnes CO2e"
            ]
        ],
        "3.3 - Fuel- and energy-related activities not included in scope 1 or scope 2": [
            [
                "Activity 58",
                327.1614501601671,
                "tonnes CO2e"
            ],
            [
                "Activity 59",
                1836.8242851674938,
                "tonnes CO2e"
            ],
            [
                "Activity 60",
                931.7412212787664,
                "tonnes CO2e"
            ],
            [
                "Activity 61",
                375.4776024947886,
                "tonnes CO2e"
            ],
            [
                "Activity 62",
                417.07245005068063,
                "tonnes CO2e"
            ],
            [
                "Activity 63",
                885.8643181751308,
                "tonnes CO2e"
            ],
            [
                "Activity 64",
                1223.8430134319442,
                "tonnes CO2e"
            ],
            [
                "Activity 65",
                157.5478065436426,
                "tonnes CO2e"
            ],
            [
                "Activity 66",
                605.2290954373842,
                "tonnes CO2e"
            ],
            [
                "Activity 67",
                1036.2912967633433,
                "tonnes CO2e"
            ]
        ],
        "3.4 - Upstream transportation & distribution": [
            [
                "Activity 68",
                1318.7318027085323,
                "tonnes CO2e"
            ],
            [
                "Activity 69",
                862.326252324895,
                "tonnes CO2e"
            ],
            [
                "Activity 70",
                1516.3740026554435,
                "tonnes CO2e"
            ],
            [
                "Activity 71",
                1036.4572736163677,
                "tonnes CO2e"
            ],
            [
                "Activity 72",
                401.8069823453465,
                "tonnes CO2e"
            ],
            [
                "Activity 73",
                1353.8564117806195,
                "tonnes CO2e"
            ],
            [
                "Activity 74",
                1570.4668421533374,
                "tonnes CO2e"
            ],
            [
                "Activity 75",
                1591.878923874982,
                "tonnes CO2e"
            ],
            [
                "Activity 76",
                497.6302832706661,
                "tonnes CO2e"
            ],
            [
                "Activity 77",
                1496.9436147010013,
                "tonnes CO2e"
            ]
        ],
        "3.5 - Waste generated in operations": [
            [
                "Activity 78",
                368.427887479227,
                "tonnes CO2e"
            ],
            [
                "Activity 79",
                1497.2977845099786,
                "tonnes CO2e"
            ],
            [
                "Activity 80",
                721.3258133854088,
                "tonnes CO2e"
            ]
        ],
        "3.6 - Business travel": [
            [
                "Activity 81",
                1883.8459726817505,
                "tonnes CO2e"
            ],
            [
                "Activity 82",
                410.10970747074066,
                "tonnes CO2e"
            ],
            [
                "Activity 83",
                888.485202810114,
                "tonnes CO2e"
            ],
            [
                "Activity 84",
                1635.3585749627068,
                "tonnes CO2e"
            ],
            [
                "Activity 85",
                1273.3764211828538,
                "tonnes CO2e"
            ],
            [
                "Activity 86",
                193.93566911547748,
                "tonnes CO2e"
            ],
            [
                "Activity 87",
                1421.1740603553314,
                "tonnes CO2e"
            ],
            [
                "Activity 88",
                483.0905281238884,
                "tonnes CO2e"
            ],
            [
                "Activity 89",
                1619.931626228107,
                "tonnes CO2e"
            ]
        ],
        "3.7 - Employee commuting": [
            [
                "Activity 90",
                259.8921474264612,
                "tonnes CO2e"
            ],
            [
                "Activity 91",
                810.9937703836673,
                "tonnes CO2e"
            ],
            [
                "Activity 92",
                1190.6964463154663,
                "tonnes CO2e"
            ],
            [
                "Activity 93",
                1811.1531516815887,
                "tonnes CO2e"
            ],
            [
                "Activity 94",
                1699.874464667495,
                "tonnes CO2e"
            ],
            [
                "Activity 95",
                1323.647060187683,
                "tonnes CO2e"
            ],
            [
                "Activity 96",
                103.52891944647196,
                "tonnes CO2e"
            ],
            [
                "Activity 97",
                496.8320885376743,
                "tonnes CO2e"
            ],
            [
                "Activity 98",
                1147.0916942424485,
                "tonnes CO2e"
            ]
        ],
        "3.8 - Upstream Leased Assets": [
            [
                "Activity 99",
                393.60876634520383,
                "tonnes CO2e"
            ],
            [
                "Activity 100",
                1300.3393640541312,
                "tonnes CO2e"
            ],
            [
                "Activity 101",
                1244.5248564016417,
                "tonnes CO2e"
            ],
            [
                "Activity 102",
                76.84669520798356,
                "tonnes CO2e"
            ],
            [
                "Activity 103",
                47.71000922548547,
                "tonnes CO2e"
            ],
            [
                "Activity 104",
                356.91002366525294,
                "tonnes CO2e"
            ],
            [
                "Activity 105",
                449.73334259695656,
                "tonnes CO2e"
            ]
        ],
        "3.9 - Downstream transportation & distribution": [
            [
                "Activity 106",
                1773.746232497584,
                "tonnes CO2e"
            ],
            [
                "Activity 107",
                661.6433150735194,
                "tonnes CO2e"
            ],
            [
                "Activity 108",
                947.1032216259861,
                "tonnes CO2e"
            ],
            [
                "Activity 109",
                1775.4990144355243,
                "tonnes CO2e"
            ],
            [
                "Activity 110",
                1503.2233379106367,
                "tonnes CO2e"
            ],
            [
                "Activity 111",
                317.2454928172368,
                "tonnes CO2e"
            ],
            [
                "Activity 112",
                112.46616915334832,
                "tonnes CO2e"
            ],
            [
                "Activity 113",
                157.13693790158646,
                "tonnes CO2e"
            ],
            [
                "Activity 114",
                10.119401078551158,
                "tonnes CO2e"
            ],
            [
                "Activity 115",
                912.2506591588244,
                "tonnes CO2e"
            ]
        ],
        "3.10 - Processing of Sold Products": [
            [
                "Activity 116",
                687.0354672872054,
                "tonnes CO2e"
            ],
            [
                "Activity 117",
                1798.2170145436442,
                "tonnes CO2e"
            ],
            [
                "Activity 118",
                522.8507381520425,
                "tonnes CO2e"
            ],
            [
                "Activity 119",
                202.71022317853672,
                "tonnes CO2e"
            ],
            [
                "Activity 120",
                1461.0943123692825,
                "tonnes CO2e"
            ],
            [
                "Activity 121",
                279.1416303982558,
                "tonnes CO2e"
            ],
            [
                "Activity 122",
                1759.7326548047645,
                "tonnes CO2e"
            ],
            [
                "Activity 123",
                1489.094019471924,
                "tonnes CO2e"
            ],
            [
                "Activity 124",
                771.0373215735993,
                "tonnes CO2e"
            ],
            [
                "Activity 125",
                834.5073524157676,
                "tonnes CO2e"
            ],
            [
                "Activity 126",
                913.520446452864,
                "tonnes CO2e"
            ]
        ],
        "3.11 - Use of sold products": [
            [
                "Activity 127",
                207.3359461560617,
                "tonnes CO2e"
            ],
            [
                "Activity 128",
                1514.9431608360549,
                "tonnes CO2e"
            ],
            [
                "Activity 129",
                1899.6866139652288,
                "tonnes CO2e"
            ],
            [
                "Activity 130",
                224.0643986523866,
                "tonnes CO2e"
            ],
            [
                "Activity 131",
                1880.5512990115808,
                "tonnes CO2e"
            ],
            [
                "Activity 132",
                479.9910921782696,
                "tonnes CO2e"
            ],
            [
                "Activity 133",
                151.6682694295745,
                "tonnes CO2e"
            ]
        ],
        "3.12 - End-of-life treatment of sold products": [
            [
                "Activity 134",
                1396.6134897947645,
                "tonnes CO2e"
            ],
            [
                "Activity 135",
                955.4009376434531,
                "tonnes CO2e"
            ],
            [
                "Activity 136",
                549.4514229529459,
                "tonnes CO2e"
            ],
            [
                "Activity 137",
                168.9579082681438,
                "tonnes CO2e"
            ],
            [
                "Activity 138",
                1278.8636646687085,
                "tonnes CO2e"
            ],
            [
                "Activity 139",
                554.7176617387291,
                "tonnes CO2e"
            ],
            [
                "Activity 140",
                282.6687960345946,
                "tonnes CO2e"
            ],
            [
                "Activity 141",
                1331.4847407823622,
                "tonnes CO2e"
            ],
            [
                "Activity 142",
                277.1240902399354,
                "tonnes CO2e"
            ],
            [
                "Activity 143",
                1563.3771607681815,
                "tonnes CO2e"
            ]
        ],
        "3.13 - Downstream Leased Assets": [
            [
                "Activity 144",
                488.64165366770226,
                "tonnes CO2e"
            ],
            [
                "Activity 145",
                806.8440590052896,
                "tonnes CO2e"
            ],
            [
                "Activity 146",
                1534.5256005463254,
                "tonnes CO2e"
            ],
            [
                "Activity 147",
                948.5472906915917,
                "tonnes CO2e"
            ],
            [
                "Activity 148",
                1449.86715145345,
                "tonnes CO2e"
            ],
            [
                "Activity 149",
                1512.498647474293,
                "tonnes CO2e"
            ],
            [
                "Activity 150",
                280.6998987216075,
                "tonnes CO2e"
            ],
            [
                "Activity 151",
                330.9617709822975,
                "tonnes CO2e"
            ],
            [
                "Activity 152",
                16.767738071758924,
                "tonnes CO2e"
            ]
        ],
        "3.14 - Franchises": [
            [
                "Activity 153",
                1028.7946048850333,
                "tonnes CO2e"
            ],
            [
                "Activity 154",
                380.1679385148611,
                "tonnes CO2e"
            ],
            [
                "Activity 155",
                763.6114910698334,
                "tonnes CO2e"
            ],
            [
                "Activity 156",
                392.49714277795925,
                "tonnes CO2e"
            ],
            [
                "Activity 157",
                1235.2786958492225,
                "tonnes CO2e"
            ],
            [
                "Activity 158",
                1653.8338325788948,
                "tonnes CO2e"
            ]
        ],
        "3.15 - Investments": [
            [
                "Activity 159",
                162.73487307477788,
                "tonnes CO2e"
            ],
            [
                "Activity 160",
                802.3181192716653,
                "tonnes CO2e"
            ],
            [
                "Activity 161",
                462.049388039463,
                "tonnes CO2e"
            ],
            [
                "Activity 162",
                1913.1358330371038,
                "tonnes CO2e"
            ],
            [
                "Activity 163",
                1211.5166327776608,
                "tonnes CO2e"
            ],
            [
                "Activity 164",
                1377.7706904135127,
                "tonnes CO2e"
            ],
            [
                "Activity 165",
                165.70706299695638,
                "tonnes CO2e"
            ],
            [
                "Activity 166",
                1238.5709869557734,
                "tonnes CO2e"
            ],
            [
                "Activity 167",
                1819.323869562637,
                "tonnes CO2e"
            ],
            [
                "Activity 168",
                274.4100668748835,
                "tonnes CO2e"
            ]
        ]
    }
};
  return (
    <div className="App">
      <header className="App-header">
        
          <MyChartComponent data={data}></MyChartComponent>
      
      </header>
    </div>
  );
}

export default App;
