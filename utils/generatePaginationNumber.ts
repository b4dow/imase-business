export const generatePagination = (currentPage: number, totalPages: number) => {
  // Si el numero total de paginas es 7 o menos, mostrar todas las paginas sin puntos suspensivos.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Si la pagina actual esta entre las primeras 3 paginas.
  // Mostrar las primeras 3 ... y las ultimas 2 paginas.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // Si la pagina actual esta entre las ultimas 3 paginas.
  // Mostrar las primeras 2 ... y luego las ultimas 3 paginas.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // Si la pagina actual esta en otro lugar medio
  // // Mostrar la primera pagina, ..., la pagina actual y ...
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
