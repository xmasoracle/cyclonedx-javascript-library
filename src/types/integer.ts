/*!
This file is part of CycloneDX JavaScript Library.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
Copyright (c) OWASP Foundation. All Rights Reserved.
*/

/**
 * Integer
 * @see isInteger
 */
export type Integer = number | NonNegativeInteger

export function isInteger (value: any): value is Integer {
  return Number.isInteger(value)
}

/**
 * Integer >= 0
 * @see isNonNegativeInteger
 */
export type NonNegativeInteger = number | PositiveInteger

export function isNonNegativeInteger (value: any): value is NonNegativeInteger {
  return isInteger(value) &&
    value >= 0
}

/**
 * Integer > 0
 * @see isPositiveInteger
 */
export type PositiveInteger = number

export function isPositiveInteger (value: any): value is PositiveInteger {
  return isInteger(value) &&
        value > 0
}
