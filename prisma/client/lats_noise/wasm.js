
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.T_NOISE_FUNCNAMEScalarFieldEnum = {
  ID: 'ID',
  NAME: 'NAME',
  SELECTABLE_STEP: 'SELECTABLE_STEP'
};

exports.Prisma.T_NOISE_FUNCSTEPScalarFieldEnum = {
  ID: 'ID',
  STEP: 'STEP'
};

exports.Prisma.T_NOISE_MODELSPECScalarFieldEnum = {
  ID: 'ID',
  PRODUCT_TYPE: 'PRODUCT_TYPE',
  FUNCTION_NAME: 'FUNCTION_NAME',
  FUNCTION_STEP: 'FUNCTION_STEP',
  MODEL_NAME: 'MODEL_NAME',
  DATA_TYPE: 'DATA_TYPE',
  NOISE_63HZ: 'NOISE_63HZ',
  NOISE_125HZ: 'NOISE_125HZ',
  NOISE_250HZ: 'NOISE_250HZ',
  NOISE_500HZ: 'NOISE_500HZ',
  NOISE_1KHZ: 'NOISE_1KHZ',
  NOISE_2KHZ: 'NOISE_2KHZ',
  NOISE_4KHZ: 'NOISE_4KHZ',
  NOISE_8KHZ: 'NOISE_8KHZ',
  NOISE_OVERALL: 'NOISE_OVERALL',
  REDUCED_CAPA_RATIO: 'REDUCED_CAPA_RATIO',
  DISCHARGE: 'DISCHARGE'
};

exports.Prisma.T_NOISE_PRODUCTTYPEScalarFieldEnum = {
  ID: 'ID',
  PRODUCT_TYPE: 'PRODUCT_TYPE',
  VISIBLE: 'VISIBLE',
  FUNCNAME_LIST: 'FUNCNAME_LIST'
};

exports.Prisma.T_NOISE_ISC_SPECScalarFieldEnum = {
  ID: 'ID',
  MODEL: 'MODEL',
  TYPE_COOLED: 'TYPE_COOLED',
  TYPE_REF: 'TYPE_REF',
  TYPE_EVAPORATOR: 'TYPE_EVAPORATOR',
  TYPE_RUNNING: 'TYPE_RUNNING',
  POWER_SUPPLY: 'POWER_SUPPLY',
  GENERATION: 'GENERATION',
  NOMINAL_TON: 'NOMINAL_TON',
  COOLING_CAPACITY: 'COOLING_CAPACITY',
  COOLING_CAPACITY_RT: 'COOLING_CAPACITY_RT',
  HEATING_CAPACITY: 'HEATING_CAPACITY',
  HEATING_CAPACITY_RT: 'HEATING_CAPACITY_RT',
  COOLING_INPUT_POWER: 'COOLING_INPUT_POWER',
  HEATING_INPUT_POWER: 'HEATING_INPUT_POWER',
  ESEER: 'ESEER',
  IPLV: 'IPLV',
  IPLV100: 'IPLV100',
  IPLV075: 'IPLV075',
  IPLV050: 'IPLV050',
  IPLV025: 'IPLV025',
  SEER: 'SEER',
  SCOP: 'SCOP',
  DESCRIPTION: 'DESCRIPTION',
  LOCATION: 'LOCATION',
  OBSOLETE: 'OBSOLETE',
  SOUND_PRESSURE: 'SOUND_PRESSURE',
  SOUND_PRESSURE_HEATING: 'SOUND_PRESSURE_HEATING',
  COOLING_SOUND_POWER: 'COOLING_SOUND_POWER',
  HEATING_SOUND_POWER: 'HEATING_SOUND_POWER',
  EVAPORATOR_EA: 'EVAPORATOR_EA',
  COOLING_HEAD_LOSS: 'COOLING_HEAD_LOSS',
  HEATING_HEAD_LOSS: 'HEATING_HEAD_LOSS',
  COOLING_WATER_FLOW: 'COOLING_WATER_FLOW',
  HEATING_WATER_FLOW: 'HEATING_WATER_FLOW',
  WEIGHT: 'WEIGHT',
  WEIGHT_SHIPPING: 'WEIGHT_SHIPPING',
  DIMENSION_W: 'DIMENSION_W',
  DIMENSION_H: 'DIMENSION_H',
  DIMENSION_D: 'DIMENSION_D',
  FOOTPRINT: 'FOOTPRINT',
  COMP_TYPE: 'COMP_TYPE',
  COMP_OILTYPE: 'COMP_OILTYPE',
  COMP_OILCHARGE: 'COMP_OILCHARGE',
  COMP_HEATER: 'COMP_HEATER',
  REFRIGERANT: 'REFRIGERANT',
  REFRIGERANT_CHARGE: 'REFRIGERANT_CHARGE',
  COND_TYPE: 'COND_TYPE',
  COND_MAX_PRESSURE: 'COND_MAX_PRESSURE',
  DIAMETER: 'DIAMETER',
  FAN_TYPE: 'FAN_TYPE',
  FAN_VANE: 'FAN_VANE',
  FAN_FLOW_RATE: 'FAN_FLOW_RATE',
  FAN_MOTOR_POWER: 'FAN_MOTOR_POWER',
  MAX_CURRENT: 'MAX_CURRENT',
  POWER_LINE: 'POWER_LINE',
  REMOTE_CONTROL: 'REMOTE_CONTROL',
  BREAKER: 'BREAKER',
  IMAGE_DIMENSIONS: 'IMAGE_DIMENSIONS',
  IMAGE_INSTALLATION: 'IMAGE_INSTALLATION',
  IMAGE_WIRING_M: 'IMAGE_WIRING_M',
  IMAGE_WIRING_S1: 'IMAGE_WIRING_S1',
  IMAGE_WIRING_S2: 'IMAGE_WIRING_S2',
  MCA: 'MCA',
  MSC: 'MSC',
  RLA: 'RLA',
  MIN_VOLTAGE: 'MIN_VOLTAGE',
  MAX_VOLTAGE: 'MAX_VOLTAGE',
  VOLTAGE: 'VOLTAGE',
  PHASE: 'PHASE',
  HZ: 'HZ',
  CIRCUIT: 'CIRCUIT'
};

exports.Prisma.V_NOISE_MULTIV_IScalarFieldEnum = {
  BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
  T_HEAT_W: 'T_HEAT_W',
  T_COOL_W: 'T_COOL_W'
};

exports.Prisma.V_NOISE_RACScalarFieldEnum = {
  BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
  T_HEAT_W: 'T_HEAT_W',
  T_COOL_W: 'T_COOL_W'
};

exports.Prisma.V_NOISE_MULTIV_SScalarFieldEnum = {
  BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
  T_HEAT_W: 'T_HEAT_W',
  T_COOL_W: 'T_COOL_W'
};

exports.Prisma.V_NOISE_SCACScalarFieldEnum = {
  BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
  T_HEAT_W: 'T_HEAT_W',
  T_COOL_W: 'T_COOL_W'
};

exports.Prisma.V_NOISE_MULTIV_5ScalarFieldEnum = {
  BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
  T_HEAT_W: 'T_HEAT_W',
  T_COOL_W: 'T_COOL_W'
};

exports.Prisma.V_NOISE_MULTIScalarFieldEnum = {
  BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
  T_HEAT_W: 'T_HEAT_W',
  T_COOL_W: 'T_COOL_W'
};

exports.Prisma.V_NOISE_AWHPScalarFieldEnum = {
  BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
  T_HEAT_W: 'T_HEAT_W',
  T_COOL_W: 'T_COOL_W'
};

exports.Prisma.V_NOISE_ISCScalarFieldEnum = {
  MODEL: 'MODEL',
  COOLING_CAPACITY: 'COOLING_CAPACITY',
  HEATING_CAPACITY: 'HEATING_CAPACITY'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  T_NOISE_FUNCNAME: 'T_NOISE_FUNCNAME',
  T_NOISE_FUNCSTEP: 'T_NOISE_FUNCSTEP',
  T_NOISE_MODELSPEC: 'T_NOISE_MODELSPEC',
  T_NOISE_PRODUCTTYPE: 'T_NOISE_PRODUCTTYPE',
  T_NOISE_ISC_SPEC: 'T_NOISE_ISC_SPEC',
  V_NOISE_MULTIV_I: 'V_NOISE_MULTIV_I',
  V_NOISE_RAC: 'V_NOISE_RAC',
  V_NOISE_MULTIV_S: 'V_NOISE_MULTIV_S',
  V_NOISE_SCAC: 'V_NOISE_SCAC',
  V_NOISE_MULTIV_5: 'V_NOISE_MULTIV_5',
  V_NOISE_MULTI: 'V_NOISE_MULTI',
  V_NOISE_AWHP: 'V_NOISE_AWHP',
  V_NOISE_ISC: 'V_NOISE_ISC'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
