import * as _ from 'lodash';
import * as Vm from 'vm';
import ScalarNode from '../ScalarNode';

export default class FunctionNode extends ScalarNode<Function> {
	get isMethodFunction(): boolean {
		return this.value.toString().indexOf('function') !== 0 && !this.isArrowFunction;
	}
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