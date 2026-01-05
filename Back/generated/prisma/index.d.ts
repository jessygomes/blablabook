
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model UserBook
 * 
 */
export type UserBook = $Result.DefaultSelection<Prisma.$UserBookPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Rate
 * 
 */
export type Rate = $Result.DefaultSelection<Prisma.$RatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserBookStatusEnum: {
  READ: 'READ',
  READING: 'READING',
  NOT_READ: 'NOT_READ'
};

export type UserBookStatusEnum = (typeof UserBookStatusEnum)[keyof typeof UserBookStatusEnum]


export const CommentStatusEnum: {
  ACTIVE: 'ACTIVE',
  REPORTED: 'REPORTED',
  HIDDEN: 'HIDDEN'
};

export type CommentStatusEnum = (typeof CommentStatusEnum)[keyof typeof CommentStatusEnum]

}

export type UserBookStatusEnum = $Enums.UserBookStatusEnum

export const UserBookStatusEnum: typeof $Enums.UserBookStatusEnum

export type CommentStatusEnum = $Enums.CommentStatusEnum

export const CommentStatusEnum: typeof $Enums.CommentStatusEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBook`: Exposes CRUD operations for the **UserBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBooks
    * const userBooks = await prisma.userBook.findMany()
    * ```
    */
  get userBook(): Prisma.UserBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rate`: Exposes CRUD operations for the **Rate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rates
    * const rates = await prisma.rate.findMany()
    * ```
    */
  get rate(): Prisma.RateDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Role: 'Role',
    User: 'User',
    Book: 'Book',
    UserBook: 'UserBook',
    Comment: 'Comment',
    Rate: 'Rate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "book" | "userBook" | "comment" | "rate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      UserBook: {
        payload: Prisma.$UserBookPayload<ExtArgs>
        fields: Prisma.UserBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          findFirst: {
            args: Prisma.UserBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          findMany: {
            args: Prisma.UserBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>[]
          }
          create: {
            args: Prisma.UserBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          createMany: {
            args: Prisma.UserBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>[]
          }
          delete: {
            args: Prisma.UserBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          update: {
            args: Prisma.UserBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          deleteMany: {
            args: Prisma.UserBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>[]
          }
          upsert: {
            args: Prisma.UserBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBookPayload>
          }
          aggregate: {
            args: Prisma.UserBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBook>
          }
          groupBy: {
            args: Prisma.UserBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBookCountArgs<ExtArgs>
            result: $Utils.Optional<UserBookCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Rate: {
        payload: Prisma.$RatePayload<ExtArgs>
        fields: Prisma.RateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          findFirst: {
            args: Prisma.RateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          findMany: {
            args: Prisma.RateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>[]
          }
          create: {
            args: Prisma.RateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          createMany: {
            args: Prisma.RateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>[]
          }
          delete: {
            args: Prisma.RateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          update: {
            args: Prisma.RateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          deleteMany: {
            args: Prisma.RateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>[]
          }
          upsert: {
            args: Prisma.RateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePayload>
          }
          aggregate: {
            args: Prisma.RateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRate>
          }
          groupBy: {
            args: Prisma.RateGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateCountArgs<ExtArgs>
            result: $Utils.Optional<RateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    book?: BookOmit
    userBook?: UserBookOmit
    comment?: CommentOmit
    rate?: RateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userBooks: number
    comments: number
    rates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBooks?: boolean | UserCountOutputTypeCountUserBooksArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    rates?: boolean | UserCountOutputTypeCountRatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    userBooks: number
    comments: number
    rates: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBooks?: boolean | BookCountOutputTypeCountUserBooksArgs
    comments?: boolean | BookCountOutputTypeCountCommentsArgs
    rates?: boolean | BookCountOutputTypeCountRatesArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountUserBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isPrivate: number
    createdAt: number
    updatedAt: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date
    roleId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    userBooks?: boolean | User$userBooksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    rates?: boolean | User$ratesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "isPrivate" | "createdAt" | "updatedAt" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    userBooks?: boolean | User$userBooksArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    rates?: boolean | User$ratesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      userBooks: Prisma.$UserBookPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      rates: Prisma.$RatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userBooks<T extends User$userBooksArgs<ExtArgs> = {}>(args?: Subset<T, User$userBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rates<T extends User$ratesArgs<ExtArgs> = {}>(args?: Subset<T, User$ratesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isPrivate: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly roleId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userBooks
   */
  export type User$userBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    where?: UserBookWhereInput
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    cursor?: UserBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.rates
   */
  export type User$ratesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    where?: RateWhereInput
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    cursor?: RateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    page_count: number | null
    averageRating: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    page_count: number | null
    averageRating: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    page_count: number | null
    author: string | null
    category: string | null
    publishing_date: Date | null
    summary: string | null
    publisher: string | null
    isbn: string | null
    cover: string | null
    averageRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    page_count: number | null
    author: string | null
    category: string | null
    publishing_date: Date | null
    summary: string | null
    publisher: string | null
    isbn: string | null
    cover: string | null
    averageRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    page_count: number
    author: number
    category: number
    publishing_date: number
    summary: number
    publisher: number
    isbn: number
    cover: number
    averageRating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    page_count?: true
    averageRating?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    page_count?: true
    averageRating?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    page_count?: true
    author?: true
    category?: true
    publishing_date?: true
    summary?: true
    publisher?: true
    isbn?: true
    cover?: true
    averageRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    page_count?: true
    author?: true
    category?: true
    publishing_date?: true
    summary?: true
    publisher?: true
    isbn?: true
    cover?: true
    averageRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    page_count?: true
    author?: true
    category?: true
    publishing_date?: true
    summary?: true
    publisher?: true
    isbn?: true
    cover?: true
    averageRating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date
    summary: string | null
    publisher: string | null
    isbn: string | null
    cover: string | null
    averageRating: number | null
    createdAt: Date
    updatedAt: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    page_count?: boolean
    author?: boolean
    category?: boolean
    publishing_date?: boolean
    summary?: boolean
    publisher?: boolean
    isbn?: boolean
    cover?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBooks?: boolean | Book$userBooksArgs<ExtArgs>
    comments?: boolean | Book$commentsArgs<ExtArgs>
    rates?: boolean | Book$ratesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    page_count?: boolean
    author?: boolean
    category?: boolean
    publishing_date?: boolean
    summary?: boolean
    publisher?: boolean
    isbn?: boolean
    cover?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    page_count?: boolean
    author?: boolean
    category?: boolean
    publishing_date?: boolean
    summary?: boolean
    publisher?: boolean
    isbn?: boolean
    cover?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    page_count?: boolean
    author?: boolean
    category?: boolean
    publishing_date?: boolean
    summary?: boolean
    publisher?: boolean
    isbn?: boolean
    cover?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "page_count" | "author" | "category" | "publishing_date" | "summary" | "publisher" | "isbn" | "cover" | "averageRating" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBooks?: boolean | Book$userBooksArgs<ExtArgs>
    comments?: boolean | Book$commentsArgs<ExtArgs>
    rates?: boolean | Book$ratesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      userBooks: Prisma.$UserBookPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      rates: Prisma.$RatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      page_count: number
      author: string
      category: string
      publishing_date: Date
      summary: string | null
      publisher: string | null
      isbn: string | null
      cover: string | null
      averageRating: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBooks<T extends Book$userBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$userBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Book$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Book$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rates<T extends Book$ratesArgs<ExtArgs> = {}>(args?: Subset<T, Book$ratesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly page_count: FieldRef<"Book", 'Int'>
    readonly author: FieldRef<"Book", 'String'>
    readonly category: FieldRef<"Book", 'String'>
    readonly publishing_date: FieldRef<"Book", 'DateTime'>
    readonly summary: FieldRef<"Book", 'String'>
    readonly publisher: FieldRef<"Book", 'String'>
    readonly isbn: FieldRef<"Book", 'String'>
    readonly cover: FieldRef<"Book", 'String'>
    readonly averageRating: FieldRef<"Book", 'Float'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.userBooks
   */
  export type Book$userBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    where?: UserBookWhereInput
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    cursor?: UserBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * Book.comments
   */
  export type Book$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Book.rates
   */
  export type Book$ratesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    where?: RateWhereInput
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    cursor?: RateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model UserBook
   */

  export type AggregateUserBook = {
    _count: UserBookCountAggregateOutputType | null
    _avg: UserBookAvgAggregateOutputType | null
    _sum: UserBookSumAggregateOutputType | null
    _min: UserBookMinAggregateOutputType | null
    _max: UserBookMaxAggregateOutputType | null
  }

  export type UserBookAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type UserBookSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type UserBookMinAggregateOutputType = {
    id: number | null
    status: $Enums.UserBookStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    bookId: number | null
  }

  export type UserBookMaxAggregateOutputType = {
    id: number | null
    status: $Enums.UserBookStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    bookId: number | null
  }

  export type UserBookCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    bookId: number
    _all: number
  }


  export type UserBookAvgAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type UserBookSumAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type UserBookMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
  }

  export type UserBookMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
  }

  export type UserBookCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
    _all?: true
  }

  export type UserBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBook to aggregate.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBooks
    **/
    _count?: true | UserBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBookMaxAggregateInputType
  }

  export type GetUserBookAggregateType<T extends UserBookAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBook[P]>
      : GetScalarType<T[P], AggregateUserBook[P]>
  }




  export type UserBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBookWhereInput
    orderBy?: UserBookOrderByWithAggregationInput | UserBookOrderByWithAggregationInput[]
    by: UserBookScalarFieldEnum[] | UserBookScalarFieldEnum
    having?: UserBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBookCountAggregateInputType | true
    _avg?: UserBookAvgAggregateInputType
    _sum?: UserBookSumAggregateInputType
    _min?: UserBookMinAggregateInputType
    _max?: UserBookMaxAggregateInputType
  }

  export type UserBookGroupByOutputType = {
    id: number
    status: $Enums.UserBookStatusEnum
    createdAt: Date
    updatedAt: Date
    userId: number
    bookId: number
    _count: UserBookCountAggregateOutputType | null
    _avg: UserBookAvgAggregateOutputType | null
    _sum: UserBookSumAggregateOutputType | null
    _min: UserBookMinAggregateOutputType | null
    _max: UserBookMaxAggregateOutputType | null
  }

  type GetUserBookGroupByPayload<T extends UserBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBookGroupByOutputType[P]>
            : GetScalarType<T[P], UserBookGroupByOutputType[P]>
        }
      >
    >


  export type UserBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBook"]>

  export type UserBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBook"]>

  export type UserBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBook"]>

  export type UserBookSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
  }

  export type UserBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "updatedAt" | "userId" | "bookId", ExtArgs["result"]["userBook"]>
  export type UserBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type UserBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type UserBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $UserBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBook"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.UserBookStatusEnum
      createdAt: Date
      updatedAt: Date
      userId: number
      bookId: number
    }, ExtArgs["result"]["userBook"]>
    composites: {}
  }

  type UserBookGetPayload<S extends boolean | null | undefined | UserBookDefaultArgs> = $Result.GetResult<Prisma.$UserBookPayload, S>

  type UserBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBookCountAggregateInputType | true
    }

  export interface UserBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBook'], meta: { name: 'UserBook' } }
    /**
     * Find zero or one UserBook that matches the filter.
     * @param {UserBookFindUniqueArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBookFindUniqueArgs>(args: SelectSubset<T, UserBookFindUniqueArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBookFindUniqueOrThrowArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBookFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindFirstArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBookFindFirstArgs>(args?: SelectSubset<T, UserBookFindFirstArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindFirstOrThrowArgs} args - Arguments to find a UserBook
     * @example
     * // Get one UserBook
     * const userBook = await prisma.userBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBookFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBooks
     * const userBooks = await prisma.userBook.findMany()
     * 
     * // Get first 10 UserBooks
     * const userBooks = await prisma.userBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBookWithIdOnly = await prisma.userBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBookFindManyArgs>(args?: SelectSubset<T, UserBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBook.
     * @param {UserBookCreateArgs} args - Arguments to create a UserBook.
     * @example
     * // Create one UserBook
     * const UserBook = await prisma.userBook.create({
     *   data: {
     *     // ... data to create a UserBook
     *   }
     * })
     * 
     */
    create<T extends UserBookCreateArgs>(args: SelectSubset<T, UserBookCreateArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBooks.
     * @param {UserBookCreateManyArgs} args - Arguments to create many UserBooks.
     * @example
     * // Create many UserBooks
     * const userBook = await prisma.userBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBookCreateManyArgs>(args?: SelectSubset<T, UserBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBooks and returns the data saved in the database.
     * @param {UserBookCreateManyAndReturnArgs} args - Arguments to create many UserBooks.
     * @example
     * // Create many UserBooks
     * const userBook = await prisma.userBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBooks and only return the `id`
     * const userBookWithIdOnly = await prisma.userBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBookCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBook.
     * @param {UserBookDeleteArgs} args - Arguments to delete one UserBook.
     * @example
     * // Delete one UserBook
     * const UserBook = await prisma.userBook.delete({
     *   where: {
     *     // ... filter to delete one UserBook
     *   }
     * })
     * 
     */
    delete<T extends UserBookDeleteArgs>(args: SelectSubset<T, UserBookDeleteArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBook.
     * @param {UserBookUpdateArgs} args - Arguments to update one UserBook.
     * @example
     * // Update one UserBook
     * const userBook = await prisma.userBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBookUpdateArgs>(args: SelectSubset<T, UserBookUpdateArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBooks.
     * @param {UserBookDeleteManyArgs} args - Arguments to filter UserBooks to delete.
     * @example
     * // Delete a few UserBooks
     * const { count } = await prisma.userBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBookDeleteManyArgs>(args?: SelectSubset<T, UserBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBooks
     * const userBook = await prisma.userBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBookUpdateManyArgs>(args: SelectSubset<T, UserBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBooks and returns the data updated in the database.
     * @param {UserBookUpdateManyAndReturnArgs} args - Arguments to update many UserBooks.
     * @example
     * // Update many UserBooks
     * const userBook = await prisma.userBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBooks and only return the `id`
     * const userBookWithIdOnly = await prisma.userBook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBookUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBook.
     * @param {UserBookUpsertArgs} args - Arguments to update or create a UserBook.
     * @example
     * // Update or create a UserBook
     * const userBook = await prisma.userBook.upsert({
     *   create: {
     *     // ... data to create a UserBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBook we want to update
     *   }
     * })
     */
    upsert<T extends UserBookUpsertArgs>(args: SelectSubset<T, UserBookUpsertArgs<ExtArgs>>): Prisma__UserBookClient<$Result.GetResult<Prisma.$UserBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookCountArgs} args - Arguments to filter UserBooks to count.
     * @example
     * // Count the number of UserBooks
     * const count = await prisma.userBook.count({
     *   where: {
     *     // ... the filter for the UserBooks we want to count
     *   }
     * })
    **/
    count<T extends UserBookCountArgs>(
      args?: Subset<T, UserBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBookAggregateArgs>(args: Subset<T, UserBookAggregateArgs>): Prisma.PrismaPromise<GetUserBookAggregateType<T>>

    /**
     * Group by UserBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBookGroupByArgs} args - Group by arguments.
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
      T extends UserBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBookGroupByArgs['orderBy'] }
        : { orderBy?: UserBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBook model
   */
  readonly fields: UserBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBook model
   */
  interface UserBookFieldRefs {
    readonly id: FieldRef<"UserBook", 'Int'>
    readonly status: FieldRef<"UserBook", 'UserBookStatusEnum'>
    readonly createdAt: FieldRef<"UserBook", 'DateTime'>
    readonly updatedAt: FieldRef<"UserBook", 'DateTime'>
    readonly userId: FieldRef<"UserBook", 'Int'>
    readonly bookId: FieldRef<"UserBook", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserBook findUnique
   */
  export type UserBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook findUniqueOrThrow
   */
  export type UserBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook findFirst
   */
  export type UserBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBooks.
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBooks.
     */
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * UserBook findFirstOrThrow
   */
  export type UserBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBook to fetch.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBooks.
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBooks.
     */
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * UserBook findMany
   */
  export type UserBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter, which UserBooks to fetch.
     */
    where?: UserBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBooks to fetch.
     */
    orderBy?: UserBookOrderByWithRelationInput | UserBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBooks.
     */
    cursor?: UserBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBooks.
     */
    skip?: number
    distinct?: UserBookScalarFieldEnum | UserBookScalarFieldEnum[]
  }

  /**
   * UserBook create
   */
  export type UserBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBook.
     */
    data: XOR<UserBookCreateInput, UserBookUncheckedCreateInput>
  }

  /**
   * UserBook createMany
   */
  export type UserBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBooks.
     */
    data: UserBookCreateManyInput | UserBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBook createManyAndReturn
   */
  export type UserBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * The data used to create many UserBooks.
     */
    data: UserBookCreateManyInput | UserBookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBook update
   */
  export type UserBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBook.
     */
    data: XOR<UserBookUpdateInput, UserBookUncheckedUpdateInput>
    /**
     * Choose, which UserBook to update.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook updateMany
   */
  export type UserBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBooks.
     */
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyInput>
    /**
     * Filter which UserBooks to update
     */
    where?: UserBookWhereInput
    /**
     * Limit how many UserBooks to update.
     */
    limit?: number
  }

  /**
   * UserBook updateManyAndReturn
   */
  export type UserBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * The data used to update UserBooks.
     */
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyInput>
    /**
     * Filter which UserBooks to update
     */
    where?: UserBookWhereInput
    /**
     * Limit how many UserBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBook upsert
   */
  export type UserBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBook to update in case it exists.
     */
    where: UserBookWhereUniqueInput
    /**
     * In case the UserBook found by the `where` argument doesn't exist, create a new UserBook with this data.
     */
    create: XOR<UserBookCreateInput, UserBookUncheckedCreateInput>
    /**
     * In case the UserBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBookUpdateInput, UserBookUncheckedUpdateInput>
  }

  /**
   * UserBook delete
   */
  export type UserBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
    /**
     * Filter which UserBook to delete.
     */
    where: UserBookWhereUniqueInput
  }

  /**
   * UserBook deleteMany
   */
  export type UserBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBooks to delete
     */
    where?: UserBookWhereInput
    /**
     * Limit how many UserBooks to delete.
     */
    limit?: number
  }

  /**
   * UserBook without action
   */
  export type UserBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBook
     */
    select?: UserBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBook
     */
    omit?: UserBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBookInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    reportCounter: number | null
    userId: number | null
    bookId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    reportCounter: number | null
    userId: number | null
    bookId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    title: string | null
    reportCounter: number | null
    content: string | null
    date: Date | null
    status: $Enums.CommentStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    bookId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    reportCounter: number | null
    content: string | null
    date: Date | null
    status: $Enums.CommentStatusEnum | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    bookId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    title: number
    reportCounter: number
    content: number
    date: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    bookId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    reportCounter?: true
    userId?: true
    bookId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    reportCounter?: true
    userId?: true
    bookId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    title?: true
    reportCounter?: true
    content?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    title?: true
    reportCounter?: true
    content?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    title?: true
    reportCounter?: true
    content?: true
    date?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    bookId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    title: string
    reportCounter: number
    content: string
    date: Date
    status: $Enums.CommentStatusEnum
    createdAt: Date
    updatedAt: Date
    userId: number
    bookId: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reportCounter?: boolean
    content?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reportCounter?: boolean
    content?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    reportCounter?: boolean
    content?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    title?: boolean
    reportCounter?: boolean
    content?: boolean
    date?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    bookId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "reportCounter" | "content" | "date" | "status" | "createdAt" | "updatedAt" | "userId" | "bookId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      reportCounter: number
      content: string
      date: Date
      status: $Enums.CommentStatusEnum
      createdAt: Date
      updatedAt: Date
      userId: number
      bookId: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly title: FieldRef<"Comment", 'String'>
    readonly reportCounter: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly date: FieldRef<"Comment", 'DateTime'>
    readonly status: FieldRef<"Comment", 'CommentStatusEnum'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly bookId: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Rate
   */

  export type AggregateRate = {
    _count: RateCountAggregateOutputType | null
    _avg: RateAvgAggregateOutputType | null
    _sum: RateSumAggregateOutputType | null
    _min: RateMinAggregateOutputType | null
    _max: RateMaxAggregateOutputType | null
  }

  export type RateAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    bookId: number | null
  }

  export type RateSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    bookId: number | null
  }

  export type RateMinAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    bookId: number | null
  }

  export type RateMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    bookId: number | null
  }

  export type RateCountAggregateOutputType = {
    id: number
    rating: number
    userId: number
    bookId: number
    _all: number
  }


  export type RateAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    bookId?: true
  }

  export type RateSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    bookId?: true
  }

  export type RateMinAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    bookId?: true
  }

  export type RateMaxAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    bookId?: true
  }

  export type RateCountAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    bookId?: true
    _all?: true
  }

  export type RateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rate to aggregate.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rates
    **/
    _count?: true | RateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateMaxAggregateInputType
  }

  export type GetRateAggregateType<T extends RateAggregateArgs> = {
        [P in keyof T & keyof AggregateRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRate[P]>
      : GetScalarType<T[P], AggregateRate[P]>
  }




  export type RateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateWhereInput
    orderBy?: RateOrderByWithAggregationInput | RateOrderByWithAggregationInput[]
    by: RateScalarFieldEnum[] | RateScalarFieldEnum
    having?: RateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateCountAggregateInputType | true
    _avg?: RateAvgAggregateInputType
    _sum?: RateSumAggregateInputType
    _min?: RateMinAggregateInputType
    _max?: RateMaxAggregateInputType
  }

  export type RateGroupByOutputType = {
    id: number
    rating: number
    userId: number
    bookId: number
    _count: RateCountAggregateOutputType | null
    _avg: RateAvgAggregateOutputType | null
    _sum: RateSumAggregateOutputType | null
    _min: RateMinAggregateOutputType | null
    _max: RateMaxAggregateOutputType | null
  }

  type GetRateGroupByPayload<T extends RateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateGroupByOutputType[P]>
            : GetScalarType<T[P], RateGroupByOutputType[P]>
        }
      >
    >


  export type RateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rate"]>

  export type RateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rate"]>

  export type RateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    userId?: boolean
    bookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rate"]>

  export type RateSelectScalar = {
    id?: boolean
    rating?: boolean
    userId?: boolean
    bookId?: boolean
  }

  export type RateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "userId" | "bookId", ExtArgs["result"]["rate"]>
  export type RateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type RateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type RateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $RatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      userId: number
      bookId: number
    }, ExtArgs["result"]["rate"]>
    composites: {}
  }

  type RateGetPayload<S extends boolean | null | undefined | RateDefaultArgs> = $Result.GetResult<Prisma.$RatePayload, S>

  type RateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateCountAggregateInputType | true
    }

  export interface RateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rate'], meta: { name: 'Rate' } }
    /**
     * Find zero or one Rate that matches the filter.
     * @param {RateFindUniqueArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateFindUniqueArgs>(args: SelectSubset<T, RateFindUniqueArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateFindUniqueOrThrowArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateFindUniqueOrThrowArgs>(args: SelectSubset<T, RateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindFirstArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateFindFirstArgs>(args?: SelectSubset<T, RateFindFirstArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindFirstOrThrowArgs} args - Arguments to find a Rate
     * @example
     * // Get one Rate
     * const rate = await prisma.rate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateFindFirstOrThrowArgs>(args?: SelectSubset<T, RateFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rates
     * const rates = await prisma.rate.findMany()
     * 
     * // Get first 10 Rates
     * const rates = await prisma.rate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateWithIdOnly = await prisma.rate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RateFindManyArgs>(args?: SelectSubset<T, RateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rate.
     * @param {RateCreateArgs} args - Arguments to create a Rate.
     * @example
     * // Create one Rate
     * const Rate = await prisma.rate.create({
     *   data: {
     *     // ... data to create a Rate
     *   }
     * })
     * 
     */
    create<T extends RateCreateArgs>(args: SelectSubset<T, RateCreateArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rates.
     * @param {RateCreateManyArgs} args - Arguments to create many Rates.
     * @example
     * // Create many Rates
     * const rate = await prisma.rate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateCreateManyArgs>(args?: SelectSubset<T, RateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rates and returns the data saved in the database.
     * @param {RateCreateManyAndReturnArgs} args - Arguments to create many Rates.
     * @example
     * // Create many Rates
     * const rate = await prisma.rate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rates and only return the `id`
     * const rateWithIdOnly = await prisma.rate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateCreateManyAndReturnArgs>(args?: SelectSubset<T, RateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rate.
     * @param {RateDeleteArgs} args - Arguments to delete one Rate.
     * @example
     * // Delete one Rate
     * const Rate = await prisma.rate.delete({
     *   where: {
     *     // ... filter to delete one Rate
     *   }
     * })
     * 
     */
    delete<T extends RateDeleteArgs>(args: SelectSubset<T, RateDeleteArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rate.
     * @param {RateUpdateArgs} args - Arguments to update one Rate.
     * @example
     * // Update one Rate
     * const rate = await prisma.rate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateUpdateArgs>(args: SelectSubset<T, RateUpdateArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rates.
     * @param {RateDeleteManyArgs} args - Arguments to filter Rates to delete.
     * @example
     * // Delete a few Rates
     * const { count } = await prisma.rate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateDeleteManyArgs>(args?: SelectSubset<T, RateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rates
     * const rate = await prisma.rate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateUpdateManyArgs>(args: SelectSubset<T, RateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rates and returns the data updated in the database.
     * @param {RateUpdateManyAndReturnArgs} args - Arguments to update many Rates.
     * @example
     * // Update many Rates
     * const rate = await prisma.rate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rates and only return the `id`
     * const rateWithIdOnly = await prisma.rate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateUpdateManyAndReturnArgs>(args: SelectSubset<T, RateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rate.
     * @param {RateUpsertArgs} args - Arguments to update or create a Rate.
     * @example
     * // Update or create a Rate
     * const rate = await prisma.rate.upsert({
     *   create: {
     *     // ... data to create a Rate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rate we want to update
     *   }
     * })
     */
    upsert<T extends RateUpsertArgs>(args: SelectSubset<T, RateUpsertArgs<ExtArgs>>): Prisma__RateClient<$Result.GetResult<Prisma.$RatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateCountArgs} args - Arguments to filter Rates to count.
     * @example
     * // Count the number of Rates
     * const count = await prisma.rate.count({
     *   where: {
     *     // ... the filter for the Rates we want to count
     *   }
     * })
    **/
    count<T extends RateCountArgs>(
      args?: Subset<T, RateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RateAggregateArgs>(args: Subset<T, RateAggregateArgs>): Prisma.PrismaPromise<GetRateAggregateType<T>>

    /**
     * Group by Rate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateGroupByArgs} args - Group by arguments.
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
      T extends RateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateGroupByArgs['orderBy'] }
        : { orderBy?: RateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rate model
   */
  readonly fields: RateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rate model
   */
  interface RateFieldRefs {
    readonly id: FieldRef<"Rate", 'Int'>
    readonly rating: FieldRef<"Rate", 'Float'>
    readonly userId: FieldRef<"Rate", 'Int'>
    readonly bookId: FieldRef<"Rate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rate findUnique
   */
  export type RateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate findUniqueOrThrow
   */
  export type RateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate findFirst
   */
  export type RateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rates.
     */
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * Rate findFirstOrThrow
   */
  export type RateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rate to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rates.
     */
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * Rate findMany
   */
  export type RateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter, which Rates to fetch.
     */
    where?: RateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rates to fetch.
     */
    orderBy?: RateOrderByWithRelationInput | RateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rates.
     */
    cursor?: RateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rates.
     */
    skip?: number
    distinct?: RateScalarFieldEnum | RateScalarFieldEnum[]
  }

  /**
   * Rate create
   */
  export type RateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * The data needed to create a Rate.
     */
    data: XOR<RateCreateInput, RateUncheckedCreateInput>
  }

  /**
   * Rate createMany
   */
  export type RateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rates.
     */
    data: RateCreateManyInput | RateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rate createManyAndReturn
   */
  export type RateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * The data used to create many Rates.
     */
    data: RateCreateManyInput | RateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rate update
   */
  export type RateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * The data needed to update a Rate.
     */
    data: XOR<RateUpdateInput, RateUncheckedUpdateInput>
    /**
     * Choose, which Rate to update.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate updateMany
   */
  export type RateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rates.
     */
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyInput>
    /**
     * Filter which Rates to update
     */
    where?: RateWhereInput
    /**
     * Limit how many Rates to update.
     */
    limit?: number
  }

  /**
   * Rate updateManyAndReturn
   */
  export type RateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * The data used to update Rates.
     */
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyInput>
    /**
     * Filter which Rates to update
     */
    where?: RateWhereInput
    /**
     * Limit how many Rates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rate upsert
   */
  export type RateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * The filter to search for the Rate to update in case it exists.
     */
    where: RateWhereUniqueInput
    /**
     * In case the Rate found by the `where` argument doesn't exist, create a new Rate with this data.
     */
    create: XOR<RateCreateInput, RateUncheckedCreateInput>
    /**
     * In case the Rate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateUpdateInput, RateUncheckedUpdateInput>
  }

  /**
   * Rate delete
   */
  export type RateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
    /**
     * Filter which Rate to delete.
     */
    where: RateWhereUniqueInput
  }

  /**
   * Rate deleteMany
   */
  export type RateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rates to delete
     */
    where?: RateWhereInput
    /**
     * Limit how many Rates to delete.
     */
    limit?: number
  }

  /**
   * Rate without action
   */
  export type RateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate
     */
    select?: RateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate
     */
    omit?: RateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RateInclude<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    page_count: 'page_count',
    author: 'author',
    category: 'category',
    publishing_date: 'publishing_date',
    summary: 'summary',
    publisher: 'publisher',
    isbn: 'isbn',
    cover: 'cover',
    averageRating: 'averageRating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const UserBookScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    bookId: 'bookId'
  };

  export type UserBookScalarFieldEnum = (typeof UserBookScalarFieldEnum)[keyof typeof UserBookScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    reportCounter: 'reportCounter',
    content: 'content',
    date: 'date',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    bookId: 'bookId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const RateScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    userId: 'userId',
    bookId: 'bookId'
  };

  export type RateScalarFieldEnum = (typeof RateScalarFieldEnum)[keyof typeof RateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'UserBookStatusEnum'
   */
  export type EnumUserBookStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserBookStatusEnum'>
    


  /**
   * Reference to a field of type 'UserBookStatusEnum[]'
   */
  export type ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserBookStatusEnum[]'>
    


  /**
   * Reference to a field of type 'CommentStatusEnum'
   */
  export type EnumCommentStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentStatusEnum'>
    


  /**
   * Reference to a field of type 'CommentStatusEnum[]'
   */
  export type ListEnumCommentStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentStatusEnum[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isPrivate?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    userBooks?: UserBookListRelationFilter
    comments?: CommentListRelationFilter
    rates?: RateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    userBooks?: UserBookOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    rates?: RateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isPrivate?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    userBooks?: UserBookListRelationFilter
    comments?: CommentListRelationFilter
    rates?: RateListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isPrivate?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    page_count?: IntFilter<"Book"> | number
    author?: StringFilter<"Book"> | string
    category?: StringFilter<"Book"> | string
    publishing_date?: DateTimeFilter<"Book"> | Date | string
    summary?: StringNullableFilter<"Book"> | string | null
    publisher?: StringNullableFilter<"Book"> | string | null
    isbn?: StringNullableFilter<"Book"> | string | null
    cover?: StringNullableFilter<"Book"> | string | null
    averageRating?: FloatNullableFilter<"Book"> | number | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userBooks?: UserBookListRelationFilter
    comments?: CommentListRelationFilter
    rates?: RateListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    page_count?: SortOrder
    author?: SortOrder
    category?: SortOrder
    publishing_date?: SortOrder
    summary?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    averageRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userBooks?: UserBookOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    rates?: RateOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isbn?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    page_count?: IntFilter<"Book"> | number
    author?: StringFilter<"Book"> | string
    category?: StringFilter<"Book"> | string
    publishing_date?: DateTimeFilter<"Book"> | Date | string
    summary?: StringNullableFilter<"Book"> | string | null
    publisher?: StringNullableFilter<"Book"> | string | null
    cover?: StringNullableFilter<"Book"> | string | null
    averageRating?: FloatNullableFilter<"Book"> | number | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    userBooks?: UserBookListRelationFilter
    comments?: CommentListRelationFilter
    rates?: RateListRelationFilter
  }, "id" | "isbn">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    page_count?: SortOrder
    author?: SortOrder
    category?: SortOrder
    publishing_date?: SortOrder
    summary?: SortOrderInput | SortOrder
    publisher?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    averageRating?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    page_count?: IntWithAggregatesFilter<"Book"> | number
    author?: StringWithAggregatesFilter<"Book"> | string
    category?: StringWithAggregatesFilter<"Book"> | string
    publishing_date?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    summary?: StringNullableWithAggregatesFilter<"Book"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"Book"> | string | null
    isbn?: StringNullableWithAggregatesFilter<"Book"> | string | null
    cover?: StringNullableWithAggregatesFilter<"Book"> | string | null
    averageRating?: FloatNullableWithAggregatesFilter<"Book"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type UserBookWhereInput = {
    AND?: UserBookWhereInput | UserBookWhereInput[]
    OR?: UserBookWhereInput[]
    NOT?: UserBookWhereInput | UserBookWhereInput[]
    id?: IntFilter<"UserBook"> | number
    status?: EnumUserBookStatusEnumFilter<"UserBook"> | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeFilter<"UserBook"> | Date | string
    userId?: IntFilter<"UserBook"> | number
    bookId?: IntFilter<"UserBook"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type UserBookOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type UserBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_bookId?: UserBookUserIdBookIdCompoundUniqueInput
    AND?: UserBookWhereInput | UserBookWhereInput[]
    OR?: UserBookWhereInput[]
    NOT?: UserBookWhereInput | UserBookWhereInput[]
    status?: EnumUserBookStatusEnumFilter<"UserBook"> | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeFilter<"UserBook"> | Date | string
    userId?: IntFilter<"UserBook"> | number
    bookId?: IntFilter<"UserBook"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "userId_bookId">

  export type UserBookOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    _count?: UserBookCountOrderByAggregateInput
    _avg?: UserBookAvgOrderByAggregateInput
    _max?: UserBookMaxOrderByAggregateInput
    _min?: UserBookMinOrderByAggregateInput
    _sum?: UserBookSumOrderByAggregateInput
  }

  export type UserBookScalarWhereWithAggregatesInput = {
    AND?: UserBookScalarWhereWithAggregatesInput | UserBookScalarWhereWithAggregatesInput[]
    OR?: UserBookScalarWhereWithAggregatesInput[]
    NOT?: UserBookScalarWhereWithAggregatesInput | UserBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBook"> | number
    status?: EnumUserBookStatusEnumWithAggregatesFilter<"UserBook"> | $Enums.UserBookStatusEnum
    createdAt?: DateTimeWithAggregatesFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserBook"> | Date | string
    userId?: IntWithAggregatesFilter<"UserBook"> | number
    bookId?: IntWithAggregatesFilter<"UserBook"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    title?: StringFilter<"Comment"> | string
    reportCounter?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    date?: DateTimeFilter<"Comment"> | Date | string
    status?: EnumCommentStatusEnumFilter<"Comment"> | $Enums.CommentStatusEnum
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: IntFilter<"Comment"> | number
    bookId?: IntFilter<"Comment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    reportCounter?: SortOrder
    content?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    title?: StringFilter<"Comment"> | string
    reportCounter?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    date?: DateTimeFilter<"Comment"> | Date | string
    status?: EnumCommentStatusEnumFilter<"Comment"> | $Enums.CommentStatusEnum
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: IntFilter<"Comment"> | number
    bookId?: IntFilter<"Comment"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    reportCounter?: SortOrder
    content?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    title?: StringWithAggregatesFilter<"Comment"> | string
    reportCounter?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    date?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    status?: EnumCommentStatusEnumWithAggregatesFilter<"Comment"> | $Enums.CommentStatusEnum
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: IntWithAggregatesFilter<"Comment"> | number
    bookId?: IntWithAggregatesFilter<"Comment"> | number
  }

  export type RateWhereInput = {
    AND?: RateWhereInput | RateWhereInput[]
    OR?: RateWhereInput[]
    NOT?: RateWhereInput | RateWhereInput[]
    id?: IntFilter<"Rate"> | number
    rating?: FloatFilter<"Rate"> | number
    userId?: IntFilter<"Rate"> | number
    bookId?: IntFilter<"Rate"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type RateOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type RateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_bookId?: RateUserIdBookIdCompoundUniqueInput
    AND?: RateWhereInput | RateWhereInput[]
    OR?: RateWhereInput[]
    NOT?: RateWhereInput | RateWhereInput[]
    rating?: FloatFilter<"Rate"> | number
    userId?: IntFilter<"Rate"> | number
    bookId?: IntFilter<"Rate"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "userId_bookId">

  export type RateOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    _count?: RateCountOrderByAggregateInput
    _avg?: RateAvgOrderByAggregateInput
    _max?: RateMaxOrderByAggregateInput
    _min?: RateMinOrderByAggregateInput
    _sum?: RateSumOrderByAggregateInput
  }

  export type RateScalarWhereWithAggregatesInput = {
    AND?: RateScalarWhereWithAggregatesInput | RateScalarWhereWithAggregatesInput[]
    OR?: RateScalarWhereWithAggregatesInput[]
    NOT?: RateScalarWhereWithAggregatesInput | RateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rate"> | number
    rating?: FloatWithAggregatesFilter<"Rate"> | number
    userId?: IntWithAggregatesFilter<"Rate"> | number
    bookId?: IntWithAggregatesFilter<"Rate"> | number
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    userBooks?: UserBookCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    rates?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    userBooks?: UserBookUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    rates?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userBooks?: UserBookUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    rates?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    userBooks?: UserBookUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    rates?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type BookCreateInput = {
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    rates?: RateCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    rates?: RateUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    rates?: RateUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    rates?: RateUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookCreateInput = {
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBooksInput
    book: BookCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateInput = {
    id?: number
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    bookId: number
  }

  export type UserBookUpdateInput = {
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBooksNestedInput
    book?: BookUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBookCreateManyInput = {
    id?: number
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    bookId: number
  }

  export type UserBookUpdateManyMutationInput = {
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    book: BookCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    bookId: number
  }

  export type CommentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    book?: BookUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyInput = {
    id?: number
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    bookId: number
  }

  export type CommentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RateCreateInput = {
    rating: number
    user: UserCreateNestedOneWithoutRatesInput
    book: BookCreateNestedOneWithoutRatesInput
  }

  export type RateUncheckedCreateInput = {
    id?: number
    rating: number
    userId: number
    bookId: number
  }

  export type RateUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRatesNestedInput
    book?: BookUpdateOneRequiredWithoutRatesNestedInput
  }

  export type RateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RateCreateManyInput = {
    id?: number
    rating: number
    userId: number
    bookId: number
  }

  export type RateUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type RateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserBookListRelationFilter = {
    every?: UserBookWhereInput
    some?: UserBookWhereInput
    none?: UserBookWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type RateListRelationFilter = {
    every?: RateWhereInput
    some?: RateWhereInput
    none?: RateWhereInput
  }

  export type UserBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    page_count?: SortOrder
    author?: SortOrder
    category?: SortOrder
    publishing_date?: SortOrder
    summary?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrder
    cover?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    page_count?: SortOrder
    averageRating?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    page_count?: SortOrder
    author?: SortOrder
    category?: SortOrder
    publishing_date?: SortOrder
    summary?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrder
    cover?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    page_count?: SortOrder
    author?: SortOrder
    category?: SortOrder
    publishing_date?: SortOrder
    summary?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrder
    cover?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    page_count?: SortOrder
    averageRating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumUserBookStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBookStatusEnum | EnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBookStatusEnumFilter<$PrismaModel> | $Enums.UserBookStatusEnum
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type UserBookUserIdBookIdCompoundUniqueInput = {
    userId: number
    bookId: number
  }

  export type UserBookCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type UserBookSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type EnumUserBookStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBookStatusEnum | EnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBookStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserBookStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserBookStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumUserBookStatusEnumFilter<$PrismaModel>
  }

  export type EnumCommentStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatusEnum | EnumCommentStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusEnumFilter<$PrismaModel> | $Enums.CommentStatusEnum
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reportCounter?: SortOrder
    content?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    reportCounter?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reportCounter?: SortOrder
    content?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    reportCounter?: SortOrder
    content?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    reportCounter?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type EnumCommentStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatusEnum | EnumCommentStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusEnumFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RateUserIdBookIdCompoundUniqueInput = {
    userId: number
    bookId: number
  }

  export type RateCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type RateAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type RateMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type RateMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type RateSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserBookCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RateCreateNestedManyWithoutUserInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
  }

  export type UserBookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserBookUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutUserInput | UserBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutUserInput | UserBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutUserInput | UserBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RateUpdateManyWithoutUserNestedInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    upsert?: RateUpsertWithWhereUniqueWithoutUserInput | RateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    set?: RateWhereUniqueInput | RateWhereUniqueInput[]
    disconnect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    delete?: RateWhereUniqueInput | RateWhereUniqueInput[]
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    update?: RateUpdateWithWhereUniqueWithoutUserInput | RateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RateUpdateManyWithWhereWithoutUserInput | RateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RateScalarWhereInput | RateScalarWhereInput[]
  }

  export type UserBookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput> | UserBookCreateWithoutUserInput[] | UserBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutUserInput | UserBookCreateOrConnectWithoutUserInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutUserInput | UserBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBookCreateManyUserInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutUserInput | UserBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutUserInput | UserBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput> | RateCreateWithoutUserInput[] | RateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RateCreateOrConnectWithoutUserInput | RateCreateOrConnectWithoutUserInput[]
    upsert?: RateUpsertWithWhereUniqueWithoutUserInput | RateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RateCreateManyUserInputEnvelope
    set?: RateWhereUniqueInput | RateWhereUniqueInput[]
    disconnect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    delete?: RateWhereUniqueInput | RateWhereUniqueInput[]
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    update?: RateUpdateWithWhereUniqueWithoutUserInput | RateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RateUpdateManyWithWhereWithoutUserInput | RateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RateScalarWhereInput | RateScalarWhereInput[]
  }

  export type UserBookCreateNestedManyWithoutBookInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutBookInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RateCreateNestedManyWithoutBookInput = {
    create?: XOR<RateCreateWithoutBookInput, RateUncheckedCreateWithoutBookInput> | RateCreateWithoutBookInput[] | RateUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RateCreateOrConnectWithoutBookInput | RateCreateOrConnectWithoutBookInput[]
    createMany?: RateCreateManyBookInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
  }

  export type UserBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RateUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<RateCreateWithoutBookInput, RateUncheckedCreateWithoutBookInput> | RateCreateWithoutBookInput[] | RateUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RateCreateOrConnectWithoutBookInput | RateCreateOrConnectWithoutBookInput[]
    createMany?: RateCreateManyBookInputEnvelope
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutBookInput | UserBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutBookInput | UserBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutBookInput | UserBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutBookNestedInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBookInput | CommentUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBookInput | CommentUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBookInput | CommentUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RateUpdateManyWithoutBookNestedInput = {
    create?: XOR<RateCreateWithoutBookInput, RateUncheckedCreateWithoutBookInput> | RateCreateWithoutBookInput[] | RateUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RateCreateOrConnectWithoutBookInput | RateCreateOrConnectWithoutBookInput[]
    upsert?: RateUpsertWithWhereUniqueWithoutBookInput | RateUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: RateCreateManyBookInputEnvelope
    set?: RateWhereUniqueInput | RateWhereUniqueInput[]
    disconnect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    delete?: RateWhereUniqueInput | RateWhereUniqueInput[]
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    update?: RateUpdateWithWhereUniqueWithoutBookInput | RateUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: RateUpdateManyWithWhereWithoutBookInput | RateUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: RateScalarWhereInput | RateScalarWhereInput[]
  }

  export type UserBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput> | UserBookCreateWithoutBookInput[] | UserBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: UserBookCreateOrConnectWithoutBookInput | UserBookCreateOrConnectWithoutBookInput[]
    upsert?: UserBookUpsertWithWhereUniqueWithoutBookInput | UserBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: UserBookCreateManyBookInputEnvelope
    set?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    disconnect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    delete?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    connect?: UserBookWhereUniqueInput | UserBookWhereUniqueInput[]
    update?: UserBookUpdateWithWhereUniqueWithoutBookInput | UserBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: UserBookUpdateManyWithWhereWithoutBookInput | UserBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBookInput | CommentUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBookInput | CommentUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBookInput | CommentUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RateUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<RateCreateWithoutBookInput, RateUncheckedCreateWithoutBookInput> | RateCreateWithoutBookInput[] | RateUncheckedCreateWithoutBookInput[]
    connectOrCreate?: RateCreateOrConnectWithoutBookInput | RateCreateOrConnectWithoutBookInput[]
    upsert?: RateUpsertWithWhereUniqueWithoutBookInput | RateUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: RateCreateManyBookInputEnvelope
    set?: RateWhereUniqueInput | RateWhereUniqueInput[]
    disconnect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    delete?: RateWhereUniqueInput | RateWhereUniqueInput[]
    connect?: RateWhereUniqueInput | RateWhereUniqueInput[]
    update?: RateUpdateWithWhereUniqueWithoutBookInput | RateUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: RateUpdateManyWithWhereWithoutBookInput | RateUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: RateScalarWhereInput | RateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBooksInput = {
    create?: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutUserBooksInput = {
    create?: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutUserBooksInput
    connect?: BookWhereUniqueInput
  }

  export type EnumUserBookStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.UserBookStatusEnum
  }

  export type UserUpdateOneRequiredWithoutUserBooksNestedInput = {
    create?: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBooksInput
    upsert?: UserUpsertWithoutUserBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBooksInput, UserUpdateWithoutUserBooksInput>, UserUncheckedUpdateWithoutUserBooksInput>
  }

  export type BookUpdateOneRequiredWithoutUserBooksNestedInput = {
    create?: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutUserBooksInput
    upsert?: BookUpsertWithoutUserBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutUserBooksInput, BookUpdateWithoutUserBooksInput>, BookUncheckedUpdateWithoutUserBooksInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCommentsInput
    connect?: BookWhereUniqueInput
  }

  export type EnumCommentStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.CommentStatusEnum
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type BookUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCommentsInput
    upsert?: BookUpsertWithoutCommentsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCommentsInput, BookUpdateWithoutCommentsInput>, BookUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutRatesInput = {
    create?: XOR<UserCreateWithoutRatesInput, UserUncheckedCreateWithoutRatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatesInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutRatesInput = {
    create?: XOR<BookCreateWithoutRatesInput, BookUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BookCreateOrConnectWithoutRatesInput
    connect?: BookWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<UserCreateWithoutRatesInput, UserUncheckedCreateWithoutRatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatesInput
    upsert?: UserUpsertWithoutRatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatesInput, UserUpdateWithoutRatesInput>, UserUncheckedUpdateWithoutRatesInput>
  }

  export type BookUpdateOneRequiredWithoutRatesNestedInput = {
    create?: XOR<BookCreateWithoutRatesInput, BookUncheckedCreateWithoutRatesInput>
    connectOrCreate?: BookCreateOrConnectWithoutRatesInput
    upsert?: BookUpsertWithoutRatesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutRatesInput, BookUpdateWithoutRatesInput>, BookUncheckedUpdateWithoutRatesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserBookStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBookStatusEnum | EnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBookStatusEnumFilter<$PrismaModel> | $Enums.UserBookStatusEnum
  }

  export type NestedEnumUserBookStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserBookStatusEnum | EnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserBookStatusEnum[] | ListEnumUserBookStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumUserBookStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.UserBookStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserBookStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumUserBookStatusEnumFilter<$PrismaModel>
  }

  export type NestedEnumCommentStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatusEnum | EnumCommentStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusEnumFilter<$PrismaModel> | $Enums.CommentStatusEnum
  }

  export type NestedEnumCommentStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatusEnum | EnumCommentStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatusEnum[] | ListEnumCommentStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusEnumFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    rates?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    rates?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isPrivate?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roleId?: IntFilter<"User"> | number
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserBookCreateWithoutUserInput = {
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateWithoutUserInput = {
    id?: number
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    bookId: number
  }

  export type UserBookCreateOrConnectWithoutUserInput = {
    where: UserBookWhereUniqueInput
    create: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput>
  }

  export type UserBookCreateManyUserInputEnvelope = {
    data: UserBookCreateManyUserInput | UserBookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    bookId: number
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RateCreateWithoutUserInput = {
    rating: number
    book: BookCreateNestedOneWithoutRatesInput
  }

  export type RateUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    bookId: number
  }

  export type RateCreateOrConnectWithoutUserInput = {
    where: RateWhereUniqueInput
    create: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput>
  }

  export type RateCreateManyUserInputEnvelope = {
    data: RateCreateManyUserInput | RateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserBookUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBookWhereUniqueInput
    update: XOR<UserBookUpdateWithoutUserInput, UserBookUncheckedUpdateWithoutUserInput>
    create: XOR<UserBookCreateWithoutUserInput, UserBookUncheckedCreateWithoutUserInput>
  }

  export type UserBookUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBookWhereUniqueInput
    data: XOR<UserBookUpdateWithoutUserInput, UserBookUncheckedUpdateWithoutUserInput>
  }

  export type UserBookUpdateManyWithWhereWithoutUserInput = {
    where: UserBookScalarWhereInput
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBookScalarWhereInput = {
    AND?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
    OR?: UserBookScalarWhereInput[]
    NOT?: UserBookScalarWhereInput | UserBookScalarWhereInput[]
    id?: IntFilter<"UserBook"> | number
    status?: EnumUserBookStatusEnumFilter<"UserBook"> | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFilter<"UserBook"> | Date | string
    updatedAt?: DateTimeFilter<"UserBook"> | Date | string
    userId?: IntFilter<"UserBook"> | number
    bookId?: IntFilter<"UserBook"> | number
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    title?: StringFilter<"Comment"> | string
    reportCounter?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    date?: DateTimeFilter<"Comment"> | Date | string
    status?: EnumCommentStatusEnumFilter<"Comment"> | $Enums.CommentStatusEnum
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: IntFilter<"Comment"> | number
    bookId?: IntFilter<"Comment"> | number
  }

  export type RateUpsertWithWhereUniqueWithoutUserInput = {
    where: RateWhereUniqueInput
    update: XOR<RateUpdateWithoutUserInput, RateUncheckedUpdateWithoutUserInput>
    create: XOR<RateCreateWithoutUserInput, RateUncheckedCreateWithoutUserInput>
  }

  export type RateUpdateWithWhereUniqueWithoutUserInput = {
    where: RateWhereUniqueInput
    data: XOR<RateUpdateWithoutUserInput, RateUncheckedUpdateWithoutUserInput>
  }

  export type RateUpdateManyWithWhereWithoutUserInput = {
    where: RateScalarWhereInput
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyWithoutUserInput>
  }

  export type RateScalarWhereInput = {
    AND?: RateScalarWhereInput | RateScalarWhereInput[]
    OR?: RateScalarWhereInput[]
    NOT?: RateScalarWhereInput | RateScalarWhereInput[]
    id?: IntFilter<"Rate"> | number
    rating?: FloatFilter<"Rate"> | number
    userId?: IntFilter<"Rate"> | number
    bookId?: IntFilter<"Rate"> | number
  }

  export type UserBookCreateWithoutBookInput = {
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBooksInput
  }

  export type UserBookUncheckedCreateWithoutBookInput = {
    id?: number
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type UserBookCreateOrConnectWithoutBookInput = {
    where: UserBookWhereUniqueInput
    create: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput>
  }

  export type UserBookCreateManyBookInputEnvelope = {
    data: UserBookCreateManyBookInput | UserBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutBookInput = {
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutBookInput = {
    id?: number
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type CommentCreateOrConnectWithoutBookInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput>
  }

  export type CommentCreateManyBookInputEnvelope = {
    data: CommentCreateManyBookInput | CommentCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type RateCreateWithoutBookInput = {
    rating: number
    user: UserCreateNestedOneWithoutRatesInput
  }

  export type RateUncheckedCreateWithoutBookInput = {
    id?: number
    rating: number
    userId: number
  }

  export type RateCreateOrConnectWithoutBookInput = {
    where: RateWhereUniqueInput
    create: XOR<RateCreateWithoutBookInput, RateUncheckedCreateWithoutBookInput>
  }

  export type RateCreateManyBookInputEnvelope = {
    data: RateCreateManyBookInput | RateCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type UserBookUpsertWithWhereUniqueWithoutBookInput = {
    where: UserBookWhereUniqueInput
    update: XOR<UserBookUpdateWithoutBookInput, UserBookUncheckedUpdateWithoutBookInput>
    create: XOR<UserBookCreateWithoutBookInput, UserBookUncheckedCreateWithoutBookInput>
  }

  export type UserBookUpdateWithWhereUniqueWithoutBookInput = {
    where: UserBookWhereUniqueInput
    data: XOR<UserBookUpdateWithoutBookInput, UserBookUncheckedUpdateWithoutBookInput>
  }

  export type UserBookUpdateManyWithWhereWithoutBookInput = {
    where: UserBookScalarWhereInput
    data: XOR<UserBookUpdateManyMutationInput, UserBookUncheckedUpdateManyWithoutBookInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutBookInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutBookInput, CommentUncheckedUpdateWithoutBookInput>
    create: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutBookInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutBookInput, CommentUncheckedUpdateWithoutBookInput>
  }

  export type CommentUpdateManyWithWhereWithoutBookInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutBookInput>
  }

  export type RateUpsertWithWhereUniqueWithoutBookInput = {
    where: RateWhereUniqueInput
    update: XOR<RateUpdateWithoutBookInput, RateUncheckedUpdateWithoutBookInput>
    create: XOR<RateCreateWithoutBookInput, RateUncheckedCreateWithoutBookInput>
  }

  export type RateUpdateWithWhereUniqueWithoutBookInput = {
    where: RateWhereUniqueInput
    data: XOR<RateUpdateWithoutBookInput, RateUncheckedUpdateWithoutBookInput>
  }

  export type RateUpdateManyWithWhereWithoutBookInput = {
    where: RateScalarWhereInput
    data: XOR<RateUpdateManyMutationInput, RateUncheckedUpdateManyWithoutBookInput>
  }

  export type UserCreateWithoutUserBooksInput = {
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    comments?: CommentCreateNestedManyWithoutUserInput
    rates?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBooksInput = {
    id?: number
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    rates?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
  }

  export type BookCreateWithoutUserBooksInput = {
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutBookInput
    rates?: RateCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserBooksInput = {
    id?: number
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    rates?: RateUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
  }

  export type UserUpsertWithoutUserBooksInput = {
    update: XOR<UserUpdateWithoutUserBooksInput, UserUncheckedUpdateWithoutUserBooksInput>
    create: XOR<UserCreateWithoutUserBooksInput, UserUncheckedCreateWithoutUserBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBooksInput, UserUncheckedUpdateWithoutUserBooksInput>
  }

  export type UserUpdateWithoutUserBooksInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    rates?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    rates?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutUserBooksInput = {
    update: XOR<BookUpdateWithoutUserBooksInput, BookUncheckedUpdateWithoutUserBooksInput>
    create: XOR<BookCreateWithoutUserBooksInput, BookUncheckedCreateWithoutUserBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutUserBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutUserBooksInput, BookUncheckedUpdateWithoutUserBooksInput>
  }

  export type BookUpdateWithoutUserBooksInput = {
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutBookNestedInput
    rates?: RateUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    rates?: RateUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    userBooks?: UserBookCreateNestedManyWithoutUserInput
    rates?: RateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    userBooks?: UserBookUncheckedCreateNestedManyWithoutUserInput
    rates?: RateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BookCreateWithoutCommentsInput = {
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookCreateNestedManyWithoutBookInput
    rates?: RateCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
    rates?: RateUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCommentsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userBooks?: UserBookUpdateManyWithoutUserNestedInput
    rates?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    userBooks?: UserBookUncheckedUpdateManyWithoutUserNestedInput
    rates?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutCommentsInput = {
    update: XOR<BookUpdateWithoutCommentsInput, BookUncheckedUpdateWithoutCommentsInput>
    create: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCommentsInput, BookUncheckedUpdateWithoutCommentsInput>
  }

  export type BookUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
    rates?: RateUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
    rates?: RateUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutRatesInput = {
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    userBooks?: UserBookCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatesInput = {
    id?: number
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roleId: number
    userBooks?: UserBookUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatesInput, UserUncheckedCreateWithoutRatesInput>
  }

  export type BookCreateWithoutRatesInput = {
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutRatesInput = {
    id?: number
    title: string
    page_count: number
    author: string
    category: string
    publishing_date: Date | string
    summary?: string | null
    publisher?: string | null
    isbn?: string | null
    cover?: string | null
    averageRating?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userBooks?: UserBookUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutRatesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutRatesInput, BookUncheckedCreateWithoutRatesInput>
  }

  export type UserUpsertWithoutRatesInput = {
    update: XOR<UserUpdateWithoutRatesInput, UserUncheckedUpdateWithoutRatesInput>
    create: XOR<UserCreateWithoutRatesInput, UserUncheckedCreateWithoutRatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatesInput, UserUncheckedUpdateWithoutRatesInput>
  }

  export type UserUpdateWithoutRatesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userBooks?: UserBookUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleId?: IntFieldUpdateOperationsInput | number
    userBooks?: UserBookUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutRatesInput = {
    update: XOR<BookUpdateWithoutRatesInput, BookUncheckedUpdateWithoutRatesInput>
    create: XOR<BookCreateWithoutRatesInput, BookUncheckedCreateWithoutRatesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutRatesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutRatesInput, BookUncheckedUpdateWithoutRatesInput>
  }

  export type BookUpdateWithoutRatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    page_count?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    publishing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    username: string
    email: string
    password: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    rates?: RateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBooks?: UserBookUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    rates?: RateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBookCreateManyUserInput = {
    id?: number
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    bookId: number
  }

  export type CommentCreateManyUserInput = {
    id?: number
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    bookId: number
  }

  export type RateCreateManyUserInput = {
    id?: number
    rating: number
    bookId: number
  }

  export type UserBookUpdateWithoutUserInput = {
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBookUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RateUpdateWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    book?: BookUpdateOneRequiredWithoutRatesNestedInput
  }

  export type RateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type RateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBookCreateManyBookInput = {
    id?: number
    status?: $Enums.UserBookStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type CommentCreateManyBookInput = {
    id?: number
    title: string
    reportCounter?: number
    content: string
    date?: Date | string
    status?: $Enums.CommentStatusEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type RateCreateManyBookInput = {
    id?: number
    rating: number
    userId: number
  }

  export type UserBookUpdateWithoutBookInput = {
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBooksNestedInput
  }

  export type UserBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBookUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumUserBookStatusEnumFieldUpdateOperationsInput | $Enums.UserBookStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutBookInput = {
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    reportCounter?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumCommentStatusEnumFieldUpdateOperationsInput | $Enums.CommentStatusEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RateUpdateWithoutBookInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRatesNestedInput
  }

  export type RateUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RateUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



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