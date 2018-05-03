// Defer the access to the comparator function to be
// able to override it
let Comparator = {
	// Default comparison
	isSame: function( node, vnode ){
		return node._componentConstructor === vnode.nodeName;
	}
}

/**
 * Allows to override component comparison
 * @param {Function} fn The function used to compare 2 components. E.g. isSameComponent
 */
export function setComponentComparator( fn ){
	Comparator.isSame = fn;
}

/**
 * Check if component's node and vnode are the same.
 * This function is meant to be overriden by hot loading libraries, see setComponentComparator.
 * Even if constructors are different, 2 components may be the same
 * but wrapped by different Proxies created by the hot loading library.
 *
 * @param  {Node} node  DOM Node to compare
 * @param  {VNode} vnode Virtual DOM node to compare
 * @return {boolean}       [description]
 */
export function isSameComponent( node, vnode ){
	return Comparator.isSame( node, vnode );
}
