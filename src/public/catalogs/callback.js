import { setSearchUrl } from "../components/table/table.js";
export function search(url, columns) { setSearchUrl(catalogServiceUrl + url, columns) }