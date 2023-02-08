/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { RealDataType, RealTypedArray } from '@stdlib/types/array';
import * as random from '@stdlib/types/random';

/**
* Supported data types.
*/
type DataType = RealDataType | 'generic';

/**
* Output array.
*/
type RandomArray = RealTypedArray | Array<number>;

/**
* Interface defining PRNG options.
*/
interface PRNGOptions {
	/**
	* Pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
	*/
	prng?: random.PRNG;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state. Default: true.
	*/
	copy?: boolean;
}

/**
* Interface defining factory options.
*/
interface FactoryOptions extends PRNGOptions {
	/**
	* Default output array data type. Default: 'float64'.
	*/
	dtype?: DataType;
}

/**
* Interface defining options.
*/
interface Options {
	/**
	* Default output array data type. Default: 'float64'.
	*/
	dtype?: DataType;
}

/**
* Interface for PRNG properties and methods.
*/
interface PRNG {
	/**
	* Underlying pseudorandom number generator.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937 | null;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number | null;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937 | null;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number | null;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number | null;
}

/**
* Interface for generating uniformly distributed pseudorandom numbers with pre-specified parameter values.
*/
interface UnaryFunction extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param len - array length
	* @param options - function options
	* @returns output array
	*/
	( len: number, options?: Options ): RandomArray;
}

/**
* Interface for generating uniformly distributed pseudorandom numbers without pre-specified parameter values.
*/
interface TernaryFunction extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @returns output array
	*/
	( len: number, a: number, b: number, options?: Options ): RandomArray;
}

/**
* Interface for generating pseudorandom numbers drawn from a uniform distribution.
*/
interface Random extends PRNG {
	/**
	* Returns an array containing pseudorandom numbers drawn from a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param len - array length
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @returns output array
	*
	* @example
	* var out = discreteUniform( 10, -10, 10 );
	* // returns <Float64Array>
	*/
	( len: number, a: number, b: number, options?: Options ): RandomArray;

	/**
	* Returns a function for creating arrays containing pseudorandom numbers drawn from a discrete uniform distribution.
	*
	* ## Notes
	*
	* -   When provided `a` and `b`, the returned function returns random variates drawn from the specified distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param options - function options
	* @throws `a` must be less than or equal to `b`
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = discreteUniform.factory( -10, 10 );
	*
	* var out = random( 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = discreteUniform.factory( -10, 10, {
	*     'seed': 297
	* });
	* var out = random( 10 );
	* // returns <Float64Array>
	*/
	factory( a: number, b: number, options?: FactoryOptions ): UnaryFunction;

	/**
	* Returns a function for creating arrays containing pseudorandom numbers drawn from a discrete uniform distribution.
	*
	* ## Notes
	*
	* -   When not provided `a` and `b`, the returned function requires that both `a` and `b` be provided at each invocation.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for creating arrays
	*
	* @example
	* var random = discreteUniform.factory();
	*
	* var out = random( 10, -10, 10 );
	* // returns <Float64Array>
	*
	* @example
	* var random = discreteUniform.factory({
	*     'seed': 297
	* });
	* var out = random( 10, -10, 10 );
	* // returns <Float64Array>
	*/
	factory( options?: FactoryOptions ): TernaryFunction;
}

/**
* Returns an array containing pseudorandom numbers drawn from a discrete uniform distribution with minimum support `a` and maximum support `b`.
*
* @param len - array length
* @param a - minimum support
* @param b - maximum support
* @param options - function options
* @returns output array
*
* @example
* var out = discreteUniform( 10, -10, 10 );
* // returns <Float64Array>
*
* @example
* var random = discreteUniform.factory( -10, 10 );
*
* var out = random( 10 );
* // returns <Float64Array>
*/
declare var discreteUniform: Random;


// EXPORTS //

export = discreteUniform;
