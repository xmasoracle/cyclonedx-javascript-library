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

import { SortableNumbers } from '../_helpers/sortable'
import type { PositiveInteger } from './integer'
import { isPositiveInteger } from './integer'

/**
 * Integer representation of a Common Weaknesses Enumerations (CWE).
 *
 * @example
 * value `399` might represent `https://cwe.mitre.org/data/definitions/399.html`.
 *
 * @see {@link isCWE}
 *
 * @beta
 */
export type CWE = PositiveInteger

/** @beta */
export function isCWE (value: any): value is CWE {
  return isPositiveInteger(value)
}

/** @beta */
export class CweRepository extends SortableNumbers<CWE> {}