
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model T_NOISE_FUNCNAME
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type T_NOISE_FUNCNAME = $Result.DefaultSelection<Prisma.$T_NOISE_FUNCNAMEPayload>
/**
 * Model T_NOISE_FUNCSTEP
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type T_NOISE_FUNCSTEP = $Result.DefaultSelection<Prisma.$T_NOISE_FUNCSTEPPayload>
/**
 * Model T_NOISE_MODELSPEC
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type T_NOISE_MODELSPEC = $Result.DefaultSelection<Prisma.$T_NOISE_MODELSPECPayload>
/**
 * Model T_NOISE_PRODUCTTYPE
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type T_NOISE_PRODUCTTYPE = $Result.DefaultSelection<Prisma.$T_NOISE_PRODUCTTYPEPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more T_NOISE_FUNCNAMES
 * const t_NOISE_FUNCNAMES = await prisma.t_NOISE_FUNCNAME.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more T_NOISE_FUNCNAMES
   * const t_NOISE_FUNCNAMES = await prisma.t_NOISE_FUNCNAME.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.t_NOISE_FUNCNAME`: Exposes CRUD operations for the **T_NOISE_FUNCNAME** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_NOISE_FUNCNAMES
    * const t_NOISE_FUNCNAMES = await prisma.t_NOISE_FUNCNAME.findMany()
    * ```
    */
  get t_NOISE_FUNCNAME(): Prisma.T_NOISE_FUNCNAMEDelegate<ExtArgs>;

  /**
   * `prisma.t_NOISE_FUNCSTEP`: Exposes CRUD operations for the **T_NOISE_FUNCSTEP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_NOISE_FUNCSTEPS
    * const t_NOISE_FUNCSTEPS = await prisma.t_NOISE_FUNCSTEP.findMany()
    * ```
    */
  get t_NOISE_FUNCSTEP(): Prisma.T_NOISE_FUNCSTEPDelegate<ExtArgs>;

  /**
   * `prisma.t_NOISE_MODELSPEC`: Exposes CRUD operations for the **T_NOISE_MODELSPEC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_NOISE_MODELSPECS
    * const t_NOISE_MODELSPECS = await prisma.t_NOISE_MODELSPEC.findMany()
    * ```
    */
  get t_NOISE_MODELSPEC(): Prisma.T_NOISE_MODELSPECDelegate<ExtArgs>;

  /**
   * `prisma.t_NOISE_PRODUCTTYPE`: Exposes CRUD operations for the **T_NOISE_PRODUCTTYPE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_NOISE_PRODUCTTYPES
    * const t_NOISE_PRODUCTTYPES = await prisma.t_NOISE_PRODUCTTYPE.findMany()
    * ```
    */
  get t_NOISE_PRODUCTTYPE(): Prisma.T_NOISE_PRODUCTTYPEDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    T_NOISE_FUNCNAME: 'T_NOISE_FUNCNAME',
    T_NOISE_FUNCSTEP: 'T_NOISE_FUNCSTEP',
    T_NOISE_MODELSPEC: 'T_NOISE_MODELSPEC',
    T_NOISE_PRODUCTTYPE: 'T_NOISE_PRODUCTTYPE'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 't_NOISE_FUNCNAME' | 't_NOISE_FUNCSTEP' | 't_NOISE_MODELSPEC' | 't_NOISE_PRODUCTTYPE'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      T_NOISE_FUNCNAME: {
        payload: Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>
        fields: Prisma.T_NOISE_FUNCNAMEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_NOISE_FUNCNAMEFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_NOISE_FUNCNAMEFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload>
          }
          findFirst: {
            args: Prisma.T_NOISE_FUNCNAMEFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_NOISE_FUNCNAMEFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload>
          }
          findMany: {
            args: Prisma.T_NOISE_FUNCNAMEFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload>[]
          }
          create: {
            args: Prisma.T_NOISE_FUNCNAMECreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload>
          }
          createMany: {
            args: Prisma.T_NOISE_FUNCNAMECreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.T_NOISE_FUNCNAMEDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload>
          }
          update: {
            args: Prisma.T_NOISE_FUNCNAMEUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload>
          }
          deleteMany: {
            args: Prisma.T_NOISE_FUNCNAMEDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.T_NOISE_FUNCNAMEUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.T_NOISE_FUNCNAMEUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCNAMEPayload>
          }
          aggregate: {
            args: Prisma.T_NOISE_FUNCNAMEAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_NOISE_FUNCNAME>
          }
          groupBy: {
            args: Prisma.T_NOISE_FUNCNAMEGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_FUNCNAMEGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_NOISE_FUNCNAMECountArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_FUNCNAMECountAggregateOutputType> | number
          }
        }
      }
      T_NOISE_FUNCSTEP: {
        payload: Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>
        fields: Prisma.T_NOISE_FUNCSTEPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_NOISE_FUNCSTEPFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_NOISE_FUNCSTEPFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload>
          }
          findFirst: {
            args: Prisma.T_NOISE_FUNCSTEPFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_NOISE_FUNCSTEPFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload>
          }
          findMany: {
            args: Prisma.T_NOISE_FUNCSTEPFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload>[]
          }
          create: {
            args: Prisma.T_NOISE_FUNCSTEPCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload>
          }
          createMany: {
            args: Prisma.T_NOISE_FUNCSTEPCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.T_NOISE_FUNCSTEPDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload>
          }
          update: {
            args: Prisma.T_NOISE_FUNCSTEPUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload>
          }
          deleteMany: {
            args: Prisma.T_NOISE_FUNCSTEPDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.T_NOISE_FUNCSTEPUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.T_NOISE_FUNCSTEPUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_FUNCSTEPPayload>
          }
          aggregate: {
            args: Prisma.T_NOISE_FUNCSTEPAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_NOISE_FUNCSTEP>
          }
          groupBy: {
            args: Prisma.T_NOISE_FUNCSTEPGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_FUNCSTEPGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_NOISE_FUNCSTEPCountArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_FUNCSTEPCountAggregateOutputType> | number
          }
        }
      }
      T_NOISE_MODELSPEC: {
        payload: Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>
        fields: Prisma.T_NOISE_MODELSPECFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_NOISE_MODELSPECFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_NOISE_MODELSPECFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload>
          }
          findFirst: {
            args: Prisma.T_NOISE_MODELSPECFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_NOISE_MODELSPECFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload>
          }
          findMany: {
            args: Prisma.T_NOISE_MODELSPECFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload>[]
          }
          create: {
            args: Prisma.T_NOISE_MODELSPECCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload>
          }
          createMany: {
            args: Prisma.T_NOISE_MODELSPECCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.T_NOISE_MODELSPECDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload>
          }
          update: {
            args: Prisma.T_NOISE_MODELSPECUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload>
          }
          deleteMany: {
            args: Prisma.T_NOISE_MODELSPECDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.T_NOISE_MODELSPECUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.T_NOISE_MODELSPECUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_MODELSPECPayload>
          }
          aggregate: {
            args: Prisma.T_NOISE_MODELSPECAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_NOISE_MODELSPEC>
          }
          groupBy: {
            args: Prisma.T_NOISE_MODELSPECGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_MODELSPECGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_NOISE_MODELSPECCountArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_MODELSPECCountAggregateOutputType> | number
          }
        }
      }
      T_NOISE_PRODUCTTYPE: {
        payload: Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>
        fields: Prisma.T_NOISE_PRODUCTTYPEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_NOISE_PRODUCTTYPEFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_NOISE_PRODUCTTYPEFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload>
          }
          findFirst: {
            args: Prisma.T_NOISE_PRODUCTTYPEFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_NOISE_PRODUCTTYPEFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload>
          }
          findMany: {
            args: Prisma.T_NOISE_PRODUCTTYPEFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload>[]
          }
          create: {
            args: Prisma.T_NOISE_PRODUCTTYPECreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload>
          }
          createMany: {
            args: Prisma.T_NOISE_PRODUCTTYPECreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.T_NOISE_PRODUCTTYPEDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload>
          }
          update: {
            args: Prisma.T_NOISE_PRODUCTTYPEUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload>
          }
          deleteMany: {
            args: Prisma.T_NOISE_PRODUCTTYPEDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.T_NOISE_PRODUCTTYPEUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.T_NOISE_PRODUCTTYPEUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_PRODUCTTYPEPayload>
          }
          aggregate: {
            args: Prisma.T_NOISE_PRODUCTTYPEAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_NOISE_PRODUCTTYPE>
          }
          groupBy: {
            args: Prisma.T_NOISE_PRODUCTTYPEGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_PRODUCTTYPEGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_NOISE_PRODUCTTYPECountArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_PRODUCTTYPECountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model T_NOISE_FUNCNAME
   */

  export type AggregateT_NOISE_FUNCNAME = {
    _count: T_NOISE_FUNCNAMECountAggregateOutputType | null
    _avg: T_NOISE_FUNCNAMEAvgAggregateOutputType | null
    _sum: T_NOISE_FUNCNAMESumAggregateOutputType | null
    _min: T_NOISE_FUNCNAMEMinAggregateOutputType | null
    _max: T_NOISE_FUNCNAMEMaxAggregateOutputType | null
  }

  export type T_NOISE_FUNCNAMEAvgAggregateOutputType = {
    ID: number | null
  }

  export type T_NOISE_FUNCNAMESumAggregateOutputType = {
    ID: number | null
  }

  export type T_NOISE_FUNCNAMEMinAggregateOutputType = {
    ID: number | null
    NAME: string | null
    SELECTABLE_STEP: string | null
  }

  export type T_NOISE_FUNCNAMEMaxAggregateOutputType = {
    ID: number | null
    NAME: string | null
    SELECTABLE_STEP: string | null
  }

  export type T_NOISE_FUNCNAMECountAggregateOutputType = {
    ID: number
    NAME: number
    SELECTABLE_STEP: number
    _all: number
  }


  export type T_NOISE_FUNCNAMEAvgAggregateInputType = {
    ID?: true
  }

  export type T_NOISE_FUNCNAMESumAggregateInputType = {
    ID?: true
  }

  export type T_NOISE_FUNCNAMEMinAggregateInputType = {
    ID?: true
    NAME?: true
    SELECTABLE_STEP?: true
  }

  export type T_NOISE_FUNCNAMEMaxAggregateInputType = {
    ID?: true
    NAME?: true
    SELECTABLE_STEP?: true
  }

  export type T_NOISE_FUNCNAMECountAggregateInputType = {
    ID?: true
    NAME?: true
    SELECTABLE_STEP?: true
    _all?: true
  }

  export type T_NOISE_FUNCNAMEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_FUNCNAME to aggregate.
     */
    where?: T_NOISE_FUNCNAMEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCNAMES to fetch.
     */
    orderBy?: T_NOISE_FUNCNAMEOrderByWithRelationInput | T_NOISE_FUNCNAMEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_NOISE_FUNCNAMEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCNAMES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCNAMES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_NOISE_FUNCNAMES
    **/
    _count?: true | T_NOISE_FUNCNAMECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_NOISE_FUNCNAMEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_NOISE_FUNCNAMESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_NOISE_FUNCNAMEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_NOISE_FUNCNAMEMaxAggregateInputType
  }

  export type GetT_NOISE_FUNCNAMEAggregateType<T extends T_NOISE_FUNCNAMEAggregateArgs> = {
        [P in keyof T & keyof AggregateT_NOISE_FUNCNAME]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_NOISE_FUNCNAME[P]>
      : GetScalarType<T[P], AggregateT_NOISE_FUNCNAME[P]>
  }




  export type T_NOISE_FUNCNAMEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_NOISE_FUNCNAMEWhereInput
    orderBy?: T_NOISE_FUNCNAMEOrderByWithAggregationInput | T_NOISE_FUNCNAMEOrderByWithAggregationInput[]
    by: T_NOISE_FUNCNAMEScalarFieldEnum[] | T_NOISE_FUNCNAMEScalarFieldEnum
    having?: T_NOISE_FUNCNAMEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_NOISE_FUNCNAMECountAggregateInputType | true
    _avg?: T_NOISE_FUNCNAMEAvgAggregateInputType
    _sum?: T_NOISE_FUNCNAMESumAggregateInputType
    _min?: T_NOISE_FUNCNAMEMinAggregateInputType
    _max?: T_NOISE_FUNCNAMEMaxAggregateInputType
  }

  export type T_NOISE_FUNCNAMEGroupByOutputType = {
    ID: number
    NAME: string
    SELECTABLE_STEP: string | null
    _count: T_NOISE_FUNCNAMECountAggregateOutputType | null
    _avg: T_NOISE_FUNCNAMEAvgAggregateOutputType | null
    _sum: T_NOISE_FUNCNAMESumAggregateOutputType | null
    _min: T_NOISE_FUNCNAMEMinAggregateOutputType | null
    _max: T_NOISE_FUNCNAMEMaxAggregateOutputType | null
  }

  type GetT_NOISE_FUNCNAMEGroupByPayload<T extends T_NOISE_FUNCNAMEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_NOISE_FUNCNAMEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_NOISE_FUNCNAMEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_NOISE_FUNCNAMEGroupByOutputType[P]>
            : GetScalarType<T[P], T_NOISE_FUNCNAMEGroupByOutputType[P]>
        }
      >
    >


  export type T_NOISE_FUNCNAMESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    NAME?: boolean
    SELECTABLE_STEP?: boolean
  }, ExtArgs["result"]["t_NOISE_FUNCNAME"]>

  export type T_NOISE_FUNCNAMESelectScalar = {
    ID?: boolean
    NAME?: boolean
    SELECTABLE_STEP?: boolean
  }



  export type $T_NOISE_FUNCNAMEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_NOISE_FUNCNAME"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      NAME: string
      SELECTABLE_STEP: string | null
    }, ExtArgs["result"]["t_NOISE_FUNCNAME"]>
    composites: {}
  }


  type T_NOISE_FUNCNAMEGetPayload<S extends boolean | null | undefined | T_NOISE_FUNCNAMEDefaultArgs> = $Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload, S>

  type T_NOISE_FUNCNAMECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<T_NOISE_FUNCNAMEFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: T_NOISE_FUNCNAMECountAggregateInputType | true
    }

  export interface T_NOISE_FUNCNAMEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_NOISE_FUNCNAME'], meta: { name: 'T_NOISE_FUNCNAME' } }
    /**
     * Find zero or one T_NOISE_FUNCNAME that matches the filter.
     * @param {T_NOISE_FUNCNAMEFindUniqueArgs} args - Arguments to find a T_NOISE_FUNCNAME
     * @example
     * // Get one T_NOISE_FUNCNAME
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_NOISE_FUNCNAMEFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCNAMEFindUniqueArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_NOISE_FUNCNAME that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {T_NOISE_FUNCNAMEFindUniqueOrThrowArgs} args - Arguments to find a T_NOISE_FUNCNAME
     * @example
     * // Get one T_NOISE_FUNCNAME
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_NOISE_FUNCNAMEFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCNAMEFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_NOISE_FUNCNAME that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCNAMEFindFirstArgs} args - Arguments to find a T_NOISE_FUNCNAME
     * @example
     * // Get one T_NOISE_FUNCNAME
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_NOISE_FUNCNAMEFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCNAMEFindFirstArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_NOISE_FUNCNAME that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCNAMEFindFirstOrThrowArgs} args - Arguments to find a T_NOISE_FUNCNAME
     * @example
     * // Get one T_NOISE_FUNCNAME
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_NOISE_FUNCNAMEFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCNAMEFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_NOISE_FUNCNAMES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCNAMEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_NOISE_FUNCNAMES
     * const t_NOISE_FUNCNAMES = await prisma.t_NOISE_FUNCNAME.findMany()
     * 
     * // Get first 10 T_NOISE_FUNCNAMES
     * const t_NOISE_FUNCNAMES = await prisma.t_NOISE_FUNCNAME.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const t_NOISE_FUNCNAMEWithIDOnly = await prisma.t_NOISE_FUNCNAME.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends T_NOISE_FUNCNAMEFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCNAMEFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_NOISE_FUNCNAME.
     * @param {T_NOISE_FUNCNAMECreateArgs} args - Arguments to create a T_NOISE_FUNCNAME.
     * @example
     * // Create one T_NOISE_FUNCNAME
     * const T_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.create({
     *   data: {
     *     // ... data to create a T_NOISE_FUNCNAME
     *   }
     * })
     * 
    **/
    create<T extends T_NOISE_FUNCNAMECreateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCNAMECreateArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_NOISE_FUNCNAMES.
     * @param {T_NOISE_FUNCNAMECreateManyArgs} args - Arguments to create many T_NOISE_FUNCNAMES.
     * @example
     * // Create many T_NOISE_FUNCNAMES
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends T_NOISE_FUNCNAMECreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCNAMECreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_NOISE_FUNCNAME.
     * @param {T_NOISE_FUNCNAMEDeleteArgs} args - Arguments to delete one T_NOISE_FUNCNAME.
     * @example
     * // Delete one T_NOISE_FUNCNAME
     * const T_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.delete({
     *   where: {
     *     // ... filter to delete one T_NOISE_FUNCNAME
     *   }
     * })
     * 
    **/
    delete<T extends T_NOISE_FUNCNAMEDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCNAMEDeleteArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_NOISE_FUNCNAME.
     * @param {T_NOISE_FUNCNAMEUpdateArgs} args - Arguments to update one T_NOISE_FUNCNAME.
     * @example
     * // Update one T_NOISE_FUNCNAME
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_NOISE_FUNCNAMEUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCNAMEUpdateArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_NOISE_FUNCNAMES.
     * @param {T_NOISE_FUNCNAMEDeleteManyArgs} args - Arguments to filter T_NOISE_FUNCNAMES to delete.
     * @example
     * // Delete a few T_NOISE_FUNCNAMES
     * const { count } = await prisma.t_NOISE_FUNCNAME.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_NOISE_FUNCNAMEDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCNAMEDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_NOISE_FUNCNAMES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCNAMEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_NOISE_FUNCNAMES
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_NOISE_FUNCNAMEUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCNAMEUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_NOISE_FUNCNAME.
     * @param {T_NOISE_FUNCNAMEUpsertArgs} args - Arguments to update or create a T_NOISE_FUNCNAME.
     * @example
     * // Update or create a T_NOISE_FUNCNAME
     * const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.upsert({
     *   create: {
     *     // ... data to create a T_NOISE_FUNCNAME
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_NOISE_FUNCNAME we want to update
     *   }
     * })
    **/
    upsert<T extends T_NOISE_FUNCNAMEUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCNAMEUpsertArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCNAMEClient<$Result.GetResult<Prisma.$T_NOISE_FUNCNAMEPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_NOISE_FUNCNAMES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCNAMECountArgs} args - Arguments to filter T_NOISE_FUNCNAMES to count.
     * @example
     * // Count the number of T_NOISE_FUNCNAMES
     * const count = await prisma.t_NOISE_FUNCNAME.count({
     *   where: {
     *     // ... the filter for the T_NOISE_FUNCNAMES we want to count
     *   }
     * })
    **/
    count<T extends T_NOISE_FUNCNAMECountArgs>(
      args?: Subset<T, T_NOISE_FUNCNAMECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_NOISE_FUNCNAMECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_NOISE_FUNCNAME.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCNAMEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_NOISE_FUNCNAMEAggregateArgs>(args: Subset<T, T_NOISE_FUNCNAMEAggregateArgs>): Prisma.PrismaPromise<GetT_NOISE_FUNCNAMEAggregateType<T>>

    /**
     * Group by T_NOISE_FUNCNAME.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCNAMEGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_NOISE_FUNCNAMEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_NOISE_FUNCNAMEGroupByArgs['orderBy'] }
        : { orderBy?: T_NOISE_FUNCNAMEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_NOISE_FUNCNAMEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_NOISE_FUNCNAMEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_NOISE_FUNCNAME model
   */
  readonly fields: T_NOISE_FUNCNAMEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_NOISE_FUNCNAME.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_NOISE_FUNCNAMEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the T_NOISE_FUNCNAME model
   */ 
  interface T_NOISE_FUNCNAMEFieldRefs {
    readonly ID: FieldRef<"T_NOISE_FUNCNAME", 'Int'>
    readonly NAME: FieldRef<"T_NOISE_FUNCNAME", 'String'>
    readonly SELECTABLE_STEP: FieldRef<"T_NOISE_FUNCNAME", 'String'>
  }
    

  // Custom InputTypes
  /**
   * T_NOISE_FUNCNAME findUnique
   */
  export type T_NOISE_FUNCNAMEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCNAME to fetch.
     */
    where: T_NOISE_FUNCNAMEWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCNAME findUniqueOrThrow
   */
  export type T_NOISE_FUNCNAMEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCNAME to fetch.
     */
    where: T_NOISE_FUNCNAMEWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCNAME findFirst
   */
  export type T_NOISE_FUNCNAMEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCNAME to fetch.
     */
    where?: T_NOISE_FUNCNAMEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCNAMES to fetch.
     */
    orderBy?: T_NOISE_FUNCNAMEOrderByWithRelationInput | T_NOISE_FUNCNAMEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_FUNCNAMES.
     */
    cursor?: T_NOISE_FUNCNAMEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCNAMES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCNAMES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_FUNCNAMES.
     */
    distinct?: T_NOISE_FUNCNAMEScalarFieldEnum | T_NOISE_FUNCNAMEScalarFieldEnum[]
  }

  /**
   * T_NOISE_FUNCNAME findFirstOrThrow
   */
  export type T_NOISE_FUNCNAMEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCNAME to fetch.
     */
    where?: T_NOISE_FUNCNAMEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCNAMES to fetch.
     */
    orderBy?: T_NOISE_FUNCNAMEOrderByWithRelationInput | T_NOISE_FUNCNAMEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_FUNCNAMES.
     */
    cursor?: T_NOISE_FUNCNAMEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCNAMES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCNAMES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_FUNCNAMES.
     */
    distinct?: T_NOISE_FUNCNAMEScalarFieldEnum | T_NOISE_FUNCNAMEScalarFieldEnum[]
  }

  /**
   * T_NOISE_FUNCNAME findMany
   */
  export type T_NOISE_FUNCNAMEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCNAMES to fetch.
     */
    where?: T_NOISE_FUNCNAMEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCNAMES to fetch.
     */
    orderBy?: T_NOISE_FUNCNAMEOrderByWithRelationInput | T_NOISE_FUNCNAMEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_NOISE_FUNCNAMES.
     */
    cursor?: T_NOISE_FUNCNAMEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCNAMES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCNAMES.
     */
    skip?: number
    distinct?: T_NOISE_FUNCNAMEScalarFieldEnum | T_NOISE_FUNCNAMEScalarFieldEnum[]
  }

  /**
   * T_NOISE_FUNCNAME create
   */
  export type T_NOISE_FUNCNAMECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * The data needed to create a T_NOISE_FUNCNAME.
     */
    data: XOR<T_NOISE_FUNCNAMECreateInput, T_NOISE_FUNCNAMEUncheckedCreateInput>
  }

  /**
   * T_NOISE_FUNCNAME createMany
   */
  export type T_NOISE_FUNCNAMECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_NOISE_FUNCNAMES.
     */
    data: T_NOISE_FUNCNAMECreateManyInput | T_NOISE_FUNCNAMECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_NOISE_FUNCNAME update
   */
  export type T_NOISE_FUNCNAMEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * The data needed to update a T_NOISE_FUNCNAME.
     */
    data: XOR<T_NOISE_FUNCNAMEUpdateInput, T_NOISE_FUNCNAMEUncheckedUpdateInput>
    /**
     * Choose, which T_NOISE_FUNCNAME to update.
     */
    where: T_NOISE_FUNCNAMEWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCNAME updateMany
   */
  export type T_NOISE_FUNCNAMEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_NOISE_FUNCNAMES.
     */
    data: XOR<T_NOISE_FUNCNAMEUpdateManyMutationInput, T_NOISE_FUNCNAMEUncheckedUpdateManyInput>
    /**
     * Filter which T_NOISE_FUNCNAMES to update
     */
    where?: T_NOISE_FUNCNAMEWhereInput
  }

  /**
   * T_NOISE_FUNCNAME upsert
   */
  export type T_NOISE_FUNCNAMEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * The filter to search for the T_NOISE_FUNCNAME to update in case it exists.
     */
    where: T_NOISE_FUNCNAMEWhereUniqueInput
    /**
     * In case the T_NOISE_FUNCNAME found by the `where` argument doesn't exist, create a new T_NOISE_FUNCNAME with this data.
     */
    create: XOR<T_NOISE_FUNCNAMECreateInput, T_NOISE_FUNCNAMEUncheckedCreateInput>
    /**
     * In case the T_NOISE_FUNCNAME was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_NOISE_FUNCNAMEUpdateInput, T_NOISE_FUNCNAMEUncheckedUpdateInput>
  }

  /**
   * T_NOISE_FUNCNAME delete
   */
  export type T_NOISE_FUNCNAMEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
    /**
     * Filter which T_NOISE_FUNCNAME to delete.
     */
    where: T_NOISE_FUNCNAMEWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCNAME deleteMany
   */
  export type T_NOISE_FUNCNAMEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_FUNCNAMES to delete
     */
    where?: T_NOISE_FUNCNAMEWhereInput
  }

  /**
   * T_NOISE_FUNCNAME without action
   */
  export type T_NOISE_FUNCNAMEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCNAME
     */
    select?: T_NOISE_FUNCNAMESelect<ExtArgs> | null
  }


  /**
   * Model T_NOISE_FUNCSTEP
   */

  export type AggregateT_NOISE_FUNCSTEP = {
    _count: T_NOISE_FUNCSTEPCountAggregateOutputType | null
    _avg: T_NOISE_FUNCSTEPAvgAggregateOutputType | null
    _sum: T_NOISE_FUNCSTEPSumAggregateOutputType | null
    _min: T_NOISE_FUNCSTEPMinAggregateOutputType | null
    _max: T_NOISE_FUNCSTEPMaxAggregateOutputType | null
  }

  export type T_NOISE_FUNCSTEPAvgAggregateOutputType = {
    ID: number | null
  }

  export type T_NOISE_FUNCSTEPSumAggregateOutputType = {
    ID: number | null
  }

  export type T_NOISE_FUNCSTEPMinAggregateOutputType = {
    ID: number | null
    STEP: string | null
  }

  export type T_NOISE_FUNCSTEPMaxAggregateOutputType = {
    ID: number | null
    STEP: string | null
  }

  export type T_NOISE_FUNCSTEPCountAggregateOutputType = {
    ID: number
    STEP: number
    _all: number
  }


  export type T_NOISE_FUNCSTEPAvgAggregateInputType = {
    ID?: true
  }

  export type T_NOISE_FUNCSTEPSumAggregateInputType = {
    ID?: true
  }

  export type T_NOISE_FUNCSTEPMinAggregateInputType = {
    ID?: true
    STEP?: true
  }

  export type T_NOISE_FUNCSTEPMaxAggregateInputType = {
    ID?: true
    STEP?: true
  }

  export type T_NOISE_FUNCSTEPCountAggregateInputType = {
    ID?: true
    STEP?: true
    _all?: true
  }

  export type T_NOISE_FUNCSTEPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_FUNCSTEP to aggregate.
     */
    where?: T_NOISE_FUNCSTEPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCSTEPS to fetch.
     */
    orderBy?: T_NOISE_FUNCSTEPOrderByWithRelationInput | T_NOISE_FUNCSTEPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_NOISE_FUNCSTEPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCSTEPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCSTEPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_NOISE_FUNCSTEPS
    **/
    _count?: true | T_NOISE_FUNCSTEPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_NOISE_FUNCSTEPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_NOISE_FUNCSTEPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_NOISE_FUNCSTEPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_NOISE_FUNCSTEPMaxAggregateInputType
  }

  export type GetT_NOISE_FUNCSTEPAggregateType<T extends T_NOISE_FUNCSTEPAggregateArgs> = {
        [P in keyof T & keyof AggregateT_NOISE_FUNCSTEP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_NOISE_FUNCSTEP[P]>
      : GetScalarType<T[P], AggregateT_NOISE_FUNCSTEP[P]>
  }




  export type T_NOISE_FUNCSTEPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_NOISE_FUNCSTEPWhereInput
    orderBy?: T_NOISE_FUNCSTEPOrderByWithAggregationInput | T_NOISE_FUNCSTEPOrderByWithAggregationInput[]
    by: T_NOISE_FUNCSTEPScalarFieldEnum[] | T_NOISE_FUNCSTEPScalarFieldEnum
    having?: T_NOISE_FUNCSTEPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_NOISE_FUNCSTEPCountAggregateInputType | true
    _avg?: T_NOISE_FUNCSTEPAvgAggregateInputType
    _sum?: T_NOISE_FUNCSTEPSumAggregateInputType
    _min?: T_NOISE_FUNCSTEPMinAggregateInputType
    _max?: T_NOISE_FUNCSTEPMaxAggregateInputType
  }

  export type T_NOISE_FUNCSTEPGroupByOutputType = {
    ID: number
    STEP: string
    _count: T_NOISE_FUNCSTEPCountAggregateOutputType | null
    _avg: T_NOISE_FUNCSTEPAvgAggregateOutputType | null
    _sum: T_NOISE_FUNCSTEPSumAggregateOutputType | null
    _min: T_NOISE_FUNCSTEPMinAggregateOutputType | null
    _max: T_NOISE_FUNCSTEPMaxAggregateOutputType | null
  }

  type GetT_NOISE_FUNCSTEPGroupByPayload<T extends T_NOISE_FUNCSTEPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_NOISE_FUNCSTEPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_NOISE_FUNCSTEPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_NOISE_FUNCSTEPGroupByOutputType[P]>
            : GetScalarType<T[P], T_NOISE_FUNCSTEPGroupByOutputType[P]>
        }
      >
    >


  export type T_NOISE_FUNCSTEPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    STEP?: boolean
  }, ExtArgs["result"]["t_NOISE_FUNCSTEP"]>

  export type T_NOISE_FUNCSTEPSelectScalar = {
    ID?: boolean
    STEP?: boolean
  }



  export type $T_NOISE_FUNCSTEPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_NOISE_FUNCSTEP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      STEP: string
    }, ExtArgs["result"]["t_NOISE_FUNCSTEP"]>
    composites: {}
  }


  type T_NOISE_FUNCSTEPGetPayload<S extends boolean | null | undefined | T_NOISE_FUNCSTEPDefaultArgs> = $Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload, S>

  type T_NOISE_FUNCSTEPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<T_NOISE_FUNCSTEPFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: T_NOISE_FUNCSTEPCountAggregateInputType | true
    }

  export interface T_NOISE_FUNCSTEPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_NOISE_FUNCSTEP'], meta: { name: 'T_NOISE_FUNCSTEP' } }
    /**
     * Find zero or one T_NOISE_FUNCSTEP that matches the filter.
     * @param {T_NOISE_FUNCSTEPFindUniqueArgs} args - Arguments to find a T_NOISE_FUNCSTEP
     * @example
     * // Get one T_NOISE_FUNCSTEP
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_NOISE_FUNCSTEPFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCSTEPFindUniqueArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_NOISE_FUNCSTEP that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {T_NOISE_FUNCSTEPFindUniqueOrThrowArgs} args - Arguments to find a T_NOISE_FUNCSTEP
     * @example
     * // Get one T_NOISE_FUNCSTEP
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_NOISE_FUNCSTEPFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCSTEPFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_NOISE_FUNCSTEP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCSTEPFindFirstArgs} args - Arguments to find a T_NOISE_FUNCSTEP
     * @example
     * // Get one T_NOISE_FUNCSTEP
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_NOISE_FUNCSTEPFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCSTEPFindFirstArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_NOISE_FUNCSTEP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCSTEPFindFirstOrThrowArgs} args - Arguments to find a T_NOISE_FUNCSTEP
     * @example
     * // Get one T_NOISE_FUNCSTEP
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_NOISE_FUNCSTEPFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCSTEPFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_NOISE_FUNCSTEPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCSTEPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_NOISE_FUNCSTEPS
     * const t_NOISE_FUNCSTEPS = await prisma.t_NOISE_FUNCSTEP.findMany()
     * 
     * // Get first 10 T_NOISE_FUNCSTEPS
     * const t_NOISE_FUNCSTEPS = await prisma.t_NOISE_FUNCSTEP.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const t_NOISE_FUNCSTEPWithIDOnly = await prisma.t_NOISE_FUNCSTEP.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends T_NOISE_FUNCSTEPFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCSTEPFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_NOISE_FUNCSTEP.
     * @param {T_NOISE_FUNCSTEPCreateArgs} args - Arguments to create a T_NOISE_FUNCSTEP.
     * @example
     * // Create one T_NOISE_FUNCSTEP
     * const T_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.create({
     *   data: {
     *     // ... data to create a T_NOISE_FUNCSTEP
     *   }
     * })
     * 
    **/
    create<T extends T_NOISE_FUNCSTEPCreateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCSTEPCreateArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_NOISE_FUNCSTEPS.
     * @param {T_NOISE_FUNCSTEPCreateManyArgs} args - Arguments to create many T_NOISE_FUNCSTEPS.
     * @example
     * // Create many T_NOISE_FUNCSTEPS
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends T_NOISE_FUNCSTEPCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCSTEPCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_NOISE_FUNCSTEP.
     * @param {T_NOISE_FUNCSTEPDeleteArgs} args - Arguments to delete one T_NOISE_FUNCSTEP.
     * @example
     * // Delete one T_NOISE_FUNCSTEP
     * const T_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.delete({
     *   where: {
     *     // ... filter to delete one T_NOISE_FUNCSTEP
     *   }
     * })
     * 
    **/
    delete<T extends T_NOISE_FUNCSTEPDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCSTEPDeleteArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_NOISE_FUNCSTEP.
     * @param {T_NOISE_FUNCSTEPUpdateArgs} args - Arguments to update one T_NOISE_FUNCSTEP.
     * @example
     * // Update one T_NOISE_FUNCSTEP
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_NOISE_FUNCSTEPUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCSTEPUpdateArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_NOISE_FUNCSTEPS.
     * @param {T_NOISE_FUNCSTEPDeleteManyArgs} args - Arguments to filter T_NOISE_FUNCSTEPS to delete.
     * @example
     * // Delete a few T_NOISE_FUNCSTEPS
     * const { count } = await prisma.t_NOISE_FUNCSTEP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_NOISE_FUNCSTEPDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_FUNCSTEPDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_NOISE_FUNCSTEPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCSTEPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_NOISE_FUNCSTEPS
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_NOISE_FUNCSTEPUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCSTEPUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_NOISE_FUNCSTEP.
     * @param {T_NOISE_FUNCSTEPUpsertArgs} args - Arguments to update or create a T_NOISE_FUNCSTEP.
     * @example
     * // Update or create a T_NOISE_FUNCSTEP
     * const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.upsert({
     *   create: {
     *     // ... data to create a T_NOISE_FUNCSTEP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_NOISE_FUNCSTEP we want to update
     *   }
     * })
    **/
    upsert<T extends T_NOISE_FUNCSTEPUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_FUNCSTEPUpsertArgs<ExtArgs>>
    ): Prisma__T_NOISE_FUNCSTEPClient<$Result.GetResult<Prisma.$T_NOISE_FUNCSTEPPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_NOISE_FUNCSTEPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCSTEPCountArgs} args - Arguments to filter T_NOISE_FUNCSTEPS to count.
     * @example
     * // Count the number of T_NOISE_FUNCSTEPS
     * const count = await prisma.t_NOISE_FUNCSTEP.count({
     *   where: {
     *     // ... the filter for the T_NOISE_FUNCSTEPS we want to count
     *   }
     * })
    **/
    count<T extends T_NOISE_FUNCSTEPCountArgs>(
      args?: Subset<T, T_NOISE_FUNCSTEPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_NOISE_FUNCSTEPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_NOISE_FUNCSTEP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCSTEPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_NOISE_FUNCSTEPAggregateArgs>(args: Subset<T, T_NOISE_FUNCSTEPAggregateArgs>): Prisma.PrismaPromise<GetT_NOISE_FUNCSTEPAggregateType<T>>

    /**
     * Group by T_NOISE_FUNCSTEP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_FUNCSTEPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_NOISE_FUNCSTEPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_NOISE_FUNCSTEPGroupByArgs['orderBy'] }
        : { orderBy?: T_NOISE_FUNCSTEPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_NOISE_FUNCSTEPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_NOISE_FUNCSTEPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_NOISE_FUNCSTEP model
   */
  readonly fields: T_NOISE_FUNCSTEPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_NOISE_FUNCSTEP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_NOISE_FUNCSTEPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the T_NOISE_FUNCSTEP model
   */ 
  interface T_NOISE_FUNCSTEPFieldRefs {
    readonly ID: FieldRef<"T_NOISE_FUNCSTEP", 'Int'>
    readonly STEP: FieldRef<"T_NOISE_FUNCSTEP", 'String'>
  }
    

  // Custom InputTypes
  /**
   * T_NOISE_FUNCSTEP findUnique
   */
  export type T_NOISE_FUNCSTEPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCSTEP to fetch.
     */
    where: T_NOISE_FUNCSTEPWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCSTEP findUniqueOrThrow
   */
  export type T_NOISE_FUNCSTEPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCSTEP to fetch.
     */
    where: T_NOISE_FUNCSTEPWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCSTEP findFirst
   */
  export type T_NOISE_FUNCSTEPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCSTEP to fetch.
     */
    where?: T_NOISE_FUNCSTEPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCSTEPS to fetch.
     */
    orderBy?: T_NOISE_FUNCSTEPOrderByWithRelationInput | T_NOISE_FUNCSTEPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_FUNCSTEPS.
     */
    cursor?: T_NOISE_FUNCSTEPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCSTEPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCSTEPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_FUNCSTEPS.
     */
    distinct?: T_NOISE_FUNCSTEPScalarFieldEnum | T_NOISE_FUNCSTEPScalarFieldEnum[]
  }

  /**
   * T_NOISE_FUNCSTEP findFirstOrThrow
   */
  export type T_NOISE_FUNCSTEPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCSTEP to fetch.
     */
    where?: T_NOISE_FUNCSTEPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCSTEPS to fetch.
     */
    orderBy?: T_NOISE_FUNCSTEPOrderByWithRelationInput | T_NOISE_FUNCSTEPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_FUNCSTEPS.
     */
    cursor?: T_NOISE_FUNCSTEPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCSTEPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCSTEPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_FUNCSTEPS.
     */
    distinct?: T_NOISE_FUNCSTEPScalarFieldEnum | T_NOISE_FUNCSTEPScalarFieldEnum[]
  }

  /**
   * T_NOISE_FUNCSTEP findMany
   */
  export type T_NOISE_FUNCSTEPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_FUNCSTEPS to fetch.
     */
    where?: T_NOISE_FUNCSTEPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_FUNCSTEPS to fetch.
     */
    orderBy?: T_NOISE_FUNCSTEPOrderByWithRelationInput | T_NOISE_FUNCSTEPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_NOISE_FUNCSTEPS.
     */
    cursor?: T_NOISE_FUNCSTEPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_FUNCSTEPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_FUNCSTEPS.
     */
    skip?: number
    distinct?: T_NOISE_FUNCSTEPScalarFieldEnum | T_NOISE_FUNCSTEPScalarFieldEnum[]
  }

  /**
   * T_NOISE_FUNCSTEP create
   */
  export type T_NOISE_FUNCSTEPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * The data needed to create a T_NOISE_FUNCSTEP.
     */
    data: XOR<T_NOISE_FUNCSTEPCreateInput, T_NOISE_FUNCSTEPUncheckedCreateInput>
  }

  /**
   * T_NOISE_FUNCSTEP createMany
   */
  export type T_NOISE_FUNCSTEPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_NOISE_FUNCSTEPS.
     */
    data: T_NOISE_FUNCSTEPCreateManyInput | T_NOISE_FUNCSTEPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_NOISE_FUNCSTEP update
   */
  export type T_NOISE_FUNCSTEPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * The data needed to update a T_NOISE_FUNCSTEP.
     */
    data: XOR<T_NOISE_FUNCSTEPUpdateInput, T_NOISE_FUNCSTEPUncheckedUpdateInput>
    /**
     * Choose, which T_NOISE_FUNCSTEP to update.
     */
    where: T_NOISE_FUNCSTEPWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCSTEP updateMany
   */
  export type T_NOISE_FUNCSTEPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_NOISE_FUNCSTEPS.
     */
    data: XOR<T_NOISE_FUNCSTEPUpdateManyMutationInput, T_NOISE_FUNCSTEPUncheckedUpdateManyInput>
    /**
     * Filter which T_NOISE_FUNCSTEPS to update
     */
    where?: T_NOISE_FUNCSTEPWhereInput
  }

  /**
   * T_NOISE_FUNCSTEP upsert
   */
  export type T_NOISE_FUNCSTEPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * The filter to search for the T_NOISE_FUNCSTEP to update in case it exists.
     */
    where: T_NOISE_FUNCSTEPWhereUniqueInput
    /**
     * In case the T_NOISE_FUNCSTEP found by the `where` argument doesn't exist, create a new T_NOISE_FUNCSTEP with this data.
     */
    create: XOR<T_NOISE_FUNCSTEPCreateInput, T_NOISE_FUNCSTEPUncheckedCreateInput>
    /**
     * In case the T_NOISE_FUNCSTEP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_NOISE_FUNCSTEPUpdateInput, T_NOISE_FUNCSTEPUncheckedUpdateInput>
  }

  /**
   * T_NOISE_FUNCSTEP delete
   */
  export type T_NOISE_FUNCSTEPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
    /**
     * Filter which T_NOISE_FUNCSTEP to delete.
     */
    where: T_NOISE_FUNCSTEPWhereUniqueInput
  }

  /**
   * T_NOISE_FUNCSTEP deleteMany
   */
  export type T_NOISE_FUNCSTEPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_FUNCSTEPS to delete
     */
    where?: T_NOISE_FUNCSTEPWhereInput
  }

  /**
   * T_NOISE_FUNCSTEP without action
   */
  export type T_NOISE_FUNCSTEPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_FUNCSTEP
     */
    select?: T_NOISE_FUNCSTEPSelect<ExtArgs> | null
  }


  /**
   * Model T_NOISE_MODELSPEC
   */

  export type AggregateT_NOISE_MODELSPEC = {
    _count: T_NOISE_MODELSPECCountAggregateOutputType | null
    _avg: T_NOISE_MODELSPECAvgAggregateOutputType | null
    _sum: T_NOISE_MODELSPECSumAggregateOutputType | null
    _min: T_NOISE_MODELSPECMinAggregateOutputType | null
    _max: T_NOISE_MODELSPECMaxAggregateOutputType | null
  }

  export type T_NOISE_MODELSPECAvgAggregateOutputType = {
    ID: number | null
    NOISE_63HZ: Decimal | null
    NOISE_125HZ: Decimal | null
    NOISE_250HZ: Decimal | null
    NOISE_500HZ: Decimal | null
    NOISE_1KHZ: Decimal | null
    NOISE_2KHZ: Decimal | null
    NOISE_4KHZ: Decimal | null
    NOISE_8KHZ: Decimal | null
    NOISE_OVERALL: Decimal | null
    REDUCED_CAPA_RATIO: number | null
  }

  export type T_NOISE_MODELSPECSumAggregateOutputType = {
    ID: number | null
    NOISE_63HZ: Decimal | null
    NOISE_125HZ: Decimal | null
    NOISE_250HZ: Decimal | null
    NOISE_500HZ: Decimal | null
    NOISE_1KHZ: Decimal | null
    NOISE_2KHZ: Decimal | null
    NOISE_4KHZ: Decimal | null
    NOISE_8KHZ: Decimal | null
    NOISE_OVERALL: Decimal | null
    REDUCED_CAPA_RATIO: number | null
  }

  export type T_NOISE_MODELSPECMinAggregateOutputType = {
    ID: number | null
    PRODUCT_TYPE: string | null
    FUNCTION_NAME: string | null
    FUNCTION_STEP: string | null
    MODEL_NAME: string | null
    DATA_TYPE: string | null
    NOISE_63HZ: Decimal | null
    NOISE_125HZ: Decimal | null
    NOISE_250HZ: Decimal | null
    NOISE_500HZ: Decimal | null
    NOISE_1KHZ: Decimal | null
    NOISE_2KHZ: Decimal | null
    NOISE_4KHZ: Decimal | null
    NOISE_8KHZ: Decimal | null
    NOISE_OVERALL: Decimal | null
    REDUCED_CAPA_RATIO: number | null
    DISCHARGE: string | null
  }

  export type T_NOISE_MODELSPECMaxAggregateOutputType = {
    ID: number | null
    PRODUCT_TYPE: string | null
    FUNCTION_NAME: string | null
    FUNCTION_STEP: string | null
    MODEL_NAME: string | null
    DATA_TYPE: string | null
    NOISE_63HZ: Decimal | null
    NOISE_125HZ: Decimal | null
    NOISE_250HZ: Decimal | null
    NOISE_500HZ: Decimal | null
    NOISE_1KHZ: Decimal | null
    NOISE_2KHZ: Decimal | null
    NOISE_4KHZ: Decimal | null
    NOISE_8KHZ: Decimal | null
    NOISE_OVERALL: Decimal | null
    REDUCED_CAPA_RATIO: number | null
    DISCHARGE: string | null
  }

  export type T_NOISE_MODELSPECCountAggregateOutputType = {
    ID: number
    PRODUCT_TYPE: number
    FUNCTION_NAME: number
    FUNCTION_STEP: number
    MODEL_NAME: number
    DATA_TYPE: number
    NOISE_63HZ: number
    NOISE_125HZ: number
    NOISE_250HZ: number
    NOISE_500HZ: number
    NOISE_1KHZ: number
    NOISE_2KHZ: number
    NOISE_4KHZ: number
    NOISE_8KHZ: number
    NOISE_OVERALL: number
    REDUCED_CAPA_RATIO: number
    DISCHARGE: number
    _all: number
  }


  export type T_NOISE_MODELSPECAvgAggregateInputType = {
    ID?: true
    NOISE_63HZ?: true
    NOISE_125HZ?: true
    NOISE_250HZ?: true
    NOISE_500HZ?: true
    NOISE_1KHZ?: true
    NOISE_2KHZ?: true
    NOISE_4KHZ?: true
    NOISE_8KHZ?: true
    NOISE_OVERALL?: true
    REDUCED_CAPA_RATIO?: true
  }

  export type T_NOISE_MODELSPECSumAggregateInputType = {
    ID?: true
    NOISE_63HZ?: true
    NOISE_125HZ?: true
    NOISE_250HZ?: true
    NOISE_500HZ?: true
    NOISE_1KHZ?: true
    NOISE_2KHZ?: true
    NOISE_4KHZ?: true
    NOISE_8KHZ?: true
    NOISE_OVERALL?: true
    REDUCED_CAPA_RATIO?: true
  }

  export type T_NOISE_MODELSPECMinAggregateInputType = {
    ID?: true
    PRODUCT_TYPE?: true
    FUNCTION_NAME?: true
    FUNCTION_STEP?: true
    MODEL_NAME?: true
    DATA_TYPE?: true
    NOISE_63HZ?: true
    NOISE_125HZ?: true
    NOISE_250HZ?: true
    NOISE_500HZ?: true
    NOISE_1KHZ?: true
    NOISE_2KHZ?: true
    NOISE_4KHZ?: true
    NOISE_8KHZ?: true
    NOISE_OVERALL?: true
    REDUCED_CAPA_RATIO?: true
    DISCHARGE?: true
  }

  export type T_NOISE_MODELSPECMaxAggregateInputType = {
    ID?: true
    PRODUCT_TYPE?: true
    FUNCTION_NAME?: true
    FUNCTION_STEP?: true
    MODEL_NAME?: true
    DATA_TYPE?: true
    NOISE_63HZ?: true
    NOISE_125HZ?: true
    NOISE_250HZ?: true
    NOISE_500HZ?: true
    NOISE_1KHZ?: true
    NOISE_2KHZ?: true
    NOISE_4KHZ?: true
    NOISE_8KHZ?: true
    NOISE_OVERALL?: true
    REDUCED_CAPA_RATIO?: true
    DISCHARGE?: true
  }

  export type T_NOISE_MODELSPECCountAggregateInputType = {
    ID?: true
    PRODUCT_TYPE?: true
    FUNCTION_NAME?: true
    FUNCTION_STEP?: true
    MODEL_NAME?: true
    DATA_TYPE?: true
    NOISE_63HZ?: true
    NOISE_125HZ?: true
    NOISE_250HZ?: true
    NOISE_500HZ?: true
    NOISE_1KHZ?: true
    NOISE_2KHZ?: true
    NOISE_4KHZ?: true
    NOISE_8KHZ?: true
    NOISE_OVERALL?: true
    REDUCED_CAPA_RATIO?: true
    DISCHARGE?: true
    _all?: true
  }

  export type T_NOISE_MODELSPECAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_MODELSPEC to aggregate.
     */
    where?: T_NOISE_MODELSPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_MODELSPECS to fetch.
     */
    orderBy?: T_NOISE_MODELSPECOrderByWithRelationInput | T_NOISE_MODELSPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_NOISE_MODELSPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_MODELSPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_MODELSPECS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_NOISE_MODELSPECS
    **/
    _count?: true | T_NOISE_MODELSPECCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_NOISE_MODELSPECAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_NOISE_MODELSPECSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_NOISE_MODELSPECMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_NOISE_MODELSPECMaxAggregateInputType
  }

  export type GetT_NOISE_MODELSPECAggregateType<T extends T_NOISE_MODELSPECAggregateArgs> = {
        [P in keyof T & keyof AggregateT_NOISE_MODELSPEC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_NOISE_MODELSPEC[P]>
      : GetScalarType<T[P], AggregateT_NOISE_MODELSPEC[P]>
  }




  export type T_NOISE_MODELSPECGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_NOISE_MODELSPECWhereInput
    orderBy?: T_NOISE_MODELSPECOrderByWithAggregationInput | T_NOISE_MODELSPECOrderByWithAggregationInput[]
    by: T_NOISE_MODELSPECScalarFieldEnum[] | T_NOISE_MODELSPECScalarFieldEnum
    having?: T_NOISE_MODELSPECScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_NOISE_MODELSPECCountAggregateInputType | true
    _avg?: T_NOISE_MODELSPECAvgAggregateInputType
    _sum?: T_NOISE_MODELSPECSumAggregateInputType
    _min?: T_NOISE_MODELSPECMinAggregateInputType
    _max?: T_NOISE_MODELSPECMaxAggregateInputType
  }

  export type T_NOISE_MODELSPECGroupByOutputType = {
    ID: number
    PRODUCT_TYPE: string
    FUNCTION_NAME: string
    FUNCTION_STEP: string | null
    MODEL_NAME: string
    DATA_TYPE: string
    NOISE_63HZ: Decimal | null
    NOISE_125HZ: Decimal | null
    NOISE_250HZ: Decimal | null
    NOISE_500HZ: Decimal | null
    NOISE_1KHZ: Decimal | null
    NOISE_2KHZ: Decimal | null
    NOISE_4KHZ: Decimal | null
    NOISE_8KHZ: Decimal | null
    NOISE_OVERALL: Decimal | null
    REDUCED_CAPA_RATIO: number | null
    DISCHARGE: string | null
    _count: T_NOISE_MODELSPECCountAggregateOutputType | null
    _avg: T_NOISE_MODELSPECAvgAggregateOutputType | null
    _sum: T_NOISE_MODELSPECSumAggregateOutputType | null
    _min: T_NOISE_MODELSPECMinAggregateOutputType | null
    _max: T_NOISE_MODELSPECMaxAggregateOutputType | null
  }

  type GetT_NOISE_MODELSPECGroupByPayload<T extends T_NOISE_MODELSPECGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_NOISE_MODELSPECGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_NOISE_MODELSPECGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_NOISE_MODELSPECGroupByOutputType[P]>
            : GetScalarType<T[P], T_NOISE_MODELSPECGroupByOutputType[P]>
        }
      >
    >


  export type T_NOISE_MODELSPECSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    PRODUCT_TYPE?: boolean
    FUNCTION_NAME?: boolean
    FUNCTION_STEP?: boolean
    MODEL_NAME?: boolean
    DATA_TYPE?: boolean
    NOISE_63HZ?: boolean
    NOISE_125HZ?: boolean
    NOISE_250HZ?: boolean
    NOISE_500HZ?: boolean
    NOISE_1KHZ?: boolean
    NOISE_2KHZ?: boolean
    NOISE_4KHZ?: boolean
    NOISE_8KHZ?: boolean
    NOISE_OVERALL?: boolean
    REDUCED_CAPA_RATIO?: boolean
    DISCHARGE?: boolean
  }, ExtArgs["result"]["t_NOISE_MODELSPEC"]>

  export type T_NOISE_MODELSPECSelectScalar = {
    ID?: boolean
    PRODUCT_TYPE?: boolean
    FUNCTION_NAME?: boolean
    FUNCTION_STEP?: boolean
    MODEL_NAME?: boolean
    DATA_TYPE?: boolean
    NOISE_63HZ?: boolean
    NOISE_125HZ?: boolean
    NOISE_250HZ?: boolean
    NOISE_500HZ?: boolean
    NOISE_1KHZ?: boolean
    NOISE_2KHZ?: boolean
    NOISE_4KHZ?: boolean
    NOISE_8KHZ?: boolean
    NOISE_OVERALL?: boolean
    REDUCED_CAPA_RATIO?: boolean
    DISCHARGE?: boolean
  }



  export type $T_NOISE_MODELSPECPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_NOISE_MODELSPEC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      PRODUCT_TYPE: string
      FUNCTION_NAME: string
      FUNCTION_STEP: string | null
      MODEL_NAME: string
      DATA_TYPE: string
      NOISE_63HZ: Prisma.Decimal | null
      NOISE_125HZ: Prisma.Decimal | null
      NOISE_250HZ: Prisma.Decimal | null
      NOISE_500HZ: Prisma.Decimal | null
      NOISE_1KHZ: Prisma.Decimal | null
      NOISE_2KHZ: Prisma.Decimal | null
      NOISE_4KHZ: Prisma.Decimal | null
      NOISE_8KHZ: Prisma.Decimal | null
      NOISE_OVERALL: Prisma.Decimal | null
      REDUCED_CAPA_RATIO: number | null
      DISCHARGE: string | null
    }, ExtArgs["result"]["t_NOISE_MODELSPEC"]>
    composites: {}
  }


  type T_NOISE_MODELSPECGetPayload<S extends boolean | null | undefined | T_NOISE_MODELSPECDefaultArgs> = $Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload, S>

  type T_NOISE_MODELSPECCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<T_NOISE_MODELSPECFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: T_NOISE_MODELSPECCountAggregateInputType | true
    }

  export interface T_NOISE_MODELSPECDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_NOISE_MODELSPEC'], meta: { name: 'T_NOISE_MODELSPEC' } }
    /**
     * Find zero or one T_NOISE_MODELSPEC that matches the filter.
     * @param {T_NOISE_MODELSPECFindUniqueArgs} args - Arguments to find a T_NOISE_MODELSPEC
     * @example
     * // Get one T_NOISE_MODELSPEC
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_NOISE_MODELSPECFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_MODELSPECFindUniqueArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_NOISE_MODELSPEC that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {T_NOISE_MODELSPECFindUniqueOrThrowArgs} args - Arguments to find a T_NOISE_MODELSPEC
     * @example
     * // Get one T_NOISE_MODELSPEC
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_NOISE_MODELSPECFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_MODELSPECFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_NOISE_MODELSPEC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_MODELSPECFindFirstArgs} args - Arguments to find a T_NOISE_MODELSPEC
     * @example
     * // Get one T_NOISE_MODELSPEC
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_NOISE_MODELSPECFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_MODELSPECFindFirstArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_NOISE_MODELSPEC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_MODELSPECFindFirstOrThrowArgs} args - Arguments to find a T_NOISE_MODELSPEC
     * @example
     * // Get one T_NOISE_MODELSPEC
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_NOISE_MODELSPECFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_MODELSPECFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_NOISE_MODELSPECS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_MODELSPECFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_NOISE_MODELSPECS
     * const t_NOISE_MODELSPECS = await prisma.t_NOISE_MODELSPEC.findMany()
     * 
     * // Get first 10 T_NOISE_MODELSPECS
     * const t_NOISE_MODELSPECS = await prisma.t_NOISE_MODELSPEC.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const t_NOISE_MODELSPECWithIDOnly = await prisma.t_NOISE_MODELSPEC.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends T_NOISE_MODELSPECFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_MODELSPECFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_NOISE_MODELSPEC.
     * @param {T_NOISE_MODELSPECCreateArgs} args - Arguments to create a T_NOISE_MODELSPEC.
     * @example
     * // Create one T_NOISE_MODELSPEC
     * const T_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.create({
     *   data: {
     *     // ... data to create a T_NOISE_MODELSPEC
     *   }
     * })
     * 
    **/
    create<T extends T_NOISE_MODELSPECCreateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_MODELSPECCreateArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_NOISE_MODELSPECS.
     * @param {T_NOISE_MODELSPECCreateManyArgs} args - Arguments to create many T_NOISE_MODELSPECS.
     * @example
     * // Create many T_NOISE_MODELSPECS
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends T_NOISE_MODELSPECCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_MODELSPECCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_NOISE_MODELSPEC.
     * @param {T_NOISE_MODELSPECDeleteArgs} args - Arguments to delete one T_NOISE_MODELSPEC.
     * @example
     * // Delete one T_NOISE_MODELSPEC
     * const T_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.delete({
     *   where: {
     *     // ... filter to delete one T_NOISE_MODELSPEC
     *   }
     * })
     * 
    **/
    delete<T extends T_NOISE_MODELSPECDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_MODELSPECDeleteArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_NOISE_MODELSPEC.
     * @param {T_NOISE_MODELSPECUpdateArgs} args - Arguments to update one T_NOISE_MODELSPEC.
     * @example
     * // Update one T_NOISE_MODELSPEC
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_NOISE_MODELSPECUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_MODELSPECUpdateArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_NOISE_MODELSPECS.
     * @param {T_NOISE_MODELSPECDeleteManyArgs} args - Arguments to filter T_NOISE_MODELSPECS to delete.
     * @example
     * // Delete a few T_NOISE_MODELSPECS
     * const { count } = await prisma.t_NOISE_MODELSPEC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_NOISE_MODELSPECDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_MODELSPECDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_NOISE_MODELSPECS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_MODELSPECUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_NOISE_MODELSPECS
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_NOISE_MODELSPECUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_MODELSPECUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_NOISE_MODELSPEC.
     * @param {T_NOISE_MODELSPECUpsertArgs} args - Arguments to update or create a T_NOISE_MODELSPEC.
     * @example
     * // Update or create a T_NOISE_MODELSPEC
     * const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.upsert({
     *   create: {
     *     // ... data to create a T_NOISE_MODELSPEC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_NOISE_MODELSPEC we want to update
     *   }
     * })
    **/
    upsert<T extends T_NOISE_MODELSPECUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_MODELSPECUpsertArgs<ExtArgs>>
    ): Prisma__T_NOISE_MODELSPECClient<$Result.GetResult<Prisma.$T_NOISE_MODELSPECPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_NOISE_MODELSPECS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_MODELSPECCountArgs} args - Arguments to filter T_NOISE_MODELSPECS to count.
     * @example
     * // Count the number of T_NOISE_MODELSPECS
     * const count = await prisma.t_NOISE_MODELSPEC.count({
     *   where: {
     *     // ... the filter for the T_NOISE_MODELSPECS we want to count
     *   }
     * })
    **/
    count<T extends T_NOISE_MODELSPECCountArgs>(
      args?: Subset<T, T_NOISE_MODELSPECCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_NOISE_MODELSPECCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_NOISE_MODELSPEC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_MODELSPECAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_NOISE_MODELSPECAggregateArgs>(args: Subset<T, T_NOISE_MODELSPECAggregateArgs>): Prisma.PrismaPromise<GetT_NOISE_MODELSPECAggregateType<T>>

    /**
     * Group by T_NOISE_MODELSPEC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_MODELSPECGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_NOISE_MODELSPECGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_NOISE_MODELSPECGroupByArgs['orderBy'] }
        : { orderBy?: T_NOISE_MODELSPECGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_NOISE_MODELSPECGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_NOISE_MODELSPECGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_NOISE_MODELSPEC model
   */
  readonly fields: T_NOISE_MODELSPECFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_NOISE_MODELSPEC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_NOISE_MODELSPECClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the T_NOISE_MODELSPEC model
   */ 
  interface T_NOISE_MODELSPECFieldRefs {
    readonly ID: FieldRef<"T_NOISE_MODELSPEC", 'Int'>
    readonly PRODUCT_TYPE: FieldRef<"T_NOISE_MODELSPEC", 'String'>
    readonly FUNCTION_NAME: FieldRef<"T_NOISE_MODELSPEC", 'String'>
    readonly FUNCTION_STEP: FieldRef<"T_NOISE_MODELSPEC", 'String'>
    readonly MODEL_NAME: FieldRef<"T_NOISE_MODELSPEC", 'String'>
    readonly DATA_TYPE: FieldRef<"T_NOISE_MODELSPEC", 'String'>
    readonly NOISE_63HZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_125HZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_250HZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_500HZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_1KHZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_2KHZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_4KHZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_8KHZ: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly NOISE_OVERALL: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
    readonly REDUCED_CAPA_RATIO: FieldRef<"T_NOISE_MODELSPEC", 'Int'>
    readonly DISCHARGE: FieldRef<"T_NOISE_MODELSPEC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * T_NOISE_MODELSPEC findUnique
   */
  export type T_NOISE_MODELSPECFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_MODELSPEC to fetch.
     */
    where: T_NOISE_MODELSPECWhereUniqueInput
  }

  /**
   * T_NOISE_MODELSPEC findUniqueOrThrow
   */
  export type T_NOISE_MODELSPECFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_MODELSPEC to fetch.
     */
    where: T_NOISE_MODELSPECWhereUniqueInput
  }

  /**
   * T_NOISE_MODELSPEC findFirst
   */
  export type T_NOISE_MODELSPECFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_MODELSPEC to fetch.
     */
    where?: T_NOISE_MODELSPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_MODELSPECS to fetch.
     */
    orderBy?: T_NOISE_MODELSPECOrderByWithRelationInput | T_NOISE_MODELSPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_MODELSPECS.
     */
    cursor?: T_NOISE_MODELSPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_MODELSPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_MODELSPECS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_MODELSPECS.
     */
    distinct?: T_NOISE_MODELSPECScalarFieldEnum | T_NOISE_MODELSPECScalarFieldEnum[]
  }

  /**
   * T_NOISE_MODELSPEC findFirstOrThrow
   */
  export type T_NOISE_MODELSPECFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_MODELSPEC to fetch.
     */
    where?: T_NOISE_MODELSPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_MODELSPECS to fetch.
     */
    orderBy?: T_NOISE_MODELSPECOrderByWithRelationInput | T_NOISE_MODELSPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_MODELSPECS.
     */
    cursor?: T_NOISE_MODELSPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_MODELSPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_MODELSPECS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_MODELSPECS.
     */
    distinct?: T_NOISE_MODELSPECScalarFieldEnum | T_NOISE_MODELSPECScalarFieldEnum[]
  }

  /**
   * T_NOISE_MODELSPEC findMany
   */
  export type T_NOISE_MODELSPECFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_MODELSPECS to fetch.
     */
    where?: T_NOISE_MODELSPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_MODELSPECS to fetch.
     */
    orderBy?: T_NOISE_MODELSPECOrderByWithRelationInput | T_NOISE_MODELSPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_NOISE_MODELSPECS.
     */
    cursor?: T_NOISE_MODELSPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_MODELSPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_MODELSPECS.
     */
    skip?: number
    distinct?: T_NOISE_MODELSPECScalarFieldEnum | T_NOISE_MODELSPECScalarFieldEnum[]
  }

  /**
   * T_NOISE_MODELSPEC create
   */
  export type T_NOISE_MODELSPECCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * The data needed to create a T_NOISE_MODELSPEC.
     */
    data: XOR<T_NOISE_MODELSPECCreateInput, T_NOISE_MODELSPECUncheckedCreateInput>
  }

  /**
   * T_NOISE_MODELSPEC createMany
   */
  export type T_NOISE_MODELSPECCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_NOISE_MODELSPECS.
     */
    data: T_NOISE_MODELSPECCreateManyInput | T_NOISE_MODELSPECCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_NOISE_MODELSPEC update
   */
  export type T_NOISE_MODELSPECUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * The data needed to update a T_NOISE_MODELSPEC.
     */
    data: XOR<T_NOISE_MODELSPECUpdateInput, T_NOISE_MODELSPECUncheckedUpdateInput>
    /**
     * Choose, which T_NOISE_MODELSPEC to update.
     */
    where: T_NOISE_MODELSPECWhereUniqueInput
  }

  /**
   * T_NOISE_MODELSPEC updateMany
   */
  export type T_NOISE_MODELSPECUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_NOISE_MODELSPECS.
     */
    data: XOR<T_NOISE_MODELSPECUpdateManyMutationInput, T_NOISE_MODELSPECUncheckedUpdateManyInput>
    /**
     * Filter which T_NOISE_MODELSPECS to update
     */
    where?: T_NOISE_MODELSPECWhereInput
  }

  /**
   * T_NOISE_MODELSPEC upsert
   */
  export type T_NOISE_MODELSPECUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * The filter to search for the T_NOISE_MODELSPEC to update in case it exists.
     */
    where: T_NOISE_MODELSPECWhereUniqueInput
    /**
     * In case the T_NOISE_MODELSPEC found by the `where` argument doesn't exist, create a new T_NOISE_MODELSPEC with this data.
     */
    create: XOR<T_NOISE_MODELSPECCreateInput, T_NOISE_MODELSPECUncheckedCreateInput>
    /**
     * In case the T_NOISE_MODELSPEC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_NOISE_MODELSPECUpdateInput, T_NOISE_MODELSPECUncheckedUpdateInput>
  }

  /**
   * T_NOISE_MODELSPEC delete
   */
  export type T_NOISE_MODELSPECDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
    /**
     * Filter which T_NOISE_MODELSPEC to delete.
     */
    where: T_NOISE_MODELSPECWhereUniqueInput
  }

  /**
   * T_NOISE_MODELSPEC deleteMany
   */
  export type T_NOISE_MODELSPECDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_MODELSPECS to delete
     */
    where?: T_NOISE_MODELSPECWhereInput
  }

  /**
   * T_NOISE_MODELSPEC without action
   */
  export type T_NOISE_MODELSPECDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_MODELSPEC
     */
    select?: T_NOISE_MODELSPECSelect<ExtArgs> | null
  }


  /**
   * Model T_NOISE_PRODUCTTYPE
   */

  export type AggregateT_NOISE_PRODUCTTYPE = {
    _count: T_NOISE_PRODUCTTYPECountAggregateOutputType | null
    _avg: T_NOISE_PRODUCTTYPEAvgAggregateOutputType | null
    _sum: T_NOISE_PRODUCTTYPESumAggregateOutputType | null
    _min: T_NOISE_PRODUCTTYPEMinAggregateOutputType | null
    _max: T_NOISE_PRODUCTTYPEMaxAggregateOutputType | null
  }

  export type T_NOISE_PRODUCTTYPEAvgAggregateOutputType = {
    ID: number | null
    VISIBLE: number | null
  }

  export type T_NOISE_PRODUCTTYPESumAggregateOutputType = {
    ID: number | null
    VISIBLE: number | null
  }

  export type T_NOISE_PRODUCTTYPEMinAggregateOutputType = {
    ID: number | null
    PRODUCT_TYPE: string | null
    VISIBLE: number | null
    FUNCNAME_LIST: string | null
  }

  export type T_NOISE_PRODUCTTYPEMaxAggregateOutputType = {
    ID: number | null
    PRODUCT_TYPE: string | null
    VISIBLE: number | null
    FUNCNAME_LIST: string | null
  }

  export type T_NOISE_PRODUCTTYPECountAggregateOutputType = {
    ID: number
    PRODUCT_TYPE: number
    VISIBLE: number
    FUNCNAME_LIST: number
    _all: number
  }


  export type T_NOISE_PRODUCTTYPEAvgAggregateInputType = {
    ID?: true
    VISIBLE?: true
  }

  export type T_NOISE_PRODUCTTYPESumAggregateInputType = {
    ID?: true
    VISIBLE?: true
  }

  export type T_NOISE_PRODUCTTYPEMinAggregateInputType = {
    ID?: true
    PRODUCT_TYPE?: true
    VISIBLE?: true
    FUNCNAME_LIST?: true
  }

  export type T_NOISE_PRODUCTTYPEMaxAggregateInputType = {
    ID?: true
    PRODUCT_TYPE?: true
    VISIBLE?: true
    FUNCNAME_LIST?: true
  }

  export type T_NOISE_PRODUCTTYPECountAggregateInputType = {
    ID?: true
    PRODUCT_TYPE?: true
    VISIBLE?: true
    FUNCNAME_LIST?: true
    _all?: true
  }

  export type T_NOISE_PRODUCTTYPEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_PRODUCTTYPE to aggregate.
     */
    where?: T_NOISE_PRODUCTTYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_PRODUCTTYPES to fetch.
     */
    orderBy?: T_NOISE_PRODUCTTYPEOrderByWithRelationInput | T_NOISE_PRODUCTTYPEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_NOISE_PRODUCTTYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_PRODUCTTYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_PRODUCTTYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_NOISE_PRODUCTTYPES
    **/
    _count?: true | T_NOISE_PRODUCTTYPECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_NOISE_PRODUCTTYPEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_NOISE_PRODUCTTYPESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_NOISE_PRODUCTTYPEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_NOISE_PRODUCTTYPEMaxAggregateInputType
  }

  export type GetT_NOISE_PRODUCTTYPEAggregateType<T extends T_NOISE_PRODUCTTYPEAggregateArgs> = {
        [P in keyof T & keyof AggregateT_NOISE_PRODUCTTYPE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_NOISE_PRODUCTTYPE[P]>
      : GetScalarType<T[P], AggregateT_NOISE_PRODUCTTYPE[P]>
  }




  export type T_NOISE_PRODUCTTYPEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_NOISE_PRODUCTTYPEWhereInput
    orderBy?: T_NOISE_PRODUCTTYPEOrderByWithAggregationInput | T_NOISE_PRODUCTTYPEOrderByWithAggregationInput[]
    by: T_NOISE_PRODUCTTYPEScalarFieldEnum[] | T_NOISE_PRODUCTTYPEScalarFieldEnum
    having?: T_NOISE_PRODUCTTYPEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_NOISE_PRODUCTTYPECountAggregateInputType | true
    _avg?: T_NOISE_PRODUCTTYPEAvgAggregateInputType
    _sum?: T_NOISE_PRODUCTTYPESumAggregateInputType
    _min?: T_NOISE_PRODUCTTYPEMinAggregateInputType
    _max?: T_NOISE_PRODUCTTYPEMaxAggregateInputType
  }

  export type T_NOISE_PRODUCTTYPEGroupByOutputType = {
    ID: number
    PRODUCT_TYPE: string
    VISIBLE: number
    FUNCNAME_LIST: string | null
    _count: T_NOISE_PRODUCTTYPECountAggregateOutputType | null
    _avg: T_NOISE_PRODUCTTYPEAvgAggregateOutputType | null
    _sum: T_NOISE_PRODUCTTYPESumAggregateOutputType | null
    _min: T_NOISE_PRODUCTTYPEMinAggregateOutputType | null
    _max: T_NOISE_PRODUCTTYPEMaxAggregateOutputType | null
  }

  type GetT_NOISE_PRODUCTTYPEGroupByPayload<T extends T_NOISE_PRODUCTTYPEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_NOISE_PRODUCTTYPEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_NOISE_PRODUCTTYPEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_NOISE_PRODUCTTYPEGroupByOutputType[P]>
            : GetScalarType<T[P], T_NOISE_PRODUCTTYPEGroupByOutputType[P]>
        }
      >
    >


  export type T_NOISE_PRODUCTTYPESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    PRODUCT_TYPE?: boolean
    VISIBLE?: boolean
    FUNCNAME_LIST?: boolean
  }, ExtArgs["result"]["t_NOISE_PRODUCTTYPE"]>

  export type T_NOISE_PRODUCTTYPESelectScalar = {
    ID?: boolean
    PRODUCT_TYPE?: boolean
    VISIBLE?: boolean
    FUNCNAME_LIST?: boolean
  }



  export type $T_NOISE_PRODUCTTYPEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_NOISE_PRODUCTTYPE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      PRODUCT_TYPE: string
      VISIBLE: number
      FUNCNAME_LIST: string | null
    }, ExtArgs["result"]["t_NOISE_PRODUCTTYPE"]>
    composites: {}
  }


  type T_NOISE_PRODUCTTYPEGetPayload<S extends boolean | null | undefined | T_NOISE_PRODUCTTYPEDefaultArgs> = $Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload, S>

  type T_NOISE_PRODUCTTYPECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<T_NOISE_PRODUCTTYPEFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: T_NOISE_PRODUCTTYPECountAggregateInputType | true
    }

  export interface T_NOISE_PRODUCTTYPEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_NOISE_PRODUCTTYPE'], meta: { name: 'T_NOISE_PRODUCTTYPE' } }
    /**
     * Find zero or one T_NOISE_PRODUCTTYPE that matches the filter.
     * @param {T_NOISE_PRODUCTTYPEFindUniqueArgs} args - Arguments to find a T_NOISE_PRODUCTTYPE
     * @example
     * // Get one T_NOISE_PRODUCTTYPE
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_NOISE_PRODUCTTYPEFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_PRODUCTTYPEFindUniqueArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_NOISE_PRODUCTTYPE that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {T_NOISE_PRODUCTTYPEFindUniqueOrThrowArgs} args - Arguments to find a T_NOISE_PRODUCTTYPE
     * @example
     * // Get one T_NOISE_PRODUCTTYPE
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_NOISE_PRODUCTTYPEFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_PRODUCTTYPEFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_NOISE_PRODUCTTYPE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_PRODUCTTYPEFindFirstArgs} args - Arguments to find a T_NOISE_PRODUCTTYPE
     * @example
     * // Get one T_NOISE_PRODUCTTYPE
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_NOISE_PRODUCTTYPEFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_PRODUCTTYPEFindFirstArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_NOISE_PRODUCTTYPE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_PRODUCTTYPEFindFirstOrThrowArgs} args - Arguments to find a T_NOISE_PRODUCTTYPE
     * @example
     * // Get one T_NOISE_PRODUCTTYPE
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_NOISE_PRODUCTTYPEFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_PRODUCTTYPEFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_NOISE_PRODUCTTYPES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_PRODUCTTYPEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_NOISE_PRODUCTTYPES
     * const t_NOISE_PRODUCTTYPES = await prisma.t_NOISE_PRODUCTTYPE.findMany()
     * 
     * // Get first 10 T_NOISE_PRODUCTTYPES
     * const t_NOISE_PRODUCTTYPES = await prisma.t_NOISE_PRODUCTTYPE.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const t_NOISE_PRODUCTTYPEWithIDOnly = await prisma.t_NOISE_PRODUCTTYPE.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends T_NOISE_PRODUCTTYPEFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_PRODUCTTYPEFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_NOISE_PRODUCTTYPE.
     * @param {T_NOISE_PRODUCTTYPECreateArgs} args - Arguments to create a T_NOISE_PRODUCTTYPE.
     * @example
     * // Create one T_NOISE_PRODUCTTYPE
     * const T_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.create({
     *   data: {
     *     // ... data to create a T_NOISE_PRODUCTTYPE
     *   }
     * })
     * 
    **/
    create<T extends T_NOISE_PRODUCTTYPECreateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_PRODUCTTYPECreateArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_NOISE_PRODUCTTYPES.
     * @param {T_NOISE_PRODUCTTYPECreateManyArgs} args - Arguments to create many T_NOISE_PRODUCTTYPES.
     * @example
     * // Create many T_NOISE_PRODUCTTYPES
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends T_NOISE_PRODUCTTYPECreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_PRODUCTTYPECreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_NOISE_PRODUCTTYPE.
     * @param {T_NOISE_PRODUCTTYPEDeleteArgs} args - Arguments to delete one T_NOISE_PRODUCTTYPE.
     * @example
     * // Delete one T_NOISE_PRODUCTTYPE
     * const T_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.delete({
     *   where: {
     *     // ... filter to delete one T_NOISE_PRODUCTTYPE
     *   }
     * })
     * 
    **/
    delete<T extends T_NOISE_PRODUCTTYPEDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_PRODUCTTYPEDeleteArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_NOISE_PRODUCTTYPE.
     * @param {T_NOISE_PRODUCTTYPEUpdateArgs} args - Arguments to update one T_NOISE_PRODUCTTYPE.
     * @example
     * // Update one T_NOISE_PRODUCTTYPE
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_NOISE_PRODUCTTYPEUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_PRODUCTTYPEUpdateArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_NOISE_PRODUCTTYPES.
     * @param {T_NOISE_PRODUCTTYPEDeleteManyArgs} args - Arguments to filter T_NOISE_PRODUCTTYPES to delete.
     * @example
     * // Delete a few T_NOISE_PRODUCTTYPES
     * const { count } = await prisma.t_NOISE_PRODUCTTYPE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_NOISE_PRODUCTTYPEDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_PRODUCTTYPEDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_NOISE_PRODUCTTYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_PRODUCTTYPEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_NOISE_PRODUCTTYPES
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_NOISE_PRODUCTTYPEUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_PRODUCTTYPEUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_NOISE_PRODUCTTYPE.
     * @param {T_NOISE_PRODUCTTYPEUpsertArgs} args - Arguments to update or create a T_NOISE_PRODUCTTYPE.
     * @example
     * // Update or create a T_NOISE_PRODUCTTYPE
     * const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.upsert({
     *   create: {
     *     // ... data to create a T_NOISE_PRODUCTTYPE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_NOISE_PRODUCTTYPE we want to update
     *   }
     * })
    **/
    upsert<T extends T_NOISE_PRODUCTTYPEUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_PRODUCTTYPEUpsertArgs<ExtArgs>>
    ): Prisma__T_NOISE_PRODUCTTYPEClient<$Result.GetResult<Prisma.$T_NOISE_PRODUCTTYPEPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_NOISE_PRODUCTTYPES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_PRODUCTTYPECountArgs} args - Arguments to filter T_NOISE_PRODUCTTYPES to count.
     * @example
     * // Count the number of T_NOISE_PRODUCTTYPES
     * const count = await prisma.t_NOISE_PRODUCTTYPE.count({
     *   where: {
     *     // ... the filter for the T_NOISE_PRODUCTTYPES we want to count
     *   }
     * })
    **/
    count<T extends T_NOISE_PRODUCTTYPECountArgs>(
      args?: Subset<T, T_NOISE_PRODUCTTYPECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_NOISE_PRODUCTTYPECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_NOISE_PRODUCTTYPE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_PRODUCTTYPEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_NOISE_PRODUCTTYPEAggregateArgs>(args: Subset<T, T_NOISE_PRODUCTTYPEAggregateArgs>): Prisma.PrismaPromise<GetT_NOISE_PRODUCTTYPEAggregateType<T>>

    /**
     * Group by T_NOISE_PRODUCTTYPE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_PRODUCTTYPEGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_NOISE_PRODUCTTYPEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_NOISE_PRODUCTTYPEGroupByArgs['orderBy'] }
        : { orderBy?: T_NOISE_PRODUCTTYPEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_NOISE_PRODUCTTYPEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_NOISE_PRODUCTTYPEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_NOISE_PRODUCTTYPE model
   */
  readonly fields: T_NOISE_PRODUCTTYPEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_NOISE_PRODUCTTYPE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_NOISE_PRODUCTTYPEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the T_NOISE_PRODUCTTYPE model
   */ 
  interface T_NOISE_PRODUCTTYPEFieldRefs {
    readonly ID: FieldRef<"T_NOISE_PRODUCTTYPE", 'Int'>
    readonly PRODUCT_TYPE: FieldRef<"T_NOISE_PRODUCTTYPE", 'String'>
    readonly VISIBLE: FieldRef<"T_NOISE_PRODUCTTYPE", 'Int'>
    readonly FUNCNAME_LIST: FieldRef<"T_NOISE_PRODUCTTYPE", 'String'>
  }
    

  // Custom InputTypes
  /**
   * T_NOISE_PRODUCTTYPE findUnique
   */
  export type T_NOISE_PRODUCTTYPEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_PRODUCTTYPE to fetch.
     */
    where: T_NOISE_PRODUCTTYPEWhereUniqueInput
  }

  /**
   * T_NOISE_PRODUCTTYPE findUniqueOrThrow
   */
  export type T_NOISE_PRODUCTTYPEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_PRODUCTTYPE to fetch.
     */
    where: T_NOISE_PRODUCTTYPEWhereUniqueInput
  }

  /**
   * T_NOISE_PRODUCTTYPE findFirst
   */
  export type T_NOISE_PRODUCTTYPEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_PRODUCTTYPE to fetch.
     */
    where?: T_NOISE_PRODUCTTYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_PRODUCTTYPES to fetch.
     */
    orderBy?: T_NOISE_PRODUCTTYPEOrderByWithRelationInput | T_NOISE_PRODUCTTYPEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_PRODUCTTYPES.
     */
    cursor?: T_NOISE_PRODUCTTYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_PRODUCTTYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_PRODUCTTYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_PRODUCTTYPES.
     */
    distinct?: T_NOISE_PRODUCTTYPEScalarFieldEnum | T_NOISE_PRODUCTTYPEScalarFieldEnum[]
  }

  /**
   * T_NOISE_PRODUCTTYPE findFirstOrThrow
   */
  export type T_NOISE_PRODUCTTYPEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_PRODUCTTYPE to fetch.
     */
    where?: T_NOISE_PRODUCTTYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_PRODUCTTYPES to fetch.
     */
    orderBy?: T_NOISE_PRODUCTTYPEOrderByWithRelationInput | T_NOISE_PRODUCTTYPEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_PRODUCTTYPES.
     */
    cursor?: T_NOISE_PRODUCTTYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_PRODUCTTYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_PRODUCTTYPES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_PRODUCTTYPES.
     */
    distinct?: T_NOISE_PRODUCTTYPEScalarFieldEnum | T_NOISE_PRODUCTTYPEScalarFieldEnum[]
  }

  /**
   * T_NOISE_PRODUCTTYPE findMany
   */
  export type T_NOISE_PRODUCTTYPEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_PRODUCTTYPES to fetch.
     */
    where?: T_NOISE_PRODUCTTYPEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_PRODUCTTYPES to fetch.
     */
    orderBy?: T_NOISE_PRODUCTTYPEOrderByWithRelationInput | T_NOISE_PRODUCTTYPEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_NOISE_PRODUCTTYPES.
     */
    cursor?: T_NOISE_PRODUCTTYPEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_PRODUCTTYPES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_PRODUCTTYPES.
     */
    skip?: number
    distinct?: T_NOISE_PRODUCTTYPEScalarFieldEnum | T_NOISE_PRODUCTTYPEScalarFieldEnum[]
  }

  /**
   * T_NOISE_PRODUCTTYPE create
   */
  export type T_NOISE_PRODUCTTYPECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * The data needed to create a T_NOISE_PRODUCTTYPE.
     */
    data: XOR<T_NOISE_PRODUCTTYPECreateInput, T_NOISE_PRODUCTTYPEUncheckedCreateInput>
  }

  /**
   * T_NOISE_PRODUCTTYPE createMany
   */
  export type T_NOISE_PRODUCTTYPECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_NOISE_PRODUCTTYPES.
     */
    data: T_NOISE_PRODUCTTYPECreateManyInput | T_NOISE_PRODUCTTYPECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_NOISE_PRODUCTTYPE update
   */
  export type T_NOISE_PRODUCTTYPEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * The data needed to update a T_NOISE_PRODUCTTYPE.
     */
    data: XOR<T_NOISE_PRODUCTTYPEUpdateInput, T_NOISE_PRODUCTTYPEUncheckedUpdateInput>
    /**
     * Choose, which T_NOISE_PRODUCTTYPE to update.
     */
    where: T_NOISE_PRODUCTTYPEWhereUniqueInput
  }

  /**
   * T_NOISE_PRODUCTTYPE updateMany
   */
  export type T_NOISE_PRODUCTTYPEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_NOISE_PRODUCTTYPES.
     */
    data: XOR<T_NOISE_PRODUCTTYPEUpdateManyMutationInput, T_NOISE_PRODUCTTYPEUncheckedUpdateManyInput>
    /**
     * Filter which T_NOISE_PRODUCTTYPES to update
     */
    where?: T_NOISE_PRODUCTTYPEWhereInput
  }

  /**
   * T_NOISE_PRODUCTTYPE upsert
   */
  export type T_NOISE_PRODUCTTYPEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * The filter to search for the T_NOISE_PRODUCTTYPE to update in case it exists.
     */
    where: T_NOISE_PRODUCTTYPEWhereUniqueInput
    /**
     * In case the T_NOISE_PRODUCTTYPE found by the `where` argument doesn't exist, create a new T_NOISE_PRODUCTTYPE with this data.
     */
    create: XOR<T_NOISE_PRODUCTTYPECreateInput, T_NOISE_PRODUCTTYPEUncheckedCreateInput>
    /**
     * In case the T_NOISE_PRODUCTTYPE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_NOISE_PRODUCTTYPEUpdateInput, T_NOISE_PRODUCTTYPEUncheckedUpdateInput>
  }

  /**
   * T_NOISE_PRODUCTTYPE delete
   */
  export type T_NOISE_PRODUCTTYPEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
    /**
     * Filter which T_NOISE_PRODUCTTYPE to delete.
     */
    where: T_NOISE_PRODUCTTYPEWhereUniqueInput
  }

  /**
   * T_NOISE_PRODUCTTYPE deleteMany
   */
  export type T_NOISE_PRODUCTTYPEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_PRODUCTTYPES to delete
     */
    where?: T_NOISE_PRODUCTTYPEWhereInput
  }

  /**
   * T_NOISE_PRODUCTTYPE without action
   */
  export type T_NOISE_PRODUCTTYPEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_PRODUCTTYPE
     */
    select?: T_NOISE_PRODUCTTYPESelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const T_NOISE_FUNCNAMEScalarFieldEnum: {
    ID: 'ID',
    NAME: 'NAME',
    SELECTABLE_STEP: 'SELECTABLE_STEP'
  };

  export type T_NOISE_FUNCNAMEScalarFieldEnum = (typeof T_NOISE_FUNCNAMEScalarFieldEnum)[keyof typeof T_NOISE_FUNCNAMEScalarFieldEnum]


  export const T_NOISE_FUNCSTEPScalarFieldEnum: {
    ID: 'ID',
    STEP: 'STEP'
  };

  export type T_NOISE_FUNCSTEPScalarFieldEnum = (typeof T_NOISE_FUNCSTEPScalarFieldEnum)[keyof typeof T_NOISE_FUNCSTEPScalarFieldEnum]


  export const T_NOISE_MODELSPECScalarFieldEnum: {
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

  export type T_NOISE_MODELSPECScalarFieldEnum = (typeof T_NOISE_MODELSPECScalarFieldEnum)[keyof typeof T_NOISE_MODELSPECScalarFieldEnum]


  export const T_NOISE_PRODUCTTYPEScalarFieldEnum: {
    ID: 'ID',
    PRODUCT_TYPE: 'PRODUCT_TYPE',
    VISIBLE: 'VISIBLE',
    FUNCNAME_LIST: 'FUNCNAME_LIST'
  };

  export type T_NOISE_PRODUCTTYPEScalarFieldEnum = (typeof T_NOISE_PRODUCTTYPEScalarFieldEnum)[keyof typeof T_NOISE_PRODUCTTYPEScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type T_NOISE_FUNCNAMEWhereInput = {
    AND?: T_NOISE_FUNCNAMEWhereInput | T_NOISE_FUNCNAMEWhereInput[]
    OR?: T_NOISE_FUNCNAMEWhereInput[]
    NOT?: T_NOISE_FUNCNAMEWhereInput | T_NOISE_FUNCNAMEWhereInput[]
    ID?: IntFilter<"T_NOISE_FUNCNAME"> | number
    NAME?: StringFilter<"T_NOISE_FUNCNAME"> | string
    SELECTABLE_STEP?: StringNullableFilter<"T_NOISE_FUNCNAME"> | string | null
  }

  export type T_NOISE_FUNCNAMEOrderByWithRelationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SELECTABLE_STEP?: SortOrderInput | SortOrder
  }

  export type T_NOISE_FUNCNAMEWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: T_NOISE_FUNCNAMEWhereInput | T_NOISE_FUNCNAMEWhereInput[]
    OR?: T_NOISE_FUNCNAMEWhereInput[]
    NOT?: T_NOISE_FUNCNAMEWhereInput | T_NOISE_FUNCNAMEWhereInput[]
    NAME?: StringFilter<"T_NOISE_FUNCNAME"> | string
    SELECTABLE_STEP?: StringNullableFilter<"T_NOISE_FUNCNAME"> | string | null
  }, "ID">

  export type T_NOISE_FUNCNAMEOrderByWithAggregationInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SELECTABLE_STEP?: SortOrderInput | SortOrder
    _count?: T_NOISE_FUNCNAMECountOrderByAggregateInput
    _avg?: T_NOISE_FUNCNAMEAvgOrderByAggregateInput
    _max?: T_NOISE_FUNCNAMEMaxOrderByAggregateInput
    _min?: T_NOISE_FUNCNAMEMinOrderByAggregateInput
    _sum?: T_NOISE_FUNCNAMESumOrderByAggregateInput
  }

  export type T_NOISE_FUNCNAMEScalarWhereWithAggregatesInput = {
    AND?: T_NOISE_FUNCNAMEScalarWhereWithAggregatesInput | T_NOISE_FUNCNAMEScalarWhereWithAggregatesInput[]
    OR?: T_NOISE_FUNCNAMEScalarWhereWithAggregatesInput[]
    NOT?: T_NOISE_FUNCNAMEScalarWhereWithAggregatesInput | T_NOISE_FUNCNAMEScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"T_NOISE_FUNCNAME"> | number
    NAME?: StringWithAggregatesFilter<"T_NOISE_FUNCNAME"> | string
    SELECTABLE_STEP?: StringNullableWithAggregatesFilter<"T_NOISE_FUNCNAME"> | string | null
  }

  export type T_NOISE_FUNCSTEPWhereInput = {
    AND?: T_NOISE_FUNCSTEPWhereInput | T_NOISE_FUNCSTEPWhereInput[]
    OR?: T_NOISE_FUNCSTEPWhereInput[]
    NOT?: T_NOISE_FUNCSTEPWhereInput | T_NOISE_FUNCSTEPWhereInput[]
    ID?: IntFilter<"T_NOISE_FUNCSTEP"> | number
    STEP?: StringFilter<"T_NOISE_FUNCSTEP"> | string
  }

  export type T_NOISE_FUNCSTEPOrderByWithRelationInput = {
    ID?: SortOrder
    STEP?: SortOrder
  }

  export type T_NOISE_FUNCSTEPWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: T_NOISE_FUNCSTEPWhereInput | T_NOISE_FUNCSTEPWhereInput[]
    OR?: T_NOISE_FUNCSTEPWhereInput[]
    NOT?: T_NOISE_FUNCSTEPWhereInput | T_NOISE_FUNCSTEPWhereInput[]
    STEP?: StringFilter<"T_NOISE_FUNCSTEP"> | string
  }, "ID">

  export type T_NOISE_FUNCSTEPOrderByWithAggregationInput = {
    ID?: SortOrder
    STEP?: SortOrder
    _count?: T_NOISE_FUNCSTEPCountOrderByAggregateInput
    _avg?: T_NOISE_FUNCSTEPAvgOrderByAggregateInput
    _max?: T_NOISE_FUNCSTEPMaxOrderByAggregateInput
    _min?: T_NOISE_FUNCSTEPMinOrderByAggregateInput
    _sum?: T_NOISE_FUNCSTEPSumOrderByAggregateInput
  }

  export type T_NOISE_FUNCSTEPScalarWhereWithAggregatesInput = {
    AND?: T_NOISE_FUNCSTEPScalarWhereWithAggregatesInput | T_NOISE_FUNCSTEPScalarWhereWithAggregatesInput[]
    OR?: T_NOISE_FUNCSTEPScalarWhereWithAggregatesInput[]
    NOT?: T_NOISE_FUNCSTEPScalarWhereWithAggregatesInput | T_NOISE_FUNCSTEPScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"T_NOISE_FUNCSTEP"> | number
    STEP?: StringWithAggregatesFilter<"T_NOISE_FUNCSTEP"> | string
  }

  export type T_NOISE_MODELSPECWhereInput = {
    AND?: T_NOISE_MODELSPECWhereInput | T_NOISE_MODELSPECWhereInput[]
    OR?: T_NOISE_MODELSPECWhereInput[]
    NOT?: T_NOISE_MODELSPECWhereInput | T_NOISE_MODELSPECWhereInput[]
    ID?: IntFilter<"T_NOISE_MODELSPEC"> | number
    PRODUCT_TYPE?: StringFilter<"T_NOISE_MODELSPEC"> | string
    FUNCTION_NAME?: StringFilter<"T_NOISE_MODELSPEC"> | string
    FUNCTION_STEP?: StringNullableFilter<"T_NOISE_MODELSPEC"> | string | null
    MODEL_NAME?: StringFilter<"T_NOISE_MODELSPEC"> | string
    DATA_TYPE?: StringFilter<"T_NOISE_MODELSPEC"> | string
    NOISE_63HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: IntNullableFilter<"T_NOISE_MODELSPEC"> | number | null
    DISCHARGE?: StringNullableFilter<"T_NOISE_MODELSPEC"> | string | null
  }

  export type T_NOISE_MODELSPECOrderByWithRelationInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    FUNCTION_NAME?: SortOrder
    FUNCTION_STEP?: SortOrderInput | SortOrder
    MODEL_NAME?: SortOrder
    DATA_TYPE?: SortOrder
    NOISE_63HZ?: SortOrderInput | SortOrder
    NOISE_125HZ?: SortOrderInput | SortOrder
    NOISE_250HZ?: SortOrderInput | SortOrder
    NOISE_500HZ?: SortOrderInput | SortOrder
    NOISE_1KHZ?: SortOrderInput | SortOrder
    NOISE_2KHZ?: SortOrderInput | SortOrder
    NOISE_4KHZ?: SortOrderInput | SortOrder
    NOISE_8KHZ?: SortOrderInput | SortOrder
    NOISE_OVERALL?: SortOrderInput | SortOrder
    REDUCED_CAPA_RATIO?: SortOrderInput | SortOrder
    DISCHARGE?: SortOrderInput | SortOrder
  }

  export type T_NOISE_MODELSPECWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: T_NOISE_MODELSPECWhereInput | T_NOISE_MODELSPECWhereInput[]
    OR?: T_NOISE_MODELSPECWhereInput[]
    NOT?: T_NOISE_MODELSPECWhereInput | T_NOISE_MODELSPECWhereInput[]
    PRODUCT_TYPE?: StringFilter<"T_NOISE_MODELSPEC"> | string
    FUNCTION_NAME?: StringFilter<"T_NOISE_MODELSPEC"> | string
    FUNCTION_STEP?: StringNullableFilter<"T_NOISE_MODELSPEC"> | string | null
    MODEL_NAME?: StringFilter<"T_NOISE_MODELSPEC"> | string
    DATA_TYPE?: StringFilter<"T_NOISE_MODELSPEC"> | string
    NOISE_63HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: IntNullableFilter<"T_NOISE_MODELSPEC"> | number | null
    DISCHARGE?: StringNullableFilter<"T_NOISE_MODELSPEC"> | string | null
  }, "ID">

  export type T_NOISE_MODELSPECOrderByWithAggregationInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    FUNCTION_NAME?: SortOrder
    FUNCTION_STEP?: SortOrderInput | SortOrder
    MODEL_NAME?: SortOrder
    DATA_TYPE?: SortOrder
    NOISE_63HZ?: SortOrderInput | SortOrder
    NOISE_125HZ?: SortOrderInput | SortOrder
    NOISE_250HZ?: SortOrderInput | SortOrder
    NOISE_500HZ?: SortOrderInput | SortOrder
    NOISE_1KHZ?: SortOrderInput | SortOrder
    NOISE_2KHZ?: SortOrderInput | SortOrder
    NOISE_4KHZ?: SortOrderInput | SortOrder
    NOISE_8KHZ?: SortOrderInput | SortOrder
    NOISE_OVERALL?: SortOrderInput | SortOrder
    REDUCED_CAPA_RATIO?: SortOrderInput | SortOrder
    DISCHARGE?: SortOrderInput | SortOrder
    _count?: T_NOISE_MODELSPECCountOrderByAggregateInput
    _avg?: T_NOISE_MODELSPECAvgOrderByAggregateInput
    _max?: T_NOISE_MODELSPECMaxOrderByAggregateInput
    _min?: T_NOISE_MODELSPECMinOrderByAggregateInput
    _sum?: T_NOISE_MODELSPECSumOrderByAggregateInput
  }

  export type T_NOISE_MODELSPECScalarWhereWithAggregatesInput = {
    AND?: T_NOISE_MODELSPECScalarWhereWithAggregatesInput | T_NOISE_MODELSPECScalarWhereWithAggregatesInput[]
    OR?: T_NOISE_MODELSPECScalarWhereWithAggregatesInput[]
    NOT?: T_NOISE_MODELSPECScalarWhereWithAggregatesInput | T_NOISE_MODELSPECScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"T_NOISE_MODELSPEC"> | number
    PRODUCT_TYPE?: StringWithAggregatesFilter<"T_NOISE_MODELSPEC"> | string
    FUNCTION_NAME?: StringWithAggregatesFilter<"T_NOISE_MODELSPEC"> | string
    FUNCTION_STEP?: StringNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | string | null
    MODEL_NAME?: StringWithAggregatesFilter<"T_NOISE_MODELSPEC"> | string
    DATA_TYPE?: StringWithAggregatesFilter<"T_NOISE_MODELSPEC"> | string
    NOISE_63HZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: IntNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | number | null
    DISCHARGE?: StringNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | string | null
  }

  export type T_NOISE_PRODUCTTYPEWhereInput = {
    AND?: T_NOISE_PRODUCTTYPEWhereInput | T_NOISE_PRODUCTTYPEWhereInput[]
    OR?: T_NOISE_PRODUCTTYPEWhereInput[]
    NOT?: T_NOISE_PRODUCTTYPEWhereInput | T_NOISE_PRODUCTTYPEWhereInput[]
    ID?: IntFilter<"T_NOISE_PRODUCTTYPE"> | number
    PRODUCT_TYPE?: StringFilter<"T_NOISE_PRODUCTTYPE"> | string
    VISIBLE?: IntFilter<"T_NOISE_PRODUCTTYPE"> | number
    FUNCNAME_LIST?: StringNullableFilter<"T_NOISE_PRODUCTTYPE"> | string | null
  }

  export type T_NOISE_PRODUCTTYPEOrderByWithRelationInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    VISIBLE?: SortOrder
    FUNCNAME_LIST?: SortOrderInput | SortOrder
  }

  export type T_NOISE_PRODUCTTYPEWhereUniqueInput = Prisma.AtLeast<{
    PRODUCT_TYPE?: string
    AND?: T_NOISE_PRODUCTTYPEWhereInput | T_NOISE_PRODUCTTYPEWhereInput[]
    OR?: T_NOISE_PRODUCTTYPEWhereInput[]
    NOT?: T_NOISE_PRODUCTTYPEWhereInput | T_NOISE_PRODUCTTYPEWhereInput[]
    ID?: IntFilter<"T_NOISE_PRODUCTTYPE"> | number
    VISIBLE?: IntFilter<"T_NOISE_PRODUCTTYPE"> | number
    FUNCNAME_LIST?: StringNullableFilter<"T_NOISE_PRODUCTTYPE"> | string | null
  }, "PRODUCT_TYPE">

  export type T_NOISE_PRODUCTTYPEOrderByWithAggregationInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    VISIBLE?: SortOrder
    FUNCNAME_LIST?: SortOrderInput | SortOrder
    _count?: T_NOISE_PRODUCTTYPECountOrderByAggregateInput
    _avg?: T_NOISE_PRODUCTTYPEAvgOrderByAggregateInput
    _max?: T_NOISE_PRODUCTTYPEMaxOrderByAggregateInput
    _min?: T_NOISE_PRODUCTTYPEMinOrderByAggregateInput
    _sum?: T_NOISE_PRODUCTTYPESumOrderByAggregateInput
  }

  export type T_NOISE_PRODUCTTYPEScalarWhereWithAggregatesInput = {
    AND?: T_NOISE_PRODUCTTYPEScalarWhereWithAggregatesInput | T_NOISE_PRODUCTTYPEScalarWhereWithAggregatesInput[]
    OR?: T_NOISE_PRODUCTTYPEScalarWhereWithAggregatesInput[]
    NOT?: T_NOISE_PRODUCTTYPEScalarWhereWithAggregatesInput | T_NOISE_PRODUCTTYPEScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"T_NOISE_PRODUCTTYPE"> | number
    PRODUCT_TYPE?: StringWithAggregatesFilter<"T_NOISE_PRODUCTTYPE"> | string
    VISIBLE?: IntWithAggregatesFilter<"T_NOISE_PRODUCTTYPE"> | number
    FUNCNAME_LIST?: StringNullableWithAggregatesFilter<"T_NOISE_PRODUCTTYPE"> | string | null
  }

  export type T_NOISE_FUNCNAMECreateInput = {
    ID: number
    NAME: string
    SELECTABLE_STEP?: string | null
  }

  export type T_NOISE_FUNCNAMEUncheckedCreateInput = {
    ID: number
    NAME: string
    SELECTABLE_STEP?: string | null
  }

  export type T_NOISE_FUNCNAMEUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    SELECTABLE_STEP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_FUNCNAMEUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    SELECTABLE_STEP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_FUNCNAMECreateManyInput = {
    ID: number
    NAME: string
    SELECTABLE_STEP?: string | null
  }

  export type T_NOISE_FUNCNAMEUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    SELECTABLE_STEP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_FUNCNAMEUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NAME?: StringFieldUpdateOperationsInput | string
    SELECTABLE_STEP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_FUNCSTEPCreateInput = {
    ID: number
    STEP: string
  }

  export type T_NOISE_FUNCSTEPUncheckedCreateInput = {
    ID: number
    STEP: string
  }

  export type T_NOISE_FUNCSTEPUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEP?: StringFieldUpdateOperationsInput | string
  }

  export type T_NOISE_FUNCSTEPUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEP?: StringFieldUpdateOperationsInput | string
  }

  export type T_NOISE_FUNCSTEPCreateManyInput = {
    ID: number
    STEP: string
  }

  export type T_NOISE_FUNCSTEPUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEP?: StringFieldUpdateOperationsInput | string
  }

  export type T_NOISE_FUNCSTEPUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    STEP?: StringFieldUpdateOperationsInput | string
  }

  export type T_NOISE_MODELSPECCreateInput = {
    ID: number
    PRODUCT_TYPE: string
    FUNCTION_NAME: string
    FUNCTION_STEP?: string | null
    MODEL_NAME: string
    DATA_TYPE: string
    NOISE_63HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: number | null
    DISCHARGE?: string | null
  }

  export type T_NOISE_MODELSPECUncheckedCreateInput = {
    ID: number
    PRODUCT_TYPE: string
    FUNCTION_NAME: string
    FUNCTION_STEP?: string | null
    MODEL_NAME: string
    DATA_TYPE: string
    NOISE_63HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: number | null
    DISCHARGE?: string | null
  }

  export type T_NOISE_MODELSPECUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    FUNCTION_NAME?: StringFieldUpdateOperationsInput | string
    FUNCTION_STEP?: NullableStringFieldUpdateOperationsInput | string | null
    MODEL_NAME?: StringFieldUpdateOperationsInput | string
    DATA_TYPE?: StringFieldUpdateOperationsInput | string
    NOISE_63HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: NullableIntFieldUpdateOperationsInput | number | null
    DISCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_MODELSPECUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    FUNCTION_NAME?: StringFieldUpdateOperationsInput | string
    FUNCTION_STEP?: NullableStringFieldUpdateOperationsInput | string | null
    MODEL_NAME?: StringFieldUpdateOperationsInput | string
    DATA_TYPE?: StringFieldUpdateOperationsInput | string
    NOISE_63HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: NullableIntFieldUpdateOperationsInput | number | null
    DISCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_MODELSPECCreateManyInput = {
    ID: number
    PRODUCT_TYPE: string
    FUNCTION_NAME: string
    FUNCTION_STEP?: string | null
    MODEL_NAME: string
    DATA_TYPE: string
    NOISE_63HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: number | null
    DISCHARGE?: string | null
  }

  export type T_NOISE_MODELSPECUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    FUNCTION_NAME?: StringFieldUpdateOperationsInput | string
    FUNCTION_STEP?: NullableStringFieldUpdateOperationsInput | string | null
    MODEL_NAME?: StringFieldUpdateOperationsInput | string
    DATA_TYPE?: StringFieldUpdateOperationsInput | string
    NOISE_63HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: NullableIntFieldUpdateOperationsInput | number | null
    DISCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_MODELSPECUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    FUNCTION_NAME?: StringFieldUpdateOperationsInput | string
    FUNCTION_STEP?: NullableStringFieldUpdateOperationsInput | string | null
    MODEL_NAME?: StringFieldUpdateOperationsInput | string
    DATA_TYPE?: StringFieldUpdateOperationsInput | string
    NOISE_63HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_125HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_250HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_500HZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_1KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_2KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_4KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_8KHZ?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    NOISE_OVERALL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    REDUCED_CAPA_RATIO?: NullableIntFieldUpdateOperationsInput | number | null
    DISCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_PRODUCTTYPECreateInput = {
    ID: number
    PRODUCT_TYPE: string
    VISIBLE: number
    FUNCNAME_LIST?: string | null
  }

  export type T_NOISE_PRODUCTTYPEUncheckedCreateInput = {
    ID: number
    PRODUCT_TYPE: string
    VISIBLE: number
    FUNCNAME_LIST?: string | null
  }

  export type T_NOISE_PRODUCTTYPEUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    VISIBLE?: IntFieldUpdateOperationsInput | number
    FUNCNAME_LIST?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_PRODUCTTYPEUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    VISIBLE?: IntFieldUpdateOperationsInput | number
    FUNCNAME_LIST?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_PRODUCTTYPECreateManyInput = {
    ID: number
    PRODUCT_TYPE: string
    VISIBLE: number
    FUNCNAME_LIST?: string | null
  }

  export type T_NOISE_PRODUCTTYPEUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    VISIBLE?: IntFieldUpdateOperationsInput | number
    FUNCNAME_LIST?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type T_NOISE_PRODUCTTYPEUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    PRODUCT_TYPE?: StringFieldUpdateOperationsInput | string
    VISIBLE?: IntFieldUpdateOperationsInput | number
    FUNCNAME_LIST?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type T_NOISE_FUNCNAMECountOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SELECTABLE_STEP?: SortOrder
  }

  export type T_NOISE_FUNCNAMEAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type T_NOISE_FUNCNAMEMaxOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SELECTABLE_STEP?: SortOrder
  }

  export type T_NOISE_FUNCNAMEMinOrderByAggregateInput = {
    ID?: SortOrder
    NAME?: SortOrder
    SELECTABLE_STEP?: SortOrder
  }

  export type T_NOISE_FUNCNAMESumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type T_NOISE_FUNCSTEPCountOrderByAggregateInput = {
    ID?: SortOrder
    STEP?: SortOrder
  }

  export type T_NOISE_FUNCSTEPAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type T_NOISE_FUNCSTEPMaxOrderByAggregateInput = {
    ID?: SortOrder
    STEP?: SortOrder
  }

  export type T_NOISE_FUNCSTEPMinOrderByAggregateInput = {
    ID?: SortOrder
    STEP?: SortOrder
  }

  export type T_NOISE_FUNCSTEPSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type T_NOISE_MODELSPECCountOrderByAggregateInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    FUNCTION_NAME?: SortOrder
    FUNCTION_STEP?: SortOrder
    MODEL_NAME?: SortOrder
    DATA_TYPE?: SortOrder
    NOISE_63HZ?: SortOrder
    NOISE_125HZ?: SortOrder
    NOISE_250HZ?: SortOrder
    NOISE_500HZ?: SortOrder
    NOISE_1KHZ?: SortOrder
    NOISE_2KHZ?: SortOrder
    NOISE_4KHZ?: SortOrder
    NOISE_8KHZ?: SortOrder
    NOISE_OVERALL?: SortOrder
    REDUCED_CAPA_RATIO?: SortOrder
    DISCHARGE?: SortOrder
  }

  export type T_NOISE_MODELSPECAvgOrderByAggregateInput = {
    ID?: SortOrder
    NOISE_63HZ?: SortOrder
    NOISE_125HZ?: SortOrder
    NOISE_250HZ?: SortOrder
    NOISE_500HZ?: SortOrder
    NOISE_1KHZ?: SortOrder
    NOISE_2KHZ?: SortOrder
    NOISE_4KHZ?: SortOrder
    NOISE_8KHZ?: SortOrder
    NOISE_OVERALL?: SortOrder
    REDUCED_CAPA_RATIO?: SortOrder
  }

  export type T_NOISE_MODELSPECMaxOrderByAggregateInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    FUNCTION_NAME?: SortOrder
    FUNCTION_STEP?: SortOrder
    MODEL_NAME?: SortOrder
    DATA_TYPE?: SortOrder
    NOISE_63HZ?: SortOrder
    NOISE_125HZ?: SortOrder
    NOISE_250HZ?: SortOrder
    NOISE_500HZ?: SortOrder
    NOISE_1KHZ?: SortOrder
    NOISE_2KHZ?: SortOrder
    NOISE_4KHZ?: SortOrder
    NOISE_8KHZ?: SortOrder
    NOISE_OVERALL?: SortOrder
    REDUCED_CAPA_RATIO?: SortOrder
    DISCHARGE?: SortOrder
  }

  export type T_NOISE_MODELSPECMinOrderByAggregateInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    FUNCTION_NAME?: SortOrder
    FUNCTION_STEP?: SortOrder
    MODEL_NAME?: SortOrder
    DATA_TYPE?: SortOrder
    NOISE_63HZ?: SortOrder
    NOISE_125HZ?: SortOrder
    NOISE_250HZ?: SortOrder
    NOISE_500HZ?: SortOrder
    NOISE_1KHZ?: SortOrder
    NOISE_2KHZ?: SortOrder
    NOISE_4KHZ?: SortOrder
    NOISE_8KHZ?: SortOrder
    NOISE_OVERALL?: SortOrder
    REDUCED_CAPA_RATIO?: SortOrder
    DISCHARGE?: SortOrder
  }

  export type T_NOISE_MODELSPECSumOrderByAggregateInput = {
    ID?: SortOrder
    NOISE_63HZ?: SortOrder
    NOISE_125HZ?: SortOrder
    NOISE_250HZ?: SortOrder
    NOISE_500HZ?: SortOrder
    NOISE_1KHZ?: SortOrder
    NOISE_2KHZ?: SortOrder
    NOISE_4KHZ?: SortOrder
    NOISE_8KHZ?: SortOrder
    NOISE_OVERALL?: SortOrder
    REDUCED_CAPA_RATIO?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type T_NOISE_PRODUCTTYPECountOrderByAggregateInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    VISIBLE?: SortOrder
    FUNCNAME_LIST?: SortOrder
  }

  export type T_NOISE_PRODUCTTYPEAvgOrderByAggregateInput = {
    ID?: SortOrder
    VISIBLE?: SortOrder
  }

  export type T_NOISE_PRODUCTTYPEMaxOrderByAggregateInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    VISIBLE?: SortOrder
    FUNCNAME_LIST?: SortOrder
  }

  export type T_NOISE_PRODUCTTYPEMinOrderByAggregateInput = {
    ID?: SortOrder
    PRODUCT_TYPE?: SortOrder
    VISIBLE?: SortOrder
    FUNCNAME_LIST?: SortOrder
  }

  export type T_NOISE_PRODUCTTYPESumOrderByAggregateInput = {
    ID?: SortOrder
    VISIBLE?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use T_NOISE_FUNCNAMEDefaultArgs instead
     */
    export type T_NOISE_FUNCNAMEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = T_NOISE_FUNCNAMEDefaultArgs<ExtArgs>
    /**
     * @deprecated Use T_NOISE_FUNCSTEPDefaultArgs instead
     */
    export type T_NOISE_FUNCSTEPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = T_NOISE_FUNCSTEPDefaultArgs<ExtArgs>
    /**
     * @deprecated Use T_NOISE_MODELSPECDefaultArgs instead
     */
    export type T_NOISE_MODELSPECArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = T_NOISE_MODELSPECDefaultArgs<ExtArgs>
    /**
     * @deprecated Use T_NOISE_PRODUCTTYPEDefaultArgs instead
     */
    export type T_NOISE_PRODUCTTYPEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = T_NOISE_PRODUCTTYPEDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}