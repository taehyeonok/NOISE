import { UnitStorageName } from "@/app/[lang]/constants/const";
import CTransUnit from "@/lib/transUnit";

export const INT_MIN = -2147483647 - 1;
export const INT_MAX = 2147483647;
export const EditUnitType = {
  TYPE_UNIT_NULL: 0,
  TYPE_UNIT_TEMP: 1,
  TYPE_UNIT_ELEVATION: 2,
  TYPE_UNIT_WATERFLOW: 3,
  TYPE_UNIT_WATERFLOW_POWER: 4,
  TYPE_UNIT_FOULING: 5,
  TYPE_UNIT_WEIGHT: 6,
  TYPE_UNIT_POWER: 7,
  TYPE_UNIT_EFFICIENCY: 8,
  TYPE_UNIT_PRESSURE: 9,
  TYPE_UNIT_LENGTH: 10,
  TYPE_UNIT_AIRFLOW: 11,
  TYPE_UNIT_AIRFLOWRATE: 12,
  TYPE_UNIT_ESP: 13,
  TYPE_UNIT_HEATLOAD: 14,
  TYPE_UNIT_VAPORPRESSURE: 15,
  TYPE_UNIT_CAPACITY: 16,
  TYPE_UNIT_MASSFLOW: 17,
  TYPE_UNIT_MOTOR_FAN_POWER: 18,
  TYPE_UNIT_ENTHALPY: 19,
  TYPE_UNIT_AREA: 20,
  TYPE_UNIT_WATER_PRESSURE_DROP: 21,
  TYPE_UNIT_VOLUME: 22,
  TYPE_UNIT_LENGTH_ALL: 23,
  TYPE_UNIT_ABS_EUMIDITY: 24,
  TYPE_UNIT_SPACE_VOLUME: 25,
  TYPE_UNIT_COUNT: 26,

  TEXT_UNIT_TEMP: "TEMP",
  TEXT_UNIT_ELEVATION: "ELEVATION",
  TEXT_UNIT_WATERFLOW: "WATERFLOW",
  TEXT_UNIT_WATERFLOW_POWER: "WATERFLOW_POWER",
  TEXT_UNIT_FOULING: "FOULING",
  TEXT_UNIT_WEIGHT: "WEIGHT",
  TEXT_UNIT_POWER: "POWER",
  TEXT_UNIT_EFFICIENCY: "EFFICIENCY",
  TEXT_UNIT_PRESSURE: "PRESSURE",
  TEXT_UNIT_LENGTH: "LENGTH",
  TEXT_UNIT_AIRFLOW: "AIRFLOW",
  TEXT_UNIT_AIRFLOWRATE: "AIRFLOWRATE",
  TEXT_UNIT_ESP: "ESP",
  TEXT_UNIT_HEATLOAD: "HEATLOAD",
  TEXT_UNIT_VAPORPRESSURE: "VAPORPRESSURE",
  TEXT_UNIT_CAPACITY: "CAPACITY",
  TEXT_UNIT_MASSFLOW: "MASSFLOW",
  TEXT_UNIT_MOTOR_FAN_POWER: "MOTOR_FAN_POWER",
  TEXT_UNIT_ENTHALPY: "ENTHALPY",
  TEXT_UNIT_AREA: "AREA",
  TEXT_UNIT_WATER_PRESSURE_DROP: "WATER_PRESSURE_DROP",
  TEXT_UNIT_VOLUME: "VOLUME",
  TEXT_UNIT_LENGTH_ALL: "LENGTH_ALL",
  TEXT_UNIT_ABS_EUMIDITY: "ABS_EUMIDITY",
  TEXT_UNIT_SPACE_VOLUME: "SPACE_VOLUME",
};
/** 단위 변환 Class */
class EditUnit {
  m_Type: number | string;
  m_dSubType: number | undefined;
  m_fValue: number;
  m_sRegValueName: string;
  m_dAdjustPoint: number;
  m_bDisplayNoValue: boolean;
  m_sNoValue: string;
  unitData_useServer: any;
  constructor() {
    this.m_Type = EditUnitType.TYPE_UNIT_NULL; // EditUnitType
    this.m_dSubType = 0;
    this.m_fValue = INT_MIN;
    this.m_sRegValueName = "";
    this.m_dAdjustPoint = 1; // 0이면 INT 로 처리
    this.m_bDisplayNoValue = false;
    this.m_sNoValue = "-";
    this.unitData_useServer = null;
  }

  TransStringtoEditUnitType(sType: string) {
    if (sType == "NULL" || sType == "" || sType == undefined) {
      return EditUnitType.TYPE_UNIT_NULL;
    } else if (sType == "TEMP") {
      return EditUnitType.TYPE_UNIT_TEMP;
    } else if (sType == "ELEVATION") {
      return EditUnitType.TYPE_UNIT_ELEVATION;
    } else if (sType == "WATERFLOW") {
      return EditUnitType.TYPE_UNIT_WATERFLOW;
    } else if (sType == "WATERFLOW_POWER") {
      return EditUnitType.TYPE_UNIT_WATERFLOW_POWER;
    } else if (sType == "FOULING") {
      return EditUnitType.TYPE_UNIT_FOULING;
    } else if (sType == "WEIGHT") {
      return EditUnitType.TYPE_UNIT_WEIGHT;
    } else if (sType == "POWER") {
      return EditUnitType.TYPE_UNIT_POWER;
    } else if (sType == "EFFICIENCY") {
      return EditUnitType.TYPE_UNIT_EFFICIENCY;
    } else if (sType == "PRESSURE") {
      return EditUnitType.TYPE_UNIT_PRESSURE;
    } else if (sType == "LENGTH") {
      return EditUnitType.TYPE_UNIT_LENGTH;
    } else if (sType == "AIRFLOW") {
      return EditUnitType.TYPE_UNIT_AIRFLOW;
    } else if (sType == "AIRFLOWRATE") {
      return EditUnitType.TYPE_UNIT_AIRFLOWRATE;
    } else if (sType == "ESP") {
      return EditUnitType.TYPE_UNIT_ESP;
    } else if (sType == "HEATLOAD") {
      return EditUnitType.TYPE_UNIT_HEATLOAD;
    } else if (sType == "VAPORPRESSURE") {
      return EditUnitType.TYPE_UNIT_VAPORPRESSURE;
    } else if (sType == "CAPACITY") {
      return EditUnitType.TYPE_UNIT_CAPACITY;
    } else if (sType == "MASSFLOW") {
      return EditUnitType.TYPE_UNIT_MASSFLOW;
    } else if (sType == "MOTOR_FAN_POWER") {
      return EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER;
    } else if (sType == "ENTHALPY") {
      return EditUnitType.TYPE_UNIT_ENTHALPY;
    } else if (sType == "AREA") {
      return EditUnitType.TYPE_UNIT_AREA;
    } else if (sType == "WATER_PRESSURE_DROP") {
      return EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP;
    } else if (sType == "VOLUME") {
      return EditUnitType.TYPE_UNIT_VOLUME;
    } else if (sType == "LENGTH_ALL") {
      return EditUnitType.TYPE_UNIT_LENGTH_ALL;
    } else if (sType == "ABS_EUMIDITY") {
      return EditUnitType.TYPE_UNIT_ABS_EUMIDITY;
    } else if (sType == "SPACE_VOLUME") {
      return EditUnitType.TYPE_UNIT_SPACE_VOLUME;
    } else {
      return "";
    }
  }

  SetUnitSubType(target: any, dSubType: number | string) {
    // target.attr('unit-sub-type', dSubType);
    // //this.m_dSubType = dSubType;
    // if (dSubType < 0) {
    //     target.attr('unit-sub-type', this.SetDefaultSubType(TransStringtoEditUnitType(target.attr('unit-type'))));
    // }
    // //this.m_dSubType = this.SetDefaultSubType();
    // this.SetValue(target, this.m_fValue);
  }

  SetUnitType(target: any, type: number | string, pCbUnit: any = null) {
    if (typeof target == "undefined" && !target) {
      return;
    }

    let sType = "";
    switch (type) {
      case EditUnitType.TYPE_UNIT_NULL:
        sType = "NULL";
        break;
      case EditUnitType.TYPE_UNIT_TEMP:
        sType = "TEMP";
        break;
      case EditUnitType.TYPE_UNIT_ELEVATION:
        sType = "ELEVATION";
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW:
        sType = "WATERFLOWRATE";
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW_POWER:
        sType = "WATERFLOW_POWER";
        break;
      case EditUnitType.TYPE_UNIT_FOULING:
        sType = "FOULING";
        break;
      case EditUnitType.TYPE_UNIT_WEIGHT:
        sType = "WEIGHT";
        break;
      case EditUnitType.TYPE_UNIT_POWER:
        sType = "POWER";
        break;
      case EditUnitType.TYPE_UNIT_EFFICIENCY:
        sType = "EFFICIENCY";
        break;
      case EditUnitType.TYPE_UNIT_PRESSURE:
        sType = "PRESSURE";
        break;
      case EditUnitType.TYPE_UNIT_LENGTH:
        sType = "LENGTH";
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOW:
        sType = "AIRFLOW";
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOWRATE:
        sType = "AIRFLOWRATE";
        break;
      case EditUnitType.TYPE_UNIT_ESP:
        sType = "ESP";
        break;
      case EditUnitType.TYPE_UNIT_HEATLOAD:
        sType = "HEATLOAD";
        break;
      case EditUnitType.TYPE_UNIT_VAPORPRESSURE:
        sType = "VAPORPRESSURE";
        break;
      case EditUnitType.TYPE_UNIT_CAPACITY:
        sType = "CAPACITY";
        break;
      case EditUnitType.TYPE_UNIT_MASSFLOW:
        sType = "MASSFLOW";
        break;
      case EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER:
        sType = "MOTOR_FAN_POWER";
        break;
      case EditUnitType.TYPE_UNIT_ENTHALPY:
        sType = "ENTHALPY";
        break;
      case EditUnitType.TYPE_UNIT_AREA:
        sType = "AREA";
        break;
      case EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP:
        sType = "WATER_PRESSURE_DROP";
        break;
      case EditUnitType.TYPE_UNIT_VOLUME:
        sType = "VOLUME";
        break;
      case EditUnitType.TYPE_UNIT_LENGTH_ALL:
        sType = "LENGTH_ALL";
        break;
      case EditUnitType.TYPE_UNIT_ABS_EUMIDITY:
        sType = "ABS_EUMIDITY";
        break;
      case EditUnitType.TYPE_UNIT_SPACE_VOLUME:
        sType = "SPACE_VOLUME";
        break;
    }

    target.setAttribute("unit-type", sType);
    //this.m_Type = type;

    if (type == EditUnitType.TYPE_UNIT_FOULING) {
      this.m_dAdjustPoint = 5;
    } else if (this.m_Type == EditUnitType.TYPE_UNIT_ESP) {
      this.m_dAdjustPoint = 5;
    } else {
      this.m_dAdjustPoint = 1;
    }

    this.SetUnitSubType(target, 0);

    // if (pCbUnit) {
    //     this.InitComboUnit(pCbUnit, type);
    // }
  }

  /**
   * 설정된 단위변환 값 넣기
   * @param target 값을 입력할 Html 객체
   * @param fValue  단위변환 기본값
   * @param updateFunction useState setFunction
   * @param selfChanged 기본 소수점 자리 사용 유무
   * */
  SetValue(
    target: any,
    fValue: number,
    updateFunction: Function | null = null,
    selfChanged: Boolean = false
  ) {
    // fValue값이 SI이므로 화면에 보여질때 IP단위로 변경.
    this.m_Type = this.TransStringtoEditUnitType(target.getAttribute("unit-type"));
    this.m_dSubType = this.getUnitSubType(this.m_Type);
    this.m_dAdjustPoint = this.getUnitSubTypeAdj(this.m_Type);

    this.m_fValue = fValue;

    if (fValue == INT_MIN || typeof fValue == "undefined") {
      target.value = fValue;
      target.setAttribute("org-value", fValue);
      return;
    }

    let sValue;
    let sOrgValue;
    let sAdjustPoint;

    if (this.m_dAdjustPoint <= 0) {
      sValue = Number(this.SetTrans(this.m_Type, this.m_fValue)).toFixed(0);
    } else if (this.m_fValue == INT_MIN && this.m_bDisplayNoValue == true) {
      sValue = this.m_sNoValue;
    } else {
      if (
        this.m_Type === EditUnitType.TYPE_UNIT_ESP &&
        (this.m_dSubType === 2 || this.m_dSubType === 3)
      ) {
        this.m_dAdjustPoint = 0;
      } else if (this.m_Type === EditUnitType.TYPE_UNIT_ESP) {
        this.m_dAdjustPoint = 4;
      } else if (this.m_Type === EditUnitType.TYPE_UNIT_AIRFLOWRATE) {
        if (this.m_dSubType === 1 || this.m_dSubType === 2) {
          this.m_dAdjustPoint = 0;
        } else {
          this.m_dAdjustPoint = 1;
        }
      } else if (this.m_Type === EditUnitType.TYPE_UNIT_VOLUME) {
        if (this.m_dSubType === 2) {
          this.m_dAdjustPoint = 4;
        } else {
          this.m_dAdjustPoint = 1;
        }
      }
      sOrgValue = this.SetTrans(this.m_Type, this.m_fValue);
      if (selfChanged) sValue = Number(sOrgValue);
      else sValue = Number(sOrgValue).toFixed(this.m_dAdjustPoint);

      // if (this.m_Type === EditUnitType.TYPE_UNIT_AIRFLOWRATE) {
      //   this.m_dAdjustPoint = 1;
      // }
    }

    target.setAttribute("org-value", sOrgValue);
    if (updateFunction) updateFunction(sValue);
    else target.value = sValue;
  }

  /**
   * 단위변환 기본값 가져오기
   * @param  target 값을 가져올 Html 객체
   * @param  dSubType  unit-type 요소가 태그에 있으면 자동으로 가져온다
   * @return 단위변환 기본값 Number
   * */
  GetValue(target: any, dSubType: number | string = -1) {
    this.m_Type = this.TransStringtoEditUnitType(target.getAttribute("unit-type"));
    this.m_dSubType = this.getUnitSubType(this.m_Type);
    this.m_dAdjustPoint = this.getUnitSubTypeAdj(this.m_Type);

    if (target == undefined) {
      console.log("GetValue target undefined");
    }

    if (target.value == INT_MIN) {
      return Number(target.value);
    } else if (target.getAttribute("org-value") == undefined) {
      this.m_fValue = Number(target.value); // origin code
    } else if (target.getAttribute("org-value") != target.value) {
      this.m_fValue = Number(target.value);
    } else {
      this.m_fValue = Number(target.getAttribute("org-value"));
    }

    if (this.m_dSubType) {
      this.m_fValue = this.GetTrans(this.m_Type, this.m_fValue);
    }

    return this.m_fValue;
  }

  /**
   * 설정된 단위변환 값으로 변환
   * @param type 단위 변환 타입(EditUnitType.xx)
   * @param fValue  단위변환 기본값
   * @param adjustPoint 소수점 자리(기본값=1)
   * @param isServer 서버용으로 사용할 경우 true
   * */
  SetTrans(type: any, theValue: number | string, adjustPoint = 1, isServer = false) {
    const fValue = Number(theValue);
    this.m_dSubType = this.getUnitSubType(type, isServer);
    let fRet = 0;
    switch (type) {
      case EditUnitType.TYPE_UNIT_TEMP:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.CentiToFahr(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_ELEVATION:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.meterToFeet(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else if (this.m_dSubType == 1) {
          fRet = CTransUnit.lpmTogpm(fValue);
        } else if (this.m_dSubType == 2) {
          fRet = CTransUnit.lpmTolph(fValue);
        } else {
          fRet = CTransUnit.lpmTocms(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW_POWER:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.lps_kWTogpm_tons(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_FOULING:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.sqmC_kWTohsqftF_BTU(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_WEIGHT:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.kgsTolbs(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_POWER:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.kWToTons(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_EFFICIENCY:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.COPToEER(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_PRESSURE:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.kPaToftWg(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_LENGTH:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.MiliToInch(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOW:
        if (this.m_dSubType === 0) {
          fRet = fValue;
        } else {
          fRet = CTransUnit.lpsToCFM(fValue);
        }
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOWRATE:
        if (this.m_dSubType === 0) fRet = CTransUnit.CMHToCMM(fValue);
        else if (this.m_dSubType === 1) fRet = CTransUnit.CMMToCFM(CTransUnit.CMHToCMM(fValue));
        else if (this.m_dSubType === 2) fRet = fValue;
        else if (this.m_dSubType == 3) fRet = CTransUnit.CMMToLPS(CTransUnit.CMHToCMM(fValue));
        else if (this.m_dSubType == 4) fRet = CTransUnit.CMMToLPH(CTransUnit.CMHToCMM(fValue));
        else fRet = CTransUnit.CMMToCMS(CTransUnit.CMHToCMM(fValue));
        break;
      case EditUnitType.TYPE_UNIT_ESP:
        if (this.m_dSubType === 0) fRet = fValue;
        else if (this.m_dSubType === 1) fRet = CTransUnit.kg_cm2Tolb_ft2(fValue);
        else if (this.m_dSubType === 2) fRet = CTransUnit.kg_cm2ToPa(fValue);
        else if (this.m_dSubType === 3) fRet = CTransUnit.PaTommAq(CTransUnit.kg_cm2ToPa(fValue));
        else if (this.m_dSubType === 4) fRet = CTransUnit.PaTobar(CTransUnit.kg_cm2ToPa(fValue));
        // if(this.m_dSubType === 5)
        else fRet = CTransUnit.kg_cm2ToinAq(fValue);
        break;
      case EditUnitType.TYPE_UNIT_HEATLOAD:
        if (this.m_dSubType === 0) fRet = fValue;
        else if (this.m_dSubType === 1) fRet = CTransUnit.kWToTons(fValue);
        else if (this.m_dSubType === 2) fRet = CTransUnit.kWTokcal_h(fValue);
        // if (this.m_dSubType === 3)
        else fRet = CTransUnit.kWTokBtu_h(fValue);
        break;
      case EditUnitType.TYPE_UNIT_VAPORPRESSURE:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.kg_cm2Tolb_ft2(fValue);
        break;
      case EditUnitType.TYPE_UNIT_CAPACITY:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.l_hrTogal_hr(fValue);
        break;
      case EditUnitType.TYPE_UNIT_MASSFLOW:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.kg_hrTolb_hr(fValue);
        break;
      case EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.kWTokBtu_h(fValue);
        break;
      case EditUnitType.TYPE_UNIT_ENTHALPY:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.kj_kgToBtu_lb(fValue);
        break;
      case EditUnitType.TYPE_UNIT_AREA:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.meter2ToFeet2(fValue);
        break;
      case EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP:
        if (this.m_dSubType === 0)
          // mAq
          fRet = fValue;
        else if (this.m_dSubType === 1)
          // kPa
          fRet = CTransUnit.mmAqToPa(fValue) / 1000.0;
        // inchAq
        else fRet = CTransUnit.mmAqToInAq(fValue);
        break;
      case EditUnitType.TYPE_UNIT_VOLUME:
        if (this.m_dSubType === 0) fRet = fValue;
        else if (this.m_dSubType === 1) fRet = CTransUnit.cm3Toin3(fValue);
        else if (this.m_dSubType === 2) fRet = CTransUnit.cm3Todm3(fValue);
        else if (this.m_dSubType == 3) fRet = CTransUnit.cm3Todm3(fValue);
        else fRet = CTransUnit.cm3Tom3(fValue);
        break;
      case EditUnitType.TYPE_UNIT_LENGTH_ALL:
        if (this.m_dSubType === 0)
          // mm
          fRet = fValue;
        else if (this.m_dSubType === 1)
          // mm.m
          fRet = fValue / 1000.0;
        else if (this.m_dSubType === 2)
          // mm.km
          fRet = fValue / 1000000.0;
        else if (this.m_dSubType === 3)
          // mm.inch
          fRet = CTransUnit.MiliToInch(fValue);
        // mm.ft
        else fRet = CTransUnit.meterToFeet(fValue / 1000.0);
        break;
      case EditUnitType.TYPE_UNIT_ABS_EUMIDITY:
        if (this.m_dSubType === 0)
          // kg/kg
          fRet = fValue;
        else if (this.m_dSubType === 1)
          // lb/lb
          fRet = CTransUnit.kg_kgTolb_lb(fValue);
        break;
      case EditUnitType.TYPE_UNIT_SPACE_VOLUME:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.meter3ToFeet3(fValue);
        break;
      default:
        fRet = fValue;
    }

    return fRet ? Number(fRet.toFixed(adjustPoint)) : 0;
  }

  /**
   * 단위변환 기본값 가져오기
   * @param type 단위 변환 타입(EditUnitType.xx)
   * @param fValue  기본값으로 변경할 값
   * @param isServer 서버용으로 사용할 경우 true
   * */
  GetTrans(type: number | string, fValue: number, isServer = false) {
    this.m_dSubType = this.getUnitSubType(type, isServer);

    let fRet = 0;
    switch (type) {
      case EditUnitType.TYPE_UNIT_TEMP:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.FahrToCenti(fValue);
        break;
      case EditUnitType.TYPE_UNIT_ELEVATION:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.FeetToMeter(fValue);
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW:
        if (this.m_dSubType === 0) fRet = fValue;
        else if (this.m_dSubType == 1) fRet = CTransUnit.gpmTolpm(fValue);
        else if (this.m_dSubType == 2) fRet = CTransUnit.lphTolpm(fValue);
        else fRet = CTransUnit.cmsTolpm(fValue);
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW_POWER:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.gpm_tonsTolps_kW(fValue);
        break;
      case EditUnitType.TYPE_UNIT_FOULING:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.sqfthF_BTUTosqmC_kW(fValue);
        break;
      case EditUnitType.TYPE_UNIT_WEIGHT:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.lbsTokgs(fValue);
        break;
      case EditUnitType.TYPE_UNIT_POWER:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.TonsTokW(fValue);
        break;
      case EditUnitType.TYPE_UNIT_EFFICIENCY:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.EERToCOP(fValue);
        break;
      case EditUnitType.TYPE_UNIT_PRESSURE:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.ftWgTokPa(fValue);
        break;
      case EditUnitType.TYPE_UNIT_LENGTH:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.InchToMili(fValue);
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOW:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.CFMTolps(fValue);
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOWRATE:
        if (this.m_dSubType === 0) fRet = CTransUnit.CMMToCMH(fValue);
        else if (this.m_dSubType === 1) fRet = CTransUnit.CMMToCMH(CTransUnit.CFMToCMM(fValue));
        else if (this.m_dSubType === 2) fRet = fValue; //CTransUnit.CMHToCMM(fValue);
        else if (this.m_dSubType == 3) fRet = CTransUnit.CMMToCMH(CTransUnit.LPSToCMM(fValue));
        else if (this.m_dSubType == 4) fRet = CTransUnit.CMMToCMH(CTransUnit.LPHToCMM(fValue));
        else fRet = CTransUnit.CMMToCMH(CTransUnit.CMSToCMM(fValue));
        break;
      case EditUnitType.TYPE_UNIT_ESP:
        if (this.m_dSubType === 0) fRet = fValue;
        else if (this.m_dSubType === 1) fRet = CTransUnit.lb_ft2Tokg_cm2(fValue);
        else if (this.m_dSubType === 2) fRet = CTransUnit.PaTokg_cm2(fValue);
        else if (this.m_dSubType === 3) fRet = CTransUnit.PaTokg_cm2(CTransUnit.mmAqToPa(fValue));
        else if (this.m_dSubType === 4) fRet = CTransUnit.PaTokg_cm2(CTransUnit.barToPa(fValue));
        else if (this.m_dSubType === 5) fRet = CTransUnit.inAqTokg_cm2(fValue);
        break;
      case EditUnitType.TYPE_UNIT_HEATLOAD:
        if (this.m_dSubType === 0) fRet = fValue;
        else if (this.m_dSubType === 1) fRet = CTransUnit.TonsTokW(fValue);
        else if (this.m_dSubType === 2) fRet = CTransUnit.kcal_hTokW(fValue);
        else if (this.m_dSubType === 3) fRet = CTransUnit.kBtu_hTokW(fValue);
        break;
      case EditUnitType.TYPE_UNIT_VAPORPRESSURE:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.lb_ft2Tokg_cm2(fValue);
        break;
      case EditUnitType.TYPE_UNIT_CAPACITY:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.gal_hrTol_hr(fValue);
        break;
      case EditUnitType.TYPE_UNIT_MASSFLOW:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.lb_hrTokg_hr(fValue);
        break;
      case EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.kBtu_hTokW(fValue);
        break;
      case EditUnitType.TYPE_UNIT_ENTHALPY:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.Btu_lbTokj_kg(fValue);
        break;
      case EditUnitType.TYPE_UNIT_AREA:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.Feet2ToMeter2(fValue);
        break;
      case EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP:
        if (this.m_dSubType === 0)
          // mAq
          fRet = fValue;
        else if (this.m_dSubType === 1)
          // kPa
          fRet = CTransUnit.PaTommAq(fValue) / 1000.0;
        // inchAq
        else fRet = CTransUnit.InAqTommAq(fValue);
        break;
      case EditUnitType.TYPE_UNIT_VOLUME:
        if (this.m_dSubType === 0) fRet = fValue;
        else if (this.m_dSubType === 1) fRet = CTransUnit.in3Tocm3(fValue);
        else if (this.m_dSubType === 2) fRet = CTransUnit.dm3Tocm3(fValue);
        else fRet = CTransUnit.m3Tocm3(fValue);
        break;
      case EditUnitType.TYPE_UNIT_LENGTH_ALL:
        if (this.m_dSubType === 0)
          // mm
          fRet = fValue;
        else if (this.m_dSubType === 1)
          // m.mm
          fRet = fValue * 1000.0;
        else if (this.m_dSubType === 2)
          // km.mm
          fRet = fValue * 1000000.0;
        else if (this.m_dSubType === 3)
          // inch.mm
          fRet = CTransUnit.InchToMili(fValue);
        // ft.mm
        else fRet = CTransUnit.FeetToMeter(fValue) * 1000.0;
        break;
      case EditUnitType.TYPE_UNIT_ABS_EUMIDITY:
        if (this.m_dSubType === 0)
          // kg/kg
          fRet = fValue;
        else if (this.m_dSubType === 1)
          // lb/lb
          fRet = CTransUnit.lb_lbTokg_kg(fValue);
        break;
      case EditUnitType.TYPE_UNIT_SPACE_VOLUME:
        if (this.m_dSubType === 0) fRet = fValue;
        else fRet = CTransUnit.Feet3ToMeter3(fValue);
        break;
      default:
        fRet = fValue;
    }

    return Number(fRet);
  }

  GetUnitStr(type: number | string, dSubType: number) {
    if (arguments.length < 2) {
      dSubType = -1;
    }

    let dOp = 0;
    let sOp = "";
    let dCbIndex = 0;
    let sUnit = "";

    if (dSubType >= 0) {
      dOp = dSubType;
    } else {
      // dOp = this.GetUnitOption(type);
    }

    switch (type) {
      case EditUnitType.TYPE_UNIT_TEMP:
        sOp = EditUnitType.TEXT_UNIT_TEMP;
        break;
      case EditUnitType.TYPE_UNIT_ELEVATION:
        sOp = EditUnitType.TEXT_UNIT_ELEVATION;
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW:
        sOp = EditUnitType.TEXT_UNIT_WATERFLOW;
        break;
      case EditUnitType.TYPE_UNIT_WATERFLOW_POWER:
        sOp = EditUnitType.TEXT_UNIT_WATERFLOW_POWER;
        break;
      case EditUnitType.TYPE_UNIT_FOULING:
        sOp = EditUnitType.TEXT_UNIT_FOULING;
        break;
      case EditUnitType.TYPE_UNIT_WEIGHT:
        sOp = EditUnitType.TEXT_UNIT_WEIGHT;
        break;
      case EditUnitType.TYPE_UNIT_POWER:
        sOp = EditUnitType.TEXT_UNIT_POWER;
        break;
      case EditUnitType.TYPE_UNIT_EFFICIENCY:
        sOp = EditUnitType.TEXT_UNIT_EFFICIENCY;
        break;
      case EditUnitType.TYPE_UNIT_PRESSURE:
        sOp = EditUnitType.TEXT_UNIT_PRESSURE;
        break;
      case EditUnitType.TYPE_UNIT_LENGTH:
        sOp = EditUnitType.TEXT_UNIT_LENGTH;
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOW:
        sOp = EditUnitType.TEXT_UNIT_AIRFLOW;
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOWRATE:
        sOp = EditUnitType.TEXT_UNIT_AIRFLOWRATE;
        break;
      case EditUnitType.TYPE_UNIT_ESP:
        sOp = EditUnitType.TEXT_UNIT_ESP;
        break;
      case EditUnitType.TYPE_UNIT_HEATLOAD:
        sOp = EditUnitType.TEXT_UNIT_HEATLOAD;
        break;
      case EditUnitType.TYPE_UNIT_VAPORPRESSURE:
        sOp = EditUnitType.TEXT_UNIT_VAPORPRESSURE;
        break;
      case EditUnitType.TYPE_UNIT_CAPACITY:
        sOp = EditUnitType.TEXT_UNIT_CAPACITY;
        break;
      case EditUnitType.TYPE_UNIT_MASSFLOW:
        sOp = EditUnitType.TEXT_UNIT_MASSFLOW;
        break;
      case EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER:
        sOp = EditUnitType.TEXT_UNIT_MOTOR_FAN_POWER;
        break;
      case EditUnitType.TYPE_UNIT_ENTHALPY:
        sOp = EditUnitType.TEXT_UNIT_ENTHALPY;
        break;
      case EditUnitType.TYPE_UNIT_AREA:
        sOp = EditUnitType.TEXT_UNIT_AREA;
        break;
      case EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP:
        sOp = EditUnitType.TEXT_UNIT_WATER_PRESSURE_DROP;
        break;
      case EditUnitType.TYPE_UNIT_VOLUME:
        sOp = EditUnitType.TEXT_UNIT_VOLUME;
        break;
      case EditUnitType.TYPE_UNIT_LENGTH_ALL:
        sOp = EditUnitType.TEXT_UNIT_LENGTH_ALL;
        break;
      case EditUnitType.TYPE_UNIT_ABS_EUMIDITY:
        sOp = EditUnitType.TEXT_UNIT_ABS_EUMIDITY;
        break;
      case EditUnitType.TYPE_UNIT_SPACE_VOLUME:
        sOp = EditUnitType.TEXT_UNIT_SPACE_VOLUME;
        break;
    }

    // let pArr = null;//theApp.GetDataMgr().GetAllUnit();
    // for (let i = 0; i < pArr.length; i++) {
    //     let pData = pArr[i];
    //     dCbIndex = Number(pData.m_sCOMBO_INDEX);
    //     if (pData.m_sCODE === sOp && dCbIndex === dOp) {
    //         sUnit = pData.m_sUNIT;
    //     }
    // }

    return sUnit;
  }

  SetDefaultSubType(type: any) {
    return this.getUnitSubType(type);
  }

  GetUnitOption(dType: any, bInit = false) {
    if (dType < 0 || dType >= EditUnitType.TYPE_UNIT_COUNT) {
      return 0;
    }

    if (bInit === false) {
      return null; //theApp.GetOptionData().GetUnit(dType);
    }

    //Default 값 Return;
    // let dUnit = new Array(EditUnitType.TYPE_UNIT_COUNT);
    // for ( let i = 0; i < EditUnitType.TYPE_UNIT_COUNT; i++) {
    //     dUnit[i] = 0;
    // }

    // dUnit[EditUnitType.TYPE_UNIT_ESP] = 2;

    // if (theApp.GetOptionData().GetUnit() !== SI) {
    //     dUnit[EditUnitType.TYPE_UNIT_TEMP] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_HEATLOAD] = 3;
    //     dUnit[EditUnitType.TYPE_UNIT_ESP] = 2;
    //     dUnit[EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER] = 0;
    //     dUnit[EditUnitType.TYPE_UNIT_AIRFLOWRATE] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_WATERFLOW] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_LENGTH] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_ENTHALPY] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_AREA] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_MASSFLOW] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP] = 2;
    //     dUnit[EditUnitType.TYPE_UNIT_ELEVATION] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_VOLUME] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_LENGTH_ALL] = 3;
    //     dUnit[EditUnitType.TYPE_UNIT_WEIGHT] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_SPACE_VOLUME] = 1;
    //     dUnit[EditUnitType.TYPE_UNIT_ABS_EUMIDITY] = 1;
    // }

    // return dUnit[dType];
  }

  // SetAdjustPoint(target:any,dAdjustPoint:number) {
  //     this.m_dAdjustPoint = dAdjustPoint;
  //     this.SetValue(target, this.m_fValue);
  // }

  getUnitSubType(unitType: any, isServer = false) {
    const unitObject = isServer ? this.getUnitData_useServer() : this.getUnitSetting();
    const latsVent_unit = unitObject[unitObject.unitClss];
    // 단위계 작업시 주의할 것 PC버전과 명칭이 다름.
    switch (unitType) {
      case EditUnitType.TYPE_UNIT_NULL:
        return 0;
      case EditUnitType.TYPE_UNIT_TEMP: // PC Ver 화면표시 : Temperature
        let temp = latsVent_unit.temperature; //$('#tempUnit').val();

        if (temp == "°C") {
          return 0;
        } else {
          return 1;
        }
      case EditUnitType.TYPE_UNIT_ELEVATION: // PC Ver 화면표시 : Length
        let lengthUnit = latsVent_unit.length; //$('#lengthUnit').val();
        if (lengthUnit == "m") {
          return 0;
        } else {
          return 1;
        }
      case EditUnitType.TYPE_UNIT_WATERFLOW: // PC Ver 화면표시 : Water Flow rate
        let waterFlow = latsVent_unit.waterFlowRate; //$('#waterflowUnit').val();
        if (waterFlow == "LPM") {
          return 0;
        } else if (waterFlow == "GPM") {
          return 1;
        } else if (waterFlow == "LPH") {
          return 2;
        } else {
          //CMS
          return 3;
        }
      case EditUnitType.TYPE_UNIT_WATERFLOW_POWER: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_FOULING: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_WEIGHT:
        let mass = latsVent_unit.weight;
        if (mass == "kg") {
          return 0;
        } else {
          // lbs
          return 1;
        }
      case EditUnitType.TYPE_UNIT_POWER: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_EFFICIENCY: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_PRESSURE: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_LENGTH: // PC Ver 화면표시 : Diameter
        let diameter = latsVent_unit.diameter; //$("#diameterUnit").val();
        if (diameter == "mm") {
          return 0;
        } else {
          // inch
          return 1;
        }
      case EditUnitType.TYPE_UNIT_AIRFLOW:
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_AIRFLOWRATE: // PC Ver 화면표시 : Air volume
        let air = latsVent_unit.airFlowRate; //$("#airUnit").val();
        if (air == "CMM") {
          return 0;
        } else if (air == "CFM") {
          return 1;
        } else if (air == "CMH") {
          return 2;
        } else if (air == "LPS") {
          return 3;
        } else if (air == "LPH") {
          return 4;
        } else {
          //if(air == 'CMS') {
          return 5;
        }
      case EditUnitType.TYPE_UNIT_ESP: // PC Ver 화면표시 : Pressure
        let pressure = latsVent_unit.pressureDropAir; //$('#pressureUnit').val();
        if (pressure == "kgf/cm²") {
          return 0;
        } else if (pressure == "lb/ft²") {
          return 1;
        } else if (pressure == "Pa") {
          return 2;
        } else if (pressure == "mmAq") {
          return 3;
        } else if (pressure == "bar") {
          return 4;
        } else {
          //inchAq
          return 5;
        }
      case EditUnitType.TYPE_UNIT_HEATLOAD: // PC Ver 화면표시 : Heat load, Capacity
        let capacity = latsVent_unit.heatLoad; //$('#capacityUnit').val();
        if (capacity == "kW") {
          return 0;
        } else if (capacity == "ton") {
          return 1;
        } else if (capacity == "kcal/h") {
          return 2;
        } else if (capacity == "kBtu/h") {
          return 3;
        } else {
          //
          return 0;
        }
      case EditUnitType.TYPE_UNIT_VAPORPRESSURE: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_CAPACITY: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        let capa = latsVent_unit.heatLoad; //$('#capacityUnit').val();
        break;
      case EditUnitType.TYPE_UNIT_MASSFLOW: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        //            let mass = $('#massUnit').val();
        //            if(mass == 'kg') {
        //                return 0;
        //            } else {    // lbs
        //                return 1;
        //            }
        break;
      case EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER: // PC Ver 화면표시 :
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_ENTHALPY: // PC Ver 화면표시 :
        //SI_IP에 따라 바뀐다.
        let unitClss_enthalpy = unitObject.unitClss; //$('#unitClss').val();
        if (unitClss_enthalpy == "SI") {
          return 0; // kj/kg
        } else {
          return 1; // btu/lb
        }

      case EditUnitType.TYPE_UNIT_AREA: // PC Ver 화면표시 :
        // let area = latsVent_unit.areaUnit;
        // if (area == "m²") {
        //   return 0;
        // } else {
        //   return 1;
        // }
        let area = latsVent_unit.length; //$('#lengthUnit').val();
        if (area == "m") {
          return 0;
        } else {
          return 1;
        }
      case EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP: // PC Ver 화면표시 : Water Pressure Drop
        let waterPressure = latsVent_unit.pressureDropWater; //$('#waterpressureUnit').val();
        if (waterPressure == "mmAq") {
          return 0;
        } else if (waterPressure == "kPa") {
          return 1;
        } else {
          // inchAq
          return 2;
        }
      case EditUnitType.TYPE_UNIT_VOLUME:
        let exchangervolume = latsVent_unit.exchangervolumeUnit; //$('#exchangervolumeUnit').val();
        if (exchangervolume == "cm³") {
          return 0;
        } else if (exchangervolume == "in³") {
          return 1;
        } else if (exchangervolume == "dm³") {
          return 2;
        }

      case EditUnitType.TYPE_UNIT_LENGTH_ALL:
        console.log("Setting화면과 연동하여 - 단위 만들것");
        break;
      case EditUnitType.TYPE_UNIT_ABS_EUMIDITY:
        //SI_IP에 따라 바뀐다.
        let unitClss_humidity = unitObject.unitClss;
        if (unitClss_humidity == "SI") {
          return 0; // kg/kg
        } else {
          return 1; // lb/lb
        }
      case EditUnitType.TYPE_UNIT_SPACE_VOLUME:
        //            let spaceVolume = $('#spaceVolume').val();
        //            if(spaceVolume == 'm³') {
        //              return 0;
        //            } else { // ft³
        //                return 1;
        //            }
        let spaceVolume = latsVent_unit.length; //$('#lengthUnit').val();
        if (spaceVolume == "m") {
          return 0;
        } else {
          return 1;
        }
    }
  }

  getUnitSubTypeAdj(unitType: any) {
    switch (unitType) {
      case EditUnitType.TYPE_UNIT_NULL:
        return 1;
      case EditUnitType.TYPE_UNIT_TEMP:
        return 1;
      case EditUnitType.TYPE_UNIT_ELEVATION:
        return 1;
      case EditUnitType.TYPE_UNIT_WATERFLOW:
        return 1;
      case EditUnitType.TYPE_UNIT_WATERFLOW_POWER:
        break;
      case EditUnitType.TYPE_UNIT_FOULING:
        break;
      case EditUnitType.TYPE_UNIT_WEIGHT:
        break;
      case EditUnitType.TYPE_UNIT_POWER:
        break;
      case EditUnitType.TYPE_UNIT_EFFICIENCY:
        break;
      case EditUnitType.TYPE_UNIT_PRESSURE:
        break;
      case EditUnitType.TYPE_UNIT_LENGTH:
        return 2;
      case EditUnitType.TYPE_UNIT_AIRFLOW:
        return 1;
      case EditUnitType.TYPE_UNIT_AIRFLOWRATE:
        return 1;
      case EditUnitType.TYPE_UNIT_ESP:
        return 4;
      case EditUnitType.TYPE_UNIT_HEATLOAD:
        return 1;
      case EditUnitType.TYPE_UNIT_VAPORPRESSURE:
        break;
      case EditUnitType.TYPE_UNIT_CAPACITY:
        return 1;
      case EditUnitType.TYPE_UNIT_MASSFLOW:
        return 2;
      case EditUnitType.TYPE_UNIT_MOTOR_FAN_POWER:
        break;
      case EditUnitType.TYPE_UNIT_ENTHALPY:
        return 1;
      case EditUnitType.TYPE_UNIT_AREA:
        return 0;
      case EditUnitType.TYPE_UNIT_WATER_PRESSURE_DROP:
        return 1;
      case EditUnitType.TYPE_UNIT_VOLUME:
        return 1;
      case EditUnitType.TYPE_UNIT_LENGTH_ALL:
        break;
      case EditUnitType.TYPE_UNIT_ABS_EUMIDITY:
        break;
      case EditUnitType.TYPE_UNIT_SPACE_VOLUME:
        return 1;
      default:
        return 0;
    }

    return 0;
  }

  getUnitSetting() {
    if (window) {
      const lats_unit = JSON.parse(localStorage.getItem(UnitStorageName) as string);
      return lats_unit;
    }
  }

  setUnitSetting(obj: any) {
    if (window) {
      localStorage.setItem(UnitStorageName, JSON.stringify(obj));
    }
  }

  getUnitData_useServer() {
    return this.unitData_useServer;
  }
  setUnitData_useServer(unitData: any) {
    this.unitData_useServer = unitData;
  }
}

export default EditUnit;
