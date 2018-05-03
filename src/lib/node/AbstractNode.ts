
export default abstract class AbstractNode {
	public comment: string;
	protected _value: any;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		this._value = value;
	}
	constructor(public name: string, value: any) {
		this.value = value;
	}
}