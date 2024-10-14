import IC_KOREA from "@/app/assets/icons/ic_korea.svg";
import IC_CHINA from "@/app/assets/icons/ic_china.svg";
import IC_JAPAN from "@/app/assets/icons/ic_japan.svg";
import IC_AUSTRIA from "@/app/assets/icons/ic_austria.svg";
import IC_FRANCE from "@/app/assets/icons/ic_france.svg";
import IC_SPAIN from "@/app/assets/icons/ic_spain.svg";
import IC_CANADA from "@/app/assets/icons/ic_canada.svg";
import IC_USA from "@/app/assets/icons/ic_usa.svg";
import IC_MEXICO from "@/app/assets/icons/ic_mexico.svg";
import IC_BRAZIL from "@/app/assets/icons/ic_brazil.svg";

export const pageIndex = [
  {
    name: "Input",
    pages: [{ link: "/container/input", title: "Input" }],
  },
  {
    name: "Result",
    pages: [{ link: "/container/result", title: "Result" }],
  },
];

export const browserType = {
  PC: "pc",
  TABLET: "tablet",
  MOBILE: "mobile",
};

export const headerHelpMenu = ["Manual"];
// ,"Tutorial", "Glossary", "FAQ", "Contact"];

export const headerLanguage = [
  {
    // icon: IC_USA,
    title: "English",
    locale: "en",
  },
  {
    title: "Chinese",
    locale: "ch",
  },
  {
    title: "Czech",
    locale: "cz",
  },
  {
    title: "Polish",
    locale: "pl",
  },
  {
    title: "German",
    locale: "ge",
  },
  {
    title: "French",
    locale: "fr",
  },
  {
    title: "Russian",
    locale: "ru",
  },
  {
    title: "Hungarian",
    locale: "hu",
  },
  {
    title: "Lb_romana",
    locale: "ro",
  },
  {
    title: "Ukrainian",
    locale: "uk",
  },
  {
    title: "Portugal",
    locale: "pt",
  },
  {
    title: "Brazilian",
    locale: "br",
  },
  {
    title: "Italiano",
    locale: "it",
  },
  {
    title: "Korean",
    locale: "ko",
  },
  {
    title: "Spanish",
    locale: "sp",
  },
  {
    title: "Turkish",
    locale: "tr",
  },
];

export const selectListDummyData = [
  { title: "item01", value: "1" },
  { title: "item02", value: "2" },
  { title: "item03", value: "3" },
  { title: "item04", value: "4" },
  { title: "item05", value: "5" },
  { title: "item06", value: "6" },
  { title: "item07", value: "7" },
  { title: "item08", value: "8" },
  { title: "item09", value: "9" },
  { title: "item10", value: "10" },
  { title: "item11", value: "11" },
];
export const selectMaterialDummyData = [
  { title: "Concrete(Default) / 120mm", value: "120" },
  { title: "Wood / 20mm", value: "20" },
  { title: "Plywood / 12mm", value: "12" },
  { title: "Glass / 3mm", value: "3" },
];
export const productInformationTableDummyData = [
  {
    id: 1,
    productType: "",
    modelName: "",
    qty: "1",
    function: "",
    step: "",
    capacity: "%",
    del: "",
  },
];

export const totalCapacityTableDummyData = [
  {
    label: "NOISE_0042",
    first: "0.0kW",
    second: "",
  },
  {
    label: "NOISE_0043",
    first: "0.0kW",
    second: "0%",
  },
];
export const fieldTypeSelectBoxData = [
  { title: "Outdoor Space", value: "1" },
  { title: "Enclosed Space (Machine Room)", value: "2" },
];

import IG_NOTE_TABLE_SPHERICAL_FIELD from "@/app/assets/images/ig_note_table_spherical_field.svg";
import IG_NOTE_TABLE_ENCLOSED_SPACE from "@/app/assets/images/ig_note_table_enclosed_space.svg";
import exp from "node:constants";

export const accordionDummyData = [
  {
    title: "NOISE_0019",
    content: "NOISE_0020",
  },
  {
    title: "NOISE_0021",
    content: [
      "NOISE_0022",
      "NOISE_0023",
      "NOISE_0024",
      "NOISE_0025",
      "NOISE_0026",
      "NOISE_0027",
      "NOISE_0028",
      "NOISE_0029",
      "NOISE_0030",
      "NOISE_0031",
      "NOISE_0032",
      "NOISE_0033",
      "NOISE_0034",
      "NOISE_0035",
      "NOISE_0036",
      "NOISE_0037",
      "NOISE_0038",
    ],
    image: [
      { src: IG_NOTE_TABLE_SPHERICAL_FIELD, alt: "NOISE_0039" },
      { src: IG_NOTE_TABLE_ENCLOSED_SPACE, alt: "NOISE_0040" },
    ],
  },
];

export const soundPressureLevelDummyData = [
  {
    dataType: "63Hz",
  },
  {
    dataType: "125Hz",
  },
  {
    dataType: "250Hz",
  },
  {
    dataType: "500Hz",
  },
  {
    dataType: "1000Hz",
  },
  {
    dataType: "2000Hz",
  },
  {
    dataType: "4000Hz",
  },
  {
    dataType: "8000Hz",
  },
  {
    dataType: "Overall (dB(A))",
  },
];

export const soundPowerLevelDummyData = [
  {
    dataType: "63Hz",
  },
  {
    dataType: "125Hz",
  },
  {
    dataType: "250Hz",
  },
  {
    dataType: "500Hz",
  },
  {
    dataType: "1000Hz",
  },
  {
    dataType: "2000Hz",
  },
  {
    dataType: "4000Hz",
  },
  {
    dataType: "8000Hz",
  },
  {
    dataType: "Overall (dB(A))",
  },
  {
    dataType: "",
  },
];

export const estimatedSoundDummyData = [
  { content1: "63Hz", content2: "" },
  { content1: "125Hz", content2: "" },
  { content1: "250Hz", content2: "" },
  { content1: "500Hz", content2: "" },
  { content1: "1000Hz", content2: "" },
  { content1: "2000Hz", content2: "" },
  { content1: "4000Hz", content2: "" },
  { content1: "8000Hz", content2: "" },
  { content1: "Overall (dB(A))", content2: "" },
];
export const barrierInfoTableDummyData = [
  { content1: "63Hz", content2: 32 },
  { content1: "125Hz", content2: 32 },
  { content1: "250Hz", content2: 40 },
  { content1: "500Hz", content2: 46 },
  { content1: "1000Hz", content2: 53 },
  { content1: "2000Hz", content2: 59 },
  { content1: "4000Hz", content2: 64 },
  { content1: "8000Hz", content2: 64 },
];
export const howToUseDummyData = [
  { content1: "Write a project name and date of issue." },
  { content1: "Choose a product type / model name / quantity of the products." },
  {
    content1:
      "If you want to use the noise control function, please select function and step of each model.",
  },
  { content1: "Edit field conditions based on the installation site." },
  {
    content1:
      "Check the preview image to make sure the environment information you entered is correct.",
  },
  {
    content1:
      "If you want to export the result, click the button “Export as PDF” on the ‘Report’ sheet",
    highLight: "“Export as PDF” on the ‘Report’ sheet",
    content2: ".",
  },
];
export const ReferenceCommonDummyData = [
  { outdoorNoises: "Gas lawn mower at 1m", soundPressures: "100 dB(A)" },
  { outdoorNoises: "Diesel truck at 15m", soundPressures: "90 dB(A)" },
  { outdoorNoises: "Noisy urban daytime", soundPressures: "80 dB(A)" },
  { outdoorNoises: "Gas lawn mower at 30m", soundPressures: "70 dB(A)" },
  { outdoorNoises: "Commercial area", soundPressures: "60 dB(A)" },
  { outdoorNoises: "Quiet urban daytime", soundPressures: "50 dB(A)" },
  { outdoorNoises: "Quiet urban nighttime", soundPressures: "40 dB(A)" },
  { outdoorNoises: "Quiet suburban nighttime", soundPressures: "30 dB(A)" },
  { outdoorNoises: "Quiet rural nighttime", soundPressures: "20 dB(A)" },
];
{
  /* 반응형 */
}
export const detailInformationDummyData = {
  headings: [
    { content: "63Hz" },
    { content: "125Hz" },
    { content: "250Hz" },
    { content: "500Hz" },
    { content: "1000Hz" },
    { content: "2000Hz" },
    { content: "4000Hz" },
    { content: "8000Hz", noLine: true },
  ],
  data: [
    {
      title: "NOISE_0014",
      content: [
        { content: "3.0" },
        { content: "3.0" },
        { content: "3.0" },
        { content: "3.0" },
        { content: "3.0" },
        { content: "3.0" },
        { content: "3.0" },
        { content: "3.0", noLine: true },
      ],
      noLine: true,
    },
    {
      title: "NOISE_0015",
      content: [
        { content: "35.3" },
        { content: "35.3" },
        { content: "35.3" },
        { content: "35.3" },
        { content: "35.3" },
        { content: "35.3" },
        { content: "35.3" },
        { content: "35.3", noLine: true },
      ],
      noLine: true,
    },
    {
      title: "NOISE_0016",
      content: [
        { content: "0.7" },
        { content: "0.8" },
        { content: "0.9" },
        { content: "0.9" },
        { content: "0.9" },
        { content: "0.9" },
        { content: "0.9" },
        { content: "0.7", noLine: true },
      ],
      noLine: true,
    },
  ],
};
{
  /* 반응형 */
}
export const soundPressureReceiverDummyData = {
  headings: [
    { content: "63Hz" },
    { content: "125Hz" },
    { content: "250Hz" },
    { content: "500Hz" },
    { content: "1000Hz" },
    { content: "2000Hz" },
    { content: "4000Hz" },
    { content: "8000Hz", noLine: true },
  ],
  data: [
    { content: "40.4", titleOfRow: false },
    { content: "44.4" },
    { content: "42.6" },
    { content: "43.4" },
    { content: "41.2" },
    { content: "37.9" },
    { content: "35.9" },
    { content: "31.9", noLine: true },
  ],
};

export const UnitStorageName = "latsNoise_unit";

export const unitSettingData = [
  {
    title: "Temperature",
    key: "temperature",
    value: ["℃", "℉"],
  },
  {
    title: "Heat Load",
    key: "heatLoad",
    value: ["kW", "ton", "kcal/h", "kBtu/h"],
  },
  {
    title: "Water Flow Rate",
    key: "waterFlowRate",
    value: ["CMS", "LPM", "LPH", "GPM"],
  },
  {
    title: "Weight",
    key: "weight",
    value: ["kg", "lbs"],
  },
  {
    title: "Heat Exchanger Volume",
    key: "heatExchangerVolume",
    value: ["cm3", "dm3", "in3"],
  },
  {
    title: "Air flow rate",
    key: "airFlowRate",
    value: ["CMS", "CMM", "CMH", "CFM", "LPS", "LPH"],
  },
  {
    title: "Length",
    key: "length",
    value: ["m", "ft"],
  },
  {
    title: "Pressure Drop(Air)",
    key: "pressureDropAir",
    value: ["kgf/cm2", "Pa", "mmAq", "bar", "lb/ft2", "inchAq"],
  },
  {
    title: "Diameter",
    key: "diameter",
    value: ["mm", "inch"],
  },
  {
    title: "Pressure Drop(Water)",
    key: "pressureDropWater",
    value: ["kPa", "mmAq", "inchAq"],
  },
];

export const unitSettingDefaultData: Record<string, Record<string, string>> = {
  SI: {
    temperature: "℃",
    heatLoad: "kW",
    waterFlowRate: "LPM",
    weight: "kg",
    heatExchangerVolume: "cm3",
    airFlowRate: "CMH",
    length: "m",
    pressureDropAir: "Pa",
    diameter: "mm",
    pressureDropWater: "mmAq",
  },
  IP: {
    temperature: "℉",
    heatLoad: "kBtu/h",
    waterFlowRate: "GPM",
    weight: "lbs",
    heatExchangerVolume: "in3",
    airFlowRate: "CFM",
    length: "ft",
    pressureDropAir: "inchAq",
    diameter: "inch",
    pressureDropWater: "inchAq",
  },
};

export const headerManualDummyData = [
  {
    title: "LATS_Noise_User_Manual.pdf",
    date: "2024.10",
  },
];

export const dBAF = (data: any[], objProps: string) => {
  return (
    10 *
    Math.log10(
      10 ** ((data[0][objProps] - 26.2) / 10) +
        10 ** ((data[1][objProps] - 16.1) / 10) +
        10 ** ((data[2][objProps] - 8.6) / 10) +
        10 ** ((data[3][objProps] - 3.2) / 10) +
        10 ** (data[4][objProps] / 10) +
        10 ** ((data[5][objProps] + 1.2) / 10) +
        10 ** ((data[6][objProps] + 1) / 10) +
        10 ** ((data[7][objProps] - 1.1) / 10)
    )
  );
};
