/**
 * Feature Flags Configuration - GENESI Platform
 *
 * Controls the visibility and availability of modules across the platform.
 *
 * TO RE-ACTIVATE "VELA — by Genesi":
 * Option 1: Set FEATURE_VELA_ENABLED = true in this file.
 * Option 2: Set NEXT_PUBLIC_ENABLE_VELA="true" in .env / .env.local or deployment environment variables.
 */
export const FEATURE_VELA_ENABLED = process.env.NEXT_PUBLIC_ENABLE_VELA === 'true' ? true : false;
