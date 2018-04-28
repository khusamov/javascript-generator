import ScalarNode from '../ScalarNode';

export default class ExpressionNode extends ScalarNode {
	get value(): string {
		return super.value as string;
	}
	set value(value: string) {
		super.value = value;
	}
}