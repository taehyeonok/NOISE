
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\GitHub\\LATS_NOISE\\prisma\\client\\lats_noise",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "linux-musl-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [
      "views"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.12.1",
  "engineVersion": "473ed3124229e22d881cb7addf559799debae1ab",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_NOISE",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"./client/lats_noise\"\n  previewFeatures = [\"views\"]\n  binaryTargets   = [\"native\", \"linux-musl-openssl-3.0.x\", \"debian-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider     = \"mysql\"\n  url          = env(\"DATABASE_URL_NOISE\")\n  relationMode = \"prisma\"\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_FUNCNAME {\n  ID              Int     @id\n  NAME            String  @db.Text\n  SELECTABLE_STEP String? @db.Text\n\n  @@index([ID], map: \"ID\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_FUNCSTEP {\n  ID   Int    @id\n  STEP String @db.Text\n\n  @@index([ID], map: \"ID\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_MODELSPEC {\n  ID                 Int      @id\n  PRODUCT_TYPE       String   @db.Text\n  FUNCTION_NAME      String   @db.Text\n  FUNCTION_STEP      String?  @db.Text\n  MODEL_NAME         String   @db.Text\n  DATA_TYPE          String   @db.Text\n  NOISE_63HZ         Decimal? @db.Decimal(16, 13)\n  NOISE_125HZ        Decimal? @db.Decimal(16, 13)\n  NOISE_250HZ        Decimal? @db.Decimal(16, 13)\n  NOISE_500HZ        Decimal? @db.Decimal(16, 13)\n  NOISE_1KHZ         Decimal? @db.Decimal(16, 13)\n  NOISE_2KHZ         Decimal? @db.Decimal(16, 13)\n  NOISE_4KHZ         Decimal? @db.Decimal(16, 13)\n  NOISE_8KHZ         Decimal? @db.Decimal(16, 13)\n  NOISE_OVERALL      Decimal? @db.Decimal(16, 13)\n  REDUCED_CAPA_RATIO Decimal? @db.Decimal(4, 1)\n  DISCHARGE          String?  @db.Text\n\n  @@index([ID], map: \"ID\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_PRODUCTTYPE {\n  ID            Int\n  PRODUCT_TYPE  String\n  VISIBLE       Int\n  FUNCNAME_LIST String? @db.Text\n\n  @@id([PRODUCT_TYPE])\n  @@index([PRODUCT_TYPE(length: 1024)], map: \"PRODUCT_TYPE\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_ISC_SPEC {\n  ID                     Int      @id\n  MODEL                  String?\n  TYPE_COOLED            Int?\n  TYPE_REF               Int?\n  TYPE_EVAPORATOR        Int?\n  TYPE_RUNNING           Int?\n  POWER_SUPPLY           Int?\n  GENERATION             Int?\n  NOMINAL_TON            Int?\n  COOLING_CAPACITY       Int?\n  COOLING_CAPACITY_RT    Decimal? @db.Decimal(20, 6)\n  HEATING_CAPACITY       Decimal? @db.Decimal(20, 6)\n  HEATING_CAPACITY_RT    Decimal? @db.Decimal(20, 6)\n  COOLING_INPUT_POWER    Decimal? @db.Decimal(20, 6)\n  HEATING_INPUT_POWER    Decimal? @db.Decimal(20, 6)\n  ESEER                  Decimal? @db.Decimal(20, 6)\n  IPLV                   Decimal? @db.Decimal(20, 6)\n  IPLV100                Decimal? @db.Decimal(20, 6)\n  IPLV075                Decimal? @db.Decimal(20, 6)\n  IPLV050                Decimal? @db.Decimal(20, 6)\n  IPLV025                Decimal? @db.Decimal(20, 6)\n  SEER                   Decimal? @db.Decimal(20, 6)\n  SCOP                   Decimal? @db.Decimal(20, 6)\n  DESCRIPTION            String?  @db.Text\n  LOCATION               String?  @db.Text\n  OBSOLETE               Int?\n  SOUND_PRESSURE         String?  @db.Text\n  SOUND_PRESSURE_HEATING String?  @db.Text\n  COOLING_SOUND_POWER    Decimal? @db.Decimal(20, 6)\n  HEATING_SOUND_POWER    Decimal? @db.Decimal(20, 6)\n  EVAPORATOR_EA          Int?\n  COOLING_HEAD_LOSS      Decimal? @db.Decimal(20, 14)\n  HEATING_HEAD_LOSS      Decimal? @db.Decimal(20, 14)\n  COOLING_WATER_FLOW     Decimal? @db.Decimal(20, 6)\n  HEATING_WATER_FLOW     Decimal? @db.Decimal(20, 6)\n  WEIGHT                 Int?\n  WEIGHT_SHIPPING        Int?\n  DIMENSION_W            Int?\n  DIMENSION_H            Int?\n  DIMENSION_D            Int?\n  FOOTPRINT              Decimal? @db.Decimal(20, 6)\n  COMP_TYPE              String?  @db.Text\n  COMP_OILTYPE           String?  @db.Text\n  COMP_OILCHARGE         String?  @db.Text\n  COMP_HEATER            String?  @db.Text\n  REFRIGERANT            String?  @db.Text\n  REFRIGERANT_CHARGE     String?  @db.Text\n  COND_TYPE              String?  @db.Text\n  COND_MAX_PRESSURE      String?  @db.Text\n  DIAMETER               String?  @db.Text\n  FAN_TYPE               String?  @db.Text\n  FAN_VANE               String?  @db.Text\n  FAN_FLOW_RATE          Int?\n  FAN_MOTOR_POWER        Int?\n  MAX_CURRENT            Int?\n  POWER_LINE             String?  @db.Text\n  REMOTE_CONTROL         String?  @db.Text\n  BREAKER                String?  @db.Text\n  IMAGE_DIMENSIONS       String?  @db.Text\n  IMAGE_INSTALLATION     String?  @db.Text\n  IMAGE_WIRING_M         String?  @db.Text\n  IMAGE_WIRING_S1        String?  @db.Text\n  IMAGE_WIRING_S2        String?  @db.Text\n  MCA                    String?  @db.Text\n  MSC                    String?  @db.Text\n  RLA                    String?  @db.Text\n  MIN_VOLTAGE            Int?\n  MAX_VOLTAGE            Int?\n  VOLTAGE                String?  @db.Text\n  PHASE                  Int?\n  HZ                     String?  @db.Text\n  CIRCUIT                Int?\n\n  @@index([ID], map: \"ID\")\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTIV_I {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_RAC {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(20, 5)\n  T_COOL_W         Decimal? @db.Decimal(20, 5)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTIV_S {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_SCAC {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(20, 5)\n  T_COOL_W         Decimal? @db.Decimal(20, 5)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTIV_5 {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTI {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(20, 5)\n  T_COOL_W         Decimal? @db.Decimal(20, 5)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_AWHP {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_ISC {\n  MODEL            String   @unique\n  COOLING_CAPACITY Int?\n  HEATING_CAPACITY Decimal? @db.Decimal(20, 6)\n}\n",
  "inlineSchemaHash": "c272da459ff1a08c2e70668240a385e4b6fae422c70b8e203eb4188bcfa76972",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/client/lats_noise",
    "client/lats_noise",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"T_NOISE_FUNCNAME\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SELECTABLE_STEP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"T_NOISE_FUNCSTEP\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STEP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"T_NOISE_MODELSPEC\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRODUCT_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCTION_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCTION_STEP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_63HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_125HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_250HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_500HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_1KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_2KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_4KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_8KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_OVERALL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REDUCED_CAPA_RATIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DISCHARGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"T_NOISE_PRODUCTTYPE\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRODUCT_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VISIBLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCNAME_LIST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"PRODUCT_TYPE\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"T_NOISE_ISC_SPEC\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TYPE_COOLED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TYPE_REF\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TYPE_EVAPORATOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TYPE_RUNNING\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"POWER_SUPPLY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GENERATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOMINAL_TON\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COOLING_CAPACITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COOLING_CAPACITY_RT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HEATING_CAPACITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HEATING_CAPACITY_RT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COOLING_INPUT_POWER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HEATING_INPUT_POWER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESEER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IPLV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IPLV100\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IPLV075\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IPLV050\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IPLV025\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SCOP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OBSOLETE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SOUND_PRESSURE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SOUND_PRESSURE_HEATING\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COOLING_SOUND_POWER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HEATING_SOUND_POWER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EVAPORATOR_EA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COOLING_HEAD_LOSS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HEATING_HEAD_LOSS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COOLING_WATER_FLOW\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HEATING_WATER_FLOW\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WEIGHT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WEIGHT_SHIPPING\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIMENSION_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIMENSION_H\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIMENSION_D\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FOOTPRINT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMP_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMP_OILTYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMP_OILCHARGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMP_HEATER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REFRIGERANT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REFRIGERANT_CHARGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COND_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COND_MAX_PRESSURE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DIAMETER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FAN_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FAN_VANE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FAN_FLOW_RATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FAN_MOTOR_POWER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAX_CURRENT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"POWER_LINE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REMOTE_CONTROL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BREAKER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMAGE_DIMENSIONS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMAGE_INSTALLATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMAGE_WIRING_M\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMAGE_WIRING_S1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMAGE_WIRING_S2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MCA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MSC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RLA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MIN_VOLTAGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAX_VOLTAGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VOLTAGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PHASE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CIRCUIT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTIV_I\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_RAC\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTIV_S\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_SCAC\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTIV_5\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTI\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_AWHP\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_ISC\":{\"dbName\":null,\"fields\":[{\"name\":\"MODEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COOLING_CAPACITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"HEATING_CAPACITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/client/lats_noise/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-linux-musl-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/client/lats_noise/libquery_engine-linux-musl-openssl-3.0.x.so.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/client/lats_noise/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/client/lats_noise/schema.prisma")
