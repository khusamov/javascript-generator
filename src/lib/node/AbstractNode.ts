
/**
 * Абстрактный класс JS-узла.
 * При наследовании следует указать тип значения узла T.
 */
export default abstract class AbstractNode<T = any> {
	public comment: string;
	protected _value: any;
	get value(): T {
		return this._value;
	}
	set value(value: T) {
		this._value = value;
	}

	/**
	 * Дублирование присвоения значения свойства Node.value.
	 * В некоторых случаях лучше смотрится на фоне остальных команд.
	 * @param {T} value
	 * @returns {AbstractNode}
	 */
	set(value: T): this {
		this.value = value;
		return this;
	}

	/**
	 * Конструктор узла.
	 * Значение узла задавать не обязательно, потому что есть такие узлы, для которых
	 * значение даже бесмысленно задавать, например null или undefined.
	 * @param {string} name Имя узла.
	 * @param {any} value Значение узла.
	 */
	constructor(public name: string, value?: T) {
		this.value = value;
	}
}