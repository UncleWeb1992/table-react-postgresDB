export function paginate<T>(
  items: T[],
  currentPage: number,
  pageSize: number
): T[] {
  const startIndex = (currentPage - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
}
