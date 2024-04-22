class TransUnit {
  /*********************************************************
   * Function 		: WFactorToBtuFactor
   * Description	: K value 변환 (W/m^2C -> Btu/hft^2F)
   * Return type	:
   * Argument		: factor
   **********************************************************/
  WFactorToBtuFactor(factor: number) {
    if (isNaN(factor)) factor = 0;
    return factor * 0.17611;
  }

  /*********************************************************
   * Function 		: BtuFactorToWFactor
   * Description	: K value 변환 (Btu/hft^2F -> W/m^2C )
   * Return type	:
   * Argument		: factor
   **********************************************************/
  BtuFactorToWFactor(factor: number) {
    if (isNaN(factor)) factor = 0;
    return factor / 0.17611;
  }

  /*********************************************************
   * Function 		: CentiToFahr
   * Description	: 온도단위 변환 (°C -> °F)
   * Return type	:
   * Argument		: degree
   **********************************************************/
  CentiToFahr(degree: number) {
    if (isNaN(degree)) degree = 0;
    return degree * 1.8 + 32;
  }

  /*********************************************************
   * Function 		: FahrToCenti
   * Description	: 온도단위 변환 (°F -> °C)
   * Return type	:
   * Argument		: degree
   **********************************************************/
  FahrToCenti(degree: number) {
    if (isNaN(degree)) degree = 0;
    return (degree - 32) / 1.8;
  }

  /*********************************************************
   * Function 		: meterToFeet
   * Description	: 길이단위 변환 (m -> ft)
   * Return type	:
   * Argument		: length
   **********************************************************/
  meterToFeet(length: number) {
    if (isNaN(length)) length = 0;
    return length * 3.28084;
  }

  /*********************************************************
   * Function 		: MiliToInch
   * Description	: 길이단위 변환 (mm -> inch)
   * Return type	:
   * Argument		: length
   **********************************************************/
  MiliToInch(length: number) {
    if (isNaN(length)) length = 0;
    return length * 0.03937008;
  }

  /*********************************************************
   * Function 		: MiliToInch
   * Description	: 길이단위 변환 (mm -> inch)
   * Return type	:
   * Argument		: length
   **********************************************************/
  InchToMili(length: number) {
    if (isNaN(length)) length = 0;
    return length * 25.4;
  }

  cm3Toin3(length: number) {
    if (isNaN(length)) length = 0;
    return length * 0.061023749953011904512;
  }

  in3Tocm3(length: number) {
    if (isNaN(length)) length = 0;
    return length / 0.061023749953011904512;
  }

  m3Tocm3(length: number) {
    if (isNaN(length)) length = 0;
    return length * 1000000;
  }

  cm3Tom3(length: number) {
    if (isNaN(length)) length = 0;
    return length * 0.000001;
  }

  cm3Todm3(length: number) {
    if (isNaN(length)) length = 0;
    return length * 0.001;
  }

  dm3Tocm3(length: number) {
    if (isNaN(length)) length = 0;
    return length * 1000;
  }

  /*********************************************************
   * Function 		: FeetToMeter
   * Description	: 길이단위 변환 (ft -> m )
   * Return type	:
   * Argument		: length
   **********************************************************/
  FeetToMeter(length: number) {
    if (isNaN(length)) length = 0;
    return length / 3.28084;
  }

  /*********************************************************
   * Function 		: meter2ToFeet2
   * Description	: 밀도단위 변환 (m^2 -> ft^2)
   * Return type	:
   * Argument		: area
   **********************************************************/
  meter2ToFeet2(area: number) {
    if (isNaN(area)) area = 0;
    return area * 10.76391;
  }

  /*********************************************************
   * Function 		: Feet2ToMeter2
   * Description	: 밀도단위 변환 (ft^2 -> m^2 )
   * Return type	:
   * Argument		: density
   **********************************************************/
  Feet2ToMeter2(area: number) {
    if (isNaN(area)) area = 0;
    return area / 10.76391;
  }

  /*********************************************************
   * Function 		: meter3ToFeet3
   * Description	: 체적단위 변환 (m^3 -> ft^3)
   * Return type	:
   * Argument		: volume
   **********************************************************/
  meter3ToFeet3(volume: number) {
    if (isNaN(volume)) volume = 0;
    return volume * 35.3147;
  }

  /*********************************************************
   * Function 		: Feet3ToMeter3
   * Description	: 밀도단위 변환 (ft^3 -> m^3 )
   * Return type	:
   * Argument		: volume
   **********************************************************/
  Feet3ToMeter3(volume: number) {
    if (isNaN(volume)) volume = 0;
    return volume / 35.3147;
  }

  /*********************************************************
   * Function 		: WattToBtu
   * Description	: Power 단위 변환 (W -> Btu/h)
   * Return type	:
   * Argument		: power
   **********************************************************/
  WattToBtu(power: number) {
    if (isNaN(power)) power = 0;
    return power * 3.41214;
  }

  /*********************************************************
   * Function 		: BtuToWatt
   * Description	: Power 단위 변환 (Btu/h -> W)
   * Return type	:
   * Argument		: power
   **********************************************************/
  BtuToWatt(power: number) {
    if (isNaN(power)) power = 0;
    return power / 3.41214;
  }

  /*********************************************************
   * Function 		: SI_sclToFPS_scl
   * Description	: SCL 단위 변환 (W/m^2 -> Btu/hft^2)
   * Return type	:
   * Argument		: power
   **********************************************************/
  SI_sclToFPS_scl(fSCL: number) {
    if (isNaN(fSCL)) fSCL = 0;
    return fSCL * 0.316998;
  }

  /*********************************************************
   * Function 		: FPS_sclToSI_scl
   * Description	: SCL 단위 변환 (Btu/hft^2 -> W/m^2 )
   * Return type	:
   * Argument		: power
   **********************************************************/
  FPS_sclToSI_scl(fSCL: number) {
    if (isNaN(fSCL)) fSCL = 0;
    return fSCL / 0.316998;
  }

  AirflowUnitChange(
    fAirflow: number,
    nOldUnit: number,
    nNewUnit: number //tairflowUnit nOldUnit, tairflowUnit nNewUnit)
  ) {
    /*	0: l/sec,			1: CFM			2: CMH			3: CMM		
			4: l/sec/person		5: CFM/person	6: CMH/person	7: CMM/person
			8: Air change rate	9: %
		*/

    /*  1 l/sec = 2.1189 CFM = 3.6 CMH = 0.06 CMM  */
    if (nOldUnit === 0 && nNewUnit === 1) {
      // l/sec -> CFM
      // 2.1189 to 2.119 requested by 조은준. 2010.02.26
      fAirflow *= 2.119;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 0 && nNewUnit === 2) {
      // l/sec -> CMH
      fAirflow *= 3.6;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 0 && nNewUnit === 3) {
      // l/sec -> CMM
      fAirflow *= 0.06;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 1 && nNewUnit === 0) {
      /*  1 CFM = 0.471943 l/sec = 1.698995 CMH = 0.028317 CMM  */
      // CFM -> l/sec
      fAirflow *= 0.471943;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 1 && nNewUnit === 2) {
      // CFM -> CMH
      fAirflow *= 1.698995;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 1 && nNewUnit === 3) {
      // CFM -> CMM
      fAirflow *= 0.028317;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 2 && nNewUnit === 0) {
      /*  1 CMH = 0.27778 l/s = 0.58858 CFM = 0.01667 CMM  */
      // CMH -> l/sec
      fAirflow *= 0.27778;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 2 && nNewUnit === 1) {
      // CMH -> CFM
      fAirflow *= 0.58858;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 2 && nNewUnit === 3) {
      // CMH -> CMM
      fAirflow *= 1.0 / 60.0;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 3 && nNewUnit === 0) {
      /*  1 CMM = 16.66667 l/s = 35.315 CFM = 60 CMH  */
      // CMM -> l/sec
      fAirflow *= 1000.0 * (1.0 / 60.0);
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 3 && nNewUnit === 1) {
      // CMM -> CFM
      fAirflow *= 35.315;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 3 && nNewUnit === 2) {
      // CMM -> CMH
      fAirflow *= 60;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 4 && nNewUnit === 5) {
      // l/sec/person -> CFM/person
      fAirflow *= 2.1189;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 4 && nNewUnit === 6) {
      // l/sec/person -> CMH/person
      fAirflow *= 3.6;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 4 && nNewUnit === 7) {
      // l/sec/person -> CMM/person
      fAirflow *= 0.06;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 5 && nNewUnit === 4) {
      // CFM/person -> l/sec/person
      fAirflow *= 0.471943;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 5 && nNewUnit === 6) {
      // CFM/person -> CMH/person
      fAirflow *= 1.698995;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 5 && nNewUnit === 7) {
      // CFM/person -> CMM/person
      fAirflow *= 0.028317;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 6 && nNewUnit === 4) {
      // CMH/person -> l/sec/person
      fAirflow *= 0.27778;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 6 && nNewUnit === 5) {
      // CMH/person -> CFM/person
      fAirflow *= 0.58858;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 6 && nNewUnit === 7) {
      // CMH/person -> CMM/person
      fAirflow *= 1.0 / 60.0;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 7 && nNewUnit === 4) {
      // CMM/person -> l/sec/person
      fAirflow *= 1000.0 * (1.0 / 60.0);
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 7 && nNewUnit === 5) {
      // CMM/person -> CFM/person
      fAirflow *= 35.315;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else if (nOldUnit === 7 && nNewUnit === 6) {
      // CMM/person -> CMH/person
      fAirflow *= 60;
      if (isNaN(fAirflow)) fAirflow = 0;
      return fAirflow;
    } else {
      fAirflow = 0;
      return fAirflow;
    }
  }

  kj_kgToBtu_lb(enthalpy: number) {
    enthalpy = enthalpy * 0.429923;
    if (isNaN(enthalpy)) enthalpy = 0;
    return enthalpy;
  }

  Btu_lbTokj_kg(enthalpy: number) {
    enthalpy = enthalpy * 2.325999;
    if (isNaN(enthalpy)) enthalpy = 0;
    return enthalpy;
  }

  kj_kgTokBtu_lb(enthalpy: number) {
    enthalpy = enthalpy * 0.000429923;
    if (isNaN(enthalpy)) enthalpy = 0;
    return enthalpy;
  }

  kBtu_lbTokj_kg(enthalpy: number) {
    enthalpy = enthalpy * 2325.99899330764;
    if (isNaN(enthalpy)) enthalpy = 0;
    return enthalpy;
  }
  m3_kgToft3_lb(spVol: number) {
    spVol = spVol * 16.0185;
    if (isNaN(spVol)) spVol = 0;
    return spVol;
  }

  ft3_lbTom3_kg(spVol: number) {
    spVol = spVol * 0.062428;
    if (isNaN(spVol)) spVol = 0;
    return spVol;
  }

  kg_m3Tolb_ft3(density: number) {
    density = density * 0.062428;
    if (isNaN(density)) density = 0;
    return density;
  }

  lb_ft3Tokg_m3(density: number) {
    density = density * 16.018453;
    if (isNaN(density)) density = 0;
    return density;
  }

  paTopsi(pressure: number) {
    pressure = pressure * 0.000145;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  psiTopa(pressure: number) {
    pressure = pressure * 6894.744825;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  TonsTokW(capa: number) {
    capa = capa * 3.51685452531256;
    if (isNaN(capa)) capa = 0;
    return capa;
  }

  kWTokBtu_h(capa: number) {
    capa = capa * 3.41214;
    if (isNaN(capa)) capa = 0;
    return capa;
    //return Math.floor(capa*10)/10;  /**LAW WEB 전용 kw->kBtu/h 소스점 제어 때문에 버림해준다.**/
  }

  kBtu_hTokW(capa: number) {
    capa = capa * 0.293071210442713;
    if (isNaN(capa)) capa = 0;
    return capa;
  }

  kWToTons(capa: number) {
    capa = capa * 0.284345000000000036054946;
    if (isNaN(capa)) capa = 0;
    return capa;
  }

  gpmTolps(flow: number) {
    //flow = flow * 0.0630883;
    flow = flow * 0.063088298382416;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  lpsTogpm(flow: number) {
    //flow = flow * 13.19854;
    flow = flow * 15.8508;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  gpmTolpm(flow: number) {
    //flow = flow * 0.0630883;
    flow = flow * 3.785298;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  lpmTogpm(flow: number) {
    //flow = flow * 13.19854;
    flow = flow * 0.26418;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  lphTolpm(flow: number) {
    flow = flow * (1.0 / 60.0);
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  lpmTolph(flow: number) {
    flow = flow * 60.0;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  cmsTolpm(flow: number) {
    flow = flow * 60000.0;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  lpmTocms(flow: number) {
    flow = (flow * (1.0 / 60.0)) / 1000.0;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  lpsToCFM(flow: number) {
    //flow = flow * 13.19854;
    flow = flow * 2.1189;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CFMTolps(flow: number) {
    //flow = flow * 13.19854;
    flow = flow * 0.471942989286894;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  sqfthF_BTUTosqmC_kW(fouling: number) {
    fouling = fouling * 176.11000817326547932125089529925;
    if (isNaN(fouling)) fouling = 0;
    return fouling;
  }

  sqmC_kWTohsqftF_BTU(fouling: number) {
    fouling = fouling * 0.0056782692635284765203565953097496;
    if (isNaN(fouling)) fouling = 0;
    return fouling;
  }

  kgsTolbs(weight: number) {
    weight = weight * 2.204623;
    if (isNaN(weight)) weight = 0;
    return weight;
  }

  lbsTokgs(weight: number) {
    weight = weight * 0.4535924;
    if (isNaN(weight)) weight = 0;
    return weight;
  }

  kPaToftWg(pressure: number) {
    pressure = pressure * 0.334553;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  ftWgTokPa(pressure: number) {
    pressure = pressure * 2.98906301841562;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  lps_kWTogpm_tons(volflow: number) {
    //volflow = volflow * 0.017938842203548079794645191409896;
    volflow = volflow * 55.744957709824326048;
    //volflow = volflow * 4.5069906705754898587648535755211;
    if (isNaN(volflow)) volflow = 0;
    return volflow;
  }

  gpm_tonsTolps_kW(volflow: number) {
    //volflow = volflow * 55.744957709824326048;
    volflow = volflow * 0.017938842203548079794645191409896;
    //volflow = volflow * 0.22187753938090839806388766914486;
    if (isNaN(volflow)) volflow = 0;
    return volflow;
  }

  COPToEER(efficiency: number) {
    efficiency = efficiency * 3.41214;
    if (isNaN(efficiency)) efficiency = 0;
    return efficiency;
  }

  EERToCOP(efficiency: number) {
    efficiency = efficiency * 0.293071210442713;
    if (isNaN(efficiency)) efficiency = 0;
    return efficiency;
  }

  kcal_kgTokJ_kg(enthalpy: number) {
    enthalpy = enthalpy * 4.186798;
    if (isNaN(enthalpy)) enthalpy = 0;
    return enthalpy;
  }

  kJ_kgTokcal_kg(enthalpy: number) {
    enthalpy = enthalpy * 0.238846;
    if (isNaN(enthalpy)) enthalpy = 0;
    return enthalpy;
  }

  kcal_hTokW(power: number) {
    power = power / 859.845227859;
    if (isNaN(power)) power = 0;
    return power;
  }

  kWTokcal_h(power: number) {
    power = power * 859.845227859;
    if (isNaN(power)) power = 0;
    return power;
  }

  kg_cm2Tolb_ft2(pressure: number) {
    pressure = pressure * 2048.161;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  lb_ft2Tokg_cm2(pressure: number) {
    pressure = pressure * 0.0004882428;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  kg_cm2ToPa(pressure: number) {
    pressure = pressure * 98066.1358019849;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  PaTokg_cm2(pressure: number) {
    pressure = pressure * 0.0000101972;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  lb_ft2ToPa(pressure: number) {
    pressure = pressure * 47.8803374606184;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  PaTolb_ft2(pressure: number) {
    pressure = pressure * 0.02088543;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  mmAqToPa(pressure: number) {
    pressure = pressure * 9.80661358019849;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  PaTommAq(pressure: number) {
    pressure = pressure * 0.1019716;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  barToPa(pressure: number) {
    pressure = pressure * 100000;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  PaTobar(pressure: number) {
    pressure = pressure * 1e-5;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  kg_cm2ToinAq(pressure: number) {
    pressure = pressure * 393.699250774722;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  inAqTokg_cm2(pressure: number) {
    pressure = pressure * 2.54000991374049e-3;
    if (isNaN(pressure)) pressure = 0;
    return pressure;
  }

  CMMToCFM(flow: number) {
    flow = flow * 35.31668;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CFMToCMM(flow: number) {
    flow = flow * 0.02831524;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CMMToCMH(flow: number) {
    flow = flow * 60.0;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CMHToCMM(flow: number) {
    flow = flow * (1.0 / 60.0);
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CMHToCFM(flow: number) {
    flow = flow * 0.5886111;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CFMToCMH(flow: number) {
    flow = flow * 1.698915;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  LPSToCMM(flow: number) {
    flow = flow * 0.06;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CMMToLPS(flow: number) {
    flow = flow * 1000.0 * (1.0 / 60.0);
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CMMToLPH(flow: number) {
    flow = flow * 60000.0;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CMMToCMS(flow: number) {
    flow = flow * (1.0 / 60.0);
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  LPHToCMM(flow: number) {
    flow = (flow * (1.0 / 60.0)) / 1000.0;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  CMSToCMM(flow: number) {
    flow = flow * 60.0;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  l_hrTogal_hr(flow: number) {
    flow = flow * 0.264180555555556;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  gal_hrTol_hr(flow: number) {
    flow = flow * 3.78528994269492;
    if (isNaN(flow)) flow = 0;
    return flow;
  }

  kg_hrTolb_hr(mass: number) {
    mass = mass * 2.20462222222222;
    if (isNaN(mass)) mass = 0;
    return mass;
  }

  lb_hrTokg_hr(mass: number) {
    mass = mass * 0.453592452221595;
    if (isNaN(mass)) mass = 0;
    return mass;
  }

  InAqTommAq(InAq: number) {
    return InAq * 25.4;
  }

  mmAqToInAq(mmAq: number) {
    return mmAq / 25.4;
  }

  btu_lbTokj_kg(dbValue: number) {
    dbValue = dbValue * 2.326;
    if (isNaN(dbValue)) dbValue = 0;
    return dbValue;
  }

  kj_kgTobtu_lb(dbValue: number) {
    dbValue = dbValue * 0.4299226;
    if (isNaN(dbValue)) dbValue = 0;
    return dbValue;
  }

  g_kgTolb_lb(dbValue: number) {
    dbValue = dbValue / 1000.0;
    if (isNaN(dbValue)) dbValue = 0;
    return dbValue;
  }

  lb_lbTog_kg(dbValue: number) {
    dbValue = dbValue * 1000.0;
    if (isNaN(dbValue)) dbValue = 0;
    return dbValue;
  }

  kg_kgTolb_lb(dbValue: number) {
    dbValue = dbValue;
    if (isNaN(dbValue)) dbValue = 0;
    return dbValue;
  }

  lb_lbTokg_kg(dbValue: number) {
    dbValue = dbValue;
    if (isNaN(dbValue)) dbValue = 0;
    return dbValue;
  }
  grain_lbTog_kg(humidity: number) {
    humidity = humidity / 7;
    if (isNaN(humidity)) humidity = 0;
    return humidity;
  }

  g_kgTograin_lb(humidity: number) {
    humidity = humidity * 7;
    if (isNaN(humidity)) humidity = 0;
    return humidity;
  }

  Btu_ft2hFTokW_m2C(value: number) {
    if (isNaN(value)) value = 0;
    return value * 0.005675;
  }

  kW_m2CToBtu_ft2hF(value: number) {
    if (isNaN(value)) value = 0;
    return value / 0.005675;
  }

  FToC(value: number) {
    if (isNaN(value)) value = 0;
    return value / (9 / 5);
  }

  CToF(value: number) {
    if (isNaN(value)) value = 0;
    return value * (9 / 5);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TransUnit();
