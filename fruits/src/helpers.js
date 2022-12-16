/** choose a random item. */

function choice(items) {
	let idx = Math.floor(Math.random() * items.length);
	return items[idx];
}

/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 **/

function remove(items, item) {
	const idx = items.indexOf(item);
	if (idx > -1) {
		items.splice(idx, 1);
		return item;
	} else {
		return undefined;
	}
}

export { choice, remove };