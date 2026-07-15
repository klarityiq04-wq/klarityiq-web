import DetailPage from "../components/DetailPage";
import { detailPages } from "../data/detailPages";

export default function InventoryManagement() {
  return <DetailPage data={detailPages["inventory-management"]} />;
}
