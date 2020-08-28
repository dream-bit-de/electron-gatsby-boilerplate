/*************************************************************
 * All node process relevant things will be handled in here. *
 *************************************************************/

export const PRODUCTION = process.env.NODE_ENV !== "development"
export const PLATFORM = process.platform
export const DEBUG = process.env.USE_DEBUG || false
export const ELECTRONTYPE = process.type;
