import ScalarNode from '../ScalarNode';

export default class StringNode extends ScalarNode {
	get value(): string {
		return super.value as string;
	}
	set value(value: string) {
		super.value = value;
	}
	get isMultiLine(): boolean {
		return this.value.split('\n').length > 1;
	}
}