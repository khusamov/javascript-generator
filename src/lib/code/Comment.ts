import ArrayTrimmer from '../util/ArrayTrimmer';

export default class Comment extends String {

	static from(textOrComment: string | Comment) {
		return (
			textOrComment instanceof Comment
				? textOrComment as Comment
				: new Comment(textOrComment as string)
		);
	}

	static EOL: string = '\n';
	static START: string = '// **'; // /**
	static MIDDLE: string = '// * '; //  *
	static END: string = '// *'; //  */

	get isEmpty(): boolean {
		return !this.text.trim();
	}

	get isMultiLine(): boolean {
		return this.text.indexOf(Comment.EOL) != -1;
	}

	get asArray(): string[] {
		return this.text.split(Comment.EOL).map(str => str.trim());
	}

	constructor(public text: string = '') {
		super(text);
	}

	toCodeString(): string {
		return [
			Comment.START,
			...ArrayTrimmer.trim(this.asArray).map(str => `${Comment.MIDDLE}${str}`),
			Comment.END
		].join();
	}

	clone(): Comment {
		return new Comment(this.text);
	}

}