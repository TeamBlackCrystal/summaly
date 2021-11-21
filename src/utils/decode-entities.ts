import clip from './clip';
import { decode } from 'html-entities';

export function decodeEntities(description: string | null | undefined, limit = 300): string | null {
	return description
		? (clip(decode(description), limit) || null)
		: null;
}
