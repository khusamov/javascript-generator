import ScalarNode from '../ScalarNode';

export default class StringNode extends ScalarNode<string | String> {
	get isMultiLine(): boolean {
		return this.value.split('\n').length > 1;
	}
}