import AbstractNode from './AbstractNode';

/**
 * Любой производный класс от Node.
 */
export type TDerivedNodeClass = new(name: string, value?: any) => Node;

export type TAnyClass = new(...args: any[]) => object;

/**
 * Проверка, является ли класс производным от Node.
 * @param Class
 * @returns {boolean}
 */
export function isTDerivedNodeClass(Class: TAnyClass): Class is TDerivedNodeClass {
	if (!(Class && typeof Class === 'function' && 'prototype' in Class)) return false;
	return Node.prototype.isPrototypeOf(Class.prototype);
}

/**
 * Абстрактный класс JS-узла.
 */
export default abstract class Node extends AbstractNode {}