"use client";
import { generatePagination } from "@/utils";
import { clsx } from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  const allPages = generatePagination(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    // URLSearchParams sirve para crear el searchParams
    const params = new URLSearchParams(searchParams);

    if (currentPage < 1 || isNaN(+pageString)) redirect(pathname);

    if (pageNumber === 1) return pathname;

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`; // href="/"
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center mt-10 mb-32">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <Link
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
              tabIndex={-1}
              aria-disabled="true"
            >
              <ChevronLeft size={30} />
            </Link>
          </li>
          {allPages.map((page, index) => (
            <li key={page + "-" + index} className="page-item">
              <Link
                className={clsx(
                  "page-link relative block py-1.5 px-3  border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                  {
                    "bg-[#FF0000] shadow-sm text-white hover:bg-[#FF0000]":
                      page === currentPage,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              <ChevronRight size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
