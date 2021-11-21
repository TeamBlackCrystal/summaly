import { SummalyEx } from './summary';

interface IPlugin {
	test: (url: URL) => boolean;
	/** @deprecated */
	summarize: (url: URL, lang?: string) => Promise<SummalyEx>;
	postProcess: (summaly: SummalyEx) => Promise<SummalyEx>;
}

export default IPlugin;
