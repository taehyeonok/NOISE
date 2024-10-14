
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
 * Model T_NOISE_ISC_SPEC
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type T_NOISE_ISC_SPEC = $Result.DefaultSelection<Prisma.$T_NOISE_ISC_SPECPayload>
/**
 * Model V_NOISE_MULTIV_I
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_MULTIV_I = $Result.DefaultSelection<Prisma.$V_NOISE_MULTIV_IPayload>
/**
 * Model V_NOISE_RAC
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_RAC = $Result.DefaultSelection<Prisma.$V_NOISE_RACPayload>
/**
 * Model V_NOISE_MULTIV_S
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_MULTIV_S = $Result.DefaultSelection<Prisma.$V_NOISE_MULTIV_SPayload>
/**
 * Model V_NOISE_SCAC
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_SCAC = $Result.DefaultSelection<Prisma.$V_NOISE_SCACPayload>
/**
 * Model V_NOISE_MULTIV_5
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_MULTIV_5 = $Result.DefaultSelection<Prisma.$V_NOISE_MULTIV_5Payload>
/**
 * Model V_NOISE_MULTI
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_MULTI = $Result.DefaultSelection<Prisma.$V_NOISE_MULTIPayload>
/**
 * Model V_NOISE_AWHP
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_AWHP = $Result.DefaultSelection<Prisma.$V_NOISE_AWHPPayload>
/**
 * Model V_NOISE_ISC
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type V_NOISE_ISC = $Result.DefaultSelection<Prisma.$V_NOISE_ISCPayload>

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

  /**
   * `prisma.t_NOISE_ISC_SPEC`: Exposes CRUD operations for the **T_NOISE_ISC_SPEC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_NOISE_ISC_SPECS
    * const t_NOISE_ISC_SPECS = await prisma.t_NOISE_ISC_SPEC.findMany()
    * ```
    */
  get t_NOISE_ISC_SPEC(): Prisma.T_NOISE_ISC_SPECDelegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_MULTIV_I`: Exposes CRUD operations for the **V_NOISE_MULTIV_I** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_MULTIV_IS
    * const v_NOISE_MULTIV_IS = await prisma.v_NOISE_MULTIV_I.findMany()
    * ```
    */
  get v_NOISE_MULTIV_I(): Prisma.V_NOISE_MULTIV_IDelegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_RAC`: Exposes CRUD operations for the **V_NOISE_RAC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_RACS
    * const v_NOISE_RACS = await prisma.v_NOISE_RAC.findMany()
    * ```
    */
  get v_NOISE_RAC(): Prisma.V_NOISE_RACDelegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_MULTIV_S`: Exposes CRUD operations for the **V_NOISE_MULTIV_S** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_MULTIV_S
    * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.findMany()
    * ```
    */
  get v_NOISE_MULTIV_S(): Prisma.V_NOISE_MULTIV_SDelegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_SCAC`: Exposes CRUD operations for the **V_NOISE_SCAC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_SCACS
    * const v_NOISE_SCACS = await prisma.v_NOISE_SCAC.findMany()
    * ```
    */
  get v_NOISE_SCAC(): Prisma.V_NOISE_SCACDelegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_MULTIV_5`: Exposes CRUD operations for the **V_NOISE_MULTIV_5** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_MULTIV_5s
    * const v_NOISE_MULTIV_5s = await prisma.v_NOISE_MULTIV_5.findMany()
    * ```
    */
  get v_NOISE_MULTIV_5(): Prisma.V_NOISE_MULTIV_5Delegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_MULTI`: Exposes CRUD operations for the **V_NOISE_MULTI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_MULTIS
    * const v_NOISE_MULTIS = await prisma.v_NOISE_MULTI.findMany()
    * ```
    */
  get v_NOISE_MULTI(): Prisma.V_NOISE_MULTIDelegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_AWHP`: Exposes CRUD operations for the **V_NOISE_AWHP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_AWHPS
    * const v_NOISE_AWHPS = await prisma.v_NOISE_AWHP.findMany()
    * ```
    */
  get v_NOISE_AWHP(): Prisma.V_NOISE_AWHPDelegate<ExtArgs>;

  /**
   * `prisma.v_NOISE_ISC`: Exposes CRUD operations for the **V_NOISE_ISC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more V_NOISE_ISCS
    * const v_NOISE_ISCS = await prisma.v_NOISE_ISC.findMany()
    * ```
    */
  get v_NOISE_ISC(): Prisma.V_NOISE_ISCDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 't_NOISE_FUNCNAME' | 't_NOISE_FUNCSTEP' | 't_NOISE_MODELSPEC' | 't_NOISE_PRODUCTTYPE' | 't_NOISE_ISC_SPEC' | 'v_NOISE_MULTIV_I' | 'v_NOISE_RAC' | 'v_NOISE_MULTIV_S' | 'v_NOISE_SCAC' | 'v_NOISE_MULTIV_5' | 'v_NOISE_MULTI' | 'v_NOISE_AWHP' | 'v_NOISE_ISC'
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
      T_NOISE_ISC_SPEC: {
        payload: Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>
        fields: Prisma.T_NOISE_ISC_SPECFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_NOISE_ISC_SPECFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_NOISE_ISC_SPECFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload>
          }
          findFirst: {
            args: Prisma.T_NOISE_ISC_SPECFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_NOISE_ISC_SPECFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload>
          }
          findMany: {
            args: Prisma.T_NOISE_ISC_SPECFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload>[]
          }
          create: {
            args: Prisma.T_NOISE_ISC_SPECCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload>
          }
          createMany: {
            args: Prisma.T_NOISE_ISC_SPECCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.T_NOISE_ISC_SPECDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload>
          }
          update: {
            args: Prisma.T_NOISE_ISC_SPECUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload>
          }
          deleteMany: {
            args: Prisma.T_NOISE_ISC_SPECDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.T_NOISE_ISC_SPECUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.T_NOISE_ISC_SPECUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$T_NOISE_ISC_SPECPayload>
          }
          aggregate: {
            args: Prisma.T_NOISE_ISC_SPECAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateT_NOISE_ISC_SPEC>
          }
          groupBy: {
            args: Prisma.T_NOISE_ISC_SPECGroupByArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_ISC_SPECGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_NOISE_ISC_SPECCountArgs<ExtArgs>,
            result: $Utils.Optional<T_NOISE_ISC_SPECCountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_MULTIV_I: {
        payload: Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>
        fields: Prisma.V_NOISE_MULTIV_IFieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_MULTIV_IFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_MULTIV_IFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload>
          }
          findFirst: {
            args: Prisma.V_NOISE_MULTIV_IFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_MULTIV_IFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload>
          }
          findMany: {
            args: Prisma.V_NOISE_MULTIV_IFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload>[]
          }
          create: {
            args: Prisma.V_NOISE_MULTIV_ICreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload>
          }
          createMany: {
            args: Prisma.V_NOISE_MULTIV_ICreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_MULTIV_IDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload>
          }
          update: {
            args: Prisma.V_NOISE_MULTIV_IUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_MULTIV_IDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_MULTIV_IUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_MULTIV_IUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_IPayload>
          }
          aggregate: {
            args: Prisma.V_NOISE_MULTIV_IAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_MULTIV_I>
          }
          groupBy: {
            args: Prisma.V_NOISE_MULTIV_IGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTIV_IGroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_MULTIV_ICountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTIV_ICountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_RAC: {
        payload: Prisma.$V_NOISE_RACPayload<ExtArgs>
        fields: Prisma.V_NOISE_RACFieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_RACFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_RACFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload>
          }
          findFirst: {
            args: Prisma.V_NOISE_RACFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_RACFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload>
          }
          findMany: {
            args: Prisma.V_NOISE_RACFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload>[]
          }
          create: {
            args: Prisma.V_NOISE_RACCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload>
          }
          createMany: {
            args: Prisma.V_NOISE_RACCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_RACDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload>
          }
          update: {
            args: Prisma.V_NOISE_RACUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_RACDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_RACUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_RACUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_RACPayload>
          }
          aggregate: {
            args: Prisma.V_NOISE_RACAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_RAC>
          }
          groupBy: {
            args: Prisma.V_NOISE_RACGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_RACGroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_RACCountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_RACCountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_MULTIV_S: {
        payload: Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>
        fields: Prisma.V_NOISE_MULTIV_SFieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_MULTIV_SFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_MULTIV_SFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload>
          }
          findFirst: {
            args: Prisma.V_NOISE_MULTIV_SFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_MULTIV_SFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload>
          }
          findMany: {
            args: Prisma.V_NOISE_MULTIV_SFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload>[]
          }
          create: {
            args: Prisma.V_NOISE_MULTIV_SCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload>
          }
          createMany: {
            args: Prisma.V_NOISE_MULTIV_SCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_MULTIV_SDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload>
          }
          update: {
            args: Prisma.V_NOISE_MULTIV_SUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_MULTIV_SDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_MULTIV_SUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_MULTIV_SUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_SPayload>
          }
          aggregate: {
            args: Prisma.V_NOISE_MULTIV_SAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_MULTIV_S>
          }
          groupBy: {
            args: Prisma.V_NOISE_MULTIV_SGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTIV_SGroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_MULTIV_SCountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTIV_SCountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_SCAC: {
        payload: Prisma.$V_NOISE_SCACPayload<ExtArgs>
        fields: Prisma.V_NOISE_SCACFieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_SCACFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_SCACFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload>
          }
          findFirst: {
            args: Prisma.V_NOISE_SCACFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_SCACFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload>
          }
          findMany: {
            args: Prisma.V_NOISE_SCACFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload>[]
          }
          create: {
            args: Prisma.V_NOISE_SCACCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload>
          }
          createMany: {
            args: Prisma.V_NOISE_SCACCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_SCACDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload>
          }
          update: {
            args: Prisma.V_NOISE_SCACUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_SCACDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_SCACUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_SCACUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_SCACPayload>
          }
          aggregate: {
            args: Prisma.V_NOISE_SCACAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_SCAC>
          }
          groupBy: {
            args: Prisma.V_NOISE_SCACGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_SCACGroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_SCACCountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_SCACCountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_MULTIV_5: {
        payload: Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>
        fields: Prisma.V_NOISE_MULTIV_5FieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_MULTIV_5FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_MULTIV_5FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload>
          }
          findFirst: {
            args: Prisma.V_NOISE_MULTIV_5FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_MULTIV_5FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload>
          }
          findMany: {
            args: Prisma.V_NOISE_MULTIV_5FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload>[]
          }
          create: {
            args: Prisma.V_NOISE_MULTIV_5CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload>
          }
          createMany: {
            args: Prisma.V_NOISE_MULTIV_5CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_MULTIV_5DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload>
          }
          update: {
            args: Prisma.V_NOISE_MULTIV_5UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_MULTIV_5DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_MULTIV_5UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_MULTIV_5UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIV_5Payload>
          }
          aggregate: {
            args: Prisma.V_NOISE_MULTIV_5AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_MULTIV_5>
          }
          groupBy: {
            args: Prisma.V_NOISE_MULTIV_5GroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTIV_5GroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_MULTIV_5CountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTIV_5CountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_MULTI: {
        payload: Prisma.$V_NOISE_MULTIPayload<ExtArgs>
        fields: Prisma.V_NOISE_MULTIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_MULTIFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_MULTIFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload>
          }
          findFirst: {
            args: Prisma.V_NOISE_MULTIFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_MULTIFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload>
          }
          findMany: {
            args: Prisma.V_NOISE_MULTIFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload>[]
          }
          create: {
            args: Prisma.V_NOISE_MULTICreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload>
          }
          createMany: {
            args: Prisma.V_NOISE_MULTICreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_MULTIDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload>
          }
          update: {
            args: Prisma.V_NOISE_MULTIUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_MULTIDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_MULTIUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_MULTIUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_MULTIPayload>
          }
          aggregate: {
            args: Prisma.V_NOISE_MULTIAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_MULTI>
          }
          groupBy: {
            args: Prisma.V_NOISE_MULTIGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTIGroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_MULTICountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_MULTICountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_AWHP: {
        payload: Prisma.$V_NOISE_AWHPPayload<ExtArgs>
        fields: Prisma.V_NOISE_AWHPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_AWHPFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_AWHPFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload>
          }
          findFirst: {
            args: Prisma.V_NOISE_AWHPFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_AWHPFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload>
          }
          findMany: {
            args: Prisma.V_NOISE_AWHPFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload>[]
          }
          create: {
            args: Prisma.V_NOISE_AWHPCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload>
          }
          createMany: {
            args: Prisma.V_NOISE_AWHPCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_AWHPDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload>
          }
          update: {
            args: Prisma.V_NOISE_AWHPUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_AWHPDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_AWHPUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_AWHPUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_AWHPPayload>
          }
          aggregate: {
            args: Prisma.V_NOISE_AWHPAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_AWHP>
          }
          groupBy: {
            args: Prisma.V_NOISE_AWHPGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_AWHPGroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_AWHPCountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_AWHPCountAggregateOutputType> | number
          }
        }
      }
      V_NOISE_ISC: {
        payload: Prisma.$V_NOISE_ISCPayload<ExtArgs>
        fields: Prisma.V_NOISE_ISCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.V_NOISE_ISCFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.V_NOISE_ISCFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload>
          }
          findFirst: {
            args: Prisma.V_NOISE_ISCFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.V_NOISE_ISCFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload>
          }
          findMany: {
            args: Prisma.V_NOISE_ISCFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload>[]
          }
          create: {
            args: Prisma.V_NOISE_ISCCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload>
          }
          createMany: {
            args: Prisma.V_NOISE_ISCCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.V_NOISE_ISCDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload>
          }
          update: {
            args: Prisma.V_NOISE_ISCUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload>
          }
          deleteMany: {
            args: Prisma.V_NOISE_ISCDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.V_NOISE_ISCUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.V_NOISE_ISCUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$V_NOISE_ISCPayload>
          }
          aggregate: {
            args: Prisma.V_NOISE_ISCAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateV_NOISE_ISC>
          }
          groupBy: {
            args: Prisma.V_NOISE_ISCGroupByArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_ISCGroupByOutputType>[]
          }
          count: {
            args: Prisma.V_NOISE_ISCCountArgs<ExtArgs>,
            result: $Utils.Optional<V_NOISE_ISCCountAggregateOutputType> | number
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
     * Find one T_NOISE_FUNCNAME that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
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
     * @param {T_NOISE_FUNCNAMEFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     *     @param {T_NOISE_FUNCNAMECreateManyArgs} args - Arguments to create many T_NOISE_FUNCNAMES.
     *     @example
     *     // Create many T_NOISE_FUNCNAMES
     *     const t_NOISE_FUNCNAME = await prisma.t_NOISE_FUNCNAME.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
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
     * Find one T_NOISE_FUNCSTEP that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
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
     * @param {T_NOISE_FUNCSTEPFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     *     @param {T_NOISE_FUNCSTEPCreateManyArgs} args - Arguments to create many T_NOISE_FUNCSTEPS.
     *     @example
     *     // Create many T_NOISE_FUNCSTEPS
     *     const t_NOISE_FUNCSTEP = await prisma.t_NOISE_FUNCSTEP.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
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
    REDUCED_CAPA_RATIO: Decimal | null
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
    REDUCED_CAPA_RATIO: Decimal | null
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
    REDUCED_CAPA_RATIO: Decimal | null
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
    REDUCED_CAPA_RATIO: Decimal | null
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
    REDUCED_CAPA_RATIO: Decimal | null
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
      REDUCED_CAPA_RATIO: Prisma.Decimal | null
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
     * Find one T_NOISE_MODELSPEC that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
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
     * @param {T_NOISE_MODELSPECFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     *     @param {T_NOISE_MODELSPECCreateManyArgs} args - Arguments to create many T_NOISE_MODELSPECS.
     *     @example
     *     // Create many T_NOISE_MODELSPECS
     *     const t_NOISE_MODELSPEC = await prisma.t_NOISE_MODELSPEC.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
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
    readonly REDUCED_CAPA_RATIO: FieldRef<"T_NOISE_MODELSPEC", 'Decimal'>
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
     * Find one T_NOISE_PRODUCTTYPE that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
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
     * @param {T_NOISE_PRODUCTTYPEFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     *     @param {T_NOISE_PRODUCTTYPECreateManyArgs} args - Arguments to create many T_NOISE_PRODUCTTYPES.
     *     @example
     *     // Create many T_NOISE_PRODUCTTYPES
     *     const t_NOISE_PRODUCTTYPE = await prisma.t_NOISE_PRODUCTTYPE.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
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
   * Model T_NOISE_ISC_SPEC
   */

  export type AggregateT_NOISE_ISC_SPEC = {
    _count: T_NOISE_ISC_SPECCountAggregateOutputType | null
    _avg: T_NOISE_ISC_SPECAvgAggregateOutputType | null
    _sum: T_NOISE_ISC_SPECSumAggregateOutputType | null
    _min: T_NOISE_ISC_SPECMinAggregateOutputType | null
    _max: T_NOISE_ISC_SPECMaxAggregateOutputType | null
  }

  export type T_NOISE_ISC_SPECAvgAggregateOutputType = {
    ID: number | null
    TYPE_COOLED: number | null
    TYPE_REF: number | null
    TYPE_EVAPORATOR: number | null
    TYPE_RUNNING: number | null
    POWER_SUPPLY: number | null
    GENERATION: number | null
    NOMINAL_TON: number | null
    COOLING_CAPACITY: number | null
    COOLING_CAPACITY_RT: Decimal | null
    HEATING_CAPACITY: Decimal | null
    HEATING_CAPACITY_RT: Decimal | null
    COOLING_INPUT_POWER: Decimal | null
    HEATING_INPUT_POWER: Decimal | null
    ESEER: Decimal | null
    IPLV: Decimal | null
    IPLV100: Decimal | null
    IPLV075: Decimal | null
    IPLV050: Decimal | null
    IPLV025: Decimal | null
    SEER: Decimal | null
    SCOP: Decimal | null
    OBSOLETE: number | null
    COOLING_SOUND_POWER: Decimal | null
    HEATING_SOUND_POWER: Decimal | null
    EVAPORATOR_EA: number | null
    COOLING_HEAD_LOSS: Decimal | null
    HEATING_HEAD_LOSS: Decimal | null
    COOLING_WATER_FLOW: Decimal | null
    HEATING_WATER_FLOW: Decimal | null
    WEIGHT: number | null
    WEIGHT_SHIPPING: number | null
    DIMENSION_W: number | null
    DIMENSION_H: number | null
    DIMENSION_D: number | null
    FOOTPRINT: Decimal | null
    FAN_FLOW_RATE: number | null
    FAN_MOTOR_POWER: number | null
    MAX_CURRENT: number | null
    MIN_VOLTAGE: number | null
    MAX_VOLTAGE: number | null
    PHASE: number | null
    CIRCUIT: number | null
  }

  export type T_NOISE_ISC_SPECSumAggregateOutputType = {
    ID: number | null
    TYPE_COOLED: number | null
    TYPE_REF: number | null
    TYPE_EVAPORATOR: number | null
    TYPE_RUNNING: number | null
    POWER_SUPPLY: number | null
    GENERATION: number | null
    NOMINAL_TON: number | null
    COOLING_CAPACITY: number | null
    COOLING_CAPACITY_RT: Decimal | null
    HEATING_CAPACITY: Decimal | null
    HEATING_CAPACITY_RT: Decimal | null
    COOLING_INPUT_POWER: Decimal | null
    HEATING_INPUT_POWER: Decimal | null
    ESEER: Decimal | null
    IPLV: Decimal | null
    IPLV100: Decimal | null
    IPLV075: Decimal | null
    IPLV050: Decimal | null
    IPLV025: Decimal | null
    SEER: Decimal | null
    SCOP: Decimal | null
    OBSOLETE: number | null
    COOLING_SOUND_POWER: Decimal | null
    HEATING_SOUND_POWER: Decimal | null
    EVAPORATOR_EA: number | null
    COOLING_HEAD_LOSS: Decimal | null
    HEATING_HEAD_LOSS: Decimal | null
    COOLING_WATER_FLOW: Decimal | null
    HEATING_WATER_FLOW: Decimal | null
    WEIGHT: number | null
    WEIGHT_SHIPPING: number | null
    DIMENSION_W: number | null
    DIMENSION_H: number | null
    DIMENSION_D: number | null
    FOOTPRINT: Decimal | null
    FAN_FLOW_RATE: number | null
    FAN_MOTOR_POWER: number | null
    MAX_CURRENT: number | null
    MIN_VOLTAGE: number | null
    MAX_VOLTAGE: number | null
    PHASE: number | null
    CIRCUIT: number | null
  }

  export type T_NOISE_ISC_SPECMinAggregateOutputType = {
    ID: number | null
    MODEL: string | null
    TYPE_COOLED: number | null
    TYPE_REF: number | null
    TYPE_EVAPORATOR: number | null
    TYPE_RUNNING: number | null
    POWER_SUPPLY: number | null
    GENERATION: number | null
    NOMINAL_TON: number | null
    COOLING_CAPACITY: number | null
    COOLING_CAPACITY_RT: Decimal | null
    HEATING_CAPACITY: Decimal | null
    HEATING_CAPACITY_RT: Decimal | null
    COOLING_INPUT_POWER: Decimal | null
    HEATING_INPUT_POWER: Decimal | null
    ESEER: Decimal | null
    IPLV: Decimal | null
    IPLV100: Decimal | null
    IPLV075: Decimal | null
    IPLV050: Decimal | null
    IPLV025: Decimal | null
    SEER: Decimal | null
    SCOP: Decimal | null
    DESCRIPTION: string | null
    LOCATION: string | null
    OBSOLETE: number | null
    SOUND_PRESSURE: string | null
    SOUND_PRESSURE_HEATING: string | null
    COOLING_SOUND_POWER: Decimal | null
    HEATING_SOUND_POWER: Decimal | null
    EVAPORATOR_EA: number | null
    COOLING_HEAD_LOSS: Decimal | null
    HEATING_HEAD_LOSS: Decimal | null
    COOLING_WATER_FLOW: Decimal | null
    HEATING_WATER_FLOW: Decimal | null
    WEIGHT: number | null
    WEIGHT_SHIPPING: number | null
    DIMENSION_W: number | null
    DIMENSION_H: number | null
    DIMENSION_D: number | null
    FOOTPRINT: Decimal | null
    COMP_TYPE: string | null
    COMP_OILTYPE: string | null
    COMP_OILCHARGE: string | null
    COMP_HEATER: string | null
    REFRIGERANT: string | null
    REFRIGERANT_CHARGE: string | null
    COND_TYPE: string | null
    COND_MAX_PRESSURE: string | null
    DIAMETER: string | null
    FAN_TYPE: string | null
    FAN_VANE: string | null
    FAN_FLOW_RATE: number | null
    FAN_MOTOR_POWER: number | null
    MAX_CURRENT: number | null
    POWER_LINE: string | null
    REMOTE_CONTROL: string | null
    BREAKER: string | null
    IMAGE_DIMENSIONS: string | null
    IMAGE_INSTALLATION: string | null
    IMAGE_WIRING_M: string | null
    IMAGE_WIRING_S1: string | null
    IMAGE_WIRING_S2: string | null
    MCA: string | null
    MSC: string | null
    RLA: string | null
    MIN_VOLTAGE: number | null
    MAX_VOLTAGE: number | null
    VOLTAGE: string | null
    PHASE: number | null
    HZ: string | null
    CIRCUIT: number | null
  }

  export type T_NOISE_ISC_SPECMaxAggregateOutputType = {
    ID: number | null
    MODEL: string | null
    TYPE_COOLED: number | null
    TYPE_REF: number | null
    TYPE_EVAPORATOR: number | null
    TYPE_RUNNING: number | null
    POWER_SUPPLY: number | null
    GENERATION: number | null
    NOMINAL_TON: number | null
    COOLING_CAPACITY: number | null
    COOLING_CAPACITY_RT: Decimal | null
    HEATING_CAPACITY: Decimal | null
    HEATING_CAPACITY_RT: Decimal | null
    COOLING_INPUT_POWER: Decimal | null
    HEATING_INPUT_POWER: Decimal | null
    ESEER: Decimal | null
    IPLV: Decimal | null
    IPLV100: Decimal | null
    IPLV075: Decimal | null
    IPLV050: Decimal | null
    IPLV025: Decimal | null
    SEER: Decimal | null
    SCOP: Decimal | null
    DESCRIPTION: string | null
    LOCATION: string | null
    OBSOLETE: number | null
    SOUND_PRESSURE: string | null
    SOUND_PRESSURE_HEATING: string | null
    COOLING_SOUND_POWER: Decimal | null
    HEATING_SOUND_POWER: Decimal | null
    EVAPORATOR_EA: number | null
    COOLING_HEAD_LOSS: Decimal | null
    HEATING_HEAD_LOSS: Decimal | null
    COOLING_WATER_FLOW: Decimal | null
    HEATING_WATER_FLOW: Decimal | null
    WEIGHT: number | null
    WEIGHT_SHIPPING: number | null
    DIMENSION_W: number | null
    DIMENSION_H: number | null
    DIMENSION_D: number | null
    FOOTPRINT: Decimal | null
    COMP_TYPE: string | null
    COMP_OILTYPE: string | null
    COMP_OILCHARGE: string | null
    COMP_HEATER: string | null
    REFRIGERANT: string | null
    REFRIGERANT_CHARGE: string | null
    COND_TYPE: string | null
    COND_MAX_PRESSURE: string | null
    DIAMETER: string | null
    FAN_TYPE: string | null
    FAN_VANE: string | null
    FAN_FLOW_RATE: number | null
    FAN_MOTOR_POWER: number | null
    MAX_CURRENT: number | null
    POWER_LINE: string | null
    REMOTE_CONTROL: string | null
    BREAKER: string | null
    IMAGE_DIMENSIONS: string | null
    IMAGE_INSTALLATION: string | null
    IMAGE_WIRING_M: string | null
    IMAGE_WIRING_S1: string | null
    IMAGE_WIRING_S2: string | null
    MCA: string | null
    MSC: string | null
    RLA: string | null
    MIN_VOLTAGE: number | null
    MAX_VOLTAGE: number | null
    VOLTAGE: string | null
    PHASE: number | null
    HZ: string | null
    CIRCUIT: number | null
  }

  export type T_NOISE_ISC_SPECCountAggregateOutputType = {
    ID: number
    MODEL: number
    TYPE_COOLED: number
    TYPE_REF: number
    TYPE_EVAPORATOR: number
    TYPE_RUNNING: number
    POWER_SUPPLY: number
    GENERATION: number
    NOMINAL_TON: number
    COOLING_CAPACITY: number
    COOLING_CAPACITY_RT: number
    HEATING_CAPACITY: number
    HEATING_CAPACITY_RT: number
    COOLING_INPUT_POWER: number
    HEATING_INPUT_POWER: number
    ESEER: number
    IPLV: number
    IPLV100: number
    IPLV075: number
    IPLV050: number
    IPLV025: number
    SEER: number
    SCOP: number
    DESCRIPTION: number
    LOCATION: number
    OBSOLETE: number
    SOUND_PRESSURE: number
    SOUND_PRESSURE_HEATING: number
    COOLING_SOUND_POWER: number
    HEATING_SOUND_POWER: number
    EVAPORATOR_EA: number
    COOLING_HEAD_LOSS: number
    HEATING_HEAD_LOSS: number
    COOLING_WATER_FLOW: number
    HEATING_WATER_FLOW: number
    WEIGHT: number
    WEIGHT_SHIPPING: number
    DIMENSION_W: number
    DIMENSION_H: number
    DIMENSION_D: number
    FOOTPRINT: number
    COMP_TYPE: number
    COMP_OILTYPE: number
    COMP_OILCHARGE: number
    COMP_HEATER: number
    REFRIGERANT: number
    REFRIGERANT_CHARGE: number
    COND_TYPE: number
    COND_MAX_PRESSURE: number
    DIAMETER: number
    FAN_TYPE: number
    FAN_VANE: number
    FAN_FLOW_RATE: number
    FAN_MOTOR_POWER: number
    MAX_CURRENT: number
    POWER_LINE: number
    REMOTE_CONTROL: number
    BREAKER: number
    IMAGE_DIMENSIONS: number
    IMAGE_INSTALLATION: number
    IMAGE_WIRING_M: number
    IMAGE_WIRING_S1: number
    IMAGE_WIRING_S2: number
    MCA: number
    MSC: number
    RLA: number
    MIN_VOLTAGE: number
    MAX_VOLTAGE: number
    VOLTAGE: number
    PHASE: number
    HZ: number
    CIRCUIT: number
    _all: number
  }


  export type T_NOISE_ISC_SPECAvgAggregateInputType = {
    ID?: true
    TYPE_COOLED?: true
    TYPE_REF?: true
    TYPE_EVAPORATOR?: true
    TYPE_RUNNING?: true
    POWER_SUPPLY?: true
    GENERATION?: true
    NOMINAL_TON?: true
    COOLING_CAPACITY?: true
    COOLING_CAPACITY_RT?: true
    HEATING_CAPACITY?: true
    HEATING_CAPACITY_RT?: true
    COOLING_INPUT_POWER?: true
    HEATING_INPUT_POWER?: true
    ESEER?: true
    IPLV?: true
    IPLV100?: true
    IPLV075?: true
    IPLV050?: true
    IPLV025?: true
    SEER?: true
    SCOP?: true
    OBSOLETE?: true
    COOLING_SOUND_POWER?: true
    HEATING_SOUND_POWER?: true
    EVAPORATOR_EA?: true
    COOLING_HEAD_LOSS?: true
    HEATING_HEAD_LOSS?: true
    COOLING_WATER_FLOW?: true
    HEATING_WATER_FLOW?: true
    WEIGHT?: true
    WEIGHT_SHIPPING?: true
    DIMENSION_W?: true
    DIMENSION_H?: true
    DIMENSION_D?: true
    FOOTPRINT?: true
    FAN_FLOW_RATE?: true
    FAN_MOTOR_POWER?: true
    MAX_CURRENT?: true
    MIN_VOLTAGE?: true
    MAX_VOLTAGE?: true
    PHASE?: true
    CIRCUIT?: true
  }

  export type T_NOISE_ISC_SPECSumAggregateInputType = {
    ID?: true
    TYPE_COOLED?: true
    TYPE_REF?: true
    TYPE_EVAPORATOR?: true
    TYPE_RUNNING?: true
    POWER_SUPPLY?: true
    GENERATION?: true
    NOMINAL_TON?: true
    COOLING_CAPACITY?: true
    COOLING_CAPACITY_RT?: true
    HEATING_CAPACITY?: true
    HEATING_CAPACITY_RT?: true
    COOLING_INPUT_POWER?: true
    HEATING_INPUT_POWER?: true
    ESEER?: true
    IPLV?: true
    IPLV100?: true
    IPLV075?: true
    IPLV050?: true
    IPLV025?: true
    SEER?: true
    SCOP?: true
    OBSOLETE?: true
    COOLING_SOUND_POWER?: true
    HEATING_SOUND_POWER?: true
    EVAPORATOR_EA?: true
    COOLING_HEAD_LOSS?: true
    HEATING_HEAD_LOSS?: true
    COOLING_WATER_FLOW?: true
    HEATING_WATER_FLOW?: true
    WEIGHT?: true
    WEIGHT_SHIPPING?: true
    DIMENSION_W?: true
    DIMENSION_H?: true
    DIMENSION_D?: true
    FOOTPRINT?: true
    FAN_FLOW_RATE?: true
    FAN_MOTOR_POWER?: true
    MAX_CURRENT?: true
    MIN_VOLTAGE?: true
    MAX_VOLTAGE?: true
    PHASE?: true
    CIRCUIT?: true
  }

  export type T_NOISE_ISC_SPECMinAggregateInputType = {
    ID?: true
    MODEL?: true
    TYPE_COOLED?: true
    TYPE_REF?: true
    TYPE_EVAPORATOR?: true
    TYPE_RUNNING?: true
    POWER_SUPPLY?: true
    GENERATION?: true
    NOMINAL_TON?: true
    COOLING_CAPACITY?: true
    COOLING_CAPACITY_RT?: true
    HEATING_CAPACITY?: true
    HEATING_CAPACITY_RT?: true
    COOLING_INPUT_POWER?: true
    HEATING_INPUT_POWER?: true
    ESEER?: true
    IPLV?: true
    IPLV100?: true
    IPLV075?: true
    IPLV050?: true
    IPLV025?: true
    SEER?: true
    SCOP?: true
    DESCRIPTION?: true
    LOCATION?: true
    OBSOLETE?: true
    SOUND_PRESSURE?: true
    SOUND_PRESSURE_HEATING?: true
    COOLING_SOUND_POWER?: true
    HEATING_SOUND_POWER?: true
    EVAPORATOR_EA?: true
    COOLING_HEAD_LOSS?: true
    HEATING_HEAD_LOSS?: true
    COOLING_WATER_FLOW?: true
    HEATING_WATER_FLOW?: true
    WEIGHT?: true
    WEIGHT_SHIPPING?: true
    DIMENSION_W?: true
    DIMENSION_H?: true
    DIMENSION_D?: true
    FOOTPRINT?: true
    COMP_TYPE?: true
    COMP_OILTYPE?: true
    COMP_OILCHARGE?: true
    COMP_HEATER?: true
    REFRIGERANT?: true
    REFRIGERANT_CHARGE?: true
    COND_TYPE?: true
    COND_MAX_PRESSURE?: true
    DIAMETER?: true
    FAN_TYPE?: true
    FAN_VANE?: true
    FAN_FLOW_RATE?: true
    FAN_MOTOR_POWER?: true
    MAX_CURRENT?: true
    POWER_LINE?: true
    REMOTE_CONTROL?: true
    BREAKER?: true
    IMAGE_DIMENSIONS?: true
    IMAGE_INSTALLATION?: true
    IMAGE_WIRING_M?: true
    IMAGE_WIRING_S1?: true
    IMAGE_WIRING_S2?: true
    MCA?: true
    MSC?: true
    RLA?: true
    MIN_VOLTAGE?: true
    MAX_VOLTAGE?: true
    VOLTAGE?: true
    PHASE?: true
    HZ?: true
    CIRCUIT?: true
  }

  export type T_NOISE_ISC_SPECMaxAggregateInputType = {
    ID?: true
    MODEL?: true
    TYPE_COOLED?: true
    TYPE_REF?: true
    TYPE_EVAPORATOR?: true
    TYPE_RUNNING?: true
    POWER_SUPPLY?: true
    GENERATION?: true
    NOMINAL_TON?: true
    COOLING_CAPACITY?: true
    COOLING_CAPACITY_RT?: true
    HEATING_CAPACITY?: true
    HEATING_CAPACITY_RT?: true
    COOLING_INPUT_POWER?: true
    HEATING_INPUT_POWER?: true
    ESEER?: true
    IPLV?: true
    IPLV100?: true
    IPLV075?: true
    IPLV050?: true
    IPLV025?: true
    SEER?: true
    SCOP?: true
    DESCRIPTION?: true
    LOCATION?: true
    OBSOLETE?: true
    SOUND_PRESSURE?: true
    SOUND_PRESSURE_HEATING?: true
    COOLING_SOUND_POWER?: true
    HEATING_SOUND_POWER?: true
    EVAPORATOR_EA?: true
    COOLING_HEAD_LOSS?: true
    HEATING_HEAD_LOSS?: true
    COOLING_WATER_FLOW?: true
    HEATING_WATER_FLOW?: true
    WEIGHT?: true
    WEIGHT_SHIPPING?: true
    DIMENSION_W?: true
    DIMENSION_H?: true
    DIMENSION_D?: true
    FOOTPRINT?: true
    COMP_TYPE?: true
    COMP_OILTYPE?: true
    COMP_OILCHARGE?: true
    COMP_HEATER?: true
    REFRIGERANT?: true
    REFRIGERANT_CHARGE?: true
    COND_TYPE?: true
    COND_MAX_PRESSURE?: true
    DIAMETER?: true
    FAN_TYPE?: true
    FAN_VANE?: true
    FAN_FLOW_RATE?: true
    FAN_MOTOR_POWER?: true
    MAX_CURRENT?: true
    POWER_LINE?: true
    REMOTE_CONTROL?: true
    BREAKER?: true
    IMAGE_DIMENSIONS?: true
    IMAGE_INSTALLATION?: true
    IMAGE_WIRING_M?: true
    IMAGE_WIRING_S1?: true
    IMAGE_WIRING_S2?: true
    MCA?: true
    MSC?: true
    RLA?: true
    MIN_VOLTAGE?: true
    MAX_VOLTAGE?: true
    VOLTAGE?: true
    PHASE?: true
    HZ?: true
    CIRCUIT?: true
  }

  export type T_NOISE_ISC_SPECCountAggregateInputType = {
    ID?: true
    MODEL?: true
    TYPE_COOLED?: true
    TYPE_REF?: true
    TYPE_EVAPORATOR?: true
    TYPE_RUNNING?: true
    POWER_SUPPLY?: true
    GENERATION?: true
    NOMINAL_TON?: true
    COOLING_CAPACITY?: true
    COOLING_CAPACITY_RT?: true
    HEATING_CAPACITY?: true
    HEATING_CAPACITY_RT?: true
    COOLING_INPUT_POWER?: true
    HEATING_INPUT_POWER?: true
    ESEER?: true
    IPLV?: true
    IPLV100?: true
    IPLV075?: true
    IPLV050?: true
    IPLV025?: true
    SEER?: true
    SCOP?: true
    DESCRIPTION?: true
    LOCATION?: true
    OBSOLETE?: true
    SOUND_PRESSURE?: true
    SOUND_PRESSURE_HEATING?: true
    COOLING_SOUND_POWER?: true
    HEATING_SOUND_POWER?: true
    EVAPORATOR_EA?: true
    COOLING_HEAD_LOSS?: true
    HEATING_HEAD_LOSS?: true
    COOLING_WATER_FLOW?: true
    HEATING_WATER_FLOW?: true
    WEIGHT?: true
    WEIGHT_SHIPPING?: true
    DIMENSION_W?: true
    DIMENSION_H?: true
    DIMENSION_D?: true
    FOOTPRINT?: true
    COMP_TYPE?: true
    COMP_OILTYPE?: true
    COMP_OILCHARGE?: true
    COMP_HEATER?: true
    REFRIGERANT?: true
    REFRIGERANT_CHARGE?: true
    COND_TYPE?: true
    COND_MAX_PRESSURE?: true
    DIAMETER?: true
    FAN_TYPE?: true
    FAN_VANE?: true
    FAN_FLOW_RATE?: true
    FAN_MOTOR_POWER?: true
    MAX_CURRENT?: true
    POWER_LINE?: true
    REMOTE_CONTROL?: true
    BREAKER?: true
    IMAGE_DIMENSIONS?: true
    IMAGE_INSTALLATION?: true
    IMAGE_WIRING_M?: true
    IMAGE_WIRING_S1?: true
    IMAGE_WIRING_S2?: true
    MCA?: true
    MSC?: true
    RLA?: true
    MIN_VOLTAGE?: true
    MAX_VOLTAGE?: true
    VOLTAGE?: true
    PHASE?: true
    HZ?: true
    CIRCUIT?: true
    _all?: true
  }

  export type T_NOISE_ISC_SPECAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_ISC_SPEC to aggregate.
     */
    where?: T_NOISE_ISC_SPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_ISC_SPECS to fetch.
     */
    orderBy?: T_NOISE_ISC_SPECOrderByWithRelationInput | T_NOISE_ISC_SPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_NOISE_ISC_SPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_ISC_SPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_ISC_SPECS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_NOISE_ISC_SPECS
    **/
    _count?: true | T_NOISE_ISC_SPECCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_NOISE_ISC_SPECAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_NOISE_ISC_SPECSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_NOISE_ISC_SPECMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_NOISE_ISC_SPECMaxAggregateInputType
  }

  export type GetT_NOISE_ISC_SPECAggregateType<T extends T_NOISE_ISC_SPECAggregateArgs> = {
        [P in keyof T & keyof AggregateT_NOISE_ISC_SPEC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_NOISE_ISC_SPEC[P]>
      : GetScalarType<T[P], AggregateT_NOISE_ISC_SPEC[P]>
  }




  export type T_NOISE_ISC_SPECGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_NOISE_ISC_SPECWhereInput
    orderBy?: T_NOISE_ISC_SPECOrderByWithAggregationInput | T_NOISE_ISC_SPECOrderByWithAggregationInput[]
    by: T_NOISE_ISC_SPECScalarFieldEnum[] | T_NOISE_ISC_SPECScalarFieldEnum
    having?: T_NOISE_ISC_SPECScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_NOISE_ISC_SPECCountAggregateInputType | true
    _avg?: T_NOISE_ISC_SPECAvgAggregateInputType
    _sum?: T_NOISE_ISC_SPECSumAggregateInputType
    _min?: T_NOISE_ISC_SPECMinAggregateInputType
    _max?: T_NOISE_ISC_SPECMaxAggregateInputType
  }

  export type T_NOISE_ISC_SPECGroupByOutputType = {
    ID: number
    MODEL: string | null
    TYPE_COOLED: number | null
    TYPE_REF: number | null
    TYPE_EVAPORATOR: number | null
    TYPE_RUNNING: number | null
    POWER_SUPPLY: number | null
    GENERATION: number | null
    NOMINAL_TON: number | null
    COOLING_CAPACITY: number | null
    COOLING_CAPACITY_RT: Decimal | null
    HEATING_CAPACITY: Decimal | null
    HEATING_CAPACITY_RT: Decimal | null
    COOLING_INPUT_POWER: Decimal | null
    HEATING_INPUT_POWER: Decimal | null
    ESEER: Decimal | null
    IPLV: Decimal | null
    IPLV100: Decimal | null
    IPLV075: Decimal | null
    IPLV050: Decimal | null
    IPLV025: Decimal | null
    SEER: Decimal | null
    SCOP: Decimal | null
    DESCRIPTION: string | null
    LOCATION: string | null
    OBSOLETE: number | null
    SOUND_PRESSURE: string | null
    SOUND_PRESSURE_HEATING: string | null
    COOLING_SOUND_POWER: Decimal | null
    HEATING_SOUND_POWER: Decimal | null
    EVAPORATOR_EA: number | null
    COOLING_HEAD_LOSS: Decimal | null
    HEATING_HEAD_LOSS: Decimal | null
    COOLING_WATER_FLOW: Decimal | null
    HEATING_WATER_FLOW: Decimal | null
    WEIGHT: number | null
    WEIGHT_SHIPPING: number | null
    DIMENSION_W: number | null
    DIMENSION_H: number | null
    DIMENSION_D: number | null
    FOOTPRINT: Decimal | null
    COMP_TYPE: string | null
    COMP_OILTYPE: string | null
    COMP_OILCHARGE: string | null
    COMP_HEATER: string | null
    REFRIGERANT: string | null
    REFRIGERANT_CHARGE: string | null
    COND_TYPE: string | null
    COND_MAX_PRESSURE: string | null
    DIAMETER: string | null
    FAN_TYPE: string | null
    FAN_VANE: string | null
    FAN_FLOW_RATE: number | null
    FAN_MOTOR_POWER: number | null
    MAX_CURRENT: number | null
    POWER_LINE: string | null
    REMOTE_CONTROL: string | null
    BREAKER: string | null
    IMAGE_DIMENSIONS: string | null
    IMAGE_INSTALLATION: string | null
    IMAGE_WIRING_M: string | null
    IMAGE_WIRING_S1: string | null
    IMAGE_WIRING_S2: string | null
    MCA: string | null
    MSC: string | null
    RLA: string | null
    MIN_VOLTAGE: number | null
    MAX_VOLTAGE: number | null
    VOLTAGE: string | null
    PHASE: number | null
    HZ: string | null
    CIRCUIT: number | null
    _count: T_NOISE_ISC_SPECCountAggregateOutputType | null
    _avg: T_NOISE_ISC_SPECAvgAggregateOutputType | null
    _sum: T_NOISE_ISC_SPECSumAggregateOutputType | null
    _min: T_NOISE_ISC_SPECMinAggregateOutputType | null
    _max: T_NOISE_ISC_SPECMaxAggregateOutputType | null
  }

  type GetT_NOISE_ISC_SPECGroupByPayload<T extends T_NOISE_ISC_SPECGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_NOISE_ISC_SPECGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_NOISE_ISC_SPECGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_NOISE_ISC_SPECGroupByOutputType[P]>
            : GetScalarType<T[P], T_NOISE_ISC_SPECGroupByOutputType[P]>
        }
      >
    >


  export type T_NOISE_ISC_SPECSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    MODEL?: boolean
    TYPE_COOLED?: boolean
    TYPE_REF?: boolean
    TYPE_EVAPORATOR?: boolean
    TYPE_RUNNING?: boolean
    POWER_SUPPLY?: boolean
    GENERATION?: boolean
    NOMINAL_TON?: boolean
    COOLING_CAPACITY?: boolean
    COOLING_CAPACITY_RT?: boolean
    HEATING_CAPACITY?: boolean
    HEATING_CAPACITY_RT?: boolean
    COOLING_INPUT_POWER?: boolean
    HEATING_INPUT_POWER?: boolean
    ESEER?: boolean
    IPLV?: boolean
    IPLV100?: boolean
    IPLV075?: boolean
    IPLV050?: boolean
    IPLV025?: boolean
    SEER?: boolean
    SCOP?: boolean
    DESCRIPTION?: boolean
    LOCATION?: boolean
    OBSOLETE?: boolean
    SOUND_PRESSURE?: boolean
    SOUND_PRESSURE_HEATING?: boolean
    COOLING_SOUND_POWER?: boolean
    HEATING_SOUND_POWER?: boolean
    EVAPORATOR_EA?: boolean
    COOLING_HEAD_LOSS?: boolean
    HEATING_HEAD_LOSS?: boolean
    COOLING_WATER_FLOW?: boolean
    HEATING_WATER_FLOW?: boolean
    WEIGHT?: boolean
    WEIGHT_SHIPPING?: boolean
    DIMENSION_W?: boolean
    DIMENSION_H?: boolean
    DIMENSION_D?: boolean
    FOOTPRINT?: boolean
    COMP_TYPE?: boolean
    COMP_OILTYPE?: boolean
    COMP_OILCHARGE?: boolean
    COMP_HEATER?: boolean
    REFRIGERANT?: boolean
    REFRIGERANT_CHARGE?: boolean
    COND_TYPE?: boolean
    COND_MAX_PRESSURE?: boolean
    DIAMETER?: boolean
    FAN_TYPE?: boolean
    FAN_VANE?: boolean
    FAN_FLOW_RATE?: boolean
    FAN_MOTOR_POWER?: boolean
    MAX_CURRENT?: boolean
    POWER_LINE?: boolean
    REMOTE_CONTROL?: boolean
    BREAKER?: boolean
    IMAGE_DIMENSIONS?: boolean
    IMAGE_INSTALLATION?: boolean
    IMAGE_WIRING_M?: boolean
    IMAGE_WIRING_S1?: boolean
    IMAGE_WIRING_S2?: boolean
    MCA?: boolean
    MSC?: boolean
    RLA?: boolean
    MIN_VOLTAGE?: boolean
    MAX_VOLTAGE?: boolean
    VOLTAGE?: boolean
    PHASE?: boolean
    HZ?: boolean
    CIRCUIT?: boolean
  }, ExtArgs["result"]["t_NOISE_ISC_SPEC"]>

  export type T_NOISE_ISC_SPECSelectScalar = {
    ID?: boolean
    MODEL?: boolean
    TYPE_COOLED?: boolean
    TYPE_REF?: boolean
    TYPE_EVAPORATOR?: boolean
    TYPE_RUNNING?: boolean
    POWER_SUPPLY?: boolean
    GENERATION?: boolean
    NOMINAL_TON?: boolean
    COOLING_CAPACITY?: boolean
    COOLING_CAPACITY_RT?: boolean
    HEATING_CAPACITY?: boolean
    HEATING_CAPACITY_RT?: boolean
    COOLING_INPUT_POWER?: boolean
    HEATING_INPUT_POWER?: boolean
    ESEER?: boolean
    IPLV?: boolean
    IPLV100?: boolean
    IPLV075?: boolean
    IPLV050?: boolean
    IPLV025?: boolean
    SEER?: boolean
    SCOP?: boolean
    DESCRIPTION?: boolean
    LOCATION?: boolean
    OBSOLETE?: boolean
    SOUND_PRESSURE?: boolean
    SOUND_PRESSURE_HEATING?: boolean
    COOLING_SOUND_POWER?: boolean
    HEATING_SOUND_POWER?: boolean
    EVAPORATOR_EA?: boolean
    COOLING_HEAD_LOSS?: boolean
    HEATING_HEAD_LOSS?: boolean
    COOLING_WATER_FLOW?: boolean
    HEATING_WATER_FLOW?: boolean
    WEIGHT?: boolean
    WEIGHT_SHIPPING?: boolean
    DIMENSION_W?: boolean
    DIMENSION_H?: boolean
    DIMENSION_D?: boolean
    FOOTPRINT?: boolean
    COMP_TYPE?: boolean
    COMP_OILTYPE?: boolean
    COMP_OILCHARGE?: boolean
    COMP_HEATER?: boolean
    REFRIGERANT?: boolean
    REFRIGERANT_CHARGE?: boolean
    COND_TYPE?: boolean
    COND_MAX_PRESSURE?: boolean
    DIAMETER?: boolean
    FAN_TYPE?: boolean
    FAN_VANE?: boolean
    FAN_FLOW_RATE?: boolean
    FAN_MOTOR_POWER?: boolean
    MAX_CURRENT?: boolean
    POWER_LINE?: boolean
    REMOTE_CONTROL?: boolean
    BREAKER?: boolean
    IMAGE_DIMENSIONS?: boolean
    IMAGE_INSTALLATION?: boolean
    IMAGE_WIRING_M?: boolean
    IMAGE_WIRING_S1?: boolean
    IMAGE_WIRING_S2?: boolean
    MCA?: boolean
    MSC?: boolean
    RLA?: boolean
    MIN_VOLTAGE?: boolean
    MAX_VOLTAGE?: boolean
    VOLTAGE?: boolean
    PHASE?: boolean
    HZ?: boolean
    CIRCUIT?: boolean
  }


  export type $T_NOISE_ISC_SPECPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_NOISE_ISC_SPEC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      MODEL: string | null
      TYPE_COOLED: number | null
      TYPE_REF: number | null
      TYPE_EVAPORATOR: number | null
      TYPE_RUNNING: number | null
      POWER_SUPPLY: number | null
      GENERATION: number | null
      NOMINAL_TON: number | null
      COOLING_CAPACITY: number | null
      COOLING_CAPACITY_RT: Prisma.Decimal | null
      HEATING_CAPACITY: Prisma.Decimal | null
      HEATING_CAPACITY_RT: Prisma.Decimal | null
      COOLING_INPUT_POWER: Prisma.Decimal | null
      HEATING_INPUT_POWER: Prisma.Decimal | null
      ESEER: Prisma.Decimal | null
      IPLV: Prisma.Decimal | null
      IPLV100: Prisma.Decimal | null
      IPLV075: Prisma.Decimal | null
      IPLV050: Prisma.Decimal | null
      IPLV025: Prisma.Decimal | null
      SEER: Prisma.Decimal | null
      SCOP: Prisma.Decimal | null
      DESCRIPTION: string | null
      LOCATION: string | null
      OBSOLETE: number | null
      SOUND_PRESSURE: string | null
      SOUND_PRESSURE_HEATING: string | null
      COOLING_SOUND_POWER: Prisma.Decimal | null
      HEATING_SOUND_POWER: Prisma.Decimal | null
      EVAPORATOR_EA: number | null
      COOLING_HEAD_LOSS: Prisma.Decimal | null
      HEATING_HEAD_LOSS: Prisma.Decimal | null
      COOLING_WATER_FLOW: Prisma.Decimal | null
      HEATING_WATER_FLOW: Prisma.Decimal | null
      WEIGHT: number | null
      WEIGHT_SHIPPING: number | null
      DIMENSION_W: number | null
      DIMENSION_H: number | null
      DIMENSION_D: number | null
      FOOTPRINT: Prisma.Decimal | null
      COMP_TYPE: string | null
      COMP_OILTYPE: string | null
      COMP_OILCHARGE: string | null
      COMP_HEATER: string | null
      REFRIGERANT: string | null
      REFRIGERANT_CHARGE: string | null
      COND_TYPE: string | null
      COND_MAX_PRESSURE: string | null
      DIAMETER: string | null
      FAN_TYPE: string | null
      FAN_VANE: string | null
      FAN_FLOW_RATE: number | null
      FAN_MOTOR_POWER: number | null
      MAX_CURRENT: number | null
      POWER_LINE: string | null
      REMOTE_CONTROL: string | null
      BREAKER: string | null
      IMAGE_DIMENSIONS: string | null
      IMAGE_INSTALLATION: string | null
      IMAGE_WIRING_M: string | null
      IMAGE_WIRING_S1: string | null
      IMAGE_WIRING_S2: string | null
      MCA: string | null
      MSC: string | null
      RLA: string | null
      MIN_VOLTAGE: number | null
      MAX_VOLTAGE: number | null
      VOLTAGE: string | null
      PHASE: number | null
      HZ: string | null
      CIRCUIT: number | null
    }, ExtArgs["result"]["t_NOISE_ISC_SPEC"]>
    composites: {}
  }


  type T_NOISE_ISC_SPECGetPayload<S extends boolean | null | undefined | T_NOISE_ISC_SPECDefaultArgs> = $Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload, S>

  type T_NOISE_ISC_SPECCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<T_NOISE_ISC_SPECFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: T_NOISE_ISC_SPECCountAggregateInputType | true
    }

  export interface T_NOISE_ISC_SPECDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_NOISE_ISC_SPEC'], meta: { name: 'T_NOISE_ISC_SPEC' } }
    /**
     * Find zero or one T_NOISE_ISC_SPEC that matches the filter.
     * @param {T_NOISE_ISC_SPECFindUniqueArgs} args - Arguments to find a T_NOISE_ISC_SPEC
     * @example
     * // Get one T_NOISE_ISC_SPEC
     * const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends T_NOISE_ISC_SPECFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_ISC_SPECFindUniqueArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one T_NOISE_ISC_SPEC that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {T_NOISE_ISC_SPECFindUniqueOrThrowArgs} args - Arguments to find a T_NOISE_ISC_SPEC
     * @example
     * // Get one T_NOISE_ISC_SPEC
     * const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends T_NOISE_ISC_SPECFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_ISC_SPECFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first T_NOISE_ISC_SPEC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_ISC_SPECFindFirstArgs} args - Arguments to find a T_NOISE_ISC_SPEC
     * @example
     * // Get one T_NOISE_ISC_SPEC
     * const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends T_NOISE_ISC_SPECFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_ISC_SPECFindFirstArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first T_NOISE_ISC_SPEC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_ISC_SPECFindFirstOrThrowArgs} args - Arguments to find a T_NOISE_ISC_SPEC
     * @example
     * // Get one T_NOISE_ISC_SPEC
     * const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends T_NOISE_ISC_SPECFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_ISC_SPECFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more T_NOISE_ISC_SPECS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_ISC_SPECFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_NOISE_ISC_SPECS
     * const t_NOISE_ISC_SPECS = await prisma.t_NOISE_ISC_SPEC.findMany()
     * 
     * // Get first 10 T_NOISE_ISC_SPECS
     * const t_NOISE_ISC_SPECS = await prisma.t_NOISE_ISC_SPEC.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const t_NOISE_ISC_SPECWithIDOnly = await prisma.t_NOISE_ISC_SPEC.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends T_NOISE_ISC_SPECFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_ISC_SPECFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a T_NOISE_ISC_SPEC.
     * @param {T_NOISE_ISC_SPECCreateArgs} args - Arguments to create a T_NOISE_ISC_SPEC.
     * @example
     * // Create one T_NOISE_ISC_SPEC
     * const T_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.create({
     *   data: {
     *     // ... data to create a T_NOISE_ISC_SPEC
     *   }
     * })
     * 
    **/
    create<T extends T_NOISE_ISC_SPECCreateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_ISC_SPECCreateArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many T_NOISE_ISC_SPECS.
     *     @param {T_NOISE_ISC_SPECCreateManyArgs} args - Arguments to create many T_NOISE_ISC_SPECS.
     *     @example
     *     // Create many T_NOISE_ISC_SPECS
     *     const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends T_NOISE_ISC_SPECCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_ISC_SPECCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_NOISE_ISC_SPEC.
     * @param {T_NOISE_ISC_SPECDeleteArgs} args - Arguments to delete one T_NOISE_ISC_SPEC.
     * @example
     * // Delete one T_NOISE_ISC_SPEC
     * const T_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.delete({
     *   where: {
     *     // ... filter to delete one T_NOISE_ISC_SPEC
     *   }
     * })
     * 
    **/
    delete<T extends T_NOISE_ISC_SPECDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_ISC_SPECDeleteArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one T_NOISE_ISC_SPEC.
     * @param {T_NOISE_ISC_SPECUpdateArgs} args - Arguments to update one T_NOISE_ISC_SPEC.
     * @example
     * // Update one T_NOISE_ISC_SPEC
     * const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends T_NOISE_ISC_SPECUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_ISC_SPECUpdateArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more T_NOISE_ISC_SPECS.
     * @param {T_NOISE_ISC_SPECDeleteManyArgs} args - Arguments to filter T_NOISE_ISC_SPECS to delete.
     * @example
     * // Delete a few T_NOISE_ISC_SPECS
     * const { count } = await prisma.t_NOISE_ISC_SPEC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends T_NOISE_ISC_SPECDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, T_NOISE_ISC_SPECDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_NOISE_ISC_SPECS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_ISC_SPECUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_NOISE_ISC_SPECS
     * const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends T_NOISE_ISC_SPECUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_ISC_SPECUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_NOISE_ISC_SPEC.
     * @param {T_NOISE_ISC_SPECUpsertArgs} args - Arguments to update or create a T_NOISE_ISC_SPEC.
     * @example
     * // Update or create a T_NOISE_ISC_SPEC
     * const t_NOISE_ISC_SPEC = await prisma.t_NOISE_ISC_SPEC.upsert({
     *   create: {
     *     // ... data to create a T_NOISE_ISC_SPEC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_NOISE_ISC_SPEC we want to update
     *   }
     * })
    **/
    upsert<T extends T_NOISE_ISC_SPECUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, T_NOISE_ISC_SPECUpsertArgs<ExtArgs>>
    ): Prisma__T_NOISE_ISC_SPECClient<$Result.GetResult<Prisma.$T_NOISE_ISC_SPECPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of T_NOISE_ISC_SPECS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_ISC_SPECCountArgs} args - Arguments to filter T_NOISE_ISC_SPECS to count.
     * @example
     * // Count the number of T_NOISE_ISC_SPECS
     * const count = await prisma.t_NOISE_ISC_SPEC.count({
     *   where: {
     *     // ... the filter for the T_NOISE_ISC_SPECS we want to count
     *   }
     * })
    **/
    count<T extends T_NOISE_ISC_SPECCountArgs>(
      args?: Subset<T, T_NOISE_ISC_SPECCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_NOISE_ISC_SPECCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_NOISE_ISC_SPEC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_ISC_SPECAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_NOISE_ISC_SPECAggregateArgs>(args: Subset<T, T_NOISE_ISC_SPECAggregateArgs>): Prisma.PrismaPromise<GetT_NOISE_ISC_SPECAggregateType<T>>

    /**
     * Group by T_NOISE_ISC_SPEC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_NOISE_ISC_SPECGroupByArgs} args - Group by arguments.
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
      T extends T_NOISE_ISC_SPECGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_NOISE_ISC_SPECGroupByArgs['orderBy'] }
        : { orderBy?: T_NOISE_ISC_SPECGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, T_NOISE_ISC_SPECGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_NOISE_ISC_SPECGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_NOISE_ISC_SPEC model
   */
  readonly fields: T_NOISE_ISC_SPECFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_NOISE_ISC_SPEC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_NOISE_ISC_SPECClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the T_NOISE_ISC_SPEC model
   */ 
  interface T_NOISE_ISC_SPECFieldRefs {
    readonly ID: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly MODEL: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly TYPE_COOLED: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly TYPE_REF: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly TYPE_EVAPORATOR: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly TYPE_RUNNING: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly POWER_SUPPLY: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly GENERATION: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly NOMINAL_TON: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly COOLING_CAPACITY: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly COOLING_CAPACITY_RT: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly HEATING_CAPACITY: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly HEATING_CAPACITY_RT: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly COOLING_INPUT_POWER: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly HEATING_INPUT_POWER: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly ESEER: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly IPLV: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly IPLV100: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly IPLV075: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly IPLV050: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly IPLV025: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly SEER: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly SCOP: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly DESCRIPTION: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly LOCATION: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly OBSOLETE: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly SOUND_PRESSURE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly SOUND_PRESSURE_HEATING: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly COOLING_SOUND_POWER: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly HEATING_SOUND_POWER: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly EVAPORATOR_EA: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly COOLING_HEAD_LOSS: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly HEATING_HEAD_LOSS: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly COOLING_WATER_FLOW: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly HEATING_WATER_FLOW: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly WEIGHT: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly WEIGHT_SHIPPING: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly DIMENSION_W: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly DIMENSION_H: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly DIMENSION_D: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly FOOTPRINT: FieldRef<"T_NOISE_ISC_SPEC", 'Decimal'>
    readonly COMP_TYPE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly COMP_OILTYPE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly COMP_OILCHARGE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly COMP_HEATER: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly REFRIGERANT: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly REFRIGERANT_CHARGE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly COND_TYPE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly COND_MAX_PRESSURE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly DIAMETER: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly FAN_TYPE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly FAN_VANE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly FAN_FLOW_RATE: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly FAN_MOTOR_POWER: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly MAX_CURRENT: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly POWER_LINE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly REMOTE_CONTROL: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly BREAKER: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly IMAGE_DIMENSIONS: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly IMAGE_INSTALLATION: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly IMAGE_WIRING_M: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly IMAGE_WIRING_S1: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly IMAGE_WIRING_S2: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly MCA: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly MSC: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly RLA: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly MIN_VOLTAGE: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly MAX_VOLTAGE: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly VOLTAGE: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly PHASE: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
    readonly HZ: FieldRef<"T_NOISE_ISC_SPEC", 'String'>
    readonly CIRCUIT: FieldRef<"T_NOISE_ISC_SPEC", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * T_NOISE_ISC_SPEC findUnique
   */
  export type T_NOISE_ISC_SPECFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_ISC_SPEC to fetch.
     */
    where: T_NOISE_ISC_SPECWhereUniqueInput
  }


  /**
   * T_NOISE_ISC_SPEC findUniqueOrThrow
   */
  export type T_NOISE_ISC_SPECFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_ISC_SPEC to fetch.
     */
    where: T_NOISE_ISC_SPECWhereUniqueInput
  }


  /**
   * T_NOISE_ISC_SPEC findFirst
   */
  export type T_NOISE_ISC_SPECFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_ISC_SPEC to fetch.
     */
    where?: T_NOISE_ISC_SPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_ISC_SPECS to fetch.
     */
    orderBy?: T_NOISE_ISC_SPECOrderByWithRelationInput | T_NOISE_ISC_SPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_ISC_SPECS.
     */
    cursor?: T_NOISE_ISC_SPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_ISC_SPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_ISC_SPECS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_ISC_SPECS.
     */
    distinct?: T_NOISE_ISC_SPECScalarFieldEnum | T_NOISE_ISC_SPECScalarFieldEnum[]
  }


  /**
   * T_NOISE_ISC_SPEC findFirstOrThrow
   */
  export type T_NOISE_ISC_SPECFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_ISC_SPEC to fetch.
     */
    where?: T_NOISE_ISC_SPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_ISC_SPECS to fetch.
     */
    orderBy?: T_NOISE_ISC_SPECOrderByWithRelationInput | T_NOISE_ISC_SPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_NOISE_ISC_SPECS.
     */
    cursor?: T_NOISE_ISC_SPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_ISC_SPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_ISC_SPECS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_NOISE_ISC_SPECS.
     */
    distinct?: T_NOISE_ISC_SPECScalarFieldEnum | T_NOISE_ISC_SPECScalarFieldEnum[]
  }


  /**
   * T_NOISE_ISC_SPEC findMany
   */
  export type T_NOISE_ISC_SPECFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * Filter, which T_NOISE_ISC_SPECS to fetch.
     */
    where?: T_NOISE_ISC_SPECWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_NOISE_ISC_SPECS to fetch.
     */
    orderBy?: T_NOISE_ISC_SPECOrderByWithRelationInput | T_NOISE_ISC_SPECOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_NOISE_ISC_SPECS.
     */
    cursor?: T_NOISE_ISC_SPECWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_NOISE_ISC_SPECS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_NOISE_ISC_SPECS.
     */
    skip?: number
    distinct?: T_NOISE_ISC_SPECScalarFieldEnum | T_NOISE_ISC_SPECScalarFieldEnum[]
  }


  /**
   * T_NOISE_ISC_SPEC create
   */
  export type T_NOISE_ISC_SPECCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * The data needed to create a T_NOISE_ISC_SPEC.
     */
    data: XOR<T_NOISE_ISC_SPECCreateInput, T_NOISE_ISC_SPECUncheckedCreateInput>
  }


  /**
   * T_NOISE_ISC_SPEC createMany
   */
  export type T_NOISE_ISC_SPECCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_NOISE_ISC_SPECS.
     */
    data: T_NOISE_ISC_SPECCreateManyInput | T_NOISE_ISC_SPECCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * T_NOISE_ISC_SPEC update
   */
  export type T_NOISE_ISC_SPECUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * The data needed to update a T_NOISE_ISC_SPEC.
     */
    data: XOR<T_NOISE_ISC_SPECUpdateInput, T_NOISE_ISC_SPECUncheckedUpdateInput>
    /**
     * Choose, which T_NOISE_ISC_SPEC to update.
     */
    where: T_NOISE_ISC_SPECWhereUniqueInput
  }


  /**
   * T_NOISE_ISC_SPEC updateMany
   */
  export type T_NOISE_ISC_SPECUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_NOISE_ISC_SPECS.
     */
    data: XOR<T_NOISE_ISC_SPECUpdateManyMutationInput, T_NOISE_ISC_SPECUncheckedUpdateManyInput>
    /**
     * Filter which T_NOISE_ISC_SPECS to update
     */
    where?: T_NOISE_ISC_SPECWhereInput
  }


  /**
   * T_NOISE_ISC_SPEC upsert
   */
  export type T_NOISE_ISC_SPECUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * The filter to search for the T_NOISE_ISC_SPEC to update in case it exists.
     */
    where: T_NOISE_ISC_SPECWhereUniqueInput
    /**
     * In case the T_NOISE_ISC_SPEC found by the `where` argument doesn't exist, create a new T_NOISE_ISC_SPEC with this data.
     */
    create: XOR<T_NOISE_ISC_SPECCreateInput, T_NOISE_ISC_SPECUncheckedCreateInput>
    /**
     * In case the T_NOISE_ISC_SPEC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_NOISE_ISC_SPECUpdateInput, T_NOISE_ISC_SPECUncheckedUpdateInput>
  }


  /**
   * T_NOISE_ISC_SPEC delete
   */
  export type T_NOISE_ISC_SPECDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
    /**
     * Filter which T_NOISE_ISC_SPEC to delete.
     */
    where: T_NOISE_ISC_SPECWhereUniqueInput
  }


  /**
   * T_NOISE_ISC_SPEC deleteMany
   */
  export type T_NOISE_ISC_SPECDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_NOISE_ISC_SPECS to delete
     */
    where?: T_NOISE_ISC_SPECWhereInput
  }


  /**
   * T_NOISE_ISC_SPEC without action
   */
  export type T_NOISE_ISC_SPECDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_NOISE_ISC_SPEC
     */
    select?: T_NOISE_ISC_SPECSelect<ExtArgs> | null
  }



  /**
   * Model V_NOISE_MULTIV_I
   */

  export type AggregateV_NOISE_MULTIV_I = {
    _count: V_NOISE_MULTIV_ICountAggregateOutputType | null
    _avg: V_NOISE_MULTIV_IAvgAggregateOutputType | null
    _sum: V_NOISE_MULTIV_ISumAggregateOutputType | null
    _min: V_NOISE_MULTIV_IMinAggregateOutputType | null
    _max: V_NOISE_MULTIV_IMaxAggregateOutputType | null
  }

  export type V_NOISE_MULTIV_IAvgAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_ISumAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_IMinAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_IMaxAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_ICountAggregateOutputType = {
    BUYER_MODEL_NAME: number
    T_HEAT_W: number
    T_COOL_W: number
    _all: number
  }


  export type V_NOISE_MULTIV_IAvgAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_ISumAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_IMinAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_IMaxAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_ICountAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
    _all?: true
  }

  export type V_NOISE_MULTIV_IAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTIV_I to aggregate.
     */
    where?: V_NOISE_MULTIV_IWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_IS to fetch.
     */
    orderBy?: V_NOISE_MULTIV_IOrderByWithRelationInput | V_NOISE_MULTIV_IOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_MULTIV_IWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_IS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_IS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_MULTIV_IS
    **/
    _count?: true | V_NOISE_MULTIV_ICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_MULTIV_IAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_MULTIV_ISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_MULTIV_IMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_MULTIV_IMaxAggregateInputType
  }

  export type GetV_NOISE_MULTIV_IAggregateType<T extends V_NOISE_MULTIV_IAggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_MULTIV_I]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_MULTIV_I[P]>
      : GetScalarType<T[P], AggregateV_NOISE_MULTIV_I[P]>
  }




  export type V_NOISE_MULTIV_IGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_MULTIV_IWhereInput
    orderBy?: V_NOISE_MULTIV_IOrderByWithAggregationInput | V_NOISE_MULTIV_IOrderByWithAggregationInput[]
    by: V_NOISE_MULTIV_IScalarFieldEnum[] | V_NOISE_MULTIV_IScalarFieldEnum
    having?: V_NOISE_MULTIV_IScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_MULTIV_ICountAggregateInputType | true
    _avg?: V_NOISE_MULTIV_IAvgAggregateInputType
    _sum?: V_NOISE_MULTIV_ISumAggregateInputType
    _min?: V_NOISE_MULTIV_IMinAggregateInputType
    _max?: V_NOISE_MULTIV_IMaxAggregateInputType
  }

  export type V_NOISE_MULTIV_IGroupByOutputType = {
    BUYER_MODEL_NAME: string
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
    _count: V_NOISE_MULTIV_ICountAggregateOutputType | null
    _avg: V_NOISE_MULTIV_IAvgAggregateOutputType | null
    _sum: V_NOISE_MULTIV_ISumAggregateOutputType | null
    _min: V_NOISE_MULTIV_IMinAggregateOutputType | null
    _max: V_NOISE_MULTIV_IMaxAggregateOutputType | null
  }

  type GetV_NOISE_MULTIV_IGroupByPayload<T extends V_NOISE_MULTIV_IGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_MULTIV_IGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_MULTIV_IGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_MULTIV_IGroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_MULTIV_IGroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_MULTIV_ISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }, ExtArgs["result"]["v_NOISE_MULTIV_I"]>

  export type V_NOISE_MULTIV_ISelectScalar = {
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }


  export type $V_NOISE_MULTIV_IPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_MULTIV_I"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BUYER_MODEL_NAME: string
      T_HEAT_W: Prisma.Decimal | null
      T_COOL_W: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_MULTIV_I"]>
    composites: {}
  }


  type V_NOISE_MULTIV_IGetPayload<S extends boolean | null | undefined | V_NOISE_MULTIV_IDefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload, S>

  type V_NOISE_MULTIV_ICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_MULTIV_IFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_MULTIV_ICountAggregateInputType | true
    }

  export interface V_NOISE_MULTIV_IDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_MULTIV_I'], meta: { name: 'V_NOISE_MULTIV_I' } }
    /**
     * Find zero or one V_NOISE_MULTIV_I that matches the filter.
     * @param {V_NOISE_MULTIV_IFindUniqueArgs} args - Arguments to find a V_NOISE_MULTIV_I
     * @example
     * // Get one V_NOISE_MULTIV_I
     * const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_MULTIV_IFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_IFindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_MULTIV_I that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_MULTIV_IFindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_MULTIV_I
     * @example
     * // Get one V_NOISE_MULTIV_I
     * const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_MULTIV_IFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_IFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_MULTIV_I that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_IFindFirstArgs} args - Arguments to find a V_NOISE_MULTIV_I
     * @example
     * // Get one V_NOISE_MULTIV_I
     * const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_MULTIV_IFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_IFindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_MULTIV_I that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_IFindFirstOrThrowArgs} args - Arguments to find a V_NOISE_MULTIV_I
     * @example
     * // Get one V_NOISE_MULTIV_I
     * const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_MULTIV_IFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_IFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_MULTIV_IS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_IFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_MULTIV_IS
     * const v_NOISE_MULTIV_IS = await prisma.v_NOISE_MULTIV_I.findMany()
     * 
     * // Get first 10 V_NOISE_MULTIV_IS
     * const v_NOISE_MULTIV_IS = await prisma.v_NOISE_MULTIV_I.findMany({ take: 10 })
     * 
     * // Only select the `BUYER_MODEL_NAME`
     * const v_NOISE_MULTIV_IWithBUYER_MODEL_NAMEOnly = await prisma.v_NOISE_MULTIV_I.findMany({ select: { BUYER_MODEL_NAME: true } })
     * 
    **/
    findMany<T extends V_NOISE_MULTIV_IFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_IFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_MULTIV_I.
     * @param {V_NOISE_MULTIV_ICreateArgs} args - Arguments to create a V_NOISE_MULTIV_I.
     * @example
     * // Create one V_NOISE_MULTIV_I
     * const V_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.create({
     *   data: {
     *     // ... data to create a V_NOISE_MULTIV_I
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_MULTIV_ICreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_ICreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_MULTIV_IS.
     *     @param {V_NOISE_MULTIV_ICreateManyArgs} args - Arguments to create many V_NOISE_MULTIV_IS.
     *     @example
     *     // Create many V_NOISE_MULTIV_IS
     *     const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_MULTIV_ICreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_ICreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_MULTIV_I.
     * @param {V_NOISE_MULTIV_IDeleteArgs} args - Arguments to delete one V_NOISE_MULTIV_I.
     * @example
     * // Delete one V_NOISE_MULTIV_I
     * const V_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_MULTIV_I
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_MULTIV_IDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_IDeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_MULTIV_I.
     * @param {V_NOISE_MULTIV_IUpdateArgs} args - Arguments to update one V_NOISE_MULTIV_I.
     * @example
     * // Update one V_NOISE_MULTIV_I
     * const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_MULTIV_IUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_IUpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_MULTIV_IS.
     * @param {V_NOISE_MULTIV_IDeleteManyArgs} args - Arguments to filter V_NOISE_MULTIV_IS to delete.
     * @example
     * // Delete a few V_NOISE_MULTIV_IS
     * const { count } = await prisma.v_NOISE_MULTIV_I.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_MULTIV_IDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_IDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_MULTIV_IS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_IUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_MULTIV_IS
     * const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_MULTIV_IUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_IUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_MULTIV_I.
     * @param {V_NOISE_MULTIV_IUpsertArgs} args - Arguments to update or create a V_NOISE_MULTIV_I.
     * @example
     * // Update or create a V_NOISE_MULTIV_I
     * const v_NOISE_MULTIV_I = await prisma.v_NOISE_MULTIV_I.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_MULTIV_I
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_MULTIV_I we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_MULTIV_IUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_IUpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_IClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_IPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_MULTIV_IS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_ICountArgs} args - Arguments to filter V_NOISE_MULTIV_IS to count.
     * @example
     * // Count the number of V_NOISE_MULTIV_IS
     * const count = await prisma.v_NOISE_MULTIV_I.count({
     *   where: {
     *     // ... the filter for the V_NOISE_MULTIV_IS we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_MULTIV_ICountArgs>(
      args?: Subset<T, V_NOISE_MULTIV_ICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_MULTIV_ICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_MULTIV_I.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_IAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_MULTIV_IAggregateArgs>(args: Subset<T, V_NOISE_MULTIV_IAggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_MULTIV_IAggregateType<T>>

    /**
     * Group by V_NOISE_MULTIV_I.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_IGroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_MULTIV_IGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_MULTIV_IGroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_MULTIV_IGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_MULTIV_IGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_MULTIV_IGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_MULTIV_I model
   */
  readonly fields: V_NOISE_MULTIV_IFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_MULTIV_I.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_MULTIV_IClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_MULTIV_I model
   */ 
  interface V_NOISE_MULTIV_IFieldRefs {
    readonly BUYER_MODEL_NAME: FieldRef<"V_NOISE_MULTIV_I", 'String'>
    readonly T_HEAT_W: FieldRef<"V_NOISE_MULTIV_I", 'Decimal'>
    readonly T_COOL_W: FieldRef<"V_NOISE_MULTIV_I", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_MULTIV_I findUnique
   */
  export type V_NOISE_MULTIV_IFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_I to fetch.
     */
    where: V_NOISE_MULTIV_IWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_I findUniqueOrThrow
   */
  export type V_NOISE_MULTIV_IFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_I to fetch.
     */
    where: V_NOISE_MULTIV_IWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_I findFirst
   */
  export type V_NOISE_MULTIV_IFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_I to fetch.
     */
    where?: V_NOISE_MULTIV_IWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_IS to fetch.
     */
    orderBy?: V_NOISE_MULTIV_IOrderByWithRelationInput | V_NOISE_MULTIV_IOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIV_IS.
     */
    cursor?: V_NOISE_MULTIV_IWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_IS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_IS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIV_IS.
     */
    distinct?: V_NOISE_MULTIV_IScalarFieldEnum | V_NOISE_MULTIV_IScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_I findFirstOrThrow
   */
  export type V_NOISE_MULTIV_IFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_I to fetch.
     */
    where?: V_NOISE_MULTIV_IWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_IS to fetch.
     */
    orderBy?: V_NOISE_MULTIV_IOrderByWithRelationInput | V_NOISE_MULTIV_IOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIV_IS.
     */
    cursor?: V_NOISE_MULTIV_IWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_IS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_IS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIV_IS.
     */
    distinct?: V_NOISE_MULTIV_IScalarFieldEnum | V_NOISE_MULTIV_IScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_I findMany
   */
  export type V_NOISE_MULTIV_IFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_IS to fetch.
     */
    where?: V_NOISE_MULTIV_IWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_IS to fetch.
     */
    orderBy?: V_NOISE_MULTIV_IOrderByWithRelationInput | V_NOISE_MULTIV_IOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_MULTIV_IS.
     */
    cursor?: V_NOISE_MULTIV_IWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_IS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_IS.
     */
    skip?: number
    distinct?: V_NOISE_MULTIV_IScalarFieldEnum | V_NOISE_MULTIV_IScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_I create
   */
  export type V_NOISE_MULTIV_ICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_MULTIV_I.
     */
    data: XOR<V_NOISE_MULTIV_ICreateInput, V_NOISE_MULTIV_IUncheckedCreateInput>
  }


  /**
   * V_NOISE_MULTIV_I createMany
   */
  export type V_NOISE_MULTIV_ICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_MULTIV_IS.
     */
    data: V_NOISE_MULTIV_ICreateManyInput | V_NOISE_MULTIV_ICreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_MULTIV_I update
   */
  export type V_NOISE_MULTIV_IUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_MULTIV_I.
     */
    data: XOR<V_NOISE_MULTIV_IUpdateInput, V_NOISE_MULTIV_IUncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_MULTIV_I to update.
     */
    where: V_NOISE_MULTIV_IWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_I updateMany
   */
  export type V_NOISE_MULTIV_IUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_MULTIV_IS.
     */
    data: XOR<V_NOISE_MULTIV_IUpdateManyMutationInput, V_NOISE_MULTIV_IUncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_MULTIV_IS to update
     */
    where?: V_NOISE_MULTIV_IWhereInput
  }


  /**
   * V_NOISE_MULTIV_I upsert
   */
  export type V_NOISE_MULTIV_IUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_MULTIV_I to update in case it exists.
     */
    where: V_NOISE_MULTIV_IWhereUniqueInput
    /**
     * In case the V_NOISE_MULTIV_I found by the `where` argument doesn't exist, create a new V_NOISE_MULTIV_I with this data.
     */
    create: XOR<V_NOISE_MULTIV_ICreateInput, V_NOISE_MULTIV_IUncheckedCreateInput>
    /**
     * In case the V_NOISE_MULTIV_I was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_MULTIV_IUpdateInput, V_NOISE_MULTIV_IUncheckedUpdateInput>
  }


  /**
   * V_NOISE_MULTIV_I delete
   */
  export type V_NOISE_MULTIV_IDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
    /**
     * Filter which V_NOISE_MULTIV_I to delete.
     */
    where: V_NOISE_MULTIV_IWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_I deleteMany
   */
  export type V_NOISE_MULTIV_IDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTIV_IS to delete
     */
    where?: V_NOISE_MULTIV_IWhereInput
  }


  /**
   * V_NOISE_MULTIV_I without action
   */
  export type V_NOISE_MULTIV_IDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_I
     */
    select?: V_NOISE_MULTIV_ISelect<ExtArgs> | null
  }



  /**
   * Model V_NOISE_RAC
   */

  export type AggregateV_NOISE_RAC = {
    _count: V_NOISE_RACCountAggregateOutputType | null
    _avg: V_NOISE_RACAvgAggregateOutputType | null
    _sum: V_NOISE_RACSumAggregateOutputType | null
    _min: V_NOISE_RACMinAggregateOutputType | null
    _max: V_NOISE_RACMaxAggregateOutputType | null
  }

  export type V_NOISE_RACAvgAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_RACSumAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_RACMinAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_RACMaxAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_RACCountAggregateOutputType = {
    BUYER_MODEL_NAME: number
    T_HEAT_W: number
    T_COOL_W: number
    _all: number
  }


  export type V_NOISE_RACAvgAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_RACSumAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_RACMinAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_RACMaxAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_RACCountAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
    _all?: true
  }

  export type V_NOISE_RACAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_RAC to aggregate.
     */
    where?: V_NOISE_RACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_RACS to fetch.
     */
    orderBy?: V_NOISE_RACOrderByWithRelationInput | V_NOISE_RACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_RACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_RACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_RACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_RACS
    **/
    _count?: true | V_NOISE_RACCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_RACAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_RACSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_RACMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_RACMaxAggregateInputType
  }

  export type GetV_NOISE_RACAggregateType<T extends V_NOISE_RACAggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_RAC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_RAC[P]>
      : GetScalarType<T[P], AggregateV_NOISE_RAC[P]>
  }




  export type V_NOISE_RACGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_RACWhereInput
    orderBy?: V_NOISE_RACOrderByWithAggregationInput | V_NOISE_RACOrderByWithAggregationInput[]
    by: V_NOISE_RACScalarFieldEnum[] | V_NOISE_RACScalarFieldEnum
    having?: V_NOISE_RACScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_RACCountAggregateInputType | true
    _avg?: V_NOISE_RACAvgAggregateInputType
    _sum?: V_NOISE_RACSumAggregateInputType
    _min?: V_NOISE_RACMinAggregateInputType
    _max?: V_NOISE_RACMaxAggregateInputType
  }

  export type V_NOISE_RACGroupByOutputType = {
    BUYER_MODEL_NAME: string
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
    _count: V_NOISE_RACCountAggregateOutputType | null
    _avg: V_NOISE_RACAvgAggregateOutputType | null
    _sum: V_NOISE_RACSumAggregateOutputType | null
    _min: V_NOISE_RACMinAggregateOutputType | null
    _max: V_NOISE_RACMaxAggregateOutputType | null
  }

  type GetV_NOISE_RACGroupByPayload<T extends V_NOISE_RACGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_RACGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_RACGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_RACGroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_RACGroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_RACSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }, ExtArgs["result"]["v_NOISE_RAC"]>

  export type V_NOISE_RACSelectScalar = {
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }


  export type $V_NOISE_RACPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_RAC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BUYER_MODEL_NAME: string
      T_HEAT_W: Prisma.Decimal | null
      T_COOL_W: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_RAC"]>
    composites: {}
  }


  type V_NOISE_RACGetPayload<S extends boolean | null | undefined | V_NOISE_RACDefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_RACPayload, S>

  type V_NOISE_RACCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_RACFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_RACCountAggregateInputType | true
    }

  export interface V_NOISE_RACDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_RAC'], meta: { name: 'V_NOISE_RAC' } }
    /**
     * Find zero or one V_NOISE_RAC that matches the filter.
     * @param {V_NOISE_RACFindUniqueArgs} args - Arguments to find a V_NOISE_RAC
     * @example
     * // Get one V_NOISE_RAC
     * const v_NOISE_RAC = await prisma.v_NOISE_RAC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_RACFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_RACFindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_RAC that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_RACFindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_RAC
     * @example
     * // Get one V_NOISE_RAC
     * const v_NOISE_RAC = await prisma.v_NOISE_RAC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_RACFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_RACFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_RAC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_RACFindFirstArgs} args - Arguments to find a V_NOISE_RAC
     * @example
     * // Get one V_NOISE_RAC
     * const v_NOISE_RAC = await prisma.v_NOISE_RAC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_RACFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_RACFindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_RAC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_RACFindFirstOrThrowArgs} args - Arguments to find a V_NOISE_RAC
     * @example
     * // Get one V_NOISE_RAC
     * const v_NOISE_RAC = await prisma.v_NOISE_RAC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_RACFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_RACFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_RACS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_RACFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_RACS
     * const v_NOISE_RACS = await prisma.v_NOISE_RAC.findMany()
     * 
     * // Get first 10 V_NOISE_RACS
     * const v_NOISE_RACS = await prisma.v_NOISE_RAC.findMany({ take: 10 })
     * 
     * // Only select the `BUYER_MODEL_NAME`
     * const v_NOISE_RACWithBUYER_MODEL_NAMEOnly = await prisma.v_NOISE_RAC.findMany({ select: { BUYER_MODEL_NAME: true } })
     * 
    **/
    findMany<T extends V_NOISE_RACFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_RACFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_RAC.
     * @param {V_NOISE_RACCreateArgs} args - Arguments to create a V_NOISE_RAC.
     * @example
     * // Create one V_NOISE_RAC
     * const V_NOISE_RAC = await prisma.v_NOISE_RAC.create({
     *   data: {
     *     // ... data to create a V_NOISE_RAC
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_RACCreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_RACCreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_RACS.
     *     @param {V_NOISE_RACCreateManyArgs} args - Arguments to create many V_NOISE_RACS.
     *     @example
     *     // Create many V_NOISE_RACS
     *     const v_NOISE_RAC = await prisma.v_NOISE_RAC.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_RACCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_RACCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_RAC.
     * @param {V_NOISE_RACDeleteArgs} args - Arguments to delete one V_NOISE_RAC.
     * @example
     * // Delete one V_NOISE_RAC
     * const V_NOISE_RAC = await prisma.v_NOISE_RAC.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_RAC
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_RACDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_RACDeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_RAC.
     * @param {V_NOISE_RACUpdateArgs} args - Arguments to update one V_NOISE_RAC.
     * @example
     * // Update one V_NOISE_RAC
     * const v_NOISE_RAC = await prisma.v_NOISE_RAC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_RACUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_RACUpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_RACS.
     * @param {V_NOISE_RACDeleteManyArgs} args - Arguments to filter V_NOISE_RACS to delete.
     * @example
     * // Delete a few V_NOISE_RACS
     * const { count } = await prisma.v_NOISE_RAC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_RACDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_RACDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_RACS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_RACUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_RACS
     * const v_NOISE_RAC = await prisma.v_NOISE_RAC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_RACUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_RACUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_RAC.
     * @param {V_NOISE_RACUpsertArgs} args - Arguments to update or create a V_NOISE_RAC.
     * @example
     * // Update or create a V_NOISE_RAC
     * const v_NOISE_RAC = await prisma.v_NOISE_RAC.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_RAC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_RAC we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_RACUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_RACUpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_RACClient<$Result.GetResult<Prisma.$V_NOISE_RACPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_RACS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_RACCountArgs} args - Arguments to filter V_NOISE_RACS to count.
     * @example
     * // Count the number of V_NOISE_RACS
     * const count = await prisma.v_NOISE_RAC.count({
     *   where: {
     *     // ... the filter for the V_NOISE_RACS we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_RACCountArgs>(
      args?: Subset<T, V_NOISE_RACCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_RACCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_RAC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_RACAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_RACAggregateArgs>(args: Subset<T, V_NOISE_RACAggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_RACAggregateType<T>>

    /**
     * Group by V_NOISE_RAC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_RACGroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_RACGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_RACGroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_RACGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_RACGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_RACGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_RAC model
   */
  readonly fields: V_NOISE_RACFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_RAC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_RACClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_RAC model
   */ 
  interface V_NOISE_RACFieldRefs {
    readonly BUYER_MODEL_NAME: FieldRef<"V_NOISE_RAC", 'String'>
    readonly T_HEAT_W: FieldRef<"V_NOISE_RAC", 'Decimal'>
    readonly T_COOL_W: FieldRef<"V_NOISE_RAC", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_RAC findUnique
   */
  export type V_NOISE_RACFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_RAC to fetch.
     */
    where: V_NOISE_RACWhereUniqueInput
  }


  /**
   * V_NOISE_RAC findUniqueOrThrow
   */
  export type V_NOISE_RACFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_RAC to fetch.
     */
    where: V_NOISE_RACWhereUniqueInput
  }


  /**
   * V_NOISE_RAC findFirst
   */
  export type V_NOISE_RACFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_RAC to fetch.
     */
    where?: V_NOISE_RACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_RACS to fetch.
     */
    orderBy?: V_NOISE_RACOrderByWithRelationInput | V_NOISE_RACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_RACS.
     */
    cursor?: V_NOISE_RACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_RACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_RACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_RACS.
     */
    distinct?: V_NOISE_RACScalarFieldEnum | V_NOISE_RACScalarFieldEnum[]
  }


  /**
   * V_NOISE_RAC findFirstOrThrow
   */
  export type V_NOISE_RACFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_RAC to fetch.
     */
    where?: V_NOISE_RACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_RACS to fetch.
     */
    orderBy?: V_NOISE_RACOrderByWithRelationInput | V_NOISE_RACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_RACS.
     */
    cursor?: V_NOISE_RACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_RACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_RACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_RACS.
     */
    distinct?: V_NOISE_RACScalarFieldEnum | V_NOISE_RACScalarFieldEnum[]
  }


  /**
   * V_NOISE_RAC findMany
   */
  export type V_NOISE_RACFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_RACS to fetch.
     */
    where?: V_NOISE_RACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_RACS to fetch.
     */
    orderBy?: V_NOISE_RACOrderByWithRelationInput | V_NOISE_RACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_RACS.
     */
    cursor?: V_NOISE_RACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_RACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_RACS.
     */
    skip?: number
    distinct?: V_NOISE_RACScalarFieldEnum | V_NOISE_RACScalarFieldEnum[]
  }


  /**
   * V_NOISE_RAC create
   */
  export type V_NOISE_RACCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_RAC.
     */
    data: XOR<V_NOISE_RACCreateInput, V_NOISE_RACUncheckedCreateInput>
  }


  /**
   * V_NOISE_RAC createMany
   */
  export type V_NOISE_RACCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_RACS.
     */
    data: V_NOISE_RACCreateManyInput | V_NOISE_RACCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_RAC update
   */
  export type V_NOISE_RACUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_RAC.
     */
    data: XOR<V_NOISE_RACUpdateInput, V_NOISE_RACUncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_RAC to update.
     */
    where: V_NOISE_RACWhereUniqueInput
  }


  /**
   * V_NOISE_RAC updateMany
   */
  export type V_NOISE_RACUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_RACS.
     */
    data: XOR<V_NOISE_RACUpdateManyMutationInput, V_NOISE_RACUncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_RACS to update
     */
    where?: V_NOISE_RACWhereInput
  }


  /**
   * V_NOISE_RAC upsert
   */
  export type V_NOISE_RACUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_RAC to update in case it exists.
     */
    where: V_NOISE_RACWhereUniqueInput
    /**
     * In case the V_NOISE_RAC found by the `where` argument doesn't exist, create a new V_NOISE_RAC with this data.
     */
    create: XOR<V_NOISE_RACCreateInput, V_NOISE_RACUncheckedCreateInput>
    /**
     * In case the V_NOISE_RAC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_RACUpdateInput, V_NOISE_RACUncheckedUpdateInput>
  }


  /**
   * V_NOISE_RAC delete
   */
  export type V_NOISE_RACDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
    /**
     * Filter which V_NOISE_RAC to delete.
     */
    where: V_NOISE_RACWhereUniqueInput
  }


  /**
   * V_NOISE_RAC deleteMany
   */
  export type V_NOISE_RACDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_RACS to delete
     */
    where?: V_NOISE_RACWhereInput
  }


  /**
   * V_NOISE_RAC without action
   */
  export type V_NOISE_RACDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_RAC
     */
    select?: V_NOISE_RACSelect<ExtArgs> | null
  }



  /**
   * Model V_NOISE_MULTIV_S
   */

  export type AggregateV_NOISE_MULTIV_S = {
    _count: V_NOISE_MULTIV_SCountAggregateOutputType | null
    _avg: V_NOISE_MULTIV_SAvgAggregateOutputType | null
    _sum: V_NOISE_MULTIV_SSumAggregateOutputType | null
    _min: V_NOISE_MULTIV_SMinAggregateOutputType | null
    _max: V_NOISE_MULTIV_SMaxAggregateOutputType | null
  }

  export type V_NOISE_MULTIV_SAvgAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_SSumAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_SMinAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_SMaxAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_SCountAggregateOutputType = {
    BUYER_MODEL_NAME: number
    T_HEAT_W: number
    T_COOL_W: number
    _all: number
  }


  export type V_NOISE_MULTIV_SAvgAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_SSumAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_SMinAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_SMaxAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_SCountAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
    _all?: true
  }

  export type V_NOISE_MULTIV_SAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTIV_S to aggregate.
     */
    where?: V_NOISE_MULTIV_SWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_S to fetch.
     */
    orderBy?: V_NOISE_MULTIV_SOrderByWithRelationInput | V_NOISE_MULTIV_SOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_MULTIV_SWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_S from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_S.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_MULTIV_S
    **/
    _count?: true | V_NOISE_MULTIV_SCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_MULTIV_SAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_MULTIV_SSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_MULTIV_SMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_MULTIV_SMaxAggregateInputType
  }

  export type GetV_NOISE_MULTIV_SAggregateType<T extends V_NOISE_MULTIV_SAggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_MULTIV_S]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_MULTIV_S[P]>
      : GetScalarType<T[P], AggregateV_NOISE_MULTIV_S[P]>
  }




  export type V_NOISE_MULTIV_SGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_MULTIV_SWhereInput
    orderBy?: V_NOISE_MULTIV_SOrderByWithAggregationInput | V_NOISE_MULTIV_SOrderByWithAggregationInput[]
    by: V_NOISE_MULTIV_SScalarFieldEnum[] | V_NOISE_MULTIV_SScalarFieldEnum
    having?: V_NOISE_MULTIV_SScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_MULTIV_SCountAggregateInputType | true
    _avg?: V_NOISE_MULTIV_SAvgAggregateInputType
    _sum?: V_NOISE_MULTIV_SSumAggregateInputType
    _min?: V_NOISE_MULTIV_SMinAggregateInputType
    _max?: V_NOISE_MULTIV_SMaxAggregateInputType
  }

  export type V_NOISE_MULTIV_SGroupByOutputType = {
    BUYER_MODEL_NAME: string
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
    _count: V_NOISE_MULTIV_SCountAggregateOutputType | null
    _avg: V_NOISE_MULTIV_SAvgAggregateOutputType | null
    _sum: V_NOISE_MULTIV_SSumAggregateOutputType | null
    _min: V_NOISE_MULTIV_SMinAggregateOutputType | null
    _max: V_NOISE_MULTIV_SMaxAggregateOutputType | null
  }

  type GetV_NOISE_MULTIV_SGroupByPayload<T extends V_NOISE_MULTIV_SGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_MULTIV_SGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_MULTIV_SGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_MULTIV_SGroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_MULTIV_SGroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_MULTIV_SSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }, ExtArgs["result"]["v_NOISE_MULTIV_S"]>

  export type V_NOISE_MULTIV_SSelectScalar = {
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }


  export type $V_NOISE_MULTIV_SPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_MULTIV_S"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BUYER_MODEL_NAME: string
      T_HEAT_W: Prisma.Decimal | null
      T_COOL_W: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_MULTIV_S"]>
    composites: {}
  }


  type V_NOISE_MULTIV_SGetPayload<S extends boolean | null | undefined | V_NOISE_MULTIV_SDefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload, S>

  type V_NOISE_MULTIV_SCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_MULTIV_SFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_MULTIV_SCountAggregateInputType | true
    }

  export interface V_NOISE_MULTIV_SDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_MULTIV_S'], meta: { name: 'V_NOISE_MULTIV_S' } }
    /**
     * Find zero or one V_NOISE_MULTIV_S that matches the filter.
     * @param {V_NOISE_MULTIV_SFindUniqueArgs} args - Arguments to find a V_NOISE_MULTIV_S
     * @example
     * // Get one V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_MULTIV_SFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_SFindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_MULTIV_S that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_MULTIV_SFindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_MULTIV_S
     * @example
     * // Get one V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_MULTIV_SFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_SFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_MULTIV_S that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_SFindFirstArgs} args - Arguments to find a V_NOISE_MULTIV_S
     * @example
     * // Get one V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_MULTIV_SFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_SFindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_MULTIV_S that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_SFindFirstOrThrowArgs} args - Arguments to find a V_NOISE_MULTIV_S
     * @example
     * // Get one V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_MULTIV_SFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_SFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_MULTIV_S that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_SFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.findMany()
     * 
     * // Get first 10 V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.findMany({ take: 10 })
     * 
     * // Only select the `BUYER_MODEL_NAME`
     * const v_NOISE_MULTIV_SWithBUYER_MODEL_NAMEOnly = await prisma.v_NOISE_MULTIV_S.findMany({ select: { BUYER_MODEL_NAME: true } })
     * 
    **/
    findMany<T extends V_NOISE_MULTIV_SFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_SFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_MULTIV_S.
     * @param {V_NOISE_MULTIV_SCreateArgs} args - Arguments to create a V_NOISE_MULTIV_S.
     * @example
     * // Create one V_NOISE_MULTIV_S
     * const V_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.create({
     *   data: {
     *     // ... data to create a V_NOISE_MULTIV_S
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_MULTIV_SCreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_SCreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_MULTIV_S.
     *     @param {V_NOISE_MULTIV_SCreateManyArgs} args - Arguments to create many V_NOISE_MULTIV_S.
     *     @example
     *     // Create many V_NOISE_MULTIV_S
     *     const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_MULTIV_SCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_SCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_MULTIV_S.
     * @param {V_NOISE_MULTIV_SDeleteArgs} args - Arguments to delete one V_NOISE_MULTIV_S.
     * @example
     * // Delete one V_NOISE_MULTIV_S
     * const V_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_MULTIV_S
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_MULTIV_SDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_SDeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_MULTIV_S.
     * @param {V_NOISE_MULTIV_SUpdateArgs} args - Arguments to update one V_NOISE_MULTIV_S.
     * @example
     * // Update one V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_MULTIV_SUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_SUpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_MULTIV_S.
     * @param {V_NOISE_MULTIV_SDeleteManyArgs} args - Arguments to filter V_NOISE_MULTIV_S to delete.
     * @example
     * // Delete a few V_NOISE_MULTIV_S
     * const { count } = await prisma.v_NOISE_MULTIV_S.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_MULTIV_SDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_SDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_MULTIV_S.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_SUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_MULTIV_SUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_SUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_MULTIV_S.
     * @param {V_NOISE_MULTIV_SUpsertArgs} args - Arguments to update or create a V_NOISE_MULTIV_S.
     * @example
     * // Update or create a V_NOISE_MULTIV_S
     * const v_NOISE_MULTIV_S = await prisma.v_NOISE_MULTIV_S.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_MULTIV_S
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_MULTIV_S we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_MULTIV_SUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_SUpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_SClient<$Result.GetResult<Prisma.$V_NOISE_MULTIV_SPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_MULTIV_S.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_SCountArgs} args - Arguments to filter V_NOISE_MULTIV_S to count.
     * @example
     * // Count the number of V_NOISE_MULTIV_S
     * const count = await prisma.v_NOISE_MULTIV_S.count({
     *   where: {
     *     // ... the filter for the V_NOISE_MULTIV_S we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_MULTIV_SCountArgs>(
      args?: Subset<T, V_NOISE_MULTIV_SCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_MULTIV_SCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_MULTIV_S.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_SAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_MULTIV_SAggregateArgs>(args: Subset<T, V_NOISE_MULTIV_SAggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_MULTIV_SAggregateType<T>>

    /**
     * Group by V_NOISE_MULTIV_S.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_SGroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_MULTIV_SGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_MULTIV_SGroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_MULTIV_SGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_MULTIV_SGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_MULTIV_SGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_MULTIV_S model
   */
  readonly fields: V_NOISE_MULTIV_SFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_MULTIV_S.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_MULTIV_SClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_MULTIV_S model
   */ 
  interface V_NOISE_MULTIV_SFieldRefs {
    readonly BUYER_MODEL_NAME: FieldRef<"V_NOISE_MULTIV_S", 'String'>
    readonly T_HEAT_W: FieldRef<"V_NOISE_MULTIV_S", 'Decimal'>
    readonly T_COOL_W: FieldRef<"V_NOISE_MULTIV_S", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_MULTIV_S findUnique
   */
  export type V_NOISE_MULTIV_SFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_S to fetch.
     */
    where: V_NOISE_MULTIV_SWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_S findUniqueOrThrow
   */
  export type V_NOISE_MULTIV_SFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_S to fetch.
     */
    where: V_NOISE_MULTIV_SWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_S findFirst
   */
  export type V_NOISE_MULTIV_SFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_S to fetch.
     */
    where?: V_NOISE_MULTIV_SWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_S to fetch.
     */
    orderBy?: V_NOISE_MULTIV_SOrderByWithRelationInput | V_NOISE_MULTIV_SOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIV_S.
     */
    cursor?: V_NOISE_MULTIV_SWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_S from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_S.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIV_S.
     */
    distinct?: V_NOISE_MULTIV_SScalarFieldEnum | V_NOISE_MULTIV_SScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_S findFirstOrThrow
   */
  export type V_NOISE_MULTIV_SFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_S to fetch.
     */
    where?: V_NOISE_MULTIV_SWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_S to fetch.
     */
    orderBy?: V_NOISE_MULTIV_SOrderByWithRelationInput | V_NOISE_MULTIV_SOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIV_S.
     */
    cursor?: V_NOISE_MULTIV_SWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_S from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_S.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIV_S.
     */
    distinct?: V_NOISE_MULTIV_SScalarFieldEnum | V_NOISE_MULTIV_SScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_S findMany
   */
  export type V_NOISE_MULTIV_SFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_S to fetch.
     */
    where?: V_NOISE_MULTIV_SWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_S to fetch.
     */
    orderBy?: V_NOISE_MULTIV_SOrderByWithRelationInput | V_NOISE_MULTIV_SOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_MULTIV_S.
     */
    cursor?: V_NOISE_MULTIV_SWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_S from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_S.
     */
    skip?: number
    distinct?: V_NOISE_MULTIV_SScalarFieldEnum | V_NOISE_MULTIV_SScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_S create
   */
  export type V_NOISE_MULTIV_SCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_MULTIV_S.
     */
    data: XOR<V_NOISE_MULTIV_SCreateInput, V_NOISE_MULTIV_SUncheckedCreateInput>
  }


  /**
   * V_NOISE_MULTIV_S createMany
   */
  export type V_NOISE_MULTIV_SCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_MULTIV_S.
     */
    data: V_NOISE_MULTIV_SCreateManyInput | V_NOISE_MULTIV_SCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_MULTIV_S update
   */
  export type V_NOISE_MULTIV_SUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_MULTIV_S.
     */
    data: XOR<V_NOISE_MULTIV_SUpdateInput, V_NOISE_MULTIV_SUncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_MULTIV_S to update.
     */
    where: V_NOISE_MULTIV_SWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_S updateMany
   */
  export type V_NOISE_MULTIV_SUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_MULTIV_S.
     */
    data: XOR<V_NOISE_MULTIV_SUpdateManyMutationInput, V_NOISE_MULTIV_SUncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_MULTIV_S to update
     */
    where?: V_NOISE_MULTIV_SWhereInput
  }


  /**
   * V_NOISE_MULTIV_S upsert
   */
  export type V_NOISE_MULTIV_SUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_MULTIV_S to update in case it exists.
     */
    where: V_NOISE_MULTIV_SWhereUniqueInput
    /**
     * In case the V_NOISE_MULTIV_S found by the `where` argument doesn't exist, create a new V_NOISE_MULTIV_S with this data.
     */
    create: XOR<V_NOISE_MULTIV_SCreateInput, V_NOISE_MULTIV_SUncheckedCreateInput>
    /**
     * In case the V_NOISE_MULTIV_S was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_MULTIV_SUpdateInput, V_NOISE_MULTIV_SUncheckedUpdateInput>
  }


  /**
   * V_NOISE_MULTIV_S delete
   */
  export type V_NOISE_MULTIV_SDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
    /**
     * Filter which V_NOISE_MULTIV_S to delete.
     */
    where: V_NOISE_MULTIV_SWhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_S deleteMany
   */
  export type V_NOISE_MULTIV_SDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTIV_S to delete
     */
    where?: V_NOISE_MULTIV_SWhereInput
  }


  /**
   * V_NOISE_MULTIV_S without action
   */
  export type V_NOISE_MULTIV_SDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_S
     */
    select?: V_NOISE_MULTIV_SSelect<ExtArgs> | null
  }



  /**
   * Model V_NOISE_SCAC
   */

  export type AggregateV_NOISE_SCAC = {
    _count: V_NOISE_SCACCountAggregateOutputType | null
    _avg: V_NOISE_SCACAvgAggregateOutputType | null
    _sum: V_NOISE_SCACSumAggregateOutputType | null
    _min: V_NOISE_SCACMinAggregateOutputType | null
    _max: V_NOISE_SCACMaxAggregateOutputType | null
  }

  export type V_NOISE_SCACAvgAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_SCACSumAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_SCACMinAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_SCACMaxAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_SCACCountAggregateOutputType = {
    BUYER_MODEL_NAME: number
    T_HEAT_W: number
    T_COOL_W: number
    _all: number
  }


  export type V_NOISE_SCACAvgAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_SCACSumAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_SCACMinAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_SCACMaxAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_SCACCountAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
    _all?: true
  }

  export type V_NOISE_SCACAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_SCAC to aggregate.
     */
    where?: V_NOISE_SCACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_SCACS to fetch.
     */
    orderBy?: V_NOISE_SCACOrderByWithRelationInput | V_NOISE_SCACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_SCACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_SCACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_SCACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_SCACS
    **/
    _count?: true | V_NOISE_SCACCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_SCACAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_SCACSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_SCACMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_SCACMaxAggregateInputType
  }

  export type GetV_NOISE_SCACAggregateType<T extends V_NOISE_SCACAggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_SCAC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_SCAC[P]>
      : GetScalarType<T[P], AggregateV_NOISE_SCAC[P]>
  }




  export type V_NOISE_SCACGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_SCACWhereInput
    orderBy?: V_NOISE_SCACOrderByWithAggregationInput | V_NOISE_SCACOrderByWithAggregationInput[]
    by: V_NOISE_SCACScalarFieldEnum[] | V_NOISE_SCACScalarFieldEnum
    having?: V_NOISE_SCACScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_SCACCountAggregateInputType | true
    _avg?: V_NOISE_SCACAvgAggregateInputType
    _sum?: V_NOISE_SCACSumAggregateInputType
    _min?: V_NOISE_SCACMinAggregateInputType
    _max?: V_NOISE_SCACMaxAggregateInputType
  }

  export type V_NOISE_SCACGroupByOutputType = {
    BUYER_MODEL_NAME: string
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
    _count: V_NOISE_SCACCountAggregateOutputType | null
    _avg: V_NOISE_SCACAvgAggregateOutputType | null
    _sum: V_NOISE_SCACSumAggregateOutputType | null
    _min: V_NOISE_SCACMinAggregateOutputType | null
    _max: V_NOISE_SCACMaxAggregateOutputType | null
  }

  type GetV_NOISE_SCACGroupByPayload<T extends V_NOISE_SCACGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_SCACGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_SCACGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_SCACGroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_SCACGroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_SCACSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }, ExtArgs["result"]["v_NOISE_SCAC"]>

  export type V_NOISE_SCACSelectScalar = {
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }


  export type $V_NOISE_SCACPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_SCAC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BUYER_MODEL_NAME: string
      T_HEAT_W: Prisma.Decimal | null
      T_COOL_W: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_SCAC"]>
    composites: {}
  }


  type V_NOISE_SCACGetPayload<S extends boolean | null | undefined | V_NOISE_SCACDefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_SCACPayload, S>

  type V_NOISE_SCACCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_SCACFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_SCACCountAggregateInputType | true
    }

  export interface V_NOISE_SCACDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_SCAC'], meta: { name: 'V_NOISE_SCAC' } }
    /**
     * Find zero or one V_NOISE_SCAC that matches the filter.
     * @param {V_NOISE_SCACFindUniqueArgs} args - Arguments to find a V_NOISE_SCAC
     * @example
     * // Get one V_NOISE_SCAC
     * const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_SCACFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_SCACFindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_SCAC that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_SCACFindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_SCAC
     * @example
     * // Get one V_NOISE_SCAC
     * const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_SCACFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_SCACFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_SCAC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_SCACFindFirstArgs} args - Arguments to find a V_NOISE_SCAC
     * @example
     * // Get one V_NOISE_SCAC
     * const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_SCACFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_SCACFindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_SCAC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_SCACFindFirstOrThrowArgs} args - Arguments to find a V_NOISE_SCAC
     * @example
     * // Get one V_NOISE_SCAC
     * const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_SCACFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_SCACFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_SCACS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_SCACFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_SCACS
     * const v_NOISE_SCACS = await prisma.v_NOISE_SCAC.findMany()
     * 
     * // Get first 10 V_NOISE_SCACS
     * const v_NOISE_SCACS = await prisma.v_NOISE_SCAC.findMany({ take: 10 })
     * 
     * // Only select the `BUYER_MODEL_NAME`
     * const v_NOISE_SCACWithBUYER_MODEL_NAMEOnly = await prisma.v_NOISE_SCAC.findMany({ select: { BUYER_MODEL_NAME: true } })
     * 
    **/
    findMany<T extends V_NOISE_SCACFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_SCACFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_SCAC.
     * @param {V_NOISE_SCACCreateArgs} args - Arguments to create a V_NOISE_SCAC.
     * @example
     * // Create one V_NOISE_SCAC
     * const V_NOISE_SCAC = await prisma.v_NOISE_SCAC.create({
     *   data: {
     *     // ... data to create a V_NOISE_SCAC
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_SCACCreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_SCACCreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_SCACS.
     *     @param {V_NOISE_SCACCreateManyArgs} args - Arguments to create many V_NOISE_SCACS.
     *     @example
     *     // Create many V_NOISE_SCACS
     *     const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_SCACCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_SCACCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_SCAC.
     * @param {V_NOISE_SCACDeleteArgs} args - Arguments to delete one V_NOISE_SCAC.
     * @example
     * // Delete one V_NOISE_SCAC
     * const V_NOISE_SCAC = await prisma.v_NOISE_SCAC.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_SCAC
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_SCACDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_SCACDeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_SCAC.
     * @param {V_NOISE_SCACUpdateArgs} args - Arguments to update one V_NOISE_SCAC.
     * @example
     * // Update one V_NOISE_SCAC
     * const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_SCACUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_SCACUpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_SCACS.
     * @param {V_NOISE_SCACDeleteManyArgs} args - Arguments to filter V_NOISE_SCACS to delete.
     * @example
     * // Delete a few V_NOISE_SCACS
     * const { count } = await prisma.v_NOISE_SCAC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_SCACDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_SCACDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_SCACS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_SCACUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_SCACS
     * const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_SCACUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_SCACUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_SCAC.
     * @param {V_NOISE_SCACUpsertArgs} args - Arguments to update or create a V_NOISE_SCAC.
     * @example
     * // Update or create a V_NOISE_SCAC
     * const v_NOISE_SCAC = await prisma.v_NOISE_SCAC.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_SCAC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_SCAC we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_SCACUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_SCACUpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_SCACClient<$Result.GetResult<Prisma.$V_NOISE_SCACPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_SCACS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_SCACCountArgs} args - Arguments to filter V_NOISE_SCACS to count.
     * @example
     * // Count the number of V_NOISE_SCACS
     * const count = await prisma.v_NOISE_SCAC.count({
     *   where: {
     *     // ... the filter for the V_NOISE_SCACS we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_SCACCountArgs>(
      args?: Subset<T, V_NOISE_SCACCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_SCACCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_SCAC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_SCACAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_SCACAggregateArgs>(args: Subset<T, V_NOISE_SCACAggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_SCACAggregateType<T>>

    /**
     * Group by V_NOISE_SCAC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_SCACGroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_SCACGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_SCACGroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_SCACGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_SCACGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_SCACGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_SCAC model
   */
  readonly fields: V_NOISE_SCACFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_SCAC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_SCACClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_SCAC model
   */ 
  interface V_NOISE_SCACFieldRefs {
    readonly BUYER_MODEL_NAME: FieldRef<"V_NOISE_SCAC", 'String'>
    readonly T_HEAT_W: FieldRef<"V_NOISE_SCAC", 'Decimal'>
    readonly T_COOL_W: FieldRef<"V_NOISE_SCAC", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_SCAC findUnique
   */
  export type V_NOISE_SCACFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_SCAC to fetch.
     */
    where: V_NOISE_SCACWhereUniqueInput
  }


  /**
   * V_NOISE_SCAC findUniqueOrThrow
   */
  export type V_NOISE_SCACFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_SCAC to fetch.
     */
    where: V_NOISE_SCACWhereUniqueInput
  }


  /**
   * V_NOISE_SCAC findFirst
   */
  export type V_NOISE_SCACFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_SCAC to fetch.
     */
    where?: V_NOISE_SCACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_SCACS to fetch.
     */
    orderBy?: V_NOISE_SCACOrderByWithRelationInput | V_NOISE_SCACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_SCACS.
     */
    cursor?: V_NOISE_SCACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_SCACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_SCACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_SCACS.
     */
    distinct?: V_NOISE_SCACScalarFieldEnum | V_NOISE_SCACScalarFieldEnum[]
  }


  /**
   * V_NOISE_SCAC findFirstOrThrow
   */
  export type V_NOISE_SCACFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_SCAC to fetch.
     */
    where?: V_NOISE_SCACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_SCACS to fetch.
     */
    orderBy?: V_NOISE_SCACOrderByWithRelationInput | V_NOISE_SCACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_SCACS.
     */
    cursor?: V_NOISE_SCACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_SCACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_SCACS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_SCACS.
     */
    distinct?: V_NOISE_SCACScalarFieldEnum | V_NOISE_SCACScalarFieldEnum[]
  }


  /**
   * V_NOISE_SCAC findMany
   */
  export type V_NOISE_SCACFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_SCACS to fetch.
     */
    where?: V_NOISE_SCACWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_SCACS to fetch.
     */
    orderBy?: V_NOISE_SCACOrderByWithRelationInput | V_NOISE_SCACOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_SCACS.
     */
    cursor?: V_NOISE_SCACWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_SCACS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_SCACS.
     */
    skip?: number
    distinct?: V_NOISE_SCACScalarFieldEnum | V_NOISE_SCACScalarFieldEnum[]
  }


  /**
   * V_NOISE_SCAC create
   */
  export type V_NOISE_SCACCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_SCAC.
     */
    data: XOR<V_NOISE_SCACCreateInput, V_NOISE_SCACUncheckedCreateInput>
  }


  /**
   * V_NOISE_SCAC createMany
   */
  export type V_NOISE_SCACCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_SCACS.
     */
    data: V_NOISE_SCACCreateManyInput | V_NOISE_SCACCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_SCAC update
   */
  export type V_NOISE_SCACUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_SCAC.
     */
    data: XOR<V_NOISE_SCACUpdateInput, V_NOISE_SCACUncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_SCAC to update.
     */
    where: V_NOISE_SCACWhereUniqueInput
  }


  /**
   * V_NOISE_SCAC updateMany
   */
  export type V_NOISE_SCACUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_SCACS.
     */
    data: XOR<V_NOISE_SCACUpdateManyMutationInput, V_NOISE_SCACUncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_SCACS to update
     */
    where?: V_NOISE_SCACWhereInput
  }


  /**
   * V_NOISE_SCAC upsert
   */
  export type V_NOISE_SCACUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_SCAC to update in case it exists.
     */
    where: V_NOISE_SCACWhereUniqueInput
    /**
     * In case the V_NOISE_SCAC found by the `where` argument doesn't exist, create a new V_NOISE_SCAC with this data.
     */
    create: XOR<V_NOISE_SCACCreateInput, V_NOISE_SCACUncheckedCreateInput>
    /**
     * In case the V_NOISE_SCAC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_SCACUpdateInput, V_NOISE_SCACUncheckedUpdateInput>
  }


  /**
   * V_NOISE_SCAC delete
   */
  export type V_NOISE_SCACDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
    /**
     * Filter which V_NOISE_SCAC to delete.
     */
    where: V_NOISE_SCACWhereUniqueInput
  }


  /**
   * V_NOISE_SCAC deleteMany
   */
  export type V_NOISE_SCACDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_SCACS to delete
     */
    where?: V_NOISE_SCACWhereInput
  }


  /**
   * V_NOISE_SCAC without action
   */
  export type V_NOISE_SCACDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_SCAC
     */
    select?: V_NOISE_SCACSelect<ExtArgs> | null
  }



  /**
   * Model V_NOISE_MULTIV_5
   */

  export type AggregateV_NOISE_MULTIV_5 = {
    _count: V_NOISE_MULTIV_5CountAggregateOutputType | null
    _avg: V_NOISE_MULTIV_5AvgAggregateOutputType | null
    _sum: V_NOISE_MULTIV_5SumAggregateOutputType | null
    _min: V_NOISE_MULTIV_5MinAggregateOutputType | null
    _max: V_NOISE_MULTIV_5MaxAggregateOutputType | null
  }

  export type V_NOISE_MULTIV_5AvgAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_5SumAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_5MinAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_5MaxAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIV_5CountAggregateOutputType = {
    BUYER_MODEL_NAME: number
    T_HEAT_W: number
    T_COOL_W: number
    _all: number
  }


  export type V_NOISE_MULTIV_5AvgAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_5SumAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_5MinAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_5MaxAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIV_5CountAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
    _all?: true
  }

  export type V_NOISE_MULTIV_5AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTIV_5 to aggregate.
     */
    where?: V_NOISE_MULTIV_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_5s to fetch.
     */
    orderBy?: V_NOISE_MULTIV_5OrderByWithRelationInput | V_NOISE_MULTIV_5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_MULTIV_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_5s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_MULTIV_5s
    **/
    _count?: true | V_NOISE_MULTIV_5CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_MULTIV_5AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_MULTIV_5SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_MULTIV_5MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_MULTIV_5MaxAggregateInputType
  }

  export type GetV_NOISE_MULTIV_5AggregateType<T extends V_NOISE_MULTIV_5AggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_MULTIV_5]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_MULTIV_5[P]>
      : GetScalarType<T[P], AggregateV_NOISE_MULTIV_5[P]>
  }




  export type V_NOISE_MULTIV_5GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_MULTIV_5WhereInput
    orderBy?: V_NOISE_MULTIV_5OrderByWithAggregationInput | V_NOISE_MULTIV_5OrderByWithAggregationInput[]
    by: V_NOISE_MULTIV_5ScalarFieldEnum[] | V_NOISE_MULTIV_5ScalarFieldEnum
    having?: V_NOISE_MULTIV_5ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_MULTIV_5CountAggregateInputType | true
    _avg?: V_NOISE_MULTIV_5AvgAggregateInputType
    _sum?: V_NOISE_MULTIV_5SumAggregateInputType
    _min?: V_NOISE_MULTIV_5MinAggregateInputType
    _max?: V_NOISE_MULTIV_5MaxAggregateInputType
  }

  export type V_NOISE_MULTIV_5GroupByOutputType = {
    BUYER_MODEL_NAME: string
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
    _count: V_NOISE_MULTIV_5CountAggregateOutputType | null
    _avg: V_NOISE_MULTIV_5AvgAggregateOutputType | null
    _sum: V_NOISE_MULTIV_5SumAggregateOutputType | null
    _min: V_NOISE_MULTIV_5MinAggregateOutputType | null
    _max: V_NOISE_MULTIV_5MaxAggregateOutputType | null
  }

  type GetV_NOISE_MULTIV_5GroupByPayload<T extends V_NOISE_MULTIV_5GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_MULTIV_5GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_MULTIV_5GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_MULTIV_5GroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_MULTIV_5GroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_MULTIV_5Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }, ExtArgs["result"]["v_NOISE_MULTIV_5"]>

  export type V_NOISE_MULTIV_5SelectScalar = {
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }


  export type $V_NOISE_MULTIV_5Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_MULTIV_5"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BUYER_MODEL_NAME: string
      T_HEAT_W: Prisma.Decimal | null
      T_COOL_W: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_MULTIV_5"]>
    composites: {}
  }


  type V_NOISE_MULTIV_5GetPayload<S extends boolean | null | undefined | V_NOISE_MULTIV_5DefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload, S>

  type V_NOISE_MULTIV_5CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_MULTIV_5FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_MULTIV_5CountAggregateInputType | true
    }

  export interface V_NOISE_MULTIV_5Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_MULTIV_5'], meta: { name: 'V_NOISE_MULTIV_5' } }
    /**
     * Find zero or one V_NOISE_MULTIV_5 that matches the filter.
     * @param {V_NOISE_MULTIV_5FindUniqueArgs} args - Arguments to find a V_NOISE_MULTIV_5
     * @example
     * // Get one V_NOISE_MULTIV_5
     * const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_MULTIV_5FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_5FindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_MULTIV_5 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_MULTIV_5FindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_MULTIV_5
     * @example
     * // Get one V_NOISE_MULTIV_5
     * const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_MULTIV_5FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_5FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_MULTIV_5 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_5FindFirstArgs} args - Arguments to find a V_NOISE_MULTIV_5
     * @example
     * // Get one V_NOISE_MULTIV_5
     * const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_MULTIV_5FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_5FindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_MULTIV_5 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_5FindFirstOrThrowArgs} args - Arguments to find a V_NOISE_MULTIV_5
     * @example
     * // Get one V_NOISE_MULTIV_5
     * const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_MULTIV_5FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_5FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_MULTIV_5s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_5FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_MULTIV_5s
     * const v_NOISE_MULTIV_5s = await prisma.v_NOISE_MULTIV_5.findMany()
     * 
     * // Get first 10 V_NOISE_MULTIV_5s
     * const v_NOISE_MULTIV_5s = await prisma.v_NOISE_MULTIV_5.findMany({ take: 10 })
     * 
     * // Only select the `BUYER_MODEL_NAME`
     * const v_NOISE_MULTIV_5WithBUYER_MODEL_NAMEOnly = await prisma.v_NOISE_MULTIV_5.findMany({ select: { BUYER_MODEL_NAME: true } })
     * 
    **/
    findMany<T extends V_NOISE_MULTIV_5FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_5FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_MULTIV_5.
     * @param {V_NOISE_MULTIV_5CreateArgs} args - Arguments to create a V_NOISE_MULTIV_5.
     * @example
     * // Create one V_NOISE_MULTIV_5
     * const V_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.create({
     *   data: {
     *     // ... data to create a V_NOISE_MULTIV_5
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_MULTIV_5CreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_5CreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_MULTIV_5s.
     *     @param {V_NOISE_MULTIV_5CreateManyArgs} args - Arguments to create many V_NOISE_MULTIV_5s.
     *     @example
     *     // Create many V_NOISE_MULTIV_5s
     *     const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_MULTIV_5CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_5CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_MULTIV_5.
     * @param {V_NOISE_MULTIV_5DeleteArgs} args - Arguments to delete one V_NOISE_MULTIV_5.
     * @example
     * // Delete one V_NOISE_MULTIV_5
     * const V_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_MULTIV_5
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_MULTIV_5DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_5DeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_MULTIV_5.
     * @param {V_NOISE_MULTIV_5UpdateArgs} args - Arguments to update one V_NOISE_MULTIV_5.
     * @example
     * // Update one V_NOISE_MULTIV_5
     * const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_MULTIV_5UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_5UpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_MULTIV_5s.
     * @param {V_NOISE_MULTIV_5DeleteManyArgs} args - Arguments to filter V_NOISE_MULTIV_5s to delete.
     * @example
     * // Delete a few V_NOISE_MULTIV_5s
     * const { count } = await prisma.v_NOISE_MULTIV_5.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_MULTIV_5DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIV_5DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_MULTIV_5s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_5UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_MULTIV_5s
     * const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_MULTIV_5UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_5UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_MULTIV_5.
     * @param {V_NOISE_MULTIV_5UpsertArgs} args - Arguments to update or create a V_NOISE_MULTIV_5.
     * @example
     * // Update or create a V_NOISE_MULTIV_5
     * const v_NOISE_MULTIV_5 = await prisma.v_NOISE_MULTIV_5.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_MULTIV_5
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_MULTIV_5 we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_MULTIV_5UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIV_5UpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIV_5Client<$Result.GetResult<Prisma.$V_NOISE_MULTIV_5Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_MULTIV_5s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_5CountArgs} args - Arguments to filter V_NOISE_MULTIV_5s to count.
     * @example
     * // Count the number of V_NOISE_MULTIV_5s
     * const count = await prisma.v_NOISE_MULTIV_5.count({
     *   where: {
     *     // ... the filter for the V_NOISE_MULTIV_5s we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_MULTIV_5CountArgs>(
      args?: Subset<T, V_NOISE_MULTIV_5CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_MULTIV_5CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_MULTIV_5.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_5AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_MULTIV_5AggregateArgs>(args: Subset<T, V_NOISE_MULTIV_5AggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_MULTIV_5AggregateType<T>>

    /**
     * Group by V_NOISE_MULTIV_5.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIV_5GroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_MULTIV_5GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_MULTIV_5GroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_MULTIV_5GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_MULTIV_5GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_MULTIV_5GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_MULTIV_5 model
   */
  readonly fields: V_NOISE_MULTIV_5FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_MULTIV_5.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_MULTIV_5Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_MULTIV_5 model
   */ 
  interface V_NOISE_MULTIV_5FieldRefs {
    readonly BUYER_MODEL_NAME: FieldRef<"V_NOISE_MULTIV_5", 'String'>
    readonly T_HEAT_W: FieldRef<"V_NOISE_MULTIV_5", 'Decimal'>
    readonly T_COOL_W: FieldRef<"V_NOISE_MULTIV_5", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_MULTIV_5 findUnique
   */
  export type V_NOISE_MULTIV_5FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_5 to fetch.
     */
    where: V_NOISE_MULTIV_5WhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_5 findUniqueOrThrow
   */
  export type V_NOISE_MULTIV_5FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_5 to fetch.
     */
    where: V_NOISE_MULTIV_5WhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_5 findFirst
   */
  export type V_NOISE_MULTIV_5FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_5 to fetch.
     */
    where?: V_NOISE_MULTIV_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_5s to fetch.
     */
    orderBy?: V_NOISE_MULTIV_5OrderByWithRelationInput | V_NOISE_MULTIV_5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIV_5s.
     */
    cursor?: V_NOISE_MULTIV_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_5s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIV_5s.
     */
    distinct?: V_NOISE_MULTIV_5ScalarFieldEnum | V_NOISE_MULTIV_5ScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_5 findFirstOrThrow
   */
  export type V_NOISE_MULTIV_5FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_5 to fetch.
     */
    where?: V_NOISE_MULTIV_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_5s to fetch.
     */
    orderBy?: V_NOISE_MULTIV_5OrderByWithRelationInput | V_NOISE_MULTIV_5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIV_5s.
     */
    cursor?: V_NOISE_MULTIV_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_5s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIV_5s.
     */
    distinct?: V_NOISE_MULTIV_5ScalarFieldEnum | V_NOISE_MULTIV_5ScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_5 findMany
   */
  export type V_NOISE_MULTIV_5FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIV_5s to fetch.
     */
    where?: V_NOISE_MULTIV_5WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIV_5s to fetch.
     */
    orderBy?: V_NOISE_MULTIV_5OrderByWithRelationInput | V_NOISE_MULTIV_5OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_MULTIV_5s.
     */
    cursor?: V_NOISE_MULTIV_5WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIV_5s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIV_5s.
     */
    skip?: number
    distinct?: V_NOISE_MULTIV_5ScalarFieldEnum | V_NOISE_MULTIV_5ScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTIV_5 create
   */
  export type V_NOISE_MULTIV_5CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_MULTIV_5.
     */
    data: XOR<V_NOISE_MULTIV_5CreateInput, V_NOISE_MULTIV_5UncheckedCreateInput>
  }


  /**
   * V_NOISE_MULTIV_5 createMany
   */
  export type V_NOISE_MULTIV_5CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_MULTIV_5s.
     */
    data: V_NOISE_MULTIV_5CreateManyInput | V_NOISE_MULTIV_5CreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_MULTIV_5 update
   */
  export type V_NOISE_MULTIV_5UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_MULTIV_5.
     */
    data: XOR<V_NOISE_MULTIV_5UpdateInput, V_NOISE_MULTIV_5UncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_MULTIV_5 to update.
     */
    where: V_NOISE_MULTIV_5WhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_5 updateMany
   */
  export type V_NOISE_MULTIV_5UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_MULTIV_5s.
     */
    data: XOR<V_NOISE_MULTIV_5UpdateManyMutationInput, V_NOISE_MULTIV_5UncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_MULTIV_5s to update
     */
    where?: V_NOISE_MULTIV_5WhereInput
  }


  /**
   * V_NOISE_MULTIV_5 upsert
   */
  export type V_NOISE_MULTIV_5UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_MULTIV_5 to update in case it exists.
     */
    where: V_NOISE_MULTIV_5WhereUniqueInput
    /**
     * In case the V_NOISE_MULTIV_5 found by the `where` argument doesn't exist, create a new V_NOISE_MULTIV_5 with this data.
     */
    create: XOR<V_NOISE_MULTIV_5CreateInput, V_NOISE_MULTIV_5UncheckedCreateInput>
    /**
     * In case the V_NOISE_MULTIV_5 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_MULTIV_5UpdateInput, V_NOISE_MULTIV_5UncheckedUpdateInput>
  }


  /**
   * V_NOISE_MULTIV_5 delete
   */
  export type V_NOISE_MULTIV_5DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
    /**
     * Filter which V_NOISE_MULTIV_5 to delete.
     */
    where: V_NOISE_MULTIV_5WhereUniqueInput
  }


  /**
   * V_NOISE_MULTIV_5 deleteMany
   */
  export type V_NOISE_MULTIV_5DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTIV_5s to delete
     */
    where?: V_NOISE_MULTIV_5WhereInput
  }


  /**
   * V_NOISE_MULTIV_5 without action
   */
  export type V_NOISE_MULTIV_5DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTIV_5
     */
    select?: V_NOISE_MULTIV_5Select<ExtArgs> | null
  }



  /**
   * Model V_NOISE_MULTI
   */

  export type AggregateV_NOISE_MULTI = {
    _count: V_NOISE_MULTICountAggregateOutputType | null
    _avg: V_NOISE_MULTIAvgAggregateOutputType | null
    _sum: V_NOISE_MULTISumAggregateOutputType | null
    _min: V_NOISE_MULTIMinAggregateOutputType | null
    _max: V_NOISE_MULTIMaxAggregateOutputType | null
  }

  export type V_NOISE_MULTIAvgAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTISumAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIMinAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTIMaxAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_MULTICountAggregateOutputType = {
    BUYER_MODEL_NAME: number
    T_HEAT_W: number
    T_COOL_W: number
    _all: number
  }


  export type V_NOISE_MULTIAvgAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTISumAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIMinAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTIMaxAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_MULTICountAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
    _all?: true
  }

  export type V_NOISE_MULTIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTI to aggregate.
     */
    where?: V_NOISE_MULTIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIS to fetch.
     */
    orderBy?: V_NOISE_MULTIOrderByWithRelationInput | V_NOISE_MULTIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_MULTIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_MULTIS
    **/
    _count?: true | V_NOISE_MULTICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_MULTIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_MULTISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_MULTIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_MULTIMaxAggregateInputType
  }

  export type GetV_NOISE_MULTIAggregateType<T extends V_NOISE_MULTIAggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_MULTI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_MULTI[P]>
      : GetScalarType<T[P], AggregateV_NOISE_MULTI[P]>
  }




  export type V_NOISE_MULTIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_MULTIWhereInput
    orderBy?: V_NOISE_MULTIOrderByWithAggregationInput | V_NOISE_MULTIOrderByWithAggregationInput[]
    by: V_NOISE_MULTIScalarFieldEnum[] | V_NOISE_MULTIScalarFieldEnum
    having?: V_NOISE_MULTIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_MULTICountAggregateInputType | true
    _avg?: V_NOISE_MULTIAvgAggregateInputType
    _sum?: V_NOISE_MULTISumAggregateInputType
    _min?: V_NOISE_MULTIMinAggregateInputType
    _max?: V_NOISE_MULTIMaxAggregateInputType
  }

  export type V_NOISE_MULTIGroupByOutputType = {
    BUYER_MODEL_NAME: string
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
    _count: V_NOISE_MULTICountAggregateOutputType | null
    _avg: V_NOISE_MULTIAvgAggregateOutputType | null
    _sum: V_NOISE_MULTISumAggregateOutputType | null
    _min: V_NOISE_MULTIMinAggregateOutputType | null
    _max: V_NOISE_MULTIMaxAggregateOutputType | null
  }

  type GetV_NOISE_MULTIGroupByPayload<T extends V_NOISE_MULTIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_MULTIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_MULTIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_MULTIGroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_MULTIGroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_MULTISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }, ExtArgs["result"]["v_NOISE_MULTI"]>

  export type V_NOISE_MULTISelectScalar = {
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }


  export type $V_NOISE_MULTIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_MULTI"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BUYER_MODEL_NAME: string
      T_HEAT_W: Prisma.Decimal | null
      T_COOL_W: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_MULTI"]>
    composites: {}
  }


  type V_NOISE_MULTIGetPayload<S extends boolean | null | undefined | V_NOISE_MULTIDefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_MULTIPayload, S>

  type V_NOISE_MULTICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_MULTIFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_MULTICountAggregateInputType | true
    }

  export interface V_NOISE_MULTIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_MULTI'], meta: { name: 'V_NOISE_MULTI' } }
    /**
     * Find zero or one V_NOISE_MULTI that matches the filter.
     * @param {V_NOISE_MULTIFindUniqueArgs} args - Arguments to find a V_NOISE_MULTI
     * @example
     * // Get one V_NOISE_MULTI
     * const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_MULTIFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIFindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_MULTI that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_MULTIFindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_MULTI
     * @example
     * // Get one V_NOISE_MULTI
     * const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_MULTIFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_MULTI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIFindFirstArgs} args - Arguments to find a V_NOISE_MULTI
     * @example
     * // Get one V_NOISE_MULTI
     * const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_MULTIFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIFindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_MULTI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIFindFirstOrThrowArgs} args - Arguments to find a V_NOISE_MULTI
     * @example
     * // Get one V_NOISE_MULTI
     * const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_MULTIFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_MULTIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_MULTIS
     * const v_NOISE_MULTIS = await prisma.v_NOISE_MULTI.findMany()
     * 
     * // Get first 10 V_NOISE_MULTIS
     * const v_NOISE_MULTIS = await prisma.v_NOISE_MULTI.findMany({ take: 10 })
     * 
     * // Only select the `BUYER_MODEL_NAME`
     * const v_NOISE_MULTIWithBUYER_MODEL_NAMEOnly = await prisma.v_NOISE_MULTI.findMany({ select: { BUYER_MODEL_NAME: true } })
     * 
    **/
    findMany<T extends V_NOISE_MULTIFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_MULTI.
     * @param {V_NOISE_MULTICreateArgs} args - Arguments to create a V_NOISE_MULTI.
     * @example
     * // Create one V_NOISE_MULTI
     * const V_NOISE_MULTI = await prisma.v_NOISE_MULTI.create({
     *   data: {
     *     // ... data to create a V_NOISE_MULTI
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_MULTICreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTICreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_MULTIS.
     *     @param {V_NOISE_MULTICreateManyArgs} args - Arguments to create many V_NOISE_MULTIS.
     *     @example
     *     // Create many V_NOISE_MULTIS
     *     const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_MULTICreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTICreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_MULTI.
     * @param {V_NOISE_MULTIDeleteArgs} args - Arguments to delete one V_NOISE_MULTI.
     * @example
     * // Delete one V_NOISE_MULTI
     * const V_NOISE_MULTI = await prisma.v_NOISE_MULTI.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_MULTI
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_MULTIDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIDeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_MULTI.
     * @param {V_NOISE_MULTIUpdateArgs} args - Arguments to update one V_NOISE_MULTI.
     * @example
     * // Update one V_NOISE_MULTI
     * const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_MULTIUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIUpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_MULTIS.
     * @param {V_NOISE_MULTIDeleteManyArgs} args - Arguments to filter V_NOISE_MULTIS to delete.
     * @example
     * // Delete a few V_NOISE_MULTIS
     * const { count } = await prisma.v_NOISE_MULTI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_MULTIDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_MULTIDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_MULTIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_MULTIS
     * const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_MULTIUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_MULTI.
     * @param {V_NOISE_MULTIUpsertArgs} args - Arguments to update or create a V_NOISE_MULTI.
     * @example
     * // Update or create a V_NOISE_MULTI
     * const v_NOISE_MULTI = await prisma.v_NOISE_MULTI.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_MULTI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_MULTI we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_MULTIUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_MULTIUpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_MULTIClient<$Result.GetResult<Prisma.$V_NOISE_MULTIPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_MULTIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTICountArgs} args - Arguments to filter V_NOISE_MULTIS to count.
     * @example
     * // Count the number of V_NOISE_MULTIS
     * const count = await prisma.v_NOISE_MULTI.count({
     *   where: {
     *     // ... the filter for the V_NOISE_MULTIS we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_MULTICountArgs>(
      args?: Subset<T, V_NOISE_MULTICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_MULTICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_MULTI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_MULTIAggregateArgs>(args: Subset<T, V_NOISE_MULTIAggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_MULTIAggregateType<T>>

    /**
     * Group by V_NOISE_MULTI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_MULTIGroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_MULTIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_MULTIGroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_MULTIGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_MULTIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_MULTIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_MULTI model
   */
  readonly fields: V_NOISE_MULTIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_MULTI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_MULTIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_MULTI model
   */ 
  interface V_NOISE_MULTIFieldRefs {
    readonly BUYER_MODEL_NAME: FieldRef<"V_NOISE_MULTI", 'String'>
    readonly T_HEAT_W: FieldRef<"V_NOISE_MULTI", 'Decimal'>
    readonly T_COOL_W: FieldRef<"V_NOISE_MULTI", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_MULTI findUnique
   */
  export type V_NOISE_MULTIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTI to fetch.
     */
    where: V_NOISE_MULTIWhereUniqueInput
  }


  /**
   * V_NOISE_MULTI findUniqueOrThrow
   */
  export type V_NOISE_MULTIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTI to fetch.
     */
    where: V_NOISE_MULTIWhereUniqueInput
  }


  /**
   * V_NOISE_MULTI findFirst
   */
  export type V_NOISE_MULTIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTI to fetch.
     */
    where?: V_NOISE_MULTIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIS to fetch.
     */
    orderBy?: V_NOISE_MULTIOrderByWithRelationInput | V_NOISE_MULTIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIS.
     */
    cursor?: V_NOISE_MULTIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIS.
     */
    distinct?: V_NOISE_MULTIScalarFieldEnum | V_NOISE_MULTIScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTI findFirstOrThrow
   */
  export type V_NOISE_MULTIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTI to fetch.
     */
    where?: V_NOISE_MULTIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIS to fetch.
     */
    orderBy?: V_NOISE_MULTIOrderByWithRelationInput | V_NOISE_MULTIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_MULTIS.
     */
    cursor?: V_NOISE_MULTIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_MULTIS.
     */
    distinct?: V_NOISE_MULTIScalarFieldEnum | V_NOISE_MULTIScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTI findMany
   */
  export type V_NOISE_MULTIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_MULTIS to fetch.
     */
    where?: V_NOISE_MULTIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_MULTIS to fetch.
     */
    orderBy?: V_NOISE_MULTIOrderByWithRelationInput | V_NOISE_MULTIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_MULTIS.
     */
    cursor?: V_NOISE_MULTIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_MULTIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_MULTIS.
     */
    skip?: number
    distinct?: V_NOISE_MULTIScalarFieldEnum | V_NOISE_MULTIScalarFieldEnum[]
  }


  /**
   * V_NOISE_MULTI create
   */
  export type V_NOISE_MULTICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_MULTI.
     */
    data: XOR<V_NOISE_MULTICreateInput, V_NOISE_MULTIUncheckedCreateInput>
  }


  /**
   * V_NOISE_MULTI createMany
   */
  export type V_NOISE_MULTICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_MULTIS.
     */
    data: V_NOISE_MULTICreateManyInput | V_NOISE_MULTICreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_MULTI update
   */
  export type V_NOISE_MULTIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_MULTI.
     */
    data: XOR<V_NOISE_MULTIUpdateInput, V_NOISE_MULTIUncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_MULTI to update.
     */
    where: V_NOISE_MULTIWhereUniqueInput
  }


  /**
   * V_NOISE_MULTI updateMany
   */
  export type V_NOISE_MULTIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_MULTIS.
     */
    data: XOR<V_NOISE_MULTIUpdateManyMutationInput, V_NOISE_MULTIUncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_MULTIS to update
     */
    where?: V_NOISE_MULTIWhereInput
  }


  /**
   * V_NOISE_MULTI upsert
   */
  export type V_NOISE_MULTIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_MULTI to update in case it exists.
     */
    where: V_NOISE_MULTIWhereUniqueInput
    /**
     * In case the V_NOISE_MULTI found by the `where` argument doesn't exist, create a new V_NOISE_MULTI with this data.
     */
    create: XOR<V_NOISE_MULTICreateInput, V_NOISE_MULTIUncheckedCreateInput>
    /**
     * In case the V_NOISE_MULTI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_MULTIUpdateInput, V_NOISE_MULTIUncheckedUpdateInput>
  }


  /**
   * V_NOISE_MULTI delete
   */
  export type V_NOISE_MULTIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
    /**
     * Filter which V_NOISE_MULTI to delete.
     */
    where: V_NOISE_MULTIWhereUniqueInput
  }


  /**
   * V_NOISE_MULTI deleteMany
   */
  export type V_NOISE_MULTIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_MULTIS to delete
     */
    where?: V_NOISE_MULTIWhereInput
  }


  /**
   * V_NOISE_MULTI without action
   */
  export type V_NOISE_MULTIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_MULTI
     */
    select?: V_NOISE_MULTISelect<ExtArgs> | null
  }



  /**
   * Model V_NOISE_AWHP
   */

  export type AggregateV_NOISE_AWHP = {
    _count: V_NOISE_AWHPCountAggregateOutputType | null
    _avg: V_NOISE_AWHPAvgAggregateOutputType | null
    _sum: V_NOISE_AWHPSumAggregateOutputType | null
    _min: V_NOISE_AWHPMinAggregateOutputType | null
    _max: V_NOISE_AWHPMaxAggregateOutputType | null
  }

  export type V_NOISE_AWHPAvgAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_AWHPSumAggregateOutputType = {
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_AWHPMinAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_AWHPMaxAggregateOutputType = {
    BUYER_MODEL_NAME: string | null
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
  }

  export type V_NOISE_AWHPCountAggregateOutputType = {
    BUYER_MODEL_NAME: number
    T_HEAT_W: number
    T_COOL_W: number
    _all: number
  }


  export type V_NOISE_AWHPAvgAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_AWHPSumAggregateInputType = {
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_AWHPMinAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_AWHPMaxAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
  }

  export type V_NOISE_AWHPCountAggregateInputType = {
    BUYER_MODEL_NAME?: true
    T_HEAT_W?: true
    T_COOL_W?: true
    _all?: true
  }

  export type V_NOISE_AWHPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_AWHP to aggregate.
     */
    where?: V_NOISE_AWHPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_AWHPS to fetch.
     */
    orderBy?: V_NOISE_AWHPOrderByWithRelationInput | V_NOISE_AWHPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_AWHPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_AWHPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_AWHPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_AWHPS
    **/
    _count?: true | V_NOISE_AWHPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_AWHPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_AWHPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_AWHPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_AWHPMaxAggregateInputType
  }

  export type GetV_NOISE_AWHPAggregateType<T extends V_NOISE_AWHPAggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_AWHP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_AWHP[P]>
      : GetScalarType<T[P], AggregateV_NOISE_AWHP[P]>
  }




  export type V_NOISE_AWHPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_AWHPWhereInput
    orderBy?: V_NOISE_AWHPOrderByWithAggregationInput | V_NOISE_AWHPOrderByWithAggregationInput[]
    by: V_NOISE_AWHPScalarFieldEnum[] | V_NOISE_AWHPScalarFieldEnum
    having?: V_NOISE_AWHPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_AWHPCountAggregateInputType | true
    _avg?: V_NOISE_AWHPAvgAggregateInputType
    _sum?: V_NOISE_AWHPSumAggregateInputType
    _min?: V_NOISE_AWHPMinAggregateInputType
    _max?: V_NOISE_AWHPMaxAggregateInputType
  }

  export type V_NOISE_AWHPGroupByOutputType = {
    BUYER_MODEL_NAME: string
    T_HEAT_W: Decimal | null
    T_COOL_W: Decimal | null
    _count: V_NOISE_AWHPCountAggregateOutputType | null
    _avg: V_NOISE_AWHPAvgAggregateOutputType | null
    _sum: V_NOISE_AWHPSumAggregateOutputType | null
    _min: V_NOISE_AWHPMinAggregateOutputType | null
    _max: V_NOISE_AWHPMaxAggregateOutputType | null
  }

  type GetV_NOISE_AWHPGroupByPayload<T extends V_NOISE_AWHPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_AWHPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_AWHPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_AWHPGroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_AWHPGroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_AWHPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }, ExtArgs["result"]["v_NOISE_AWHP"]>

  export type V_NOISE_AWHPSelectScalar = {
    BUYER_MODEL_NAME?: boolean
    T_HEAT_W?: boolean
    T_COOL_W?: boolean
  }


  export type $V_NOISE_AWHPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_AWHP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BUYER_MODEL_NAME: string
      T_HEAT_W: Prisma.Decimal | null
      T_COOL_W: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_AWHP"]>
    composites: {}
  }


  type V_NOISE_AWHPGetPayload<S extends boolean | null | undefined | V_NOISE_AWHPDefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_AWHPPayload, S>

  type V_NOISE_AWHPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_AWHPFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_AWHPCountAggregateInputType | true
    }

  export interface V_NOISE_AWHPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_AWHP'], meta: { name: 'V_NOISE_AWHP' } }
    /**
     * Find zero or one V_NOISE_AWHP that matches the filter.
     * @param {V_NOISE_AWHPFindUniqueArgs} args - Arguments to find a V_NOISE_AWHP
     * @example
     * // Get one V_NOISE_AWHP
     * const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_AWHPFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_AWHPFindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_AWHP that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_AWHPFindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_AWHP
     * @example
     * // Get one V_NOISE_AWHP
     * const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_AWHPFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_AWHPFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_AWHP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_AWHPFindFirstArgs} args - Arguments to find a V_NOISE_AWHP
     * @example
     * // Get one V_NOISE_AWHP
     * const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_AWHPFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_AWHPFindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_AWHP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_AWHPFindFirstOrThrowArgs} args - Arguments to find a V_NOISE_AWHP
     * @example
     * // Get one V_NOISE_AWHP
     * const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_AWHPFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_AWHPFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_AWHPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_AWHPFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_AWHPS
     * const v_NOISE_AWHPS = await prisma.v_NOISE_AWHP.findMany()
     * 
     * // Get first 10 V_NOISE_AWHPS
     * const v_NOISE_AWHPS = await prisma.v_NOISE_AWHP.findMany({ take: 10 })
     * 
     * // Only select the `BUYER_MODEL_NAME`
     * const v_NOISE_AWHPWithBUYER_MODEL_NAMEOnly = await prisma.v_NOISE_AWHP.findMany({ select: { BUYER_MODEL_NAME: true } })
     * 
    **/
    findMany<T extends V_NOISE_AWHPFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_AWHPFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_AWHP.
     * @param {V_NOISE_AWHPCreateArgs} args - Arguments to create a V_NOISE_AWHP.
     * @example
     * // Create one V_NOISE_AWHP
     * const V_NOISE_AWHP = await prisma.v_NOISE_AWHP.create({
     *   data: {
     *     // ... data to create a V_NOISE_AWHP
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_AWHPCreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_AWHPCreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_AWHPS.
     *     @param {V_NOISE_AWHPCreateManyArgs} args - Arguments to create many V_NOISE_AWHPS.
     *     @example
     *     // Create many V_NOISE_AWHPS
     *     const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_AWHPCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_AWHPCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_AWHP.
     * @param {V_NOISE_AWHPDeleteArgs} args - Arguments to delete one V_NOISE_AWHP.
     * @example
     * // Delete one V_NOISE_AWHP
     * const V_NOISE_AWHP = await prisma.v_NOISE_AWHP.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_AWHP
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_AWHPDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_AWHPDeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_AWHP.
     * @param {V_NOISE_AWHPUpdateArgs} args - Arguments to update one V_NOISE_AWHP.
     * @example
     * // Update one V_NOISE_AWHP
     * const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_AWHPUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_AWHPUpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_AWHPS.
     * @param {V_NOISE_AWHPDeleteManyArgs} args - Arguments to filter V_NOISE_AWHPS to delete.
     * @example
     * // Delete a few V_NOISE_AWHPS
     * const { count } = await prisma.v_NOISE_AWHP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_AWHPDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_AWHPDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_AWHPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_AWHPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_AWHPS
     * const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_AWHPUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_AWHPUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_AWHP.
     * @param {V_NOISE_AWHPUpsertArgs} args - Arguments to update or create a V_NOISE_AWHP.
     * @example
     * // Update or create a V_NOISE_AWHP
     * const v_NOISE_AWHP = await prisma.v_NOISE_AWHP.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_AWHP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_AWHP we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_AWHPUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_AWHPUpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_AWHPClient<$Result.GetResult<Prisma.$V_NOISE_AWHPPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_AWHPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_AWHPCountArgs} args - Arguments to filter V_NOISE_AWHPS to count.
     * @example
     * // Count the number of V_NOISE_AWHPS
     * const count = await prisma.v_NOISE_AWHP.count({
     *   where: {
     *     // ... the filter for the V_NOISE_AWHPS we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_AWHPCountArgs>(
      args?: Subset<T, V_NOISE_AWHPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_AWHPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_AWHP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_AWHPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_AWHPAggregateArgs>(args: Subset<T, V_NOISE_AWHPAggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_AWHPAggregateType<T>>

    /**
     * Group by V_NOISE_AWHP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_AWHPGroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_AWHPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_AWHPGroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_AWHPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_AWHPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_AWHPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_AWHP model
   */
  readonly fields: V_NOISE_AWHPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_AWHP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_AWHPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_AWHP model
   */ 
  interface V_NOISE_AWHPFieldRefs {
    readonly BUYER_MODEL_NAME: FieldRef<"V_NOISE_AWHP", 'String'>
    readonly T_HEAT_W: FieldRef<"V_NOISE_AWHP", 'Decimal'>
    readonly T_COOL_W: FieldRef<"V_NOISE_AWHP", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_AWHP findUnique
   */
  export type V_NOISE_AWHPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_AWHP to fetch.
     */
    where: V_NOISE_AWHPWhereUniqueInput
  }


  /**
   * V_NOISE_AWHP findUniqueOrThrow
   */
  export type V_NOISE_AWHPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_AWHP to fetch.
     */
    where: V_NOISE_AWHPWhereUniqueInput
  }


  /**
   * V_NOISE_AWHP findFirst
   */
  export type V_NOISE_AWHPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_AWHP to fetch.
     */
    where?: V_NOISE_AWHPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_AWHPS to fetch.
     */
    orderBy?: V_NOISE_AWHPOrderByWithRelationInput | V_NOISE_AWHPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_AWHPS.
     */
    cursor?: V_NOISE_AWHPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_AWHPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_AWHPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_AWHPS.
     */
    distinct?: V_NOISE_AWHPScalarFieldEnum | V_NOISE_AWHPScalarFieldEnum[]
  }


  /**
   * V_NOISE_AWHP findFirstOrThrow
   */
  export type V_NOISE_AWHPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_AWHP to fetch.
     */
    where?: V_NOISE_AWHPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_AWHPS to fetch.
     */
    orderBy?: V_NOISE_AWHPOrderByWithRelationInput | V_NOISE_AWHPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_AWHPS.
     */
    cursor?: V_NOISE_AWHPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_AWHPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_AWHPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_AWHPS.
     */
    distinct?: V_NOISE_AWHPScalarFieldEnum | V_NOISE_AWHPScalarFieldEnum[]
  }


  /**
   * V_NOISE_AWHP findMany
   */
  export type V_NOISE_AWHPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_AWHPS to fetch.
     */
    where?: V_NOISE_AWHPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_AWHPS to fetch.
     */
    orderBy?: V_NOISE_AWHPOrderByWithRelationInput | V_NOISE_AWHPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_AWHPS.
     */
    cursor?: V_NOISE_AWHPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_AWHPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_AWHPS.
     */
    skip?: number
    distinct?: V_NOISE_AWHPScalarFieldEnum | V_NOISE_AWHPScalarFieldEnum[]
  }


  /**
   * V_NOISE_AWHP create
   */
  export type V_NOISE_AWHPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_AWHP.
     */
    data: XOR<V_NOISE_AWHPCreateInput, V_NOISE_AWHPUncheckedCreateInput>
  }


  /**
   * V_NOISE_AWHP createMany
   */
  export type V_NOISE_AWHPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_AWHPS.
     */
    data: V_NOISE_AWHPCreateManyInput | V_NOISE_AWHPCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_AWHP update
   */
  export type V_NOISE_AWHPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_AWHP.
     */
    data: XOR<V_NOISE_AWHPUpdateInput, V_NOISE_AWHPUncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_AWHP to update.
     */
    where: V_NOISE_AWHPWhereUniqueInput
  }


  /**
   * V_NOISE_AWHP updateMany
   */
  export type V_NOISE_AWHPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_AWHPS.
     */
    data: XOR<V_NOISE_AWHPUpdateManyMutationInput, V_NOISE_AWHPUncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_AWHPS to update
     */
    where?: V_NOISE_AWHPWhereInput
  }


  /**
   * V_NOISE_AWHP upsert
   */
  export type V_NOISE_AWHPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_AWHP to update in case it exists.
     */
    where: V_NOISE_AWHPWhereUniqueInput
    /**
     * In case the V_NOISE_AWHP found by the `where` argument doesn't exist, create a new V_NOISE_AWHP with this data.
     */
    create: XOR<V_NOISE_AWHPCreateInput, V_NOISE_AWHPUncheckedCreateInput>
    /**
     * In case the V_NOISE_AWHP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_AWHPUpdateInput, V_NOISE_AWHPUncheckedUpdateInput>
  }


  /**
   * V_NOISE_AWHP delete
   */
  export type V_NOISE_AWHPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
    /**
     * Filter which V_NOISE_AWHP to delete.
     */
    where: V_NOISE_AWHPWhereUniqueInput
  }


  /**
   * V_NOISE_AWHP deleteMany
   */
  export type V_NOISE_AWHPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_AWHPS to delete
     */
    where?: V_NOISE_AWHPWhereInput
  }


  /**
   * V_NOISE_AWHP without action
   */
  export type V_NOISE_AWHPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_AWHP
     */
    select?: V_NOISE_AWHPSelect<ExtArgs> | null
  }



  /**
   * Model V_NOISE_ISC
   */

  export type AggregateV_NOISE_ISC = {
    _count: V_NOISE_ISCCountAggregateOutputType | null
    _avg: V_NOISE_ISCAvgAggregateOutputType | null
    _sum: V_NOISE_ISCSumAggregateOutputType | null
    _min: V_NOISE_ISCMinAggregateOutputType | null
    _max: V_NOISE_ISCMaxAggregateOutputType | null
  }

  export type V_NOISE_ISCAvgAggregateOutputType = {
    COOLING_CAPACITY: number | null
    HEATING_CAPACITY: Decimal | null
  }

  export type V_NOISE_ISCSumAggregateOutputType = {
    COOLING_CAPACITY: number | null
    HEATING_CAPACITY: Decimal | null
  }

  export type V_NOISE_ISCMinAggregateOutputType = {
    MODEL: string | null
    COOLING_CAPACITY: number | null
    HEATING_CAPACITY: Decimal | null
  }

  export type V_NOISE_ISCMaxAggregateOutputType = {
    MODEL: string | null
    COOLING_CAPACITY: number | null
    HEATING_CAPACITY: Decimal | null
  }

  export type V_NOISE_ISCCountAggregateOutputType = {
    MODEL: number
    COOLING_CAPACITY: number
    HEATING_CAPACITY: number
    _all: number
  }


  export type V_NOISE_ISCAvgAggregateInputType = {
    COOLING_CAPACITY?: true
    HEATING_CAPACITY?: true
  }

  export type V_NOISE_ISCSumAggregateInputType = {
    COOLING_CAPACITY?: true
    HEATING_CAPACITY?: true
  }

  export type V_NOISE_ISCMinAggregateInputType = {
    MODEL?: true
    COOLING_CAPACITY?: true
    HEATING_CAPACITY?: true
  }

  export type V_NOISE_ISCMaxAggregateInputType = {
    MODEL?: true
    COOLING_CAPACITY?: true
    HEATING_CAPACITY?: true
  }

  export type V_NOISE_ISCCountAggregateInputType = {
    MODEL?: true
    COOLING_CAPACITY?: true
    HEATING_CAPACITY?: true
    _all?: true
  }

  export type V_NOISE_ISCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_ISC to aggregate.
     */
    where?: V_NOISE_ISCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_ISCS to fetch.
     */
    orderBy?: V_NOISE_ISCOrderByWithRelationInput | V_NOISE_ISCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: V_NOISE_ISCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_ISCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_ISCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned V_NOISE_ISCS
    **/
    _count?: true | V_NOISE_ISCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: V_NOISE_ISCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: V_NOISE_ISCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: V_NOISE_ISCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: V_NOISE_ISCMaxAggregateInputType
  }

  export type GetV_NOISE_ISCAggregateType<T extends V_NOISE_ISCAggregateArgs> = {
        [P in keyof T & keyof AggregateV_NOISE_ISC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateV_NOISE_ISC[P]>
      : GetScalarType<T[P], AggregateV_NOISE_ISC[P]>
  }




  export type V_NOISE_ISCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: V_NOISE_ISCWhereInput
    orderBy?: V_NOISE_ISCOrderByWithAggregationInput | V_NOISE_ISCOrderByWithAggregationInput[]
    by: V_NOISE_ISCScalarFieldEnum[] | V_NOISE_ISCScalarFieldEnum
    having?: V_NOISE_ISCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: V_NOISE_ISCCountAggregateInputType | true
    _avg?: V_NOISE_ISCAvgAggregateInputType
    _sum?: V_NOISE_ISCSumAggregateInputType
    _min?: V_NOISE_ISCMinAggregateInputType
    _max?: V_NOISE_ISCMaxAggregateInputType
  }

  export type V_NOISE_ISCGroupByOutputType = {
    MODEL: string
    COOLING_CAPACITY: number | null
    HEATING_CAPACITY: Decimal | null
    _count: V_NOISE_ISCCountAggregateOutputType | null
    _avg: V_NOISE_ISCAvgAggregateOutputType | null
    _sum: V_NOISE_ISCSumAggregateOutputType | null
    _min: V_NOISE_ISCMinAggregateOutputType | null
    _max: V_NOISE_ISCMaxAggregateOutputType | null
  }

  type GetV_NOISE_ISCGroupByPayload<T extends V_NOISE_ISCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<V_NOISE_ISCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof V_NOISE_ISCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], V_NOISE_ISCGroupByOutputType[P]>
            : GetScalarType<T[P], V_NOISE_ISCGroupByOutputType[P]>
        }
      >
    >


  export type V_NOISE_ISCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MODEL?: boolean
    COOLING_CAPACITY?: boolean
    HEATING_CAPACITY?: boolean
  }, ExtArgs["result"]["v_NOISE_ISC"]>

  export type V_NOISE_ISCSelectScalar = {
    MODEL?: boolean
    COOLING_CAPACITY?: boolean
    HEATING_CAPACITY?: boolean
  }


  export type $V_NOISE_ISCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "V_NOISE_ISC"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      MODEL: string
      COOLING_CAPACITY: number | null
      HEATING_CAPACITY: Prisma.Decimal | null
    }, ExtArgs["result"]["v_NOISE_ISC"]>
    composites: {}
  }


  type V_NOISE_ISCGetPayload<S extends boolean | null | undefined | V_NOISE_ISCDefaultArgs> = $Result.GetResult<Prisma.$V_NOISE_ISCPayload, S>

  type V_NOISE_ISCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<V_NOISE_ISCFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: V_NOISE_ISCCountAggregateInputType | true
    }

  export interface V_NOISE_ISCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['V_NOISE_ISC'], meta: { name: 'V_NOISE_ISC' } }
    /**
     * Find zero or one V_NOISE_ISC that matches the filter.
     * @param {V_NOISE_ISCFindUniqueArgs} args - Arguments to find a V_NOISE_ISC
     * @example
     * // Get one V_NOISE_ISC
     * const v_NOISE_ISC = await prisma.v_NOISE_ISC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends V_NOISE_ISCFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_ISCFindUniqueArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one V_NOISE_ISC that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {V_NOISE_ISCFindUniqueOrThrowArgs} args - Arguments to find a V_NOISE_ISC
     * @example
     * // Get one V_NOISE_ISC
     * const v_NOISE_ISC = await prisma.v_NOISE_ISC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends V_NOISE_ISCFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_ISCFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first V_NOISE_ISC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_ISCFindFirstArgs} args - Arguments to find a V_NOISE_ISC
     * @example
     * // Get one V_NOISE_ISC
     * const v_NOISE_ISC = await prisma.v_NOISE_ISC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends V_NOISE_ISCFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_ISCFindFirstArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first V_NOISE_ISC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_ISCFindFirstOrThrowArgs} args - Arguments to find a V_NOISE_ISC
     * @example
     * // Get one V_NOISE_ISC
     * const v_NOISE_ISC = await prisma.v_NOISE_ISC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends V_NOISE_ISCFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_ISCFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more V_NOISE_ISCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_ISCFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all V_NOISE_ISCS
     * const v_NOISE_ISCS = await prisma.v_NOISE_ISC.findMany()
     * 
     * // Get first 10 V_NOISE_ISCS
     * const v_NOISE_ISCS = await prisma.v_NOISE_ISC.findMany({ take: 10 })
     * 
     * // Only select the `MODEL`
     * const v_NOISE_ISCWithMODELOnly = await prisma.v_NOISE_ISC.findMany({ select: { MODEL: true } })
     * 
    **/
    findMany<T extends V_NOISE_ISCFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_ISCFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a V_NOISE_ISC.
     * @param {V_NOISE_ISCCreateArgs} args - Arguments to create a V_NOISE_ISC.
     * @example
     * // Create one V_NOISE_ISC
     * const V_NOISE_ISC = await prisma.v_NOISE_ISC.create({
     *   data: {
     *     // ... data to create a V_NOISE_ISC
     *   }
     * })
     * 
    **/
    create<T extends V_NOISE_ISCCreateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_ISCCreateArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many V_NOISE_ISCS.
     *     @param {V_NOISE_ISCCreateManyArgs} args - Arguments to create many V_NOISE_ISCS.
     *     @example
     *     // Create many V_NOISE_ISCS
     *     const v_NOISE_ISC = await prisma.v_NOISE_ISC.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends V_NOISE_ISCCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_ISCCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a V_NOISE_ISC.
     * @param {V_NOISE_ISCDeleteArgs} args - Arguments to delete one V_NOISE_ISC.
     * @example
     * // Delete one V_NOISE_ISC
     * const V_NOISE_ISC = await prisma.v_NOISE_ISC.delete({
     *   where: {
     *     // ... filter to delete one V_NOISE_ISC
     *   }
     * })
     * 
    **/
    delete<T extends V_NOISE_ISCDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_ISCDeleteArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one V_NOISE_ISC.
     * @param {V_NOISE_ISCUpdateArgs} args - Arguments to update one V_NOISE_ISC.
     * @example
     * // Update one V_NOISE_ISC
     * const v_NOISE_ISC = await prisma.v_NOISE_ISC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends V_NOISE_ISCUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_ISCUpdateArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more V_NOISE_ISCS.
     * @param {V_NOISE_ISCDeleteManyArgs} args - Arguments to filter V_NOISE_ISCS to delete.
     * @example
     * // Delete a few V_NOISE_ISCS
     * const { count } = await prisma.v_NOISE_ISC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends V_NOISE_ISCDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, V_NOISE_ISCDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more V_NOISE_ISCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_ISCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many V_NOISE_ISCS
     * const v_NOISE_ISC = await prisma.v_NOISE_ISC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends V_NOISE_ISCUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_ISCUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one V_NOISE_ISC.
     * @param {V_NOISE_ISCUpsertArgs} args - Arguments to update or create a V_NOISE_ISC.
     * @example
     * // Update or create a V_NOISE_ISC
     * const v_NOISE_ISC = await prisma.v_NOISE_ISC.upsert({
     *   create: {
     *     // ... data to create a V_NOISE_ISC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the V_NOISE_ISC we want to update
     *   }
     * })
    **/
    upsert<T extends V_NOISE_ISCUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, V_NOISE_ISCUpsertArgs<ExtArgs>>
    ): Prisma__V_NOISE_ISCClient<$Result.GetResult<Prisma.$V_NOISE_ISCPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of V_NOISE_ISCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_ISCCountArgs} args - Arguments to filter V_NOISE_ISCS to count.
     * @example
     * // Count the number of V_NOISE_ISCS
     * const count = await prisma.v_NOISE_ISC.count({
     *   where: {
     *     // ... the filter for the V_NOISE_ISCS we want to count
     *   }
     * })
    **/
    count<T extends V_NOISE_ISCCountArgs>(
      args?: Subset<T, V_NOISE_ISCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], V_NOISE_ISCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a V_NOISE_ISC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_ISCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends V_NOISE_ISCAggregateArgs>(args: Subset<T, V_NOISE_ISCAggregateArgs>): Prisma.PrismaPromise<GetV_NOISE_ISCAggregateType<T>>

    /**
     * Group by V_NOISE_ISC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {V_NOISE_ISCGroupByArgs} args - Group by arguments.
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
      T extends V_NOISE_ISCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: V_NOISE_ISCGroupByArgs['orderBy'] }
        : { orderBy?: V_NOISE_ISCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, V_NOISE_ISCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetV_NOISE_ISCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the V_NOISE_ISC model
   */
  readonly fields: V_NOISE_ISCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for V_NOISE_ISC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__V_NOISE_ISCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the V_NOISE_ISC model
   */ 
  interface V_NOISE_ISCFieldRefs {
    readonly MODEL: FieldRef<"V_NOISE_ISC", 'String'>
    readonly COOLING_CAPACITY: FieldRef<"V_NOISE_ISC", 'Int'>
    readonly HEATING_CAPACITY: FieldRef<"V_NOISE_ISC", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * V_NOISE_ISC findUnique
   */
  export type V_NOISE_ISCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_ISC to fetch.
     */
    where: V_NOISE_ISCWhereUniqueInput
  }


  /**
   * V_NOISE_ISC findUniqueOrThrow
   */
  export type V_NOISE_ISCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_ISC to fetch.
     */
    where: V_NOISE_ISCWhereUniqueInput
  }


  /**
   * V_NOISE_ISC findFirst
   */
  export type V_NOISE_ISCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_ISC to fetch.
     */
    where?: V_NOISE_ISCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_ISCS to fetch.
     */
    orderBy?: V_NOISE_ISCOrderByWithRelationInput | V_NOISE_ISCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_ISCS.
     */
    cursor?: V_NOISE_ISCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_ISCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_ISCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_ISCS.
     */
    distinct?: V_NOISE_ISCScalarFieldEnum | V_NOISE_ISCScalarFieldEnum[]
  }


  /**
   * V_NOISE_ISC findFirstOrThrow
   */
  export type V_NOISE_ISCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_ISC to fetch.
     */
    where?: V_NOISE_ISCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_ISCS to fetch.
     */
    orderBy?: V_NOISE_ISCOrderByWithRelationInput | V_NOISE_ISCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for V_NOISE_ISCS.
     */
    cursor?: V_NOISE_ISCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_ISCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_ISCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of V_NOISE_ISCS.
     */
    distinct?: V_NOISE_ISCScalarFieldEnum | V_NOISE_ISCScalarFieldEnum[]
  }


  /**
   * V_NOISE_ISC findMany
   */
  export type V_NOISE_ISCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * Filter, which V_NOISE_ISCS to fetch.
     */
    where?: V_NOISE_ISCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of V_NOISE_ISCS to fetch.
     */
    orderBy?: V_NOISE_ISCOrderByWithRelationInput | V_NOISE_ISCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing V_NOISE_ISCS.
     */
    cursor?: V_NOISE_ISCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` V_NOISE_ISCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` V_NOISE_ISCS.
     */
    skip?: number
    distinct?: V_NOISE_ISCScalarFieldEnum | V_NOISE_ISCScalarFieldEnum[]
  }


  /**
   * V_NOISE_ISC create
   */
  export type V_NOISE_ISCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * The data needed to create a V_NOISE_ISC.
     */
    data: XOR<V_NOISE_ISCCreateInput, V_NOISE_ISCUncheckedCreateInput>
  }


  /**
   * V_NOISE_ISC createMany
   */
  export type V_NOISE_ISCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many V_NOISE_ISCS.
     */
    data: V_NOISE_ISCCreateManyInput | V_NOISE_ISCCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * V_NOISE_ISC update
   */
  export type V_NOISE_ISCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * The data needed to update a V_NOISE_ISC.
     */
    data: XOR<V_NOISE_ISCUpdateInput, V_NOISE_ISCUncheckedUpdateInput>
    /**
     * Choose, which V_NOISE_ISC to update.
     */
    where: V_NOISE_ISCWhereUniqueInput
  }


  /**
   * V_NOISE_ISC updateMany
   */
  export type V_NOISE_ISCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update V_NOISE_ISCS.
     */
    data: XOR<V_NOISE_ISCUpdateManyMutationInput, V_NOISE_ISCUncheckedUpdateManyInput>
    /**
     * Filter which V_NOISE_ISCS to update
     */
    where?: V_NOISE_ISCWhereInput
  }


  /**
   * V_NOISE_ISC upsert
   */
  export type V_NOISE_ISCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * The filter to search for the V_NOISE_ISC to update in case it exists.
     */
    where: V_NOISE_ISCWhereUniqueInput
    /**
     * In case the V_NOISE_ISC found by the `where` argument doesn't exist, create a new V_NOISE_ISC with this data.
     */
    create: XOR<V_NOISE_ISCCreateInput, V_NOISE_ISCUncheckedCreateInput>
    /**
     * In case the V_NOISE_ISC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<V_NOISE_ISCUpdateInput, V_NOISE_ISCUncheckedUpdateInput>
  }


  /**
   * V_NOISE_ISC delete
   */
  export type V_NOISE_ISCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
    /**
     * Filter which V_NOISE_ISC to delete.
     */
    where: V_NOISE_ISCWhereUniqueInput
  }


  /**
   * V_NOISE_ISC deleteMany
   */
  export type V_NOISE_ISCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which V_NOISE_ISCS to delete
     */
    where?: V_NOISE_ISCWhereInput
  }


  /**
   * V_NOISE_ISC without action
   */
  export type V_NOISE_ISCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the V_NOISE_ISC
     */
    select?: V_NOISE_ISCSelect<ExtArgs> | null
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


  export const T_NOISE_ISC_SPECScalarFieldEnum: {
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

  export type T_NOISE_ISC_SPECScalarFieldEnum = (typeof T_NOISE_ISC_SPECScalarFieldEnum)[keyof typeof T_NOISE_ISC_SPECScalarFieldEnum]


  export const V_NOISE_MULTIV_IScalarFieldEnum: {
    BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
    T_HEAT_W: 'T_HEAT_W',
    T_COOL_W: 'T_COOL_W'
  };

  export type V_NOISE_MULTIV_IScalarFieldEnum = (typeof V_NOISE_MULTIV_IScalarFieldEnum)[keyof typeof V_NOISE_MULTIV_IScalarFieldEnum]


  export const V_NOISE_RACScalarFieldEnum: {
    BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
    T_HEAT_W: 'T_HEAT_W',
    T_COOL_W: 'T_COOL_W'
  };

  export type V_NOISE_RACScalarFieldEnum = (typeof V_NOISE_RACScalarFieldEnum)[keyof typeof V_NOISE_RACScalarFieldEnum]


  export const V_NOISE_MULTIV_SScalarFieldEnum: {
    BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
    T_HEAT_W: 'T_HEAT_W',
    T_COOL_W: 'T_COOL_W'
  };

  export type V_NOISE_MULTIV_SScalarFieldEnum = (typeof V_NOISE_MULTIV_SScalarFieldEnum)[keyof typeof V_NOISE_MULTIV_SScalarFieldEnum]


  export const V_NOISE_SCACScalarFieldEnum: {
    BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
    T_HEAT_W: 'T_HEAT_W',
    T_COOL_W: 'T_COOL_W'
  };

  export type V_NOISE_SCACScalarFieldEnum = (typeof V_NOISE_SCACScalarFieldEnum)[keyof typeof V_NOISE_SCACScalarFieldEnum]


  export const V_NOISE_MULTIV_5ScalarFieldEnum: {
    BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
    T_HEAT_W: 'T_HEAT_W',
    T_COOL_W: 'T_COOL_W'
  };

  export type V_NOISE_MULTIV_5ScalarFieldEnum = (typeof V_NOISE_MULTIV_5ScalarFieldEnum)[keyof typeof V_NOISE_MULTIV_5ScalarFieldEnum]


  export const V_NOISE_MULTIScalarFieldEnum: {
    BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
    T_HEAT_W: 'T_HEAT_W',
    T_COOL_W: 'T_COOL_W'
  };

  export type V_NOISE_MULTIScalarFieldEnum = (typeof V_NOISE_MULTIScalarFieldEnum)[keyof typeof V_NOISE_MULTIScalarFieldEnum]


  export const V_NOISE_AWHPScalarFieldEnum: {
    BUYER_MODEL_NAME: 'BUYER_MODEL_NAME',
    T_HEAT_W: 'T_HEAT_W',
    T_COOL_W: 'T_COOL_W'
  };

  export type V_NOISE_AWHPScalarFieldEnum = (typeof V_NOISE_AWHPScalarFieldEnum)[keyof typeof V_NOISE_AWHPScalarFieldEnum]


  export const V_NOISE_ISCScalarFieldEnum: {
    MODEL: 'MODEL',
    COOLING_CAPACITY: 'COOLING_CAPACITY',
    HEATING_CAPACITY: 'HEATING_CAPACITY'
  };

  export type V_NOISE_ISCScalarFieldEnum = (typeof V_NOISE_ISCScalarFieldEnum)[keyof typeof V_NOISE_ISCScalarFieldEnum]


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
    REDUCED_CAPA_RATIO?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: DecimalNullableFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: DecimalNullableWithAggregatesFilter<"T_NOISE_MODELSPEC"> | Decimal | DecimalJsLike | number | string | null
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

  export type T_NOISE_ISC_SPECWhereInput = {
    AND?: T_NOISE_ISC_SPECWhereInput | T_NOISE_ISC_SPECWhereInput[]
    OR?: T_NOISE_ISC_SPECWhereInput[]
    NOT?: T_NOISE_ISC_SPECWhereInput | T_NOISE_ISC_SPECWhereInput[]
    ID?: IntFilter<"T_NOISE_ISC_SPEC"> | number
    MODEL?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    TYPE_COOLED?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_REF?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_EVAPORATOR?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_RUNNING?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    POWER_SUPPLY?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    GENERATION?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    NOMINAL_TON?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_CAPACITY?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_CAPACITY_RT?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    ESEER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV100?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV075?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV050?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV025?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    SEER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    SCOP?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    LOCATION?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    OBSOLETE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    SOUND_PRESSURE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    SOUND_PRESSURE_HEATING?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COOLING_SOUND_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_HEAD_LOSS?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    WEIGHT?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    WEIGHT_SHIPPING?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_W?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_H?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_D?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    FOOTPRINT?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_OILTYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_OILCHARGE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_HEATER?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    REFRIGERANT?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    REFRIGERANT_CHARGE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COND_TYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COND_MAX_PRESSURE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    DIAMETER?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_TYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_VANE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_FLOW_RATE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    FAN_MOTOR_POWER?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    MAX_CURRENT?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    POWER_LINE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    REMOTE_CONTROL?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    BREAKER?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_DIMENSIONS?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_INSTALLATION?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_M?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_S1?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_S2?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    MCA?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    MSC?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    RLA?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    MIN_VOLTAGE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    MAX_VOLTAGE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    VOLTAGE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    PHASE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    HZ?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    CIRCUIT?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
  }

  export type T_NOISE_ISC_SPECOrderByWithRelationInput = {
    ID?: SortOrder
    MODEL?: SortOrderInput | SortOrder
    TYPE_COOLED?: SortOrderInput | SortOrder
    TYPE_REF?: SortOrderInput | SortOrder
    TYPE_EVAPORATOR?: SortOrderInput | SortOrder
    TYPE_RUNNING?: SortOrderInput | SortOrder
    POWER_SUPPLY?: SortOrderInput | SortOrder
    GENERATION?: SortOrderInput | SortOrder
    NOMINAL_TON?: SortOrderInput | SortOrder
    COOLING_CAPACITY?: SortOrderInput | SortOrder
    COOLING_CAPACITY_RT?: SortOrderInput | SortOrder
    HEATING_CAPACITY?: SortOrderInput | SortOrder
    HEATING_CAPACITY_RT?: SortOrderInput | SortOrder
    COOLING_INPUT_POWER?: SortOrderInput | SortOrder
    HEATING_INPUT_POWER?: SortOrderInput | SortOrder
    ESEER?: SortOrderInput | SortOrder
    IPLV?: SortOrderInput | SortOrder
    IPLV100?: SortOrderInput | SortOrder
    IPLV075?: SortOrderInput | SortOrder
    IPLV050?: SortOrderInput | SortOrder
    IPLV025?: SortOrderInput | SortOrder
    SEER?: SortOrderInput | SortOrder
    SCOP?: SortOrderInput | SortOrder
    DESCRIPTION?: SortOrderInput | SortOrder
    LOCATION?: SortOrderInput | SortOrder
    OBSOLETE?: SortOrderInput | SortOrder
    SOUND_PRESSURE?: SortOrderInput | SortOrder
    SOUND_PRESSURE_HEATING?: SortOrderInput | SortOrder
    COOLING_SOUND_POWER?: SortOrderInput | SortOrder
    HEATING_SOUND_POWER?: SortOrderInput | SortOrder
    EVAPORATOR_EA?: SortOrderInput | SortOrder
    COOLING_HEAD_LOSS?: SortOrderInput | SortOrder
    HEATING_HEAD_LOSS?: SortOrderInput | SortOrder
    COOLING_WATER_FLOW?: SortOrderInput | SortOrder
    HEATING_WATER_FLOW?: SortOrderInput | SortOrder
    WEIGHT?: SortOrderInput | SortOrder
    WEIGHT_SHIPPING?: SortOrderInput | SortOrder
    DIMENSION_W?: SortOrderInput | SortOrder
    DIMENSION_H?: SortOrderInput | SortOrder
    DIMENSION_D?: SortOrderInput | SortOrder
    FOOTPRINT?: SortOrderInput | SortOrder
    COMP_TYPE?: SortOrderInput | SortOrder
    COMP_OILTYPE?: SortOrderInput | SortOrder
    COMP_OILCHARGE?: SortOrderInput | SortOrder
    COMP_HEATER?: SortOrderInput | SortOrder
    REFRIGERANT?: SortOrderInput | SortOrder
    REFRIGERANT_CHARGE?: SortOrderInput | SortOrder
    COND_TYPE?: SortOrderInput | SortOrder
    COND_MAX_PRESSURE?: SortOrderInput | SortOrder
    DIAMETER?: SortOrderInput | SortOrder
    FAN_TYPE?: SortOrderInput | SortOrder
    FAN_VANE?: SortOrderInput | SortOrder
    FAN_FLOW_RATE?: SortOrderInput | SortOrder
    FAN_MOTOR_POWER?: SortOrderInput | SortOrder
    MAX_CURRENT?: SortOrderInput | SortOrder
    POWER_LINE?: SortOrderInput | SortOrder
    REMOTE_CONTROL?: SortOrderInput | SortOrder
    BREAKER?: SortOrderInput | SortOrder
    IMAGE_DIMENSIONS?: SortOrderInput | SortOrder
    IMAGE_INSTALLATION?: SortOrderInput | SortOrder
    IMAGE_WIRING_M?: SortOrderInput | SortOrder
    IMAGE_WIRING_S1?: SortOrderInput | SortOrder
    IMAGE_WIRING_S2?: SortOrderInput | SortOrder
    MCA?: SortOrderInput | SortOrder
    MSC?: SortOrderInput | SortOrder
    RLA?: SortOrderInput | SortOrder
    MIN_VOLTAGE?: SortOrderInput | SortOrder
    MAX_VOLTAGE?: SortOrderInput | SortOrder
    VOLTAGE?: SortOrderInput | SortOrder
    PHASE?: SortOrderInput | SortOrder
    HZ?: SortOrderInput | SortOrder
    CIRCUIT?: SortOrderInput | SortOrder
  }

  export type T_NOISE_ISC_SPECWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: T_NOISE_ISC_SPECWhereInput | T_NOISE_ISC_SPECWhereInput[]
    OR?: T_NOISE_ISC_SPECWhereInput[]
    NOT?: T_NOISE_ISC_SPECWhereInput | T_NOISE_ISC_SPECWhereInput[]
    MODEL?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    TYPE_COOLED?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_REF?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_EVAPORATOR?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_RUNNING?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    POWER_SUPPLY?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    GENERATION?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    NOMINAL_TON?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_CAPACITY?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_CAPACITY_RT?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    ESEER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV100?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV075?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV050?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV025?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    SEER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    SCOP?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    LOCATION?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    OBSOLETE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    SOUND_PRESSURE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    SOUND_PRESSURE_HEATING?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COOLING_SOUND_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_HEAD_LOSS?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    WEIGHT?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    WEIGHT_SHIPPING?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_W?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_H?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_D?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    FOOTPRINT?: DecimalNullableFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_OILTYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_OILCHARGE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_HEATER?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    REFRIGERANT?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    REFRIGERANT_CHARGE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COND_TYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    COND_MAX_PRESSURE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    DIAMETER?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_TYPE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_VANE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_FLOW_RATE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    FAN_MOTOR_POWER?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    MAX_CURRENT?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    POWER_LINE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    REMOTE_CONTROL?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    BREAKER?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_DIMENSIONS?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_INSTALLATION?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_M?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_S1?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_S2?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    MCA?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    MSC?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    RLA?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    MIN_VOLTAGE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    MAX_VOLTAGE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    VOLTAGE?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    PHASE?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
    HZ?: StringNullableFilter<"T_NOISE_ISC_SPEC"> | string | null
    CIRCUIT?: IntNullableFilter<"T_NOISE_ISC_SPEC"> | number | null
  }, "ID">

  export type T_NOISE_ISC_SPECOrderByWithAggregationInput = {
    ID?: SortOrder
    MODEL?: SortOrderInput | SortOrder
    TYPE_COOLED?: SortOrderInput | SortOrder
    TYPE_REF?: SortOrderInput | SortOrder
    TYPE_EVAPORATOR?: SortOrderInput | SortOrder
    TYPE_RUNNING?: SortOrderInput | SortOrder
    POWER_SUPPLY?: SortOrderInput | SortOrder
    GENERATION?: SortOrderInput | SortOrder
    NOMINAL_TON?: SortOrderInput | SortOrder
    COOLING_CAPACITY?: SortOrderInput | SortOrder
    COOLING_CAPACITY_RT?: SortOrderInput | SortOrder
    HEATING_CAPACITY?: SortOrderInput | SortOrder
    HEATING_CAPACITY_RT?: SortOrderInput | SortOrder
    COOLING_INPUT_POWER?: SortOrderInput | SortOrder
    HEATING_INPUT_POWER?: SortOrderInput | SortOrder
    ESEER?: SortOrderInput | SortOrder
    IPLV?: SortOrderInput | SortOrder
    IPLV100?: SortOrderInput | SortOrder
    IPLV075?: SortOrderInput | SortOrder
    IPLV050?: SortOrderInput | SortOrder
    IPLV025?: SortOrderInput | SortOrder
    SEER?: SortOrderInput | SortOrder
    SCOP?: SortOrderInput | SortOrder
    DESCRIPTION?: SortOrderInput | SortOrder
    LOCATION?: SortOrderInput | SortOrder
    OBSOLETE?: SortOrderInput | SortOrder
    SOUND_PRESSURE?: SortOrderInput | SortOrder
    SOUND_PRESSURE_HEATING?: SortOrderInput | SortOrder
    COOLING_SOUND_POWER?: SortOrderInput | SortOrder
    HEATING_SOUND_POWER?: SortOrderInput | SortOrder
    EVAPORATOR_EA?: SortOrderInput | SortOrder
    COOLING_HEAD_LOSS?: SortOrderInput | SortOrder
    HEATING_HEAD_LOSS?: SortOrderInput | SortOrder
    COOLING_WATER_FLOW?: SortOrderInput | SortOrder
    HEATING_WATER_FLOW?: SortOrderInput | SortOrder
    WEIGHT?: SortOrderInput | SortOrder
    WEIGHT_SHIPPING?: SortOrderInput | SortOrder
    DIMENSION_W?: SortOrderInput | SortOrder
    DIMENSION_H?: SortOrderInput | SortOrder
    DIMENSION_D?: SortOrderInput | SortOrder
    FOOTPRINT?: SortOrderInput | SortOrder
    COMP_TYPE?: SortOrderInput | SortOrder
    COMP_OILTYPE?: SortOrderInput | SortOrder
    COMP_OILCHARGE?: SortOrderInput | SortOrder
    COMP_HEATER?: SortOrderInput | SortOrder
    REFRIGERANT?: SortOrderInput | SortOrder
    REFRIGERANT_CHARGE?: SortOrderInput | SortOrder
    COND_TYPE?: SortOrderInput | SortOrder
    COND_MAX_PRESSURE?: SortOrderInput | SortOrder
    DIAMETER?: SortOrderInput | SortOrder
    FAN_TYPE?: SortOrderInput | SortOrder
    FAN_VANE?: SortOrderInput | SortOrder
    FAN_FLOW_RATE?: SortOrderInput | SortOrder
    FAN_MOTOR_POWER?: SortOrderInput | SortOrder
    MAX_CURRENT?: SortOrderInput | SortOrder
    POWER_LINE?: SortOrderInput | SortOrder
    REMOTE_CONTROL?: SortOrderInput | SortOrder
    BREAKER?: SortOrderInput | SortOrder
    IMAGE_DIMENSIONS?: SortOrderInput | SortOrder
    IMAGE_INSTALLATION?: SortOrderInput | SortOrder
    IMAGE_WIRING_M?: SortOrderInput | SortOrder
    IMAGE_WIRING_S1?: SortOrderInput | SortOrder
    IMAGE_WIRING_S2?: SortOrderInput | SortOrder
    MCA?: SortOrderInput | SortOrder
    MSC?: SortOrderInput | SortOrder
    RLA?: SortOrderInput | SortOrder
    MIN_VOLTAGE?: SortOrderInput | SortOrder
    MAX_VOLTAGE?: SortOrderInput | SortOrder
    VOLTAGE?: SortOrderInput | SortOrder
    PHASE?: SortOrderInput | SortOrder
    HZ?: SortOrderInput | SortOrder
    CIRCUIT?: SortOrderInput | SortOrder
    _count?: T_NOISE_ISC_SPECCountOrderByAggregateInput
    _avg?: T_NOISE_ISC_SPECAvgOrderByAggregateInput
    _max?: T_NOISE_ISC_SPECMaxOrderByAggregateInput
    _min?: T_NOISE_ISC_SPECMinOrderByAggregateInput
    _sum?: T_NOISE_ISC_SPECSumOrderByAggregateInput
  }

  export type T_NOISE_ISC_SPECScalarWhereWithAggregatesInput = {
    AND?: T_NOISE_ISC_SPECScalarWhereWithAggregatesInput | T_NOISE_ISC_SPECScalarWhereWithAggregatesInput[]
    OR?: T_NOISE_ISC_SPECScalarWhereWithAggregatesInput[]
    NOT?: T_NOISE_ISC_SPECScalarWhereWithAggregatesInput | T_NOISE_ISC_SPECScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number
    MODEL?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    TYPE_COOLED?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_REF?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_EVAPORATOR?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    TYPE_RUNNING?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    POWER_SUPPLY?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    GENERATION?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    NOMINAL_TON?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_CAPACITY?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_CAPACITY_RT?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    ESEER?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV100?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV075?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV050?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    IPLV025?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    SEER?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    SCOP?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    LOCATION?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    OBSOLETE?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    SOUND_PRESSURE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    SOUND_PRESSURE_HEATING?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    COOLING_SOUND_POWER?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    COOLING_HEAD_LOSS?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    WEIGHT?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    WEIGHT_SHIPPING?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_W?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_H?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    DIMENSION_D?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    FOOTPRINT?: DecimalNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_OILTYPE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_OILCHARGE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    COMP_HEATER?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    REFRIGERANT?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    REFRIGERANT_CHARGE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    COND_TYPE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    COND_MAX_PRESSURE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    DIAMETER?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_TYPE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_VANE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    FAN_FLOW_RATE?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    FAN_MOTOR_POWER?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    MAX_CURRENT?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    POWER_LINE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    REMOTE_CONTROL?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    BREAKER?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_DIMENSIONS?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_INSTALLATION?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_M?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_S1?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    IMAGE_WIRING_S2?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    MCA?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    MSC?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    RLA?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    MIN_VOLTAGE?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    MAX_VOLTAGE?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    VOLTAGE?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    PHASE?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
    HZ?: StringNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | string | null
    CIRCUIT?: IntNullableWithAggregatesFilter<"T_NOISE_ISC_SPEC"> | number | null
  }

  export type V_NOISE_MULTIV_IWhereInput = {
    AND?: V_NOISE_MULTIV_IWhereInput | V_NOISE_MULTIV_IWhereInput[]
    OR?: V_NOISE_MULTIV_IWhereInput[]
    NOT?: V_NOISE_MULTIV_IWhereInput | V_NOISE_MULTIV_IWhereInput[]
    BUYER_MODEL_NAME?: StringFilter<"V_NOISE_MULTIV_I"> | string
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTIV_I"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTIV_I"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_IOrderByWithRelationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
  }

  export type V_NOISE_MULTIV_IWhereUniqueInput = Prisma.AtLeast<{
    BUYER_MODEL_NAME?: string
    AND?: V_NOISE_MULTIV_IWhereInput | V_NOISE_MULTIV_IWhereInput[]
    OR?: V_NOISE_MULTIV_IWhereInput[]
    NOT?: V_NOISE_MULTIV_IWhereInput | V_NOISE_MULTIV_IWhereInput[]
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTIV_I"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTIV_I"> | Decimal | DecimalJsLike | number | string | null
  }, "BUYER_MODEL_NAME">

  export type V_NOISE_MULTIV_IOrderByWithAggregationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
    _count?: V_NOISE_MULTIV_ICountOrderByAggregateInput
    _avg?: V_NOISE_MULTIV_IAvgOrderByAggregateInput
    _max?: V_NOISE_MULTIV_IMaxOrderByAggregateInput
    _min?: V_NOISE_MULTIV_IMinOrderByAggregateInput
    _sum?: V_NOISE_MULTIV_ISumOrderByAggregateInput
  }

  export type V_NOISE_MULTIV_IScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_MULTIV_IScalarWhereWithAggregatesInput | V_NOISE_MULTIV_IScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_MULTIV_IScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_MULTIV_IScalarWhereWithAggregatesInput | V_NOISE_MULTIV_IScalarWhereWithAggregatesInput[]
    BUYER_MODEL_NAME?: StringWithAggregatesFilter<"V_NOISE_MULTIV_I"> | string
    T_HEAT_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTIV_I"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTIV_I"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACWhereInput = {
    AND?: V_NOISE_RACWhereInput | V_NOISE_RACWhereInput[]
    OR?: V_NOISE_RACWhereInput[]
    NOT?: V_NOISE_RACWhereInput | V_NOISE_RACWhereInput[]
    BUYER_MODEL_NAME?: StringFilter<"V_NOISE_RAC"> | string
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_RAC"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_RAC"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACOrderByWithRelationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
  }

  export type V_NOISE_RACWhereUniqueInput = Prisma.AtLeast<{
    BUYER_MODEL_NAME?: string
    AND?: V_NOISE_RACWhereInput | V_NOISE_RACWhereInput[]
    OR?: V_NOISE_RACWhereInput[]
    NOT?: V_NOISE_RACWhereInput | V_NOISE_RACWhereInput[]
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_RAC"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_RAC"> | Decimal | DecimalJsLike | number | string | null
  }, "BUYER_MODEL_NAME">

  export type V_NOISE_RACOrderByWithAggregationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
    _count?: V_NOISE_RACCountOrderByAggregateInput
    _avg?: V_NOISE_RACAvgOrderByAggregateInput
    _max?: V_NOISE_RACMaxOrderByAggregateInput
    _min?: V_NOISE_RACMinOrderByAggregateInput
    _sum?: V_NOISE_RACSumOrderByAggregateInput
  }

  export type V_NOISE_RACScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_RACScalarWhereWithAggregatesInput | V_NOISE_RACScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_RACScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_RACScalarWhereWithAggregatesInput | V_NOISE_RACScalarWhereWithAggregatesInput[]
    BUYER_MODEL_NAME?: StringWithAggregatesFilter<"V_NOISE_RAC"> | string
    T_HEAT_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_RAC"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_RAC"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SWhereInput = {
    AND?: V_NOISE_MULTIV_SWhereInput | V_NOISE_MULTIV_SWhereInput[]
    OR?: V_NOISE_MULTIV_SWhereInput[]
    NOT?: V_NOISE_MULTIV_SWhereInput | V_NOISE_MULTIV_SWhereInput[]
    BUYER_MODEL_NAME?: StringFilter<"V_NOISE_MULTIV_S"> | string
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTIV_S"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTIV_S"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SOrderByWithRelationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
  }

  export type V_NOISE_MULTIV_SWhereUniqueInput = Prisma.AtLeast<{
    BUYER_MODEL_NAME?: string
    AND?: V_NOISE_MULTIV_SWhereInput | V_NOISE_MULTIV_SWhereInput[]
    OR?: V_NOISE_MULTIV_SWhereInput[]
    NOT?: V_NOISE_MULTIV_SWhereInput | V_NOISE_MULTIV_SWhereInput[]
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTIV_S"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTIV_S"> | Decimal | DecimalJsLike | number | string | null
  }, "BUYER_MODEL_NAME">

  export type V_NOISE_MULTIV_SOrderByWithAggregationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
    _count?: V_NOISE_MULTIV_SCountOrderByAggregateInput
    _avg?: V_NOISE_MULTIV_SAvgOrderByAggregateInput
    _max?: V_NOISE_MULTIV_SMaxOrderByAggregateInput
    _min?: V_NOISE_MULTIV_SMinOrderByAggregateInput
    _sum?: V_NOISE_MULTIV_SSumOrderByAggregateInput
  }

  export type V_NOISE_MULTIV_SScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_MULTIV_SScalarWhereWithAggregatesInput | V_NOISE_MULTIV_SScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_MULTIV_SScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_MULTIV_SScalarWhereWithAggregatesInput | V_NOISE_MULTIV_SScalarWhereWithAggregatesInput[]
    BUYER_MODEL_NAME?: StringWithAggregatesFilter<"V_NOISE_MULTIV_S"> | string
    T_HEAT_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTIV_S"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTIV_S"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACWhereInput = {
    AND?: V_NOISE_SCACWhereInput | V_NOISE_SCACWhereInput[]
    OR?: V_NOISE_SCACWhereInput[]
    NOT?: V_NOISE_SCACWhereInput | V_NOISE_SCACWhereInput[]
    BUYER_MODEL_NAME?: StringFilter<"V_NOISE_SCAC"> | string
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_SCAC"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_SCAC"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACOrderByWithRelationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
  }

  export type V_NOISE_SCACWhereUniqueInput = Prisma.AtLeast<{
    BUYER_MODEL_NAME?: string
    AND?: V_NOISE_SCACWhereInput | V_NOISE_SCACWhereInput[]
    OR?: V_NOISE_SCACWhereInput[]
    NOT?: V_NOISE_SCACWhereInput | V_NOISE_SCACWhereInput[]
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_SCAC"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_SCAC"> | Decimal | DecimalJsLike | number | string | null
  }, "BUYER_MODEL_NAME">

  export type V_NOISE_SCACOrderByWithAggregationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
    _count?: V_NOISE_SCACCountOrderByAggregateInput
    _avg?: V_NOISE_SCACAvgOrderByAggregateInput
    _max?: V_NOISE_SCACMaxOrderByAggregateInput
    _min?: V_NOISE_SCACMinOrderByAggregateInput
    _sum?: V_NOISE_SCACSumOrderByAggregateInput
  }

  export type V_NOISE_SCACScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_SCACScalarWhereWithAggregatesInput | V_NOISE_SCACScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_SCACScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_SCACScalarWhereWithAggregatesInput | V_NOISE_SCACScalarWhereWithAggregatesInput[]
    BUYER_MODEL_NAME?: StringWithAggregatesFilter<"V_NOISE_SCAC"> | string
    T_HEAT_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_SCAC"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_SCAC"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5WhereInput = {
    AND?: V_NOISE_MULTIV_5WhereInput | V_NOISE_MULTIV_5WhereInput[]
    OR?: V_NOISE_MULTIV_5WhereInput[]
    NOT?: V_NOISE_MULTIV_5WhereInput | V_NOISE_MULTIV_5WhereInput[]
    BUYER_MODEL_NAME?: StringFilter<"V_NOISE_MULTIV_5"> | string
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTIV_5"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTIV_5"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5OrderByWithRelationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
  }

  export type V_NOISE_MULTIV_5WhereUniqueInput = Prisma.AtLeast<{
    BUYER_MODEL_NAME?: string
    AND?: V_NOISE_MULTIV_5WhereInput | V_NOISE_MULTIV_5WhereInput[]
    OR?: V_NOISE_MULTIV_5WhereInput[]
    NOT?: V_NOISE_MULTIV_5WhereInput | V_NOISE_MULTIV_5WhereInput[]
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTIV_5"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTIV_5"> | Decimal | DecimalJsLike | number | string | null
  }, "BUYER_MODEL_NAME">

  export type V_NOISE_MULTIV_5OrderByWithAggregationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
    _count?: V_NOISE_MULTIV_5CountOrderByAggregateInput
    _avg?: V_NOISE_MULTIV_5AvgOrderByAggregateInput
    _max?: V_NOISE_MULTIV_5MaxOrderByAggregateInput
    _min?: V_NOISE_MULTIV_5MinOrderByAggregateInput
    _sum?: V_NOISE_MULTIV_5SumOrderByAggregateInput
  }

  export type V_NOISE_MULTIV_5ScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_MULTIV_5ScalarWhereWithAggregatesInput | V_NOISE_MULTIV_5ScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_MULTIV_5ScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_MULTIV_5ScalarWhereWithAggregatesInput | V_NOISE_MULTIV_5ScalarWhereWithAggregatesInput[]
    BUYER_MODEL_NAME?: StringWithAggregatesFilter<"V_NOISE_MULTIV_5"> | string
    T_HEAT_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTIV_5"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTIV_5"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIWhereInput = {
    AND?: V_NOISE_MULTIWhereInput | V_NOISE_MULTIWhereInput[]
    OR?: V_NOISE_MULTIWhereInput[]
    NOT?: V_NOISE_MULTIWhereInput | V_NOISE_MULTIWhereInput[]
    BUYER_MODEL_NAME?: StringFilter<"V_NOISE_MULTI"> | string
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTI"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTI"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIOrderByWithRelationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
  }

  export type V_NOISE_MULTIWhereUniqueInput = Prisma.AtLeast<{
    BUYER_MODEL_NAME?: string
    AND?: V_NOISE_MULTIWhereInput | V_NOISE_MULTIWhereInput[]
    OR?: V_NOISE_MULTIWhereInput[]
    NOT?: V_NOISE_MULTIWhereInput | V_NOISE_MULTIWhereInput[]
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_MULTI"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_MULTI"> | Decimal | DecimalJsLike | number | string | null
  }, "BUYER_MODEL_NAME">

  export type V_NOISE_MULTIOrderByWithAggregationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
    _count?: V_NOISE_MULTICountOrderByAggregateInput
    _avg?: V_NOISE_MULTIAvgOrderByAggregateInput
    _max?: V_NOISE_MULTIMaxOrderByAggregateInput
    _min?: V_NOISE_MULTIMinOrderByAggregateInput
    _sum?: V_NOISE_MULTISumOrderByAggregateInput
  }

  export type V_NOISE_MULTIScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_MULTIScalarWhereWithAggregatesInput | V_NOISE_MULTIScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_MULTIScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_MULTIScalarWhereWithAggregatesInput | V_NOISE_MULTIScalarWhereWithAggregatesInput[]
    BUYER_MODEL_NAME?: StringWithAggregatesFilter<"V_NOISE_MULTI"> | string
    T_HEAT_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTI"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_MULTI"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPWhereInput = {
    AND?: V_NOISE_AWHPWhereInput | V_NOISE_AWHPWhereInput[]
    OR?: V_NOISE_AWHPWhereInput[]
    NOT?: V_NOISE_AWHPWhereInput | V_NOISE_AWHPWhereInput[]
    BUYER_MODEL_NAME?: StringFilter<"V_NOISE_AWHP"> | string
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_AWHP"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_AWHP"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPOrderByWithRelationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
  }

  export type V_NOISE_AWHPWhereUniqueInput = Prisma.AtLeast<{
    BUYER_MODEL_NAME?: string
    AND?: V_NOISE_AWHPWhereInput | V_NOISE_AWHPWhereInput[]
    OR?: V_NOISE_AWHPWhereInput[]
    NOT?: V_NOISE_AWHPWhereInput | V_NOISE_AWHPWhereInput[]
    T_HEAT_W?: DecimalNullableFilter<"V_NOISE_AWHP"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableFilter<"V_NOISE_AWHP"> | Decimal | DecimalJsLike | number | string | null
  }, "BUYER_MODEL_NAME">

  export type V_NOISE_AWHPOrderByWithAggregationInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrderInput | SortOrder
    T_COOL_W?: SortOrderInput | SortOrder
    _count?: V_NOISE_AWHPCountOrderByAggregateInput
    _avg?: V_NOISE_AWHPAvgOrderByAggregateInput
    _max?: V_NOISE_AWHPMaxOrderByAggregateInput
    _min?: V_NOISE_AWHPMinOrderByAggregateInput
    _sum?: V_NOISE_AWHPSumOrderByAggregateInput
  }

  export type V_NOISE_AWHPScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_AWHPScalarWhereWithAggregatesInput | V_NOISE_AWHPScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_AWHPScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_AWHPScalarWhereWithAggregatesInput | V_NOISE_AWHPScalarWhereWithAggregatesInput[]
    BUYER_MODEL_NAME?: StringWithAggregatesFilter<"V_NOISE_AWHP"> | string
    T_HEAT_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_AWHP"> | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: DecimalNullableWithAggregatesFilter<"V_NOISE_AWHP"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCWhereInput = {
    AND?: V_NOISE_ISCWhereInput | V_NOISE_ISCWhereInput[]
    OR?: V_NOISE_ISCWhereInput[]
    NOT?: V_NOISE_ISCWhereInput | V_NOISE_ISCWhereInput[]
    MODEL?: StringFilter<"V_NOISE_ISC"> | string
    COOLING_CAPACITY?: IntNullableFilter<"V_NOISE_ISC"> | number | null
    HEATING_CAPACITY?: DecimalNullableFilter<"V_NOISE_ISC"> | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCOrderByWithRelationInput = {
    MODEL?: SortOrder
    COOLING_CAPACITY?: SortOrderInput | SortOrder
    HEATING_CAPACITY?: SortOrderInput | SortOrder
  }

  export type V_NOISE_ISCWhereUniqueInput = Prisma.AtLeast<{
    MODEL?: string
    AND?: V_NOISE_ISCWhereInput | V_NOISE_ISCWhereInput[]
    OR?: V_NOISE_ISCWhereInput[]
    NOT?: V_NOISE_ISCWhereInput | V_NOISE_ISCWhereInput[]
    COOLING_CAPACITY?: IntNullableFilter<"V_NOISE_ISC"> | number | null
    HEATING_CAPACITY?: DecimalNullableFilter<"V_NOISE_ISC"> | Decimal | DecimalJsLike | number | string | null
  }, "MODEL">

  export type V_NOISE_ISCOrderByWithAggregationInput = {
    MODEL?: SortOrder
    COOLING_CAPACITY?: SortOrderInput | SortOrder
    HEATING_CAPACITY?: SortOrderInput | SortOrder
    _count?: V_NOISE_ISCCountOrderByAggregateInput
    _avg?: V_NOISE_ISCAvgOrderByAggregateInput
    _max?: V_NOISE_ISCMaxOrderByAggregateInput
    _min?: V_NOISE_ISCMinOrderByAggregateInput
    _sum?: V_NOISE_ISCSumOrderByAggregateInput
  }

  export type V_NOISE_ISCScalarWhereWithAggregatesInput = {
    AND?: V_NOISE_ISCScalarWhereWithAggregatesInput | V_NOISE_ISCScalarWhereWithAggregatesInput[]
    OR?: V_NOISE_ISCScalarWhereWithAggregatesInput[]
    NOT?: V_NOISE_ISCScalarWhereWithAggregatesInput | V_NOISE_ISCScalarWhereWithAggregatesInput[]
    MODEL?: StringWithAggregatesFilter<"V_NOISE_ISC"> | string
    COOLING_CAPACITY?: IntNullableWithAggregatesFilter<"V_NOISE_ISC"> | number | null
    HEATING_CAPACITY?: DecimalNullableWithAggregatesFilter<"V_NOISE_ISC"> | Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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
    REDUCED_CAPA_RATIO?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type T_NOISE_ISC_SPECCreateInput = {
    ID: number
    MODEL?: string | null
    TYPE_COOLED?: number | null
    TYPE_REF?: number | null
    TYPE_EVAPORATOR?: number | null
    TYPE_RUNNING?: number | null
    POWER_SUPPLY?: number | null
    GENERATION?: number | null
    NOMINAL_TON?: number | null
    COOLING_CAPACITY?: number | null
    COOLING_CAPACITY_RT?: Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: Decimal | DecimalJsLike | number | string | null
    ESEER?: Decimal | DecimalJsLike | number | string | null
    IPLV?: Decimal | DecimalJsLike | number | string | null
    IPLV100?: Decimal | DecimalJsLike | number | string | null
    IPLV075?: Decimal | DecimalJsLike | number | string | null
    IPLV050?: Decimal | DecimalJsLike | number | string | null
    IPLV025?: Decimal | DecimalJsLike | number | string | null
    SEER?: Decimal | DecimalJsLike | number | string | null
    SCOP?: Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: string | null
    LOCATION?: string | null
    OBSOLETE?: number | null
    SOUND_PRESSURE?: string | null
    SOUND_PRESSURE_HEATING?: string | null
    COOLING_SOUND_POWER?: Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: number | null
    COOLING_HEAD_LOSS?: Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: Decimal | DecimalJsLike | number | string | null
    WEIGHT?: number | null
    WEIGHT_SHIPPING?: number | null
    DIMENSION_W?: number | null
    DIMENSION_H?: number | null
    DIMENSION_D?: number | null
    FOOTPRINT?: Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: string | null
    COMP_OILTYPE?: string | null
    COMP_OILCHARGE?: string | null
    COMP_HEATER?: string | null
    REFRIGERANT?: string | null
    REFRIGERANT_CHARGE?: string | null
    COND_TYPE?: string | null
    COND_MAX_PRESSURE?: string | null
    DIAMETER?: string | null
    FAN_TYPE?: string | null
    FAN_VANE?: string | null
    FAN_FLOW_RATE?: number | null
    FAN_MOTOR_POWER?: number | null
    MAX_CURRENT?: number | null
    POWER_LINE?: string | null
    REMOTE_CONTROL?: string | null
    BREAKER?: string | null
    IMAGE_DIMENSIONS?: string | null
    IMAGE_INSTALLATION?: string | null
    IMAGE_WIRING_M?: string | null
    IMAGE_WIRING_S1?: string | null
    IMAGE_WIRING_S2?: string | null
    MCA?: string | null
    MSC?: string | null
    RLA?: string | null
    MIN_VOLTAGE?: number | null
    MAX_VOLTAGE?: number | null
    VOLTAGE?: string | null
    PHASE?: number | null
    HZ?: string | null
    CIRCUIT?: number | null
  }

  export type T_NOISE_ISC_SPECUncheckedCreateInput = {
    ID: number
    MODEL?: string | null
    TYPE_COOLED?: number | null
    TYPE_REF?: number | null
    TYPE_EVAPORATOR?: number | null
    TYPE_RUNNING?: number | null
    POWER_SUPPLY?: number | null
    GENERATION?: number | null
    NOMINAL_TON?: number | null
    COOLING_CAPACITY?: number | null
    COOLING_CAPACITY_RT?: Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: Decimal | DecimalJsLike | number | string | null
    ESEER?: Decimal | DecimalJsLike | number | string | null
    IPLV?: Decimal | DecimalJsLike | number | string | null
    IPLV100?: Decimal | DecimalJsLike | number | string | null
    IPLV075?: Decimal | DecimalJsLike | number | string | null
    IPLV050?: Decimal | DecimalJsLike | number | string | null
    IPLV025?: Decimal | DecimalJsLike | number | string | null
    SEER?: Decimal | DecimalJsLike | number | string | null
    SCOP?: Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: string | null
    LOCATION?: string | null
    OBSOLETE?: number | null
    SOUND_PRESSURE?: string | null
    SOUND_PRESSURE_HEATING?: string | null
    COOLING_SOUND_POWER?: Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: number | null
    COOLING_HEAD_LOSS?: Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: Decimal | DecimalJsLike | number | string | null
    WEIGHT?: number | null
    WEIGHT_SHIPPING?: number | null
    DIMENSION_W?: number | null
    DIMENSION_H?: number | null
    DIMENSION_D?: number | null
    FOOTPRINT?: Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: string | null
    COMP_OILTYPE?: string | null
    COMP_OILCHARGE?: string | null
    COMP_HEATER?: string | null
    REFRIGERANT?: string | null
    REFRIGERANT_CHARGE?: string | null
    COND_TYPE?: string | null
    COND_MAX_PRESSURE?: string | null
    DIAMETER?: string | null
    FAN_TYPE?: string | null
    FAN_VANE?: string | null
    FAN_FLOW_RATE?: number | null
    FAN_MOTOR_POWER?: number | null
    MAX_CURRENT?: number | null
    POWER_LINE?: string | null
    REMOTE_CONTROL?: string | null
    BREAKER?: string | null
    IMAGE_DIMENSIONS?: string | null
    IMAGE_INSTALLATION?: string | null
    IMAGE_WIRING_M?: string | null
    IMAGE_WIRING_S1?: string | null
    IMAGE_WIRING_S2?: string | null
    MCA?: string | null
    MSC?: string | null
    RLA?: string | null
    MIN_VOLTAGE?: number | null
    MAX_VOLTAGE?: number | null
    VOLTAGE?: string | null
    PHASE?: number | null
    HZ?: string | null
    CIRCUIT?: number | null
  }

  export type T_NOISE_ISC_SPECUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    MODEL?: NullableStringFieldUpdateOperationsInput | string | null
    TYPE_COOLED?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_REF?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_EVAPORATOR?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_RUNNING?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_SUPPLY?: NullableIntFieldUpdateOperationsInput | number | null
    GENERATION?: NullableIntFieldUpdateOperationsInput | number | null
    NOMINAL_TON?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ESEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV100?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV075?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV050?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV025?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SCOP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCATION?: NullableStringFieldUpdateOperationsInput | string | null
    OBSOLETE?: NullableIntFieldUpdateOperationsInput | number | null
    SOUND_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    SOUND_PRESSURE_HEATING?: NullableStringFieldUpdateOperationsInput | string | null
    COOLING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    WEIGHT?: NullableIntFieldUpdateOperationsInput | number | null
    WEIGHT_SHIPPING?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_W?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_H?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_D?: NullableIntFieldUpdateOperationsInput | number | null
    FOOTPRINT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILTYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_HEATER?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT_CHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_MAX_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    DIAMETER?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_VANE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_FLOW_RATE?: NullableIntFieldUpdateOperationsInput | number | null
    FAN_MOTOR_POWER?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_CURRENT?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_LINE?: NullableStringFieldUpdateOperationsInput | string | null
    REMOTE_CONTROL?: NullableStringFieldUpdateOperationsInput | string | null
    BREAKER?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_DIMENSIONS?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_INSTALLATION?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_M?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S1?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S2?: NullableStringFieldUpdateOperationsInput | string | null
    MCA?: NullableStringFieldUpdateOperationsInput | string | null
    MSC?: NullableStringFieldUpdateOperationsInput | string | null
    RLA?: NullableStringFieldUpdateOperationsInput | string | null
    MIN_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    VOLTAGE?: NullableStringFieldUpdateOperationsInput | string | null
    PHASE?: NullableIntFieldUpdateOperationsInput | number | null
    HZ?: NullableStringFieldUpdateOperationsInput | string | null
    CIRCUIT?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_NOISE_ISC_SPECUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    MODEL?: NullableStringFieldUpdateOperationsInput | string | null
    TYPE_COOLED?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_REF?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_EVAPORATOR?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_RUNNING?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_SUPPLY?: NullableIntFieldUpdateOperationsInput | number | null
    GENERATION?: NullableIntFieldUpdateOperationsInput | number | null
    NOMINAL_TON?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ESEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV100?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV075?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV050?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV025?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SCOP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCATION?: NullableStringFieldUpdateOperationsInput | string | null
    OBSOLETE?: NullableIntFieldUpdateOperationsInput | number | null
    SOUND_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    SOUND_PRESSURE_HEATING?: NullableStringFieldUpdateOperationsInput | string | null
    COOLING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    WEIGHT?: NullableIntFieldUpdateOperationsInput | number | null
    WEIGHT_SHIPPING?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_W?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_H?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_D?: NullableIntFieldUpdateOperationsInput | number | null
    FOOTPRINT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILTYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_HEATER?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT_CHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_MAX_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    DIAMETER?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_VANE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_FLOW_RATE?: NullableIntFieldUpdateOperationsInput | number | null
    FAN_MOTOR_POWER?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_CURRENT?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_LINE?: NullableStringFieldUpdateOperationsInput | string | null
    REMOTE_CONTROL?: NullableStringFieldUpdateOperationsInput | string | null
    BREAKER?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_DIMENSIONS?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_INSTALLATION?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_M?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S1?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S2?: NullableStringFieldUpdateOperationsInput | string | null
    MCA?: NullableStringFieldUpdateOperationsInput | string | null
    MSC?: NullableStringFieldUpdateOperationsInput | string | null
    RLA?: NullableStringFieldUpdateOperationsInput | string | null
    MIN_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    VOLTAGE?: NullableStringFieldUpdateOperationsInput | string | null
    PHASE?: NullableIntFieldUpdateOperationsInput | number | null
    HZ?: NullableStringFieldUpdateOperationsInput | string | null
    CIRCUIT?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_NOISE_ISC_SPECCreateManyInput = {
    ID: number
    MODEL?: string | null
    TYPE_COOLED?: number | null
    TYPE_REF?: number | null
    TYPE_EVAPORATOR?: number | null
    TYPE_RUNNING?: number | null
    POWER_SUPPLY?: number | null
    GENERATION?: number | null
    NOMINAL_TON?: number | null
    COOLING_CAPACITY?: number | null
    COOLING_CAPACITY_RT?: Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: Decimal | DecimalJsLike | number | string | null
    ESEER?: Decimal | DecimalJsLike | number | string | null
    IPLV?: Decimal | DecimalJsLike | number | string | null
    IPLV100?: Decimal | DecimalJsLike | number | string | null
    IPLV075?: Decimal | DecimalJsLike | number | string | null
    IPLV050?: Decimal | DecimalJsLike | number | string | null
    IPLV025?: Decimal | DecimalJsLike | number | string | null
    SEER?: Decimal | DecimalJsLike | number | string | null
    SCOP?: Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: string | null
    LOCATION?: string | null
    OBSOLETE?: number | null
    SOUND_PRESSURE?: string | null
    SOUND_PRESSURE_HEATING?: string | null
    COOLING_SOUND_POWER?: Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: number | null
    COOLING_HEAD_LOSS?: Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: Decimal | DecimalJsLike | number | string | null
    WEIGHT?: number | null
    WEIGHT_SHIPPING?: number | null
    DIMENSION_W?: number | null
    DIMENSION_H?: number | null
    DIMENSION_D?: number | null
    FOOTPRINT?: Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: string | null
    COMP_OILTYPE?: string | null
    COMP_OILCHARGE?: string | null
    COMP_HEATER?: string | null
    REFRIGERANT?: string | null
    REFRIGERANT_CHARGE?: string | null
    COND_TYPE?: string | null
    COND_MAX_PRESSURE?: string | null
    DIAMETER?: string | null
    FAN_TYPE?: string | null
    FAN_VANE?: string | null
    FAN_FLOW_RATE?: number | null
    FAN_MOTOR_POWER?: number | null
    MAX_CURRENT?: number | null
    POWER_LINE?: string | null
    REMOTE_CONTROL?: string | null
    BREAKER?: string | null
    IMAGE_DIMENSIONS?: string | null
    IMAGE_INSTALLATION?: string | null
    IMAGE_WIRING_M?: string | null
    IMAGE_WIRING_S1?: string | null
    IMAGE_WIRING_S2?: string | null
    MCA?: string | null
    MSC?: string | null
    RLA?: string | null
    MIN_VOLTAGE?: number | null
    MAX_VOLTAGE?: number | null
    VOLTAGE?: string | null
    PHASE?: number | null
    HZ?: string | null
    CIRCUIT?: number | null
  }

  export type T_NOISE_ISC_SPECUpdateManyMutationInput = {
    ID?: IntFieldUpdateOperationsInput | number
    MODEL?: NullableStringFieldUpdateOperationsInput | string | null
    TYPE_COOLED?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_REF?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_EVAPORATOR?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_RUNNING?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_SUPPLY?: NullableIntFieldUpdateOperationsInput | number | null
    GENERATION?: NullableIntFieldUpdateOperationsInput | number | null
    NOMINAL_TON?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ESEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV100?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV075?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV050?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV025?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SCOP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCATION?: NullableStringFieldUpdateOperationsInput | string | null
    OBSOLETE?: NullableIntFieldUpdateOperationsInput | number | null
    SOUND_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    SOUND_PRESSURE_HEATING?: NullableStringFieldUpdateOperationsInput | string | null
    COOLING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    WEIGHT?: NullableIntFieldUpdateOperationsInput | number | null
    WEIGHT_SHIPPING?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_W?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_H?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_D?: NullableIntFieldUpdateOperationsInput | number | null
    FOOTPRINT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILTYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_HEATER?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT_CHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_MAX_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    DIAMETER?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_VANE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_FLOW_RATE?: NullableIntFieldUpdateOperationsInput | number | null
    FAN_MOTOR_POWER?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_CURRENT?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_LINE?: NullableStringFieldUpdateOperationsInput | string | null
    REMOTE_CONTROL?: NullableStringFieldUpdateOperationsInput | string | null
    BREAKER?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_DIMENSIONS?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_INSTALLATION?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_M?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S1?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S2?: NullableStringFieldUpdateOperationsInput | string | null
    MCA?: NullableStringFieldUpdateOperationsInput | string | null
    MSC?: NullableStringFieldUpdateOperationsInput | string | null
    RLA?: NullableStringFieldUpdateOperationsInput | string | null
    MIN_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    VOLTAGE?: NullableStringFieldUpdateOperationsInput | string | null
    PHASE?: NullableIntFieldUpdateOperationsInput | number | null
    HZ?: NullableStringFieldUpdateOperationsInput | string | null
    CIRCUIT?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type T_NOISE_ISC_SPECUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    MODEL?: NullableStringFieldUpdateOperationsInput | string | null
    TYPE_COOLED?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_REF?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_EVAPORATOR?: NullableIntFieldUpdateOperationsInput | number | null
    TYPE_RUNNING?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_SUPPLY?: NullableIntFieldUpdateOperationsInput | number | null
    GENERATION?: NullableIntFieldUpdateOperationsInput | number | null
    NOMINAL_TON?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_CAPACITY_RT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_INPUT_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ESEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV100?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV075?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV050?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IPLV025?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SEER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    SCOP?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    DESCRIPTION?: NullableStringFieldUpdateOperationsInput | string | null
    LOCATION?: NullableStringFieldUpdateOperationsInput | string | null
    OBSOLETE?: NullableIntFieldUpdateOperationsInput | number | null
    SOUND_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    SOUND_PRESSURE_HEATING?: NullableStringFieldUpdateOperationsInput | string | null
    COOLING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_SOUND_POWER?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    EVAPORATOR_EA?: NullableIntFieldUpdateOperationsInput | number | null
    COOLING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_HEAD_LOSS?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COOLING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    HEATING_WATER_FLOW?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    WEIGHT?: NullableIntFieldUpdateOperationsInput | number | null
    WEIGHT_SHIPPING?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_W?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_H?: NullableIntFieldUpdateOperationsInput | number | null
    DIMENSION_D?: NullableIntFieldUpdateOperationsInput | number | null
    FOOTPRINT?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COMP_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILTYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_OILCHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COMP_HEATER?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT?: NullableStringFieldUpdateOperationsInput | string | null
    REFRIGERANT_CHARGE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    COND_MAX_PRESSURE?: NullableStringFieldUpdateOperationsInput | string | null
    DIAMETER?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_VANE?: NullableStringFieldUpdateOperationsInput | string | null
    FAN_FLOW_RATE?: NullableIntFieldUpdateOperationsInput | number | null
    FAN_MOTOR_POWER?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_CURRENT?: NullableIntFieldUpdateOperationsInput | number | null
    POWER_LINE?: NullableStringFieldUpdateOperationsInput | string | null
    REMOTE_CONTROL?: NullableStringFieldUpdateOperationsInput | string | null
    BREAKER?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_DIMENSIONS?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_INSTALLATION?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_M?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S1?: NullableStringFieldUpdateOperationsInput | string | null
    IMAGE_WIRING_S2?: NullableStringFieldUpdateOperationsInput | string | null
    MCA?: NullableStringFieldUpdateOperationsInput | string | null
    MSC?: NullableStringFieldUpdateOperationsInput | string | null
    RLA?: NullableStringFieldUpdateOperationsInput | string | null
    MIN_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    MAX_VOLTAGE?: NullableIntFieldUpdateOperationsInput | number | null
    VOLTAGE?: NullableStringFieldUpdateOperationsInput | string | null
    PHASE?: NullableIntFieldUpdateOperationsInput | number | null
    HZ?: NullableStringFieldUpdateOperationsInput | string | null
    CIRCUIT?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type V_NOISE_MULTIV_ICreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_IUncheckedCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_IUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_IUncheckedUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_ICreateManyInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_IUpdateManyMutationInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_IUncheckedUpdateManyInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACUncheckedCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACUncheckedUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACCreateManyInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACUpdateManyMutationInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_RACUncheckedUpdateManyInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SUncheckedCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SUncheckedUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SCreateManyInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SUpdateManyMutationInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_SUncheckedUpdateManyInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACUncheckedCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACUncheckedUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACCreateManyInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACUpdateManyMutationInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_SCACUncheckedUpdateManyInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5CreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5UncheckedCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5UpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5UncheckedUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5CreateManyInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5UpdateManyMutationInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIV_5UncheckedUpdateManyInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTICreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIUncheckedCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIUncheckedUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTICreateManyInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIUpdateManyMutationInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_MULTIUncheckedUpdateManyInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPUncheckedCreateInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPUncheckedUpdateInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPCreateManyInput = {
    BUYER_MODEL_NAME: string
    T_HEAT_W?: Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPUpdateManyMutationInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_AWHPUncheckedUpdateManyInput = {
    BUYER_MODEL_NAME?: StringFieldUpdateOperationsInput | string
    T_HEAT_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    T_COOL_W?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCCreateInput = {
    MODEL: string
    COOLING_CAPACITY?: number | null
    HEATING_CAPACITY?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCUncheckedCreateInput = {
    MODEL: string
    COOLING_CAPACITY?: number | null
    HEATING_CAPACITY?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCUpdateInput = {
    MODEL?: StringFieldUpdateOperationsInput | string
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCUncheckedUpdateInput = {
    MODEL?: StringFieldUpdateOperationsInput | string
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCCreateManyInput = {
    MODEL: string
    COOLING_CAPACITY?: number | null
    HEATING_CAPACITY?: Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCUpdateManyMutationInput = {
    MODEL?: StringFieldUpdateOperationsInput | string
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type V_NOISE_ISCUncheckedUpdateManyInput = {
    MODEL?: StringFieldUpdateOperationsInput | string
    COOLING_CAPACITY?: NullableIntFieldUpdateOperationsInput | number | null
    HEATING_CAPACITY?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type T_NOISE_ISC_SPECCountOrderByAggregateInput = {
    ID?: SortOrder
    MODEL?: SortOrder
    TYPE_COOLED?: SortOrder
    TYPE_REF?: SortOrder
    TYPE_EVAPORATOR?: SortOrder
    TYPE_RUNNING?: SortOrder
    POWER_SUPPLY?: SortOrder
    GENERATION?: SortOrder
    NOMINAL_TON?: SortOrder
    COOLING_CAPACITY?: SortOrder
    COOLING_CAPACITY_RT?: SortOrder
    HEATING_CAPACITY?: SortOrder
    HEATING_CAPACITY_RT?: SortOrder
    COOLING_INPUT_POWER?: SortOrder
    HEATING_INPUT_POWER?: SortOrder
    ESEER?: SortOrder
    IPLV?: SortOrder
    IPLV100?: SortOrder
    IPLV075?: SortOrder
    IPLV050?: SortOrder
    IPLV025?: SortOrder
    SEER?: SortOrder
    SCOP?: SortOrder
    DESCRIPTION?: SortOrder
    LOCATION?: SortOrder
    OBSOLETE?: SortOrder
    SOUND_PRESSURE?: SortOrder
    SOUND_PRESSURE_HEATING?: SortOrder
    COOLING_SOUND_POWER?: SortOrder
    HEATING_SOUND_POWER?: SortOrder
    EVAPORATOR_EA?: SortOrder
    COOLING_HEAD_LOSS?: SortOrder
    HEATING_HEAD_LOSS?: SortOrder
    COOLING_WATER_FLOW?: SortOrder
    HEATING_WATER_FLOW?: SortOrder
    WEIGHT?: SortOrder
    WEIGHT_SHIPPING?: SortOrder
    DIMENSION_W?: SortOrder
    DIMENSION_H?: SortOrder
    DIMENSION_D?: SortOrder
    FOOTPRINT?: SortOrder
    COMP_TYPE?: SortOrder
    COMP_OILTYPE?: SortOrder
    COMP_OILCHARGE?: SortOrder
    COMP_HEATER?: SortOrder
    REFRIGERANT?: SortOrder
    REFRIGERANT_CHARGE?: SortOrder
    COND_TYPE?: SortOrder
    COND_MAX_PRESSURE?: SortOrder
    DIAMETER?: SortOrder
    FAN_TYPE?: SortOrder
    FAN_VANE?: SortOrder
    FAN_FLOW_RATE?: SortOrder
    FAN_MOTOR_POWER?: SortOrder
    MAX_CURRENT?: SortOrder
    POWER_LINE?: SortOrder
    REMOTE_CONTROL?: SortOrder
    BREAKER?: SortOrder
    IMAGE_DIMENSIONS?: SortOrder
    IMAGE_INSTALLATION?: SortOrder
    IMAGE_WIRING_M?: SortOrder
    IMAGE_WIRING_S1?: SortOrder
    IMAGE_WIRING_S2?: SortOrder
    MCA?: SortOrder
    MSC?: SortOrder
    RLA?: SortOrder
    MIN_VOLTAGE?: SortOrder
    MAX_VOLTAGE?: SortOrder
    VOLTAGE?: SortOrder
    PHASE?: SortOrder
    HZ?: SortOrder
    CIRCUIT?: SortOrder
  }

  export type T_NOISE_ISC_SPECAvgOrderByAggregateInput = {
    ID?: SortOrder
    TYPE_COOLED?: SortOrder
    TYPE_REF?: SortOrder
    TYPE_EVAPORATOR?: SortOrder
    TYPE_RUNNING?: SortOrder
    POWER_SUPPLY?: SortOrder
    GENERATION?: SortOrder
    NOMINAL_TON?: SortOrder
    COOLING_CAPACITY?: SortOrder
    COOLING_CAPACITY_RT?: SortOrder
    HEATING_CAPACITY?: SortOrder
    HEATING_CAPACITY_RT?: SortOrder
    COOLING_INPUT_POWER?: SortOrder
    HEATING_INPUT_POWER?: SortOrder
    ESEER?: SortOrder
    IPLV?: SortOrder
    IPLV100?: SortOrder
    IPLV075?: SortOrder
    IPLV050?: SortOrder
    IPLV025?: SortOrder
    SEER?: SortOrder
    SCOP?: SortOrder
    OBSOLETE?: SortOrder
    COOLING_SOUND_POWER?: SortOrder
    HEATING_SOUND_POWER?: SortOrder
    EVAPORATOR_EA?: SortOrder
    COOLING_HEAD_LOSS?: SortOrder
    HEATING_HEAD_LOSS?: SortOrder
    COOLING_WATER_FLOW?: SortOrder
    HEATING_WATER_FLOW?: SortOrder
    WEIGHT?: SortOrder
    WEIGHT_SHIPPING?: SortOrder
    DIMENSION_W?: SortOrder
    DIMENSION_H?: SortOrder
    DIMENSION_D?: SortOrder
    FOOTPRINT?: SortOrder
    FAN_FLOW_RATE?: SortOrder
    FAN_MOTOR_POWER?: SortOrder
    MAX_CURRENT?: SortOrder
    MIN_VOLTAGE?: SortOrder
    MAX_VOLTAGE?: SortOrder
    PHASE?: SortOrder
    CIRCUIT?: SortOrder
  }

  export type T_NOISE_ISC_SPECMaxOrderByAggregateInput = {
    ID?: SortOrder
    MODEL?: SortOrder
    TYPE_COOLED?: SortOrder
    TYPE_REF?: SortOrder
    TYPE_EVAPORATOR?: SortOrder
    TYPE_RUNNING?: SortOrder
    POWER_SUPPLY?: SortOrder
    GENERATION?: SortOrder
    NOMINAL_TON?: SortOrder
    COOLING_CAPACITY?: SortOrder
    COOLING_CAPACITY_RT?: SortOrder
    HEATING_CAPACITY?: SortOrder
    HEATING_CAPACITY_RT?: SortOrder
    COOLING_INPUT_POWER?: SortOrder
    HEATING_INPUT_POWER?: SortOrder
    ESEER?: SortOrder
    IPLV?: SortOrder
    IPLV100?: SortOrder
    IPLV075?: SortOrder
    IPLV050?: SortOrder
    IPLV025?: SortOrder
    SEER?: SortOrder
    SCOP?: SortOrder
    DESCRIPTION?: SortOrder
    LOCATION?: SortOrder
    OBSOLETE?: SortOrder
    SOUND_PRESSURE?: SortOrder
    SOUND_PRESSURE_HEATING?: SortOrder
    COOLING_SOUND_POWER?: SortOrder
    HEATING_SOUND_POWER?: SortOrder
    EVAPORATOR_EA?: SortOrder
    COOLING_HEAD_LOSS?: SortOrder
    HEATING_HEAD_LOSS?: SortOrder
    COOLING_WATER_FLOW?: SortOrder
    HEATING_WATER_FLOW?: SortOrder
    WEIGHT?: SortOrder
    WEIGHT_SHIPPING?: SortOrder
    DIMENSION_W?: SortOrder
    DIMENSION_H?: SortOrder
    DIMENSION_D?: SortOrder
    FOOTPRINT?: SortOrder
    COMP_TYPE?: SortOrder
    COMP_OILTYPE?: SortOrder
    COMP_OILCHARGE?: SortOrder
    COMP_HEATER?: SortOrder
    REFRIGERANT?: SortOrder
    REFRIGERANT_CHARGE?: SortOrder
    COND_TYPE?: SortOrder
    COND_MAX_PRESSURE?: SortOrder
    DIAMETER?: SortOrder
    FAN_TYPE?: SortOrder
    FAN_VANE?: SortOrder
    FAN_FLOW_RATE?: SortOrder
    FAN_MOTOR_POWER?: SortOrder
    MAX_CURRENT?: SortOrder
    POWER_LINE?: SortOrder
    REMOTE_CONTROL?: SortOrder
    BREAKER?: SortOrder
    IMAGE_DIMENSIONS?: SortOrder
    IMAGE_INSTALLATION?: SortOrder
    IMAGE_WIRING_M?: SortOrder
    IMAGE_WIRING_S1?: SortOrder
    IMAGE_WIRING_S2?: SortOrder
    MCA?: SortOrder
    MSC?: SortOrder
    RLA?: SortOrder
    MIN_VOLTAGE?: SortOrder
    MAX_VOLTAGE?: SortOrder
    VOLTAGE?: SortOrder
    PHASE?: SortOrder
    HZ?: SortOrder
    CIRCUIT?: SortOrder
  }

  export type T_NOISE_ISC_SPECMinOrderByAggregateInput = {
    ID?: SortOrder
    MODEL?: SortOrder
    TYPE_COOLED?: SortOrder
    TYPE_REF?: SortOrder
    TYPE_EVAPORATOR?: SortOrder
    TYPE_RUNNING?: SortOrder
    POWER_SUPPLY?: SortOrder
    GENERATION?: SortOrder
    NOMINAL_TON?: SortOrder
    COOLING_CAPACITY?: SortOrder
    COOLING_CAPACITY_RT?: SortOrder
    HEATING_CAPACITY?: SortOrder
    HEATING_CAPACITY_RT?: SortOrder
    COOLING_INPUT_POWER?: SortOrder
    HEATING_INPUT_POWER?: SortOrder
    ESEER?: SortOrder
    IPLV?: SortOrder
    IPLV100?: SortOrder
    IPLV075?: SortOrder
    IPLV050?: SortOrder
    IPLV025?: SortOrder
    SEER?: SortOrder
    SCOP?: SortOrder
    DESCRIPTION?: SortOrder
    LOCATION?: SortOrder
    OBSOLETE?: SortOrder
    SOUND_PRESSURE?: SortOrder
    SOUND_PRESSURE_HEATING?: SortOrder
    COOLING_SOUND_POWER?: SortOrder
    HEATING_SOUND_POWER?: SortOrder
    EVAPORATOR_EA?: SortOrder
    COOLING_HEAD_LOSS?: SortOrder
    HEATING_HEAD_LOSS?: SortOrder
    COOLING_WATER_FLOW?: SortOrder
    HEATING_WATER_FLOW?: SortOrder
    WEIGHT?: SortOrder
    WEIGHT_SHIPPING?: SortOrder
    DIMENSION_W?: SortOrder
    DIMENSION_H?: SortOrder
    DIMENSION_D?: SortOrder
    FOOTPRINT?: SortOrder
    COMP_TYPE?: SortOrder
    COMP_OILTYPE?: SortOrder
    COMP_OILCHARGE?: SortOrder
    COMP_HEATER?: SortOrder
    REFRIGERANT?: SortOrder
    REFRIGERANT_CHARGE?: SortOrder
    COND_TYPE?: SortOrder
    COND_MAX_PRESSURE?: SortOrder
    DIAMETER?: SortOrder
    FAN_TYPE?: SortOrder
    FAN_VANE?: SortOrder
    FAN_FLOW_RATE?: SortOrder
    FAN_MOTOR_POWER?: SortOrder
    MAX_CURRENT?: SortOrder
    POWER_LINE?: SortOrder
    REMOTE_CONTROL?: SortOrder
    BREAKER?: SortOrder
    IMAGE_DIMENSIONS?: SortOrder
    IMAGE_INSTALLATION?: SortOrder
    IMAGE_WIRING_M?: SortOrder
    IMAGE_WIRING_S1?: SortOrder
    IMAGE_WIRING_S2?: SortOrder
    MCA?: SortOrder
    MSC?: SortOrder
    RLA?: SortOrder
    MIN_VOLTAGE?: SortOrder
    MAX_VOLTAGE?: SortOrder
    VOLTAGE?: SortOrder
    PHASE?: SortOrder
    HZ?: SortOrder
    CIRCUIT?: SortOrder
  }

  export type T_NOISE_ISC_SPECSumOrderByAggregateInput = {
    ID?: SortOrder
    TYPE_COOLED?: SortOrder
    TYPE_REF?: SortOrder
    TYPE_EVAPORATOR?: SortOrder
    TYPE_RUNNING?: SortOrder
    POWER_SUPPLY?: SortOrder
    GENERATION?: SortOrder
    NOMINAL_TON?: SortOrder
    COOLING_CAPACITY?: SortOrder
    COOLING_CAPACITY_RT?: SortOrder
    HEATING_CAPACITY?: SortOrder
    HEATING_CAPACITY_RT?: SortOrder
    COOLING_INPUT_POWER?: SortOrder
    HEATING_INPUT_POWER?: SortOrder
    ESEER?: SortOrder
    IPLV?: SortOrder
    IPLV100?: SortOrder
    IPLV075?: SortOrder
    IPLV050?: SortOrder
    IPLV025?: SortOrder
    SEER?: SortOrder
    SCOP?: SortOrder
    OBSOLETE?: SortOrder
    COOLING_SOUND_POWER?: SortOrder
    HEATING_SOUND_POWER?: SortOrder
    EVAPORATOR_EA?: SortOrder
    COOLING_HEAD_LOSS?: SortOrder
    HEATING_HEAD_LOSS?: SortOrder
    COOLING_WATER_FLOW?: SortOrder
    HEATING_WATER_FLOW?: SortOrder
    WEIGHT?: SortOrder
    WEIGHT_SHIPPING?: SortOrder
    DIMENSION_W?: SortOrder
    DIMENSION_H?: SortOrder
    DIMENSION_D?: SortOrder
    FOOTPRINT?: SortOrder
    FAN_FLOW_RATE?: SortOrder
    FAN_MOTOR_POWER?: SortOrder
    MAX_CURRENT?: SortOrder
    MIN_VOLTAGE?: SortOrder
    MAX_VOLTAGE?: SortOrder
    PHASE?: SortOrder
    CIRCUIT?: SortOrder
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

  export type V_NOISE_MULTIV_ICountOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_IAvgOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_IMaxOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_IMinOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_ISumOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_RACCountOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_RACAvgOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_RACMaxOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_RACMinOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_RACSumOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_SCountOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_SAvgOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_SMaxOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_SMinOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_SSumOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_SCACCountOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_SCACAvgOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_SCACMaxOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_SCACMinOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_SCACSumOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_5CountOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_5AvgOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_5MaxOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_5MinOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIV_5SumOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTICountOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIAvgOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIMaxOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTIMinOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_MULTISumOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_AWHPCountOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_AWHPAvgOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_AWHPMaxOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_AWHPMinOrderByAggregateInput = {
    BUYER_MODEL_NAME?: SortOrder
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_AWHPSumOrderByAggregateInput = {
    T_HEAT_W?: SortOrder
    T_COOL_W?: SortOrder
  }

  export type V_NOISE_ISCCountOrderByAggregateInput = {
    MODEL?: SortOrder
    COOLING_CAPACITY?: SortOrder
    HEATING_CAPACITY?: SortOrder
  }

  export type V_NOISE_ISCAvgOrderByAggregateInput = {
    COOLING_CAPACITY?: SortOrder
    HEATING_CAPACITY?: SortOrder
  }

  export type V_NOISE_ISCMaxOrderByAggregateInput = {
    MODEL?: SortOrder
    COOLING_CAPACITY?: SortOrder
    HEATING_CAPACITY?: SortOrder
  }

  export type V_NOISE_ISCMinOrderByAggregateInput = {
    MODEL?: SortOrder
    COOLING_CAPACITY?: SortOrder
    HEATING_CAPACITY?: SortOrder
  }

  export type V_NOISE_ISCSumOrderByAggregateInput = {
    COOLING_CAPACITY?: SortOrder
    HEATING_CAPACITY?: SortOrder
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
     * @deprecated Use T_NOISE_ISC_SPECDefaultArgs instead
     */
    export type T_NOISE_ISC_SPECArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = T_NOISE_ISC_SPECDefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_MULTIV_IDefaultArgs instead
     */
    export type V_NOISE_MULTIV_IArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_MULTIV_IDefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_RACDefaultArgs instead
     */
    export type V_NOISE_RACArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_RACDefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_MULTIV_SDefaultArgs instead
     */
    export type V_NOISE_MULTIV_SArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_MULTIV_SDefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_SCACDefaultArgs instead
     */
    export type V_NOISE_SCACArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_SCACDefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_MULTIV_5DefaultArgs instead
     */
    export type V_NOISE_MULTIV_5Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_MULTIV_5DefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_MULTIDefaultArgs instead
     */
    export type V_NOISE_MULTIArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_MULTIDefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_AWHPDefaultArgs instead
     */
    export type V_NOISE_AWHPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_AWHPDefaultArgs<ExtArgs>
    /**
     * @deprecated Use V_NOISE_ISCDefaultArgs instead
     */
    export type V_NOISE_ISCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = V_NOISE_ISCDefaultArgs<ExtArgs>

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