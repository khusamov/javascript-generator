import * as _ from 'lodash';
import * as Vm from 'vm';
import ScalarNode from '../ScalarNode';

export default class FunctionNode extends ScalarNode<Function> {
	/**
	 * Создание безымянного FunctionNode узла.
	 * Функция шаблонизации (https://learn.javascript.ru/es-string).
	 * @param {TemplateStringsArray} strings
	 * @param {string} vars
	 * @returns {FunctionNode}
	 */
	static nameless(strings: TemplateStringsArray, ...vars: string[]): FunctionNode {
		const str = strings.map((s, i) => s + (i === vars.length ? '' : vars[i])).join('');
		return new this(undefined, str);
	}

	/**
	 * Проверка, является ли функция методом объекта или нет.
	 * @returns {boolean}
	 */
	get isMethodFunction(): boolean {
		return this.value.toString().indexOf('function') !== 0 && !this.isArrowFunction;
	}

	/**
	 * Проверка, является ли функция стрелочной или нет.
	 * @returns {boolean}
	 */
	get isArrowFunction(): boolean {
		const match = this.value.toString().match(/.*?=>/);
		return match ? !match[0].match(/.+?\(/) : false;
	}

	/**
	 * Конструктор узла с функцией.
	 * Функцию можно задать как ссылкой на функцию, так и текстом с кодом функции.
	 * @param {string} name
	 * @param {Function | string} value
	 */
	constructor(public name: string, value?: Function | string) {
		super(name, _.isFunction(value) ? value : Vm.runInContext('fn = ' + value as string, Vm.createContext()) as Function);
	}
}