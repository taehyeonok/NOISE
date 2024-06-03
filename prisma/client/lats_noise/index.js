
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
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
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
  V_NOISE_MULTIV_I: 'V_NOISE_MULTIV_I',
  V_NOISE_RAC: 'V_NOISE_RAC',
  V_NOISE_MULTIV_S: 'V_NOISE_MULTIV_S',
  V_NOISE_SCAC: 'V_NOISE_SCAC',
  V_NOISE_MULTIV_5: 'V_NOISE_MULTIV_5',
  V_NOISE_MULTI: 'V_NOISE_MULTI',
  V_NOISE_AWHP: 'V_NOISE_AWHP'
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
  "clientVersion": "5.14.0",
  "engineVersion": "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
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
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"./client/lats_noise\"\n  previewFeatures = [\"views\"]\n  binaryTargets   = [\"native\", \"linux-musl-openssl-3.0.x\", \"debian-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider     = \"mysql\"\n  url          = env(\"DATABASE_URL_NOISE\")\n  relationMode = \"prisma\"\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_FUNCNAME {\n  ID              Int     @id\n  NAME            String  @db.Text\n  SELECTABLE_STEP String? @db.Text\n\n  @@index([ID], map: \"ID\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_FUNCSTEP {\n  ID   Int    @id\n  STEP String @db.Text\n\n  @@index([ID], map: \"ID\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_MODELSPEC {\n  ID                 Int      @id\n  PRODUCT_TYPE       String   @db.Text\n  FUNCTION_NAME      String   @db.Text\n  FUNCTION_STEP      String?  @db.Text\n  MODEL_NAME         String   @db.Text\n  DATA_TYPE          String   @db.Text\n  NOISE_63HZ         Decimal? @db.Decimal(20, 1)\n  NOISE_125HZ        Decimal? @db.Decimal(20, 1)\n  NOISE_250HZ        Decimal? @db.Decimal(20, 1)\n  NOISE_500HZ        Decimal? @db.Decimal(20, 1)\n  NOISE_1KHZ         Decimal? @db.Decimal(20, 1)\n  NOISE_2KHZ         Decimal? @db.Decimal(20, 1)\n  NOISE_4KHZ         Decimal? @db.Decimal(20, 1)\n  NOISE_8KHZ         Decimal? @db.Decimal(20, 1)\n  NOISE_OVERALL      Decimal? @db.Decimal(20, 1)\n  REDUCED_CAPA_RATIO Int?\n  DISCHARGE          String?  @db.Text\n\n  @@index([ID], map: \"ID\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel T_NOISE_PRODUCTTYPE {\n  ID            Int\n  PRODUCT_TYPE  String\n  VISIBLE       Int\n  FUNCNAME_LIST String? @db.Text\n\n  @@id([PRODUCT_TYPE])\n  @@index([PRODUCT_TYPE(length: 1024)], map: \"PRODUCT_TYPE\")\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTIV_I {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_RAC {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(20, 5)\n  T_COOL_W         Decimal? @db.Decimal(20, 5)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTIV_S {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_SCAC {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(20, 5)\n  T_COOL_W         Decimal? @db.Decimal(20, 5)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTIV_5 {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_MULTI {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(20, 5)\n  T_COOL_W         Decimal? @db.Decimal(20, 5)\n}\n\n/// The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nview V_NOISE_AWHP {\n  BUYER_MODEL_NAME String   @unique\n  T_HEAT_W         Decimal? @db.Decimal(30, 10)\n  T_COOL_W         Decimal? @db.Decimal(30, 10)\n}\n",
  "inlineSchemaHash": "a4e7d743be7d47147014259508d121326905dbc9ab960bbe9753407eac111dc8",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"T_NOISE_FUNCNAME\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SELECTABLE_STEP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"T_NOISE_FUNCSTEP\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STEP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"T_NOISE_MODELSPEC\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRODUCT_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCTION_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCTION_STEP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_63HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_125HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_250HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_500HZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_1KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_2KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_4KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_8KHZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NOISE_OVERALL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REDUCED_CAPA_RATIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DISCHARGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"T_NOISE_PRODUCTTYPE\":{\"dbName\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRODUCT_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VISIBLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCNAME_LIST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"PRODUCT_TYPE\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTIV_I\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_RAC\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTIV_S\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_SCAC\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTIV_5\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_MULTI\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"V_NOISE_AWHP\":{\"dbName\":null,\"fields\":[{\"name\":\"BUYER_MODEL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_HEAT_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"T_COOL_W\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"}},\"enums\":{},\"types\":{}}")
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
