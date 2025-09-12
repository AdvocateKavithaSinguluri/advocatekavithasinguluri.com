export function paginate(items: unknown[], itemsPerPage: number, currentPage: number) {
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const totalPages = Math.ceil(items.length / itemsPerPage)

	return {
		items: items.slice(startIndex, endIndex),
		totalPages,
		currentPage,
	}
}
