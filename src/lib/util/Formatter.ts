
import * as Prettier from 'prettier';

export default class Formatter {

	static EOL: string = '\n';

	static prettyFormat(text: string): string {
		return Prettier.format(text, {
			useTabs: true,
			printWidth: 100,
			singleQuote: true
		});
	}

}