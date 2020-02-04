/* tslint:disable:interface-name no-namespace */

declare namespace NodeJS {

  export interface Process {
  }

  /**
   * Runtime = process.env.xxx is Substituted in Runtime
   * Development Node.js = using only if NODE_ENV === development in Node.js
   * Build Node.js = using by webpack
   */
  export interface ProcessEnv {
    /**
     * @default undefined
     * @supported Runtime
     * @see ./build/webpack.base.config.js
     */
    readonly ENV: any

    /**
     * @default undefined
     * @supported Development Node.js
     * @see webpack dev server
     */
    readonly PORT?: string

    /**
     * @default boot
     * @supported Runtime
     * @see ./src/boot.ts
     */
    readonly VUE_APP_PATH_BOOT?: string

    readonly VUE_APP_BASE_URL: string
  }
}
