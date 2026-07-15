import DetailPage from "../components/DetailPage";
import { detailPages } from "../data/detailPages";

export default function ProductionManagement() {
  return <DetailPage data={detailPages["production-management"]} />;
}
