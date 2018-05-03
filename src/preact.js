import { h, h as createElement } from './h';
import { cloneElement } from './clone-element';
import { Component } from './component';
import { setComponentComparator } from './vdom/component-comparator';
import { render } from './render';
import { rerender } from './render-queue';
import options from './options';

export default {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	setComponentComparator
};

export {
	h,
	createElement,
	cloneElement,
	Component,
	render,
	rerender,
	options,
	setComponentComparator
};
