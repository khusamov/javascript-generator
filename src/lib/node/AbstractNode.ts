
/**
 * Абстрактный класс JS-узла.
 * При наследовании следует указать тип значения узла T.
 */
export default abstract class AbstractNode<T = any> {
	/**
	 * Комментарий к узлу.
	 */
	comment: string;

	/**
	 * Имя узла.
	 */
	name: string;

	/**
	 * Значение узла.
	 * @returns {T}
	 */
	private _value: T;
	get value(): T {
		return this._value;
	}
	set value(value: T) {
		this._value = value;
	}

	/**
	 * Альтернативный вариант оператора присвоения значения свойства (Node.value = <Новое значение узла>).
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
	 * @param {T} value Значение узла.
	 */
	constructor(name: string, value?: T) {
		this.name = name;
		this.value = value;
	}
}