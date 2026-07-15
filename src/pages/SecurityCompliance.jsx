import DetailPage from "../components/DetailPage";
import { detailPages } from "../data/detailPages";

export default function SecurityCompliance() {
  return <DetailPage data={detailPages["security-compliance"]} />;
}
