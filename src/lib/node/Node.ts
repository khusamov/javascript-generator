import AbstractNode from './AbstractNode';
import getPrototypeOf = Reflect.getPrototypeOf;

/**
 * Любой производный класс от Node.
 */
export type TDerivedNodeClass = new(name: string, value?: any) => Node;

/**
 * Проверка, является ли класс производным от Node.
 * @param Class
 * @returns {boolean}
 */
export function isTDerivedNodeClass(Class): Class is TDerivedNodeClass {
	return Node.prototype.isPrototypeOf(Class.prototype);
}

/**
 * Абстрактный класс JS-узла.
 */
export default abstract class Node extends AbstractNode {}