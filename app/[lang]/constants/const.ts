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

export const headerHelpMenu = ["Manual", "Tutorial", "Glossary", "FAQ", "Contact"];

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
export const productInformationTableDummyData = [
  {
    id: 1,
    productType: "MultiV i",
    modelName: "ARUM220LTE6",
    qty: "1",
    function: "N/A",
    step: "",
    capacity: "100%",
    del: "",
  },
  {
    id: 2,
    productType: "MultiV i",
    modelName: "ARUM220LTE6",
    qty: "1",
    function: "Target_Control",
    step: "65dB(A)",
    capacity: "100%",
    del: "",
  },
  {
    id: 3,
    productType: "AWHP",
    modelName: "HU071MR",
    qty: "1",
    function: "Low_Noise",
    step: "On",
    capacity: "94%",
    del: "",
  },
];

export const totalCapacityTableDummyData = [
  {
    label: "Rated",
    first: "107.8kW",
    second: "",
  },
  {
    label: "Simulated",
    first: "107.4",
    second: "100%",
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
    title: "Legal Disclaimer",
    content: `“LG Electronics Inc. does not make any warranty, express or implied, nor assumes any legal liability or responsibility for the accuracy, completeness, or usefulness of any information, apparatus, product or process disclosed, nor represents that its use would not infringe privately owned rights.
The models described in this report are intended to demonstrate the potential thermal and air flow patterns of possible energy improvements for the new facilities.
Due to the limitation of the Simulations including differences of physical models and the real world, boundary conditions, and numerical errors, the conclusions of this report do not guarantee actual sound level or system performances.”

This low noise simulator, as well as all reports, illustrations, data, information, and other materials are the property of LG Electronics INC., and are disclosed by LG Electronics Inc., only in confidence.

Note : Legal Disclaimer: For continual product development, LG Electronics Inc., reserves the right to change specifications without notice.
`,
  },
  {
    title: "Note",
    content: [
      "Sound level values are depend on the ambient conditions and values are normally higher in actual operation.",
      "Product data is valid at diffuse field condition.",
      "Product data is valid at nominal operating condition.",
      "Sound values of system [dB(A)] = 10*log[10^(A1/10)+…+10^(An/10)] , A1~An means sound values of independent models.",
      "Sound levels can be increased in accordance with installation and operating conditions. " +
        "\n" +
        "(Operating conditions include some functional condition like Static pressure mode, air guide use, room target temperature setting, etc. and these functions are different in accordance with each model.)",
      "Sound level will vary depending on a range of factors such as the construction(acoustic absorption coefficient) of particular room in which the equipment in installed.",
      "This simulator is an approximate calculation tool and should not replace real life measurements.",
      "OSP17534-3:2015 has a recommendation that ground reflections are not removed by a barrier.",
      "There are no reflections from the barrier. In reality when dealing with short distances and many reflective surfaces the “canyon effect” may occur with repeating reflections.",
      "There are no affecting weather conditions, such as wind or temperature inversion, as these will affect the propagation path of a noise source and diffraction around the barrier.",
      "The noise source behaves as a point source and is far-field, where inherent directivity is minimal.",
      "Walls used in the simulator are considered to be perfectly reflecting and at 1 meter distance (façade level).",
      "Conditions are free-field and there is no reverberant field.",
      "Outdoor air temperature : 20℃, relative humidity : 50%",
      "The surface density of barrier should be at least 10kg/m2.",
      "Barriers should be closed surfaces without big holes or crevices.",
      "The horizontal dimension of the barrier should be long enough to the left and right.",
    ],
    image: [
      { src: IG_NOTE_TABLE_SPHERICAL_FIELD, alt: "Noise calculation formula (Spherical field)" },
      { src: IG_NOTE_TABLE_ENCLOSED_SPACE, alt: "Noise calculation formula (Enclosed space)" },
    ],
  },
];

export const soundPressureLevelDummyData = [
  {
    dataType: "63Hz",
    product1: 61.8,
    product2: 62.5,
  },
  {
    dataType: "125Hz",
    product1: 64.7,
    product2: 58.5,
  },
  {
    dataType: "250Hz",
    product1: 61.7,
    product2: 60.1,
  },
  {
    dataType: "500Hz",
    product1: 63.6,
    product2: 58.6,
  },
  {
    dataType: "1000Hz",
    product1: 61.9,
    product2: 54.3,
  },
  {
    dataType: "2000Hz",
    product1: 57.2,
    product2: 51.6,
  },
  {
    dataType: "4000Hz",
    product1: 53.6,
    product2: 53.0,
  },
  {
    dataType: "8000Hz",
    product1: 50.6,
    product2: 46.7,
  },
  {
    dataType: "Overall (dB(A))",
  },
];

export const soundPowerLevelDummyData = [
  {
    dataType: "63Hz",
    product3: 57.9,
  },
  {
    dataType: "125Hz",
    product3: 57.9,
  },
  {
    dataType: "250Hz",
    product3: 57.4,
  },
  {
    dataType: "500Hz",
    product3: 57.9,
  },
  {
    dataType: "1000Hz",
    product3: 51.9,
  },
  {
    dataType: "2000Hz",
    product3: 46.9,
  },
  {
    dataType: "4000Hz",
    product3: 40.4,
  },
  {
    dataType: "8000Hz",
    product3: 41.9,
  },
  {
    dataType: "Overall (dB(A))",
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
      title: "Radiating correction",
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
      title: "Distance correction",
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
      title: "Reduction by barrier",
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

export const soundPressureLevelDummy = [
  {
    product1: 61.8,
    product2: 62.5,
  },
  {
    product1: 64.7,
    product2: 58.5,
  },
  {
    product1: 61.7,
    product2: 60.1,
  },
  {
    product1: 63.6,
    product2: 58.6,
  },
  {
    product1: 61.9,
    product2: 54.3,
  },
  {
    product1: 57.2,
    product2: 51.6,
  },
  {
    product1: 53.6,
    product2: 53.0,
  },
  {
    product1: 50.6,
    product2: 46.7,
  },
  {
    product1: 222,
    product2: 111,
  },
];
