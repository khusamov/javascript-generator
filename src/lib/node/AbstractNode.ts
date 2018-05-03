export default abstract class AbstractNode {
	protected _value: any;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		this._value = value;
	}
	constructor(value: any, public name?: string, public comment?: string) {
		this.value = value;
	}
}