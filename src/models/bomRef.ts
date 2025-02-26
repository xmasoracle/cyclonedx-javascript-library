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
 * Proxy for the BomRef.
 * This way a `BomRef` gets unique by the in-memory-address of the object.
 */
export class BomRef {
  value?: string

  constructor (value?: BomRef['value']) {
    this.value = value
  }

  compare (other: BomRef): number {
    return this.toString().localeCompare(other.toString())
  }

  toString (): string {
    return this.value ?? ''
  }
}

export class BomRefRepository extends Set<BomRef> {
}
